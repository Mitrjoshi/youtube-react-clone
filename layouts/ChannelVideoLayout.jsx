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

const ChannelVideoLayout = ({
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
    <Link to={`/watch/${videoId}`} className="">
      <div className="grid gap-3 items-center sm:m-0 w-full">
        <div className="relative ">
          <img
            src={thumbnail}
            alt={title}
            className="w-full rounded-[12px] hover:rounded-none aspect-video object-cover duration-300"
          />

          <p
            className={`absolute right-[5px] font-semibold bottom-[5px] bg-[#000000c2]  px-2 rounded-[5px]${
              darkMode ? "  text-white" : " text-white"
            }`}
          >
            {length}
          </p>
        </div>

        <div className="text-[1rem] flex flex-col">
          <div className="font-[500]">
            {title ? (
              <h1>{title.length > 80 ? `${title.slice(0, 80)}...` : title}</h1>
            ) : null}
          </div>
          <div
            className={`${
              darkMode ? "text-[#9ba8aa]" : "text-[#606060]"
            }  text-[13px] flex items-center gap-2`}
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

export default ChannelVideoLayout;
