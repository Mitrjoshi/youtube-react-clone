import React, { useContext } from "react";
import { youtubelogo, youtubelogodark } from "../assets";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { ContextConstant } from "../context/Context.jsx";

const Logo = () => {
  const { activeCategory, setActiveCategory, darkMode, setSearchQuery } =
    useContext(ContextConstant);

  const handleCategory = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    setActiveCategory(1);
    localStorage.setItem("activeCategory", 1);
    scrollToTop();
    localStorage.removeItem("searchQuery");
    setSearchQuery("");
  };

  return (
    <Link to="/" onClick={handleCategory} className="disable-selection">
      {darkMode ? (
        <Tooltip title="Youtube Home" placement="right">
          <button className="flex items-center">
            <img src={youtubelogo} alt="youtube" className="h-[20px] w-full" />
          </button>
        </Tooltip>
      ) : (
        <Tooltip title="Youtube Home" placement="right">
          <button className="flex items-center">
            <img
              src={youtubelogodark}
              alt="youtube"
              className="h-[20px] w-full"
            />
          </button>
        </Tooltip>
      )}
    </Link>
  );
};

export default Logo;
