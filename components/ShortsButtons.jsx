import React, { useContext, useState, useEffect } from "react";
import { ContextConstant } from "../context/Context.jsx";
import { ShortsPlayer } from "../components";
import { fetchVideos } from "../utils/fetch.js";
import { ShortsDummyLayout, DottedDropDownMenu } from "../layouts";
import {
  dislikefilllight,
  dislikefilldark,
  sharelight,
  commentsdark,
  commentslight,
  likefilllight,
  likefilldark,
  sharedark,
  moredark,
  morelight,
} from "../assets";
import styles from "../styles.js";

const ShortsButtons = ({ shortsId }) => {
  const { darkMode, videosDetails, setVideosDetails } =
    useContext(ContextConstant);

  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const handleDislike = () => {
    if (like === true) {
      setLike(!like);
    }
    setDislike(!dislike);
  };

  const handleLike = () => {
    if (dislike === true) {
      setDislike(!dislike);
    }
    setLike(!like);
  };

  return (
    <>
      {darkMode ? (
        <div className="ss:flex hidden flex-col items-center gap-6">
          <div className="flex flex-col text-[15px] gap-2 font-semibold items-center justify-center">
            {like === false ? (
              <button className={styles.shortsButtonDark} onClick={handleLike}>
                <img src={likefilllight} alt="" className="h-[24px] w-[24px]" />
              </button>
            ) : (
              <button
                className={styles.shortsButtonDarkClicked}
                onClick={handleLike}
              >
                <img src={likefilldark} alt="" className="h-[24px] w-[24px]" />
              </button>
            )}

            {videosDetails?.likeCountText}
          </div>

          <div className="flex flex-col text-[15px] gap-2 font-semibold items-center justify-center">
            {dislike === false ? (
              <button
                className={styles.shortsButtonDark}
                onClick={handleDislike}
              >
                <img
                  src={dislikefilllight}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
              </button>
            ) : (
              <button
                className={styles.shortsButtonDarkClicked}
                onClick={handleDislike}
              >
                <img
                  src={dislikefilldark}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
              </button>
            )}
            Dislike
          </div>

          <div className="flex flex-col text-[15px] gap-2 font-semibold items-center justify-center">
            <button className={styles.shortsButtonDark}>
              <img src={commentslight} alt="" className="h-[24px] w-[24px]" />
            </button>
            {videosDetails?.commentCount}
          </div>

          <div className="flex flex-col text-[15px] gap-2 font-semibold items-center justify-center">
            <button className={styles.shortsButtonDark}>
              <img src={sharelight} alt="" className="h-[24px] w-[24px]" />
            </button>
            Share
          </div>

          {darkMode ? (
            <DottedDropDownMenu
              icon={morelight}
              title="Save to watch later"
              styles={{
                position: "relative",
                display: "flex",
                justifyContent: "start",
                height: "50px",
                width: "50px",
                alignItems: "center",
                borderRadius: "50%",
                backgroundColor: "#302f2e",
                "&:hover": {
                  backgroundColor: "#454443", // Change the background color on hover
                },
              }}
            />
          ) : (
            <DottedDropDownMenu
              icon={moredark}
              title="Save to watch later"
              styles={{
                position: "relative",
                display: "flex",
                justifyContent: "start",
                height: "50px",
                width: "50px",
                alignItems: "center",
                borderRadius: "50%",
                backgroundColor: "#f2f2f2",
                "&:hover": {
                  backgroundColor: "#e5e5e5", // Change the background color on hover
                },
              }}
            />
          )}

          <img
            src={videosDetails?.soundAttribution?.thumbnail[0]?.url}
            alt=""
            className="h-[40px] w-[40px] rounded-[5px]"
          />
        </div>
      ) : (
        <div className="ss:flex hidden flex-col items-center gap-6">
          <div className="flex flex-col text-[15px] gap-2 font-semibold items-center justify-center">
            {like === false ? (
              <button className={styles.shortsButtonLight} onClick={handleLike}>
                <img src={likefilldark} alt="" className="h-[24px] w-[24px]" />
              </button>
            ) : (
              <button
                className={styles.shortsButtonLightClicked}
                onClick={handleLike}
              >
                <img src={likefilllight} alt="" className="h-[24px] w-[24px]" />
              </button>
            )}

            {videosDetails?.likeCountText}
          </div>

          <div className="flex flex-col text-[15px] gap-2 font-semibold items-center justify-center">
            {dislike === false ? (
              <button
                className={styles.shortsButtonLight}
                onClick={handleDislike}
              >
                <img
                  src={dislikefilldark}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
              </button>
            ) : (
              <button
                className={styles.shortsButtonLightClicked}
                onClick={handleDislike}
              >
                <img
                  src={dislikefilllight}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
              </button>
            )}
            Dislike
          </div>

          <div className="flex flex-col text-[15px] gap-2 font-semibold items-center justify-center">
            <button className={styles.shortsButtonLight}>
              <img src={commentsdark} alt="" className="h-[24px] w-[24px]" />
            </button>
            {videosDetails?.commentCount}
          </div>

          <div className="flex flex-col text-[15px] gap-2 font-semibold items-center justify-center">
            <button className={styles.shortsButtonLight}>
              <img src={sharedark} alt="" className="h-[24px] w-[24px]" />
            </button>
            Share
          </div>

          {darkMode ? (
            <DottedDropDownMenu
              title="Save to watch later"
              styles={{
                position: "relative",
                display: "flex",
                justifyContent: "start",
                height: "50px",
                width: "50px",
                alignItems: "center",
                borderRadius: "50%",
                backgroundColor: "#302f2e",
                "&:hover": {
                  backgroundColor: "#454443", // Change the background color on hover
                },
              }}
            />
          ) : (
            <DottedDropDownMenu
              title="Save to watch later"
              styles={{
                position: "relative",
                display: "flex",
                justifyContent: "start",
                height: "50px",
                width: "50px",
                alignItems: "center",
                borderRadius: "50%",
                backgroundColor: "#f2f2f2",
                "&:hover": {
                  backgroundColor: "#e5e5e5", // Change the background color on hover
                },
              }}
            />
          )}

          <img
            src={videosDetails?.soundAttribution?.thumbnail[0]?.url}
            alt=""
            className="h-[40px] w-[40px] rounded-[5px]"
          />
        </div>
      )}
    </>
  );
};

export default ShortsButtons;
