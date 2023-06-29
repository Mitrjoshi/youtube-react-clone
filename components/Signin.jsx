import React, { useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ContextConstant } from "../context/Context.jsx";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Dropdownmenu } from "../layouts";

const Signin = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const [menuState, setMenuState] = useState(false);
  const { darkMode } = useContext(ContextConstant);

  const handleMenuToggle = () => {
    setMenuState(!menuState);
  };

  const body = document.querySelector("body");
  if (menuState) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }

  return (
    <div>
      {isAuthenticated ? (
        <button className="h-[32px] rounded-[50%]" onClick={handleMenuToggle}>
          <img src={user.picture} alt="" className="h-[32px] rounded-[50%]" />
        </button>
      ) : (
        <div>
          {darkMode ? (
            <button
              className="border profile-icon border-[#353535] text-[#2e96ff] xs:hover:bg-[#263850] sm:text-[14px] text-[12px] h-[35px] px-3 gap-2 flex justify-center items-center rounded-[20px]"
              onClick={() => loginWithRedirect()}
            >
              <AccountCircleOutlinedIcon />
              Sign in
            </button>
          ) : (
            <button
              className="border profile-icon border-[#d4d4d4] text-[#0666df] xs:hover:bg-[#def1ff] sm:text-[14px] text-[12px] h-[35px] px-3 gap-2 flex justify-center items-center rounded-[20px]"
              onClick={() => loginWithRedirect()}
            >
              <AccountCircleOutlinedIcon />
              Sign in
            </button>
          )}
        </div>
      )}

      {menuState ? (
        <div
          className="drop-down-back top-0 left-0 w-[100vw] z-[999] bg-[#00000060] h-[100vh]"
          onClick={handleMenuToggle}
        >
          <Dropdownmenu menuState={menuState} setMenuState={setMenuState} />
        </div>
      ) : null}
    </div>
  );
};

export default Signin;
