import React, { useState, useContext, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import { ContextConstant } from "../context/Context.jsx";
import { Link } from "react-router-dom";

const Categories = ({
  text,
  image,
  id,
  setMenuToggle,
  url,
  categoryText,
  tooltipText,
  to,
}) => {
  const { activeCategory, setActiveCategory, darkMode, setSearchQuery } =
    useContext(ContextConstant);

  useEffect(() => {
    const storedActiveCategory = localStorage.getItem("activeCategory");
    if (storedActiveCategory) {
      setActiveCategory(Number(storedActiveCategory));
    }
  }, []);

  const handleCategory = () => {
    if (id === 5 || id === 18 || id === 19 || id === 20) return;
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    setActiveCategory(id);
    localStorage.setItem("activeCategory", id.toString());
    scrollToTop();
    localStorage.removeItem("searchQuery");
    setSearchQuery("");
  };

  return (
    <Tooltip
      title={tooltipText}
      placement="right"
      className="disable-selection"
    >
      <div className="w-full px-2">
        {id === 5 || id === 19 || id === 20 || id === 21 ? (
          <Link to={to} onClick={handleCategory} target="_blank">
            <button
              className={`w-full h-[42px] flex items-center rounded-[12px] ${
                activeCategory === id
                  ? `${
                      darkMode
                        ? "xs:hover:bg-[#3d3d3d] bg-[#272727] text-white"
                        : "xs:hover:bg-[#dfdfdf] bg-[#ececec] text-black"
                    }`
                  : `${
                      darkMode
                        ? "xs:hover:bg-[#272727] text-white"
                        : "xs:hover:bg-[#ececec] text-black"
                    }`
              }`}
            >
              <div className="flex">
                <img
                  src={image}
                  alt={text}
                  className="h-[24px] flex justify-center items-center pl-5 pr-4"
                />
                <p className="flex justify-center items-start font-medium text-[15px] px-4">
                  {text}
                </p>
              </div>
            </button>
          </Link>
        ) : (
          <Link to={to} onClick={handleCategory}>
            <button
              className={`w-full h-[42px] flex items-center rounded-[12px] ${
                activeCategory === id
                  ? `${
                      darkMode
                        ? "xs:hover:bg-[#3d3d3d] bg-[#272727] text-white"
                        : "xs:hover:bg-[#dfdfdf] bg-[#ececec] text-black"
                    }`
                  : `${
                      darkMode
                        ? "xs:hover:bg-[#272727] text-white"
                        : "xs:hover:bg-[#ececec] text-black"
                    }`
              }`}
            >
              <div className="flex">
                <img
                  src={image}
                  alt={text}
                  className="h-[24px] flex justify-center items-center pl-5 pr-4"
                />
                <p className="flex justify-center items-start font-medium text-[15px] px-4">
                  {text}
                </p>
              </div>
            </button>
          </Link>
        )}
      </div>
    </Tooltip>
  );
};

export default Categories;
