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
        </div>
      ) : (
        <div
          className={`main-page  ${
            darkMode ? "bg-dark text-white" : "bg-light text-black"
          }`}
        >
          <div
            className={` ${
              darkMode ? "bg-dark text-light" : "bg-light text-black"
            } flex flex-col justify-center items-center no-network-page gap-4`}
          >
            <img src={internet} alt="Oops" />
            <div
              className={`text-[20px] flex justify-center items-center flex-col ${
                darkMode ? "text-light" : "text-black"
              }`}
            >
              <p>Connect to the Internet.</p>
              <p>You're offline. Check your connection..</p>
            </div>
            {darkMode ? (
              <button
                className="border profile-icon border-[#353535] text-[#2e96ff] xs:hover:bg-[#263850] h-[35px] px-4 gap-2 flex justify-center items-center rounded-[20px]"
                onClick={handleRetry}
              >
                Retry
              </button>
            ) : (
              <button
                className="border profile-icon border-[#d4d4d4] text-[#0666df] xs:hover:bg-[#def1ff] h-[35px] px-4 gap-2 flex justify-center items-center rounded-[20px]"
                onClick={handleRetry}
              >
                Retry
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Shorts;
