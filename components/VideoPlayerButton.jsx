import React, { useState, useContext } from "react";
import Tooltip from "@mui/material/Tooltip";
import { ContextConstant } from "../context/Context.jsx";

const VideoPlayerButton = ({ icon, tooltipText, text }) => {
  const { darkMode } = useContext(ContextConstant);

  return (
    <Tooltip title={tooltipText}>
      <button
        className={`relative flex gap-2 justify-center items-center px-6 h-[36px] rounded-[50px] ${
          darkMode
            ? "xs:hover:bg-[#454443] bg-[#302f2e]"
            : "xs:hover:bg-[#e5e5e5] bg-[#f2f2f2]"
        }`}
      >
        <img src={icon} alt={icon} className="h-[24px] w-[24px]" />
        <p>{text}</p>
      </button>
    </Tooltip>
  );
};

export default VideoPlayerButton;
