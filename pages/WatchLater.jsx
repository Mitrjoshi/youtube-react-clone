import React, { useContext, useEffect, useState } from "react";
import { ContextConstant } from "../context/Context.jsx";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase.js";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchVideos } from "../utils/fetch.js";
import { WatchLaterVideoLayout, WatchLaterHeader } from "../layouts";
import { OfflinePage } from "./";

const WatchLater = () => {
  const {
    darkMode,
    activeCategory,
    setActiveCategory,
    videos,
    setVideos,
    videoIdList,
    setVideoIdList,
  } = useContext(ContextConstant);

  const [videoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    setVideos([]);
    setActiveCategory(8);
    setVideoIdList([]);
  }, []);

  const body = document.querySelector("body");
  if (darkMode) {
    body.style.backgroundColor = "#0f0f0f";
  } else {
    body.style.backgroundColor = "white";
  }

  useEffect(() => {
    document.title = "Watch later - YouTube";
  }, []);

  const { user } = useAuth0();
  const username = user?.email;

  const videoListRef = ref(storage, `${username}/`);

  // When setting the videoIdList, store it in local storage
  useEffect(() => {
    listAll(videoListRef)
      .then((res) => {
        const idList = res.items.map((item) => item.name.slice(0, 11));
        setVideoIdList(idList);
      })
      .catch((error) => {
        console.error("Error fetching video IDs:", error);
      });
  }, [videoIdList]);

  useEffect(() => {
    setTimeout(() => {
      const uniqueVideoIds = new Set(videoIdList);
      const fetchPromises = Array.from(uniqueVideoIds).map((videoId) =>
        fetchVideos(`video/info?id=${videoId}`)
      );

      Promise.all(fetchPromises)
        .then((data) => {
          setVideoDetails(data);
        })
        .catch((error) => {
          console.error("Error fetching video details:", error);
        });
    }, 1000);
  }, [videoDetails]);

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
          className={`main-page ${
            darkMode ? "bg-dark text-white" : "bg-light text-black"
          }`}
        >
          <div className="mt-5">
            {videoIdList.length > 0 && videoDetails ? (
              <>
                <div className="md:grid hidden px-5">
                  <WatchLaterHeader
                    thumbnail={
                      videoDetails[0]?.thumbnail[
                        videoDetails[0]?.thumbnail?.length - 1
                      ]?.url
                    }
                    title={videoDetails[0]?.title}
                    name={user?.name}
                  />
                  <div className="flex flex-col ml-[365px]">
                    {videoDetails.map((video, index) => {
                      return (
                        <div key={index}>
                          {video.thumbnail ? (
                            <WatchLaterVideoLayout
                              title={video.title}
                              thumbnail={
                                video.thumbnail[video.thumbnail.length - 1].url
                              }
                              channelTitle={video.channelTitle}
                              views={video.viewCount}
                              videoId={video.id}
                              channelId={video.channelId}
                              length={video.lengthSeconds}
                            />
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="md:hidden flex flex-col px-5">
                  <h1 className="sm:hidden text-[25px] font-bold m-5 mt-0">
                    Watch Later
                  </h1>
                  <WatchLaterHeader
                    thumbnail={
                      videoDetails[0]?.thumbnail[
                        videoDetails[0]?.thumbnail?.length - 1
                      ]?.url
                    }
                    title={videoDetails[0]?.title}
                    name={user?.name}
                  />
                  <div className="grid xs:grid-cols-2 grid-cols-1 sm:grid-cols-1 sm:mt-5 sm:gap-0 gap-4">
                    {videoDetails.map((video, index) => {
                      return (
                        <div key={index}>
                          {video.thumbnail ? (
                            <WatchLaterVideoLayout
                              title={video.title}
                              thumbnail={
                                video.thumbnail[video.thumbnail.length - 1].url
                              }
                              channelTitle={video.channelTitle}
                              views={video.viewCount}
                              videoId={video.id}
                              channelId={video.channelId}
                            />
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <div>
                <h1 className="text-[25px] font-bold ml-10 mt-10">
                  Watch Later
                </h1>
                <div className="flex items-center gap-2  ml-10 text-[13px]  font-semibold mt-5">
                  <p>No videos</p>
                  <p>No views</p>
                  <p>Updated today</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <OfflinePage />
      )}
    </>
  );
};

export default WatchLater;
