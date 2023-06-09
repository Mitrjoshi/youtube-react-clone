import React, { useContext, useState, useEffect } from "react";
import { ContextConstant } from "../context/Context.jsx";
import { ShortsPlayer } from "../components";
import {
  dislikefilllight,
  dislikefilldark,
  morelight,
  sharelight,
  commentsdark,
  commentslight,
  likefilllight,
  likefilldark,
  sharedark,
  moredark,
} from "../assets";

const ShortsDummyLayout = () => {
  const { darkMode } = useContext(ContextConstant);

  return (
    <div className="flex items-end scroll-item">
      <div className="ss:h-[84vh] shorts-layouts video-layout ss:aspect-[9/16] ss:rounded-[15px]"></div>
    </div>
  );
};

export default ShortsDummyLayout;
