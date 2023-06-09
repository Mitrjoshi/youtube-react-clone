import React, { useState, useContext, useEffect } from "react";
import { ContextConstant } from "../context/Context.jsx";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const CategoriesSmall = ({ text, image, id, url, tooltipText, to }) => {
  const {
    activeCategory,
    setActiveCategory,
    category,
    setCategory,
    darkMode,
    setSearchQuery,
  } = useContext(ContextConstant);

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
    <>
      {id === 5 ? (
        <Link
          to={to}
          onClick={handleCategory}
          target="_blank"
          className="disable-selection"
        >
          <Tooltip title={tooltipText} placement="right">
            {darkMode ? (
              <div className="items-center justify-center px-1 sm:flex hidden ">
                <button
                  className={`w-full h-[75px] justify-center flex flex-col items-center rounded-[12px] gap-2 ${
                    activeCategory === id
                      ? "hover:bg-[#3d3d3d] bg-[#272727]"
                      : "hover:bg-[#272727] bg-none"
                  }`}
                >
                  <img
                    src={image}
                    alt={text}
                    className="h-[24px] flex justify-center items-center pl-3 pr-4"
                  />
                  <p className="text-[10px] mx-1">
                    {text.length > 10 ? `${text.slice(0, 10)}...` : text}
                  </p>
                </button>
              </div>
            ) : (
              <div className="items-center justify-center px-1 sm:flex hidden ">
                <button
                  className={`w-full h-[75px] justify-center flex flex-col items-center rounded-[12px] gap-2 ${
                    activeCategory === id
                      ? "hover:bg-[#dfdfdf] bg-[#ececec]"
                      : "hover:bg-[#ececec] bg-none"
                  }`}
                  onClick={handleCategory}
                >
                  <img
                    src={image}
                    alt={text}
                    className="h-[24px] flex justify-center items-center pl-3 pr-4"
                  />
                  <p className="text-[10px] mx-1">
                    {text.length > 10 ? `${text.slice(0, 10)}...` : text}
                  </p>
                </button>
              </div>
            )}
          </Tooltip>
        </Link>
      ) : (
        <Link to={to} onClick={handleCategory} className="disable-selection">
          <Tooltip title={tooltipText} placement="right">
            {darkMode ? (
              <div className="items-center justify-center px-1 sm:flex hidden ">
                <button
                  className={`w-full h-[75px] justify-center flex flex-col items-center rounded-[12px] gap-2 ${
                    activeCategory === id
                      ? "hover:bg-[#3d3d3d] bg-[#272727]"
                      : "hover:bg-[#272727] bg-none"
                  }`}
                >
                  <img
                    src={image}
                    alt={text}
                    className="h-[24px] flex justify-center items-center pl-3 pr-4"
                  />
                  <p className="text-[10px] mx-1">
                    {text.length > 10 ? `${text.slice(0, 10)}...` : text}
                  </p>
                </button>
              </div>
            ) : (
              <div className="items-center justify-center px-1 sm:flex hidden ">
                <button
                  className={`w-full h-[75px] justify-center flex flex-col items-center rounded-[12px] gap-2 ${
                    activeCategory === id
                      ? "hover:bg-[#dfdfdf] bg-[#ececec]"
                      : "hover:bg-[#ececec] bg-none"
                  }`}
                  onClick={handleCategory}
                >
                  <img
                    src={image}
                    alt={text}
                    className="h-[24px] flex justify-center items-center pl-3 pr-4"
                  />
                  <p className="text-[10px] mx-1">
                    {text.length > 10 ? `${text.slice(0, 10)}...` : text}
                  </p>
                </button>
              </div>
            )}
          </Tooltip>
        </Link>
      )}
    </>
  );
};

export default CategoriesSmall;
