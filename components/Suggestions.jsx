import React, { useEffect, useState, useContext } from "react";
import { fetchVideos } from "../utils/fetch.js";
import { ContextConstant } from "../context/Context.jsx";
import axios from "axios";
import { Link } from "react-router-dom";

const convertViewsToRoundFigure = (views) => {
  if (views >= 1000000000) {
    return (views / 1000000000).toFixed(1) + "B";
  } else if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M";
  } else if (views >= 10000 || views >= 1000) {
    return (views / 1000).toFixed(1) + "K";
  } else {
    return views.toString();
  }
};

const Suggestions = ({
  thumbnail,
  title,
  channelName,
  videoId,
  publishedAt,
  length,
  views,
  channelProfile,
  channelId,
}) => {
  const {
    activeCategory,
    setActiveCategory,
    category,
    setCategory,
    videos,
    setVideos,
    darkMode,
  } = useContext(ContextConstant);

  let formattedViews;

  if (views > 0) {
    formattedViews = convertViewsToRoundFigure(views);
  } else {
    formattedViews = 0;
  }

  const handleVideoIdentity = () => {
    setVideoIdentityFunction(videoId);
  };

  const handleScrollUp = () => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = "auto";
  };

  return (
    <Link to={`/watch/${videoId}`} onClick={handleScrollUp}>
      <div className=" gap-3 justify-start items-start sm:m-0 suggested-video-player max-h-[194px]">
        <div className="relative ">
          <img
            src={thumbnail}
            alt={title}
            className="rounded-[10px] w-full aspect-video object-cover duration-300"
          />
          <p
            className={`absolute right-[5px] font-semibold bottom-[5px] bg-[#000000c2]  px-2 rounded-[5px]${
              darkMode ? "  text-white" : " text-white"
            }`}
          >
            {length}
          </p>
        </div>

        <div className="w-[100%] gap-5">
          <div className="md:flex hidden flex-col">
            <h1 className=" font-semibold">
              {title.length > 40 ? `${title.slice(0, 40)}...` : title}
            </h1>

            <Link to={`/channel/${channelId}`}>
              <span
                className={`text-[#989898] font-semibold xs:hover:text-[#f2f2f2] ${
                  darkMode ? "text-[#989898]" : "text-[#606060]"
                }`}
              >
                {channelName
                  ? channelName.length > 20
                    ? `${channelName.slice(0, 20)}...`
                    : channelName
                  : null}
              </span>
            </Link>
          </div>

          <div className="md:hidden flex flex-col ">
            <h1 className="xs:flex hidden font-semibold">{title}</h1>
            <h1 className="xs:hidden flex font-semibold">
              {title.length > 20 ? `${title.slice(0, 20)}...` : title}
            </h1>
            <Link to={`/channel/${channelId}`}>
              <span
                className={`text-[#989898] flex  xs:hover:text-[#f2f2f2] ${
                  darkMode ? "text-[#989898]" : "text-[#606060]"
                }`}
              >
                {channelName}
              </span>
            </Link>
          </div>
          <div
            className={`${
              darkMode ? "text-[#989898]" : "text-[#606060]"
            } flex xs:text-[14px] text-[12px] items-center gap-2`}
          >
            {publishedAt != null ? (
              <>
                <h1>{formattedViews} views</h1>
                <span className="h-[5px] w-[5px] bg-[#7a7a7a] flex items-end rounded-[50%]"></span>
                <h1>{publishedAt}</h1>
              </>
            ) : (
              <h1>{formattedViews} views</h1>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Suggestions;
