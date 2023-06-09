import React, { useEffect, useState, useContext } from "react";
import { fetchVideos } from "../utils/fetch.js";
import {
  VideoLayout,
  ChannelLayout,
  DummyVideoLayout,
  ShortLayout,
} from "../layouts";
import { ContextConstant } from "../context/Context.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { SearchResults } from "../pages";

const MainSection = () => {
  const {
    activeCategory,
    setActiveCategory,
    setVideos,
    darkMode,
    setChannel,
    setVideosDetails,
    setComments,
    category,
    videos,
    activeTopOption,
    setActiveTopOption,
  } = useContext(ContextConstant);

  useEffect(() => {
    setChannel([]);
    setVideos([]);
    setVideosDetails([]);
    setComments([]);
  }, []);

  const body = document.querySelector("body");
  if (darkMode) {
    body.style.backgroundColor = "#0f0f0f";
  } else {
    body.style.backgroundColor = "white";
  }

  const activeCategoryTopOption = localStorage.getItem("activeTopOption");

  useEffect(() => {
    if (activeCategoryTopOption === "home") {
      fetchVideos(`home?geo=IN`).then((data) => {
        setVideos(data.data);
      });
    } else {
      fetchVideos(`search?query=${activeCategoryTopOption}&type=video`).then(
        (data) => {
          setVideos(data.data);
        }
      );
    }
  }, [activeCategoryTopOption]);

  return (
    <div className="md:mt-4">
      {videos.length !== 0 ? (
        <div className="grid xs:gap-y-10 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-6 gap-4 md:px-[80px]">
          {videos.map((video, index) => {
            return (
              <div>
                {video?.type === "video" ? (
                  <div key={index}>
                    {video?.channelThumbnail ? (
                      <VideoLayout
                        thumbnail={
                          video.thumbnail[video.thumbnail.length - 1].url
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
                      />
                    ) : null}
                  </div>
                ) : video?.type === "shorts_listing" ? (
                  <div key={index}>
                    <ShortLayout
                      thumbnail={
                        video.data[0].thumbnail[
                          video.data[0].thumbnail.length - 1
                        ].url
                      }
                      title={video.data[0].title}
                      views={video.data[0].viewCountText}
                      videoId={video.data[0].videoId}
                    />
                  </div>
                ) : video.type === "video_listing" ? (
                  <div key={index}>
                    <VideoLayout
                      thumbnail={
                        video.data[0].thumbnail[
                          video.data[0].thumbnail.length - 1
                        ].url
                      }
                      title={video.data[0].title}
                      views={video.data[0].viewCount}
                      channelName={video.data[0].channelTitle}
                      length={video.data[0].lengthText}
                      publishedAt={video.data[0].publishedTimeText}
                      videoId={video.data[0].videoId}
                      channelId={video.data[0].channelId}
                      channelProfile={
                        video.data[0].channelThumbnail[
                          video.data[0].channelThumbnail.length - 1
                        ].url
                      }
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid xs:gap-y-10 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 gap-4 md:px-[80px]">
          <DummyVideoLayout />
        </div>
      )}
    </div>
  );
};

export default MainSection;
