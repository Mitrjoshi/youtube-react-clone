import React, { createContext, useState, useEffect } from "react";

export const ContextConstant = createContext(null);

const Context = (props) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const initialDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : true;
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  const [activeCategory, setActiveCategory] = useState(1);
  const [activeTopOption, setActiveTopOption] = useState("home");
  const [category, setCategory] = useState("home");
  const [videos, setVideos] = useState([]);
  const [videosDetails, setVideosDetails] = useState([]);
  const [channel, setChannel] = useState([]);
  const [comments, setComments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [videoIdList, setVideoIdList] = useState([]);

  const contextValue = {
    activeCategory,
    setActiveCategory,
    category,
    setCategory,
    videos,
    setVideos,
    darkMode,
    setDarkMode,
    activeTopOption,
    setActiveTopOption,
    channel,
    setChannel,
    videosDetails,
    setVideosDetails,
    comments,
    setComments,
    searchQuery,
    setSearchQuery,
    inputValue,
    setInputValue,
    videoIdList,
    setVideoIdList,
  };

  return (
    <ContextConstant.Provider value={contextValue}>
      {props.children}
    </ContextConstant.Provider>
  );
};

export default Context;
