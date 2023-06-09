import React, { useContext, useEffect } from "react";
import { ContextConstant } from "../context/Context.jsx";
import Tooltip from "@mui/material/Tooltip";

const TopOptions = ({ title, url, id, tooltipText }) => {
  const {
    activeTopOption,
    setActiveTopOption,
    category,
    setCategory,
    darkMode,
    setVideos,
    setSearchQuery,
  } = useContext(ContextConstant);

  useEffect(() => {
    const storedActiveTopOption = localStorage.getItem("activeTopOption");
    if (storedActiveTopOption) {
      setActiveTopOption(storedActiveTopOption);
    }
  }, []);

  const handleCategory = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    scrollToTop();
    setVideos([]);
    setActiveTopOption(url);
    setSearchQuery("");
    localStorage.setItem("activeTopOption", url);
  };

  return (
    <Tooltip title={tooltipText}>
      <button
        onClick={handleCategory}
        className={`disable-selection z-50
      ${
        activeTopOption === url
          ? `${darkMode ? "bg-[white] text-black" : " bg-black text-white"}`
          : `${
              darkMode
                ? "xs:hover:bg-[#3f3f3f] bg-[#272727] text-white duration-300"
                : "xs:hover:bg-[#e5e5e5] bg-[#f2f2f2] text-black duration-300"
            }`
      }
       px-[.9rem] flex justify-center items-center py-[.4rem] rounded-[8px]`}
      >
        {title}
      </button>
    </Tooltip>
  );
};

export default TopOptions;
