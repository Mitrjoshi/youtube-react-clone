import React, { useContext, useEffect, useState } from "react";
import { ChannelHeader, ChannelTabs } from "../components";
import { ContextConstant } from "../context/Context.jsx";
import { ChannelDummyVideoLayout, ChannelVideoLayout } from "../layouts";
import { OfflinePage } from "./";
import { fetchVideos } from "../utils/fetch.js";

const Originals = () => {
  const {
    setActiveCategory,
    videos,
    setVideos,
    darkMode,
    channel,
    setChannel,
    setVideosDetails,
    setComments,
  } = useContext(ContextConstant);

  useEffect(() => {
    setVideos([]);
    setVideosDetails([]);
  }, []);

  const body = document.querySelector("body");
  if (darkMode) {
    body.style.backgroundColor = "#0f0f0f";
  } else {
    body.style.backgroundColor = "white";
  }

  useEffect(() => {
    localStorage.removeItem("activeCategory");
    setActiveCategory(4);
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
    document.title = "YouTube Originals - YouTube";
  }, []);

  useEffect(() => {
    //channel info
    fetchVideos(`channel/about?id=UCqVDpXKLmKeBU_yyt_QkItQ`).then((data) => {
      setChannel(data);
    });
    //channel videos
    fetchVideos(`channel/videos?id=UCqVDpXKLmKeBU_yyt_QkItQ`).then((data) => {
      setVideos(data.data);
    });
  }, []);

  return (
    <>
      {isOnline ? (
        <div
          className={`${
            darkMode ? "bg-dark text-white" : "bg-light text-black"
          } overflow-x-hidden main-page`}
        >
          <div>
            <img
              src="https://yt3.googleusercontent.com/_zoMNQr6QzGbmYvrpaPi8Wvfa-5pscT2j7uyHD2rR4g-YkydY1PGLaS-c0_xqWGkTL7JN0B-Pg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
              alt="Youtube originals channel banner"
              className="w-full h-full"
            />
          </div>
          <div className="max-w-[1284px] px-2 m-auto ">
            <div className="my-5">
              <ChannelHeader />
            </div>
          </div>
          <div className={`${darkMode ? "bg-dark" : "bg-light"}`}>
            <div className="max-w-[1284px] m-auto ">
              <ChannelTabs />
            </div>
            <hr
              className={` ${
                darkMode ? "border-[#3f3f3f]" : "border-[#e5e5e5]"
              } `}
            />
          </div>

          {videos.length !== 0 ? (
            <div className="max-w-[1284px] py-5 px-2 m-auto ">
              <div className="grid lg:grid-cols-4 xxl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 ss:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-y-5 gap-x-4 md:px-0 sm:px-6">
                {videos.map((video, index) => {
                  return (
                    <div key={index}>
                      {video.thumbnail ? (
                        <ChannelVideoLayout
                          thumbnail={
                            video.thumbnail[video.thumbnail.length - 1].url
                          }
                          title={video.title}
                          views={video.viewCount}
                          channelName={video.channelTitle}
                          length={video.lengthText}
                          publishedAt={video.publishedTimeText}
                          videoId={video.videoId}
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="max-w-[1284px] py-5 px-2 m-auto ">
              <div className="grid lg:grid-cols-4 xxl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 ss:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-y-5 gap-x-4 md:px-0 sm:px-6">
                <ChannelDummyVideoLayout />
              </div>
            </div>
          )}
        </div>
      ) : (
        <OfflinePage />
      )}
    </>
  );
};

export default Originals;
