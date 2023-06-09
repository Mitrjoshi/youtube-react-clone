import React, { useState, useContext } from "react";
import { ContextConstant } from "../context/Context.jsx";
import ReactPlayer from "react-player";

const VideoPlayerBlurred = ({ videoId, title, thumbnail }) => {
  const { darkMode } = useContext(ContextConstant);

  return (
    <div className="z-50 relative mx-7 blur-[80px] aspect-[16/9] duration-300 md:m-0 mb-5 brightness-50">
      <img src={thumbnail} alt="" className="w-full" />
    </div>
  );
};

export default VideoPlayerBlurred;
