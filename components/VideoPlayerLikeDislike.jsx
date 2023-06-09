import React, { useState, useContext } from "react";
import Tooltip from "@mui/material/Tooltip";
import { ContextConstant } from "../context/Context.jsx";
import {
  likedark,
  likelight,
  dislikedark,
  dislikelight,
  dislikefilllight,
  dislikefilldark,
  likefilllight,
  likefilldark,
} from "../assets";

const VideoPlayerLikeDislike = () => {
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

  let toolTextLike = "I like this";

  if (like) {
    toolTextLike = "Unlike";
  }

  const { darkMode } = useContext(ContextConstant);
  return (
    <div>
      {darkMode ? (
        <div className={`flex items-center justify-center`}>
          <div className="border-r border-r-[#777777]">
            <Tooltip title={toolTextLike}>
              <button
                className={`relative rounded-l-[50px] w-[60px] flex gap-2 justify-center items-center h-[36px] xs:hover:bg-[#454443] bg-[#302f2e]`}
                onClick={handleLike}
              >
                {like ? (
                  <img
                    src={likefilllight}
                    alt="Like"
                    className="h-[24px] w-[24px]"
                  />
                ) : (
                  <img
                    src={likelight}
                    alt="Like"
                    className="h-[24px] w-[24px]"
                  />
                )}
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip title="I dislike this">
              <button
                className={`relative rounded-r-[50px] w-[60px]  flex gap-2 justify-center items-center h-[36px] xs:hover:bg-[#454443] bg-[#302f2e]`}
                onClick={handleDislike}
              >
                {dislike ? (
                  <img
                    src={dislikefilllight}
                    alt="Like"
                    className="h-[24px] w-[24px]"
                  />
                ) : (
                  <img
                    src={dislikelight}
                    alt="Like"
                    className="h-[24px] w-[24px]"
                  />
                )}
              </button>
            </Tooltip>
          </div>
        </div>
      ) : (
        <div className={`flex items-center justify-center`}>
          <div className="border-r border-r-[#777777]">
            <Tooltip title="I like this">
              <button
                className={`relative rounded-l-[50px] flex gap-2 pl-6 pr-5 justify-center items-center  h-[36px] xs:hover:bg-[#e5e5e5] bg-[#f2f2f2]`}
                onClick={handleLike}
              >
                {like ? (
                  <img
                    src={likefilldark}
                    alt="Like"
                    className="h-[24px] w-[24px]"
                  />
                ) : (
                  <img
                    src={likedark}
                    alt="Like"
                    className="h-[24px] w-[24px]"
                  />
                )}
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip title="I dislike this">
              <button
                className={`relative rounded-r-[50px] flex gap-2 pr-6 pl-5 justify-center items-center h-[36px] xs:hover:bg-[#e5e5e5] bg-[#f2f2f2]`}
                onClick={handleDislike}
              >
                {dislike ? (
                  <img
                    src={dislikefilldark}
                    alt="Like"
                    className="h-[24px] w-[24px]"
                  />
                ) : (
                  <img
                    src={dislikedark}
                    alt="Like"
                    className="h-[24px] w-[24px]"
                  />
                )}
              </button>
            </Tooltip>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayerLikeDislike;
