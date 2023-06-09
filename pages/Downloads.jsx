import React, { useContext, useEffect } from "react";
import { ContextConstant } from "../context/Context.jsx";

const Downloads = () => {
  const {
    darkMode,
    activeCategory,
    searchQuery,
    setActiveCategory,
    setVideos,
    setVideoIdList,
  } = useContext(ContextConstant);

  const body = document.querySelector("body");
  if (darkMode) {
    body.style.backgroundColor = "#0f0f0f";
  } else {
    body.style.backgroundColor = "white";
  }

  useEffect(() => {
    setVideos([]);
    setActiveCategory(7);
  }, []);

  useEffect(() => {
    document.title = "YouTube";
  }, []);

  return (
    <div
      className={`main-page px-5 items-center justify-center no-network-page gap-5 flex flex-col ${
        darkMode ? "bg-dark text-white" : "bg-light text-black"
      }`}
    >
      <img
        src="https://www.gstatic.com/youtube/img/useredu/smart_downloads_optin_banner.gif"
        alt=""
        className="sm:w-[400px] xs:w-[220px]"
      />
      <div className="flex items-center justify-center flex-col break-words max-w-[400px] gap-2">
        <h1 className="text-center text-[25px]">
          Always have something to watch with Smart downloads
        </h1>
        <h1>We'll automatically download recommended videos for you.</h1>
      </div>
      <div>
        <button className="py-2 px-3 bg-[#3ea6ff] rounded-[50px] text-dark font-semibold hover:bg-[#65b8ff]">
          Turn on smart downloads
        </button>
      </div>
    </div>
  );
};

export default Downloads;
