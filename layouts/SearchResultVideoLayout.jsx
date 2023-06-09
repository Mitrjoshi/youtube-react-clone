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

const SearchResultVideoLayout = ({
  thumbnail,
  title,
  channelName,
  videoId,
  publishedAt,
  length,
  views,
  channelProfile,
  channelId,
  description,
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

  const formattedViews = convertViewsToRoundFigure(views);

  const handleVideoIdentity = () => {
    setVideoIdentityFunction(videoId);
  };

  return (
    <div className="flex sm:justify-normal justify-center">
      <div className="sm:flex hidden">
        <Link to={`/watch/${videoId}`}>
          <div className="sm:flex grid gap-3">
            <div className="relative max-w-[360px]">
              <img
                src={thumbnail}
                alt={title}
                className="rounded-[10px] max-w-[360px] hover:rounded-none aspect-video object-cover duration-300"
              />
              <p
                className={`absolute right-[5px] bottom-[5px] bg-[#000000c2]  px-2 rounded-[5px]${
                  darkMode ? "  text-white" : " text-white"
                }`}
              >
                {length}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-[18px] font-semibold mt-1">{title}</p>
              </div>
              <div
                className={`font-semibold ${
                  darkMode ? "text-[#989898]" : "text-[#606060]"
                }  text-[14px] flex items-center gap-2`}
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
              <Link to={`/channel/${channelId}`}>
                <div className="flex items-center gap-2">
                  <img src={channelProfile} className="h-[25px] rounded-full" />
                  <span
                    className={`text-[14px] font-semibold ${
                      darkMode
                        ? "text-[#989898] hover:text-[#f2f2f2]"
                        : "text-[#606060] hover:text-[#0f0f0f]"
                    }`}
                  >
                    {channelName}
                  </span>
                </div>
              </Link>
              <div
                className={`text-[14px] font-semibold ${
                  darkMode ? "text-[#989898]" : "text-[#606060]"
                }`}
              >
                <p>
                  {description && description.length > 50
                    ? `${description.slice(0, 50)}...`
                    : description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="sm:hidden flex flex-col max-w-[360px] gap-3 sm:justify-normal justify-center items-start sm:m-0 ">
        <Link to={`/watch/${videoId}`}>
          <div className="relative">
            <img
              src={thumbnail}
              alt={title}
              className="rounded-[10px] hover:rounded-none aspect-video object-cover duration-300 w-full"
            />
            <p
              className={`absolute right-[5px] bottom-[5px] bg-[#000000c2]  px-2 rounded-[5px]${
                darkMode ? "  text-white" : " text-white"
              }`}
            >
              {length}
            </p>
          </div>
        </Link>

        <div className="max-w-[360px] video-grid text-[16px] gap-5">
          <Link to={`/channel/${channelId}`}>
            <div>
              <img
                src={channelProfile}
                alt={channelName}
                className="h-[40px] w-[40px] rounded-[50%]"
              />
            </div>
          </Link>
          <div className="font-semibold">
            <div>
              <h1>{title.length > 60 ? `${title.slice(0, 60)}...` : title}</h1>
              <Link to={`/channel/${channelId}`}>
                <span
                  className={`text-[14px] ${
                    darkMode
                      ? "text-[#989898] hover:text-[#f2f2f2]"
                      : "text-[#606060] hover:text-[#0f0f0f]"
                  }`}
                >
                  {channelName}
                </span>
              </Link>
            </div>
            <Link to={`/watch/${videoId}`}>
              <div
                className={`${
                  darkMode ? "text-[#989898]" : "text-[#606060]"
                }  text-[14px] flex items-center gap-2`}
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultVideoLayout;
