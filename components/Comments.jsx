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
import { CommentsLikeDislike } from "../components";

const Comments = ({
  comment,
  authorThumbnail,
  authorText,
  likesCount,
  publishedTimeText,
}) => {
  const { darkMode } = useContext(ContextConstant);

  const sanitizedAuthorText = authorText.replace(/@/g, "");

  return (
    <div className="comments-section mb-5">
      <div>
        <img
          src={authorThumbnail}
          className="h-[40px] w-[40px] rounded-[50%]"
          alt={sanitizedAuthorText}
        />
      </div>
      <div className="grid gap-5 justify-start">
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <p
              className={`font-semibold ${
                darkMode ? "text-[#f1f1f1]" : "text-black"
              }`}
            >
              {sanitizedAuthorText}
            </p>
            <p className={`${darkMode ? "text-[#858585]" : "text-[#60677a]"}`}>
              {publishedTimeText}
            </p>
          </div>

          <p
            className={`font-semibold ${
              darkMode ? "text-[#f1f1f1]" : "text-black"
            }`}
          >
            {comment}
          </p>
        </div>

        <CommentsLikeDislike likesCount={likesCount} />
      </div>
    </div>
  );
};

export default Comments;
