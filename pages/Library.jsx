import React, { useContext, useEffect, useState } from "react";
import { ContextConstant } from "../context/Context.jsx";
import { OfflinePage } from "./";

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

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => setIsOnline(true);
    const handleOfflineStatus = () => setIsOnline(false);

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, []);

  return (
    <>
      {isOnline ? (
        <div
          className={`main-page ${
            darkMode ? "bg-dark text-white" : "bg-light text-black"
          }`}
        >
          Library
        </div>
      ) : (
        <OfflinePage />
      )}
    </>
  );
};

export default Library;
