import React, { useContext, useEffect, useState } from "react";
import { SidemenuDrawer, MainSection, TopOptionsLayout } from "../layouts";
import { Button } from "../components";
import { ContextConstant } from "../context/Context.jsx";
import { categories, top_options } from "../utils/constants.js";
import { TopOptions, VideoPlayerSubscribe } from "../components";
import { useLocation } from "react-router-dom";
import { OfflinePage } from "./";

const Home = () => {
  const {
    darkMode,
    activeCategory,
    searchQuery,
    setActiveCategory,
    videos,
    setVideos,
    activeTopOption,
    category,
    setSearchQuery,
  } = useContext(ContextConstant);

  useEffect(() => {
    document.title = "YouTube";
  }, []);

  const body = document.querySelector("body");
  if (darkMode) {
    body.style.backgroundColor = "#0f0f0f";
  } else {
    body.style.backgroundColor = "white";
  }

  useEffect(() => {
    setVideos([]);
    setActiveCategory(1);
    setSearchQuery("");
  }, [activeCategory]);

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
          {activeCategory === 1 ? (
            <div>
              {searchQuery === "" ? (
                <div className="md:px-[30px] mb-10 m-auto sm:px-[30px] px-[10px] sm:gap-5 max-w-[2240px] ">
                  <div className="main-section">
                    <TopOptionsLayout background={"bg-dark"} />
                    <MainSection />
                  </div>
                </div>
              ) : (
                <div className=" md:px-[30px] mb-10 m-auto sm:px-[30px] px-[10px] sm:gap-5 max-w-[2240px] ">
                  <div className="main-section">
                    <MainSection />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {searchQuery === "" ? (
                <div className="md:px-[30px] mb-10 m-auto sm:px-[30px] px-[10px] sm:gap-5 max-w-[2240px] ">
                  <div className="main-section">
                    <TopOptionsLayout background={"bg-dark"} />

                    <MainSection />
                  </div>
                </div>
              ) : (
                <div className=" md:px-[30px] mb-10 m-auto sm:px-[30px] px-[10px] sm:gap-5 max-w-[2240px] ">
                  <div className="main-section">
                    <MainSection />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <OfflinePage />
      )}
    </>
  );
};

export default Home;
