import React, { useRef, useEffect, useContext } from "react";
import { Button } from "../components";
import { search, searchdark } from "../assets";
import { ContextConstant } from "../context/Context.jsx";
import { useNavigate } from "react-router-dom";

const SearchBarSmall = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const {
    darkMode,
    searchQuery,
    setSearchQuery,
    inputValue,
    setInputValue,
    setVideos,
  } = useContext(ContextConstant);

  useEffect(() => {
    inputRef.current.focus();
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
    if (event.code === "Enter") {
      if (inputValue === "") return;
      setVideos([]);
      setSearchQuery(inputValue);
      localStorage.setItem("searchQuery", inputValue);

      // Navigate to "/search/:inputValue"
      navigate(`/search/${inputValue}`);
      window.scrollTo(0, 0);
      window.history.scrollRestoration = "auto";
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
    <>
      <input
        ref={inputRef}
        placeholder="Search"
        type="search"
        className={` text-[16px] search-bar input-field h-[40px] w-full pl-4 border border-[#2e2e2e] rounded-[20px] bg-transparent outline-none ${
          darkMode ? "text-light" : "text-black"
        }`}
        value={inputValue}
        onChange={handleInputFieldChange}
        onKeyUp={handleEnterKeyUp}
      />
      <button
        className="flex justify-center items-center"
        onClick={handleSearchClick}
      >
        {darkMode ? (
          <img src={search} alt="" className="h-[24px] w-[24px]" />
        ) : (
          <img src={searchdark} alt="" className="h-[24px] w-[24px]" />
        )}
      </button>
    </>
  );
};

export default SearchBarSmall;
