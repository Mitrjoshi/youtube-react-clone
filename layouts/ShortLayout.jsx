import React, { useEffect, useState, useContext } from "react";
import { fetchVideos } from "../utils/fetch.js";
import { ContextConstant } from "../context/Context.jsx";
import axios from "axios";
import { Link } from "react-router-dom";

const convertViewsToRoundFigure = (views) => {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M";
  } else if (views >= 10000) {
    return (views / 1000).toFixed(1) + "K";
  } else {
    return views.toString();
  }
};

const ShortLayout = ({
  thumbnail,
  title,
  channelName,
  videoId,
  publishedAt,
  length,
  views,
  channelProfile,
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

  return (
    <Link
      to={`/watch/${videoId}`}
      className="flex flex-col gap-3 justify-center items-center sm:m-0"
    >
      <div className="relative  shorts-ratio">
        <img
          src={thumbnail}
          alt={title}
          className=" rounded-[15px] hover:rounded-none h-[190px] duration-300"
        />
        <p
          className={`absolute right-[5px] bottom-[5px] bg-[#000000c2]  px-2 rounded-[5px]${
            darkMode ? "  text-white" : " text-white"
          }`}
        >
          {length}
        </p>
      </div>
      <div className="text-[16px] gap-5">
        <div>
          <div>
            <h1 className="font-semibold">
              {title.length > 40 ? `${title.slice(0, 40)}...` : title}
            </h1>
          </div>
          <div className="text-[#7a7a7a] text-[15px] flex items-center gap-2">
            <h1>{formattedViews}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShortLayout;
