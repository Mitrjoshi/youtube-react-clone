import React, { useEffect, useState, useContext } from "react";
import { fetchVideos } from "../utils/fetch.js";
import { ContextConstant } from "../context/Context.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { DottedDropDownMenu } from "../layouts";

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

const WatchLaterVideoLayoutSmall = ({
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

  return (
    <div className="flex w-full flex-col gap-3 justify-center items-start sm:m-0 xs:max-w-[370px]">
      <Link to={`/watch/${videoId}`} className="w-full">
        <div className="relative w-full">
          <img
            src={thumbnail}
            alt={title}
            className="rounded-[10px] w-full hover:rounded-none aspect-video object-cover duration-300"
          />
          <p
            className={`absolute right-[5px] font-semibold bottom-[5px] bg-[#000000c2]  px-2 rounded-[5px]${
              darkMode ? "  text-white" : " text-white"
            }`}
          >
            {length}
          </p>
        </div>
      </Link>

      <div className="max-w-[360px] w-full flex items-center justify-between text-[16px] gap-5">
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
        {darkMode ? (
          <DottedDropDownMenu
            title="Remove from watch later"
            styles={{
              display: "flex",
              justifyContent: "start",
              height: "40px",
              width: "40px",
              alignItems: "center",
              borderRadius: "50%",
            }}
            videoID={videoId}
            titleOfVideo={title}
          />
        ) : (
          <DottedDropDownMenu
            title="Remove from watch later"
            styles={{
              display: "flex",
              justifyContent: "start",
              height: "40px",
              width: "40px",
              alignItems: "center",
              borderRadius: "50%",
            }}
            videoID={videoId}
            titleOfVideo={title}
          />
        )}
      </div>
    </div>
  );
};

export default WatchLaterVideoLayoutSmall;
