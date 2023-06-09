import React, { useContext, useRef, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import { top_options } from "../utils/constants.js";
import { ContextConstant } from "../context/Context.jsx";
import {
  Suggestions,
  VideoPlayer,
  VideoPlayerHeader,
  Description,
  Comments,
  VideoPlayerBlurred,
  VideoPlayerSubscribe,
} from "../components";
import {
  VideoLayout,
  DummyVideoLayout,
  TopOptionsLayout,
  ShortLayout,
  DummySuggestionLayout,
} from "../layouts";
import { fetchVideos } from "../utils/fetch.js";
import { OfflinePage, InvalidLink } from "./";

const Video = () => {
  const videoId = useParams();

  const {
    activeCategory,
    setActiveCategory,
    category,
    setCategory,
    videos,
    setVideos,
    darkMode,
    channel,
    setChannel,
    videosDetails,
    setVideosDetails,
    comments,
    setComments,
  } = useContext(ContextConstant);

  useEffect(() => {
    setVideos([]);
    setVideosDetails([]);
    setChannel([]);
    setComments([]);
    localStorage.removeItem("activeCategory");
    setActiveCategory(0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = "auto";
  }, []);

  const body = document.querySelector("body");
  if (darkMode) {
    body.style.backgroundColor = "#0f0f0f";
  } else {
    body.style.backgroundColor = "white";
  }

  useEffect(() => {
    if (videosDetails.title !== undefined) document.title = videosDetails.title;
  }, [videosDetails?.title]);

  const location = useLocation();
  const channelId = videosDetails?.channelId;

  useEffect(() => {
    //video info
    fetchVideos(`video/info?id=${videoId.id}`).then((data) => {
      setVideosDetails(data);
    });
    //comments
    fetchVideos(`comments?id=${videoId.id}`).then((data) => {
      setComments(data.data);
    });
    //related
    fetchVideos(`related?id=${videoId.id}`).then((data) => {
      setVideos(data.data);
    });
  }, [videoId.id]);

  //channel info
  useEffect(() => {
    fetchVideos(`channel/about?id=${channelId}`).then((data) => {
      setChannel(data);
    });
  }, [channelId]);

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

  return (
    <>
      {isOnline ? (
        <div
          className={`max-w-[1754px] mb-5 lg:flex grid items-center justify-center gap-[20px] lg:px-[120px] m-auto pt-[60px] sm:pt-[80px]  ${
            darkMode ? "bg-dark text-white" : "bg-light text-black"
          }`}
        >
          {videosDetails?.error === undefined ? (
            <div className="video-page">
              <div className="flex flex-col relative gap-2 max-w-[1280px]">
                <VideoPlayer
                  videoId={videoId.id}
                  title={videosDetails.title}
                  thumbnail={videosDetails.thumbnail}
                />
                <div className="absolute blur-[80px] w-full z-0 brightness-[0.9] ">
                  {darkMode ? (
                    videosDetails?.thumbnail?.length > 0 ? (
                      <VideoPlayerBlurred
                        videoId={videoId.id}
                        title={videosDetails.title}
                        thumbnail={
                          videosDetails.thumbnail[
                            videosDetails.thumbnail.length - 1
                          ].url
                        }
                      />
                    ) : null
                  ) : null}
                </div>

                <div className="z-[10] px-2 xs:px-6 lg:px-0 w-full">
                  <VideoPlayerHeader
                    title={videosDetails.title}
                    channelName={channel.title}
                    publishedAt={videosDetails.publishDate}
                    views={videosDetails.viewCount}
                    channelProfile={
                      channel.avatar && channel.avatar.length > 0
                        ? channel.avatar[0].url
                        : null
                    }
                    videoId={videoId.id}
                    subscribers={channel.subscriberCountText}
                    ifVerified={channel.isVerified}
                    channelID={channel.channelId}
                  />

                  <Description
                    views={videosDetails.viewCount}
                    publishedAt={videosDetails.publishDate}
                    description={videosDetails.description}
                  />

                  <div className="mt-10 lg:grid hidden">
                    {comments.map((comment, index) => {
                      return (
                        <div key={index}>
                          <Comments
                            comment={comment.textDisplay}
                            authorThumbnail={
                              comment.authorThumbnail[
                                comment.authorThumbnail.length - 1
                              ].url
                            }
                            authorText={comment.authorText}
                            likesCount={comment.likesCount}
                            publishedTimeText={comment.publishedTimeText}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="z-50 w-full px-2 lg:mt-0 mt-5 xs:px-6">
                <div className="grid gap-3 w-full lg:w-[400px] ">
                  {videos.length !== 0 ? (
                    videos.map((video, index) => {
                      return (
                        <div key={index}>
                          {video.type === "video" ? (
                            <Suggestions
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
                            />
                          ) : null}
                        </div>
                      );
                    })
                  ) : (
                    <DummySuggestionLayout />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <InvalidLink name="video" />
          )}
        </div>
      ) : (
        <OfflinePage />
      )}
    </>
  );
};

export default Video;
