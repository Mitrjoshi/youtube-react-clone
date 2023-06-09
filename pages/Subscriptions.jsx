import React, { useContext, useRef, useEffect, useState } from "react";
import { ContextConstant } from "../context/Context.jsx";
import { OfflinePage } from "./";
import { useLocation } from "react-router-dom";

const Subscriptions = () => {
  const { darkMode, setActiveCategory, activeCategory } =
    useContext(ContextConstant);

  const body = document.querySelector("body");
  if (darkMode) {
    body.style.backgroundColor = "#0f0f0f";
  } else {
    body.style.backgroundColor = "white";
  }

  useEffect(() => {
    localStorage.removeItem("activeCategory");
    setActiveCategory(3);
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

  useEffect(() => {
    document.title = "Subscriptions - YouTube";
  }, []);

  return (
    <>
      {isOnline ? (
        <div
          className={`main-page ${
            darkMode ? "bg-dark text-white" : "bg-light text-black"
          }`}
        >
          Subscriptions
        </div>
      ) : (
        <OfflinePage />
      )}
    </>
  );
};

export default Subscriptions;
