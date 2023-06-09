import React, { useState, useEffect, useContext } from "react";
import { ContextConstant } from "../context/Context.jsx";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoId, title, thumbnail }) => {
  const { darkMode } = useContext(ContextConstant);

  return (
    <div className="z-[50]  xs:mx-6 lg:mx-0 relative top-0 aspect-[16/9] flex justify-end duration-300 md:m-0 mb-5">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
        width="100%"
        height="100%"
        playing={true}
        fullscreen={true}
      />
    </div>
  );
};

export default VideoPlayer;
