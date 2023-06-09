import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import { search, searchdark } from "../assets";
import { ContextConstant } from "../context/Context.jsx";
import Tooltip from "@mui/material/Tooltip";

const SearchBar = () => {
  const navigate = useNavigate();
  const {
    darkMode,
    searchQuery,
    setSearchQuery,
    setVideos,
    inputValue,
    setInputValue,
  } = useContext(ContextConstant);

  useEffect(() => {
    const storedSearchQuery = localStorage.getItem("searchQuery");
    if (storedSearchQuery) {
      setSearchQuery(storedSearchQuery);
      setInputValue(storedSearchQuery); // Set the input value from localStorage
    }
  }, []);

  const handleInputFieldChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleEnterKeyUp = (event) => {
    localStorage.removeItem("searchQuery");
    if (event.code === "Enter") {
      if (inputValue === "") {
        localStorage.removeItem("searchQuery");
      } else {
        setVideos([]);
        setSearchQuery(inputValue);

        localStorage.setItem("searchQuery", inputValue);
        navigate(`/search/${inputValue}`);
        window.scrollTo(0, 0);
        window.history.scrollRestoration = "auto";
      }
    }
  };

  const handleSearchClick = () => {
    localStorage.removeItem("searchQuery");
    if (inputValue === "") {
      localStorage.removeItem("searchQuery");
    } else {
      setVideos([]);
      setSearchQuery(inputValue);
      localStorage.setItem("searchQuery", inputValue);
      navigate(`/search/${inputValue}`);
      window.scrollTo(0, 0);
      window.history.scrollRestoration = "auto";
    }
  };

  return (
    <div className="w-full flex justify-center items-center max-w-[600px]">
      <input
        placeholder="Search"
        type="search"
        className={`font-semibold text-[16px] input-field w-full h-[40px] pl-4 border rounded-l-[20px]  outline-none search-bar ${
          darkMode
            ? "border-[#2e2e2e] text-[#e2e2e2] bg-[#121212] "
            : "border-[#d3d3d3] text-[black]"
        }`}
        value={inputValue}
        onChange={handleInputFieldChange}
        onKeyUp={handleEnterKeyUp}
      />
      <Tooltip title="Search">
        <button
          className={`h-[40px] w-[90px] flex justify-center items-center border border-[#222222] rounded-r-[20px] border-l-0 ${
            darkMode
              ? "xs:hover:bg-[#272727] border-[#2e2e2e] text-[white] bg-[#121212]  "
              : "xs:hover:bg-[#e5e5e5] border-[#d3d3d3] text-[black]"
          }`}
          onClick={handleSearchClick}
        >
          {darkMode ? (
            <img src={search} alt="" className="h-[24px] w-[24px]" />
          ) : (
            <img src={searchdark} alt="" className="h-[24px] w-[24px]" />
          )}
        </button>
      </Tooltip>
    </div>
  );
};

export default SearchBar;
