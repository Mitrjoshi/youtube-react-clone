import React, { useState, useContext } from "react";
import Tooltip from "@mui/material/Tooltip";
import { ContextConstant } from "../context/Context.jsx";

const Button = ({ icon, tooltipText }) => {
  const { darkMode } = useContext(ContextConstant);

  return (
    <Tooltip title={tooltipText}>
      <button
        className={`relative flex justify-center items-center  w-[42px] h-[42px] xs:rounded-[50%] ${
          darkMode ? "xs:hover:bg-[#e5e5e520]" : "xs:hover:bg-[#e5e5e5]"
        }`}
      >
        <img src={icon} alt={icon} className="h-[24px] w-[24px]" />
      </button>
    </Tooltip>
  );
};
export default Button;
