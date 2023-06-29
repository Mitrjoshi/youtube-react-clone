import React, { useEffect, useState, useContext } from "react";
import { fetchVideos } from "../utils/fetch.js";
import {
  VideoLayout,
  ChannelLayout,
  DummyVideoLayout,
  ShortLayout,
  ChannelDummyVideoLayout,
  ChannelVideoLayout,
} from "../layouts";
import { ContextConstant } from "../context/Context.jsx";
import axios from "axios";
import { Link, useParams, useLocation } from "react-router-dom";
import { SearchResults, OfflinePage, InvalidLink } from "./";
import { ChannelHeader, ChannelTabs } from "../components";

const Channel = () => {
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

  const channelId = useParams();
  const location = useLocation();

  useEffect(() => {
    setVideos([]);
    setVideosDetails([]);
    setChannel([]);
    setComments([]);
    localStorage.removeItem("activeCategory");
    setActiveCategory(0);
  }, []);

  useEffect(() => {
    if (channel?.channelHandle) {
      document.title = `${channel?.channelHandle} - YouTube`;
    } else {
      document.title = `YouTube`;
    }
  }, [channel?.channelHandle]);

  useEffect(() => {
    //channel info
    fetchVideos(`channel/about?id=${channelId.id}`).then((data) => {
      setChannel(data);
    });
    //channel videos
    fetchVideos(`channel/videos?id=${channelId.id}`).then((data) => {
      setVideos(data.data);
    });
  }, [channelId.id]);

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
    if (channel?.title) {
      document.title = `${channel?.title} - YouTube`;
    } else {
      document.title = "YouTube";
    }
  }, []);

  return (
    <>
      {isOnline ? (
        <div
          className={`${
            darkMode ? "bg-dark text-white" : "bg-light text-black"
          } overflow-x-hidden main-page`}
        >
          {videos ? (
            <>
              {channel.length !== 0 ? (
                <>
                  {channel?.banner !== null && channel?.banner ? (
                    <div>
                      <img
                        src={channel.banner[channel?.banner?.length - 1].url}
                        className="w-full"
                      />
                    </div>
                  ) : null}
                  <div className="max-w-[1284px] px-2 m-auto ">
                    <div className="my-5">
                      <ChannelHeader
                        avatar={
                          channel?.avatar[channel?.avatar?.length - 1]?.url
                        }
                        title={channel?.title}
                        channelHandle={channel.channelHandle}
                        subscriberCountText={channel?.subscriberCountText}
                        videosCountText={channel?.videosCountText}
                        description={channel?.description}
                        isVerified={channel?.isVerified}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full aspect-[16/2.6] video-layout"></div>
                  <div className="flex sm:flex-row flex-col max-w-[1270px] gap-5 m-auto my-5">
                    <div className="w-full sm:w-auto grid sm:justify-normal justify-center">
                      <div className="sm:h-[128px] sm:w-[128px] w-[96px] h-[96px] video-layout rounded-[50%]"></div>
                    </div>
                    <div className="flex flex-col gap-2 mt-5 items-center sm:items-start w-full">
                      <div className="video-layout h-[20px] w-[60%] rounded-[12px]"></div>
                      <div className="video-layout h-[20px] w-[30%] rounded-[12px]"></div>
                      <div className="video-layout h-[20px] w-[30%] rounded-[12px]"></div>
                    </div>
                  </div>
                </>
              )}

              <div className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                <div className="max-w-[1284px] m-auto">
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
            </>
          ) : (
            <InvalidLink name="channel" />
          )}
        </div>
      ) : (
        <OfflinePage />
      )}
    </>
  );
};

export default Channel;
