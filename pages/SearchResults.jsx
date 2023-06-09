import React, { useEffect, useState, useContext } from "react";
import { fetchVideos } from "../utils/fetch.js";
import {
  SearchResultVideoLayout,
  ChannelLayout,
  DummySearchVideoLayout,
  ShortLayout,
  MainSection,
} from "../layouts";
import { ContextConstant } from "../context/Context.jsx";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { filterdark, filterlight } from "../assets";
import { OfflinePage } from "./";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    activeCategory,
    setActiveCategory,
    category,
    setCategory,
    videos,
    setVideos,
    darkMode,
    inputValue,
  } = useContext(ContextConstant);

  useEffect(() => {
    setVideos([]);
    setActiveCategory(0);
  }, []);

  const searchText = useParams();

  const body = document.querySelector("body");
  if (darkMode) {
    body.style.backgroundColor = "#0f0f0f";
  } else {
    body.style.backgroundColor = "white";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = "auto";
  }, []);

  useEffect(() => {
    fetchVideos(`search?query=${searchText?.id}&type=video`).then((data) => {
      setVideos(data.data);
    });
  }, [searchText]);

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
    document.title = `${searchText?.id} - YouTube`;
  }, [searchText?.id]);

  return (
    <>
      {isOnline ? (
        <div className="max-w-[1200px] m-auto md:px-[30px] mb-10 sm:px-[30px] px-[10px]">
          <div
            className={`main-page ${
              darkMode ? "bg-dark text-white" : "bg-light text-black"
            }`}
          >
            <button
              className={`px-3 py-1 rounded-[50px] ${
                darkMode ? "xs:hover:bg-[#3f3f3f]" : ""
              } flex items-center text-[16px] gap-2 font-semibold`}
            >
              {darkMode ? (
                <img src={filterlight} alt="" className="h-[32px] w-[24px]" />
              ) : (
                <img src={filterdark} alt="" className="h-[32px] w-[24px]" />
              )}
              Filters
            </button>
            <hr
              className={` ${
                darkMode ? "border-[#3f3f3f]" : "border-[#e5e5e5]"
              } `}
            />
            <div className="mt-5">
              {videos.length !== 0 ? (
                <div className="grid xs:grid-cols-2 sm:grid-cols-1 gap-4 items-start">
                  {videos.map((video, index) => {
                    return (
                      <>
                        {video?.type === "video" ? (
                          <div key={index}>
                            {video?.channelThumbnail ? (
                              <SearchResultVideoLayout
                                thumbnail={
                                  video.thumbnail[video.thumbnail.length - 1]
                                    .url
                                }
                                title={video.title}
                                views={video.viewCount}
                                channelName={video.channelTitle}
                                length={video.lengthText}
                                publishedAt={video.publishedTimeText}
                                videoId={video.videoId}
                                channelId={video.channelId}
                                channelProfile={
                                  video.channelThumbnail[
                                    video.channelThumbnail.length - 1
                                  ].url
                                }
                                description={video.description}
                              />
                            ) : null}
                          </div>
                        ) : null}
                      </>
                    );
                  })}
                </div>
              ) : (
                <div className="grid xs:grid-cols-2 ss:grid-cols-2 sm:grid-cols-1 gap-4">
                  <DummySearchVideoLayout />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <OfflinePage />
      )}
    </>
  );
};

export default SearchResults;
