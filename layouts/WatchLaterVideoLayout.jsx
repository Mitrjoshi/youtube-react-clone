import React, { useContext } from "react";
import { ContextConstant } from "../context/Context.jsx";
import { Link } from "react-router-dom";
import { DottedDropDownMenu, WatchLaterVideoLayoutSmall } from "../layouts";
import { moredark, morelight } from "../assets";

const convertViewsToRoundFigure = (views) => {
  if (views >= 1000000000) {
    return (views / 1000000000).toFixed(1) + "B";
  } else if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M";
  } else if (views >= 10000 || views >= 1000) {
    return (views / 1000).toFixed(1) + "K";
  } else {
    return views.toString();
  }
};

const convertedLength = (length) => {
  if (length) {
    return length / 60;
  }
};

const WatchLaterVideoLayout = ({
  videoId,
  title,
  channelTitle,
  channelId,
  thumbnail,
  views,
  length,
}) => {
  const { darkMode } = useContext(ContextConstant);

  let formattedViews;

  if (views > 0) {
    formattedViews = convertViewsToRoundFigure(views);
  } else {
    formattedViews = 0;
  }

  const formattedLength = convertedLength(length);
  const moreFormattedLength = Math.floor(formattedLength * 100) / 100;

  return (
    <>
      <div className="sm:grid hidden">
        <div
          className={` watch-later-parent-layout ${
            darkMode ? "sm:hover:bg-[#272727]" : "hover:bg-[#f2f2f2]"
          } items-center w-full  p-2 rounded-[12px]`}
        >
          <Link to={`/watch/${videoId}`} className="flex items-center gap-4">
            {darkMode ? (
              <div className="w-[24px] cursor-grab">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    d="M180-393.846v-30.77h600v30.77H180Zm0-141.538v-30.77h600v30.77H180Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            ) : (
              <div className="w-[24px]  cursor-grab">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M180-393.846v-30.77h600v30.77H180Zm0-141.538v-30.77h600v30.77H180Z" />
                </svg>
              </div>
            )}

            <div className={`watchlater-video-layout gap-2`}>
              <div className="relative">
                <img
                  src={thumbnail}
                  alt={title}
                  className="w-[160px]  aspect-video rounded-[8px]"
                />
              </div>
              <div>
                <h1 className=" font-semibold text-[15px]">{title}</h1>
                <div
                  className={`${
                    darkMode ? "text-[#989898]" : "text-[#606060]"
                  }  text-[14px] flex items-center gap-2`}
                >
                  <Link to={`/channel/${channelId}`}>
                    <span
                      className={`text-[13px] font-semibold ${
                        darkMode
                          ? "text-[#989898] hover:text-[#f2f2f2]"
                          : "text-[#606060] hover:text-[#0f0f0f]"
                      }`}
                    >
                      {channelTitle}
                    </span>
                  </Link>

                  <span className="h-[5px] w-[5px] bg-[#7a7a7a] flex items-end rounded-[50%]"></span>
                  <p>{formattedViews} views</p>
                </div>
              </div>
            </div>
          </Link>

          {darkMode ? (
            <DottedDropDownMenu
              title="Remove from watch later"
              styles={{
                display: "flex",
                justifyContent: "start",
                height: "40px",
                width: "40px",
                alignItems: "center",
                borderRadius: "50%",
              }}
              videoID={videoId}
              titleOfVideo={title}
            />
          ) : (
            <DottedDropDownMenu
              title="Remove from watch later"
              styles={{
                display: "flex",
                justifyContent: "start",
                height: "40px",
                width: "40px",
                alignItems: "center",
                borderRadius: "50%",
              }}
              videoID={videoId}
              titleOfVideo={title}
            />
          )}
        </div>
      </div>

      <Link className="sm:hidden flex w-full ">
        <WatchLaterVideoLayoutSmall
          title={title}
          videoId={videoId}
          thumbnail={thumbnail}
          views={views}
          channelName={channelTitle}
          channelId={channelId}
          length={length}
        />
      </Link>
    </>
  );
};

export default WatchLaterVideoLayout;
