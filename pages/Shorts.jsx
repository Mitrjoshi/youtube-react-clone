import React, { useContext, useState, useEffect, useRef } from "react";
import { ContextConstant } from "../context/Context.jsx";
import { ShortsPlayer, ShortsButtons } from "../components";
import { fetchVideos } from "../utils/fetch.js";
import { useLocation, useParams } from "react-router-dom";
import { ShortsDummyLayout } from "../layouts";
import {
  dislikefilllight,
  dislikefilldark,
  morelight,
  sharelight,
  commentsdark,
  commentslight,
  likefilllight,
  likefilldark,
  sharedark,
  moredark,
  internet,
} from "../assets";
import { InvalidLink, OfflinePage } from "./";

const Shorts = () => {
  const {
    videos,
    setVideos,
    darkMode,
    setActiveCategory,
    videosDetails,
    setVideosDetails,
  } = useContext(ContextConstant);

  const body = document.querySelector("body");
  if (darkMode) {
    body.style.backgroundColor = "#0f0f0f";
  } else {
    body.style.backgroundColor = "white";
  }

  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    localStorage.removeItem("activeCategory");
    setActiveCategory(2);
    setVideos([]);
    window.history.replaceState("", "/shorts");
    setVideosDetails([]);
  }, []);

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

  const videoId = window.location.pathname.slice(8);

  useEffect(() => {
    fetchVideos(
      `shorts/sequence?params=GhEKCzBJNkZXMkZYX2I4GAAgASoCGA9CAGIEUkRTSA%253D%253D.Cgt4QTg3Z0ltOWdScyi56NqeBg%253D%253D`
    ).then((data) => {
      setVideos(data.data);
    });
  }, [setVideos]);

  useEffect(() => {
    if (videoId !== ":id" || videoId !== undefined) {
      fetchVideos(`shorts/info?id=${videoId}`).then((data) => {
        setVideosDetails(data);
      });
    }
  }, [videoId]);

  const handleRetry = () => {
    setIsOnline(navigator.onLine);
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = videoRefs.current.findIndex(
          (ref) => ref === entry.target
        );
        setCurrentVideoIndex(index);
        const shortsId = videos[index].videoId;
        const path = `/shorts/${shortsId}`;
        window.history.replaceState({}, "", path);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    });

    videoRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [videos]);

  useEffect(() => {
    document.title = `Shorts - YouTube`;
  }, []);

  return (
    <>
      {isOnline ? (
        <div
          className={`${
            darkMode ? "bg-dark text-white" : "bg-light text-black"
          } flex flex-col main-page justify-center items-center`}
        >
          {videos?.error === undefined ? (
            <div className="grid gap-3 xs:h-[90vh] h-[99vh] w-full justify-center scroll-parent">
              {videos.length > 0 ? (
                videos.map((video, index) => (
                  <div
                    className="scroll-item flex items-end gap-2"
                    key={index}
                    ref={(el) => (videoRefs.current[index] = el)}
                  >
                    <ShortsPlayer
                      shortsId={video.videoId}
                      index={index}
                      currentVideoIndex={currentVideoIndex}
                    />
                    <ShortsButtons />
                  </div>
                ))
              ) : (
                <div className="grid gap-3">
                  <div className="flex items-end gap-3">
                    <ShortsDummyLayout />
                    <ShortsButtons />
                  </div>
                </div>
              )}
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

export default Shorts;
