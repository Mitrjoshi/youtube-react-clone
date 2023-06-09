import React, { useContext, useEffect } from "react";
import { ContextConstant } from "../context/Context.jsx";

const Library = () => {
  const { darkMode, activeCategory, searchQuery, setActiveCategory } =
    useContext(ContextConstant);

  const body = document.querySelector("body");
  if (darkMode) {
    body.style.backgroundColor = "#0f0f0f";
  } else {
    body.style.backgroundColor = "white";
  }

  useEffect(() => {
    setActiveCategory(6);
  }, []);

  useEffect(() => {
    document.title = "Library - YouTube";
  }, []);

  return (
    <div
      className={`main-page ${
        darkMode ? "bg-dark text-white" : "bg-light text-black"
      }`}
    >
      Library
    </div>
  );
};

export default Library;
