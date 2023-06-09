import React, { useContext } from "react";
import { ContextConstant } from "../context/Context.jsx";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { moredark, morelight } from "../assets";
import { useParams, useLocation } from "react-router-dom";
import { storage } from "../firebase/firebase.js";
import { ref, uploadBytes, deleteObject } from "firebase/storage";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DottedDropDownMenu = ({ title, styles, videoID }) => {
  const { darkMode, videoIdList, setVideoIdList } = useContext(ContextConstant);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const id = useParams();

  let videoId;

  if (window.location.pathname.startsWith("/watch")) {
    videoId = window.location.pathname.slice(7);
  } else if (window.location.pathname.startsWith("/shorts")) {
    videoId = window.location.pathname.slice(8);
  }

  const handleDatabase = () => {
    setAnchorEl(null);
    if (title && title === "Save to watch later") {
      if (isAuthenticated) {
        if (videoId === "" || videoId === undefined || videoId === ":id") {
          toast.error("Failed", {
            position: toast.POSITION.BOTTOM_LEFT,
            hideProgressBar: true,
            closeButton: false,
            autoClose: 2500,
            stopOnFocus: false,
          });
        } else {
          const videoTitle = document.title;

          const videoRef = ref(storage, `/${user?.email}/${videoId}`);

          uploadBytes(videoRef)
            .then(() => {
              toast.success("Added to watch later", {
                position: toast.POSITION.BOTTOM_LEFT,
                hideProgressBar: true,
                closeButton: false,
                autoClose: 2500,
                stopOnFocus: false,
              });
            })
            .catch((error) => {
              toast.error("Failed", {
                position: toast.POSITION.BOTTOM_LEFT,
                hideProgressBar: true,
                closeButton: false,
                autoClose: 2500,
                stopOnFocus: false,
              });
            });
        }
      } else {
        loginWithRedirect();
      }
    } else if (title && title === "Remove from watch later") {
      if (isAuthenticated) {
        const videoRef = ref(storage, `${user?.email}/${videoID}`);

        deleteObject(videoRef)
          .then(() => {
            toast.success("Removed from watch later", {
              position: toast.POSITION.BOTTOM_LEFT,
              hideProgressBar: true,
              closeButton: false,
              autoClose: 2500,
              stopOnFocus: false,
            });
          })
          .catch((error) => {
            toast.error("Failed to remove", {
              position: toast.POSITION.BOTTOM_LEFT,
              hideProgressBar: true,
              closeButton: false,
              autoClose: 2500,
              stopOnFocus: false,
            });
          });
      } else {
        loginWithRedirect();
      }
    }
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={styles}
      >
        {darkMode ? (
          <img src={morelight} alt="more" />
        ) : (
          <img src={moredark} alt="more" />
        )}
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
      >
        <MenuItem onClick={handleDatabase}>{title}</MenuItem>
      </Menu>
    </div>
  );
};

export default DottedDropDownMenu;
