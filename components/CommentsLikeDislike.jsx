import React, { useState, useContext } from "react";
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
import Tooltip from "@mui/material/Tooltip";
import { ContextConstant } from "../context/Context.jsx";

const CommentsLikeDislike = ({ likesCount }) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [updatedLikesCount, setUpdatedLikesCount] = useState(
    parseInt(likesCount)
  );

  const { darkMode } = useContext(ContextConstant);

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
    if (like) {
      setUpdatedLikesCount(updatedLikesCount - 1);
    } else {
      setUpdatedLikesCount(updatedLikesCount + 1);
    }
    setLike(!like);
  };

  let toolTextLike = "Like";

  if (like) {
    toolTextLike = "Unlike";
  }

  return (
    <div className="flex gap-1 items-center">
      {darkMode ? (
        <div className="flex items-center gap-1">
          <Tooltip title={toolTextLike}>
            <button
              className="xs:hover:bg-[#302f2e] p-2 rounded-[20px]"
              onClick={handleLike}
            >
              {like ? (
                <img
                  src={likefilllight}
                  alt="Like"
                  className="h-[24px] w-[24px]"
                />
              ) : (
                <img src={likelight} alt="Like" className="h-[24px] w-[24px]" />
              )}
            </button>
          </Tooltip>
          <p className={`${darkMode ? "text-[#858585]" : "text-[#60677a]"}`}>
            {updatedLikesCount}
          </p>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <Tooltip title={toolTextLike}>
            <button
              className="xs:hover:bg-[#dfdfdf] p-2 rounded-[20px]"
              onClick={handleLike}
            >
              {like ? (
                <img
                  src={likefilldark}
                  alt="Like"
                  className="h-[24px] w-[24px]"
                />
              ) : (
                <img src={likedark} alt="Like" className="h-[24px] w-[24px]" />
              )}
            </button>
          </Tooltip>
          <p className={`${darkMode ? "text-[#858585]" : "text-[#60677a]"}`}>
            {updatedLikesCount}
          </p>
        </div>
      )}
      {darkMode ? (
        <div className="flex items-center gap-1">
          <Tooltip title="Dislike">
            <button
              className="xs:hover:bg-[#302f2e] p-2 rounded-[20px]"
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
      ) : (
        <div className="flex items-center gap-1">
          <Tooltip title="Dislike">
            <button
              className="xs:hover:bg-[#dfdfdf] p-2 rounded-[20px]"
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
      )}

      <button
        className={`font-semibold px-3 py-1 ${
          darkMode ? "xs:hover:bg-[#302f2e]" : "xs:hover:bg-[#dfdfdf]"
        }  rounded-[20px]`}
      >
        Reply
      </button>
    </div>
  );
};

export default CommentsLikeDislike;
