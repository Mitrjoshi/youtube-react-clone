import React, { useContext } from "react";
import { ContextConstant } from "../context/Context.jsx";
import {
  verified,
  moredark,
  morelight,
  downloaddark,
  download,
  sharedark,
  sharelight,
} from "../assets";
import {
  Button,
  VideoPlayerButton,
  VideoPlayerSubscribe,
  VideoPlayerLikeDislike,
} from "./";
import { DottedDropDownMenu } from "../layouts";

const VideoPlayerHeader = ({
  title,
  channelName,
  publishedAt,
  views,
  channelProfile,
  videoId,
  subscribers,
  channelID,
  ifVerified,
}) => {
  const { darkMode } = useContext(ContextConstant);

  return (
    <div className="grid gap-3">
      <div>
        <h1
          className={`text-[20px] font-semibold ${
            darkMode ? "text-[#f1f1f1]" : "text-[#252525]"
          }`}
        >
          {title}
        </h1>
      </div>
      <div className="flex sm:flex-row flex-col justify-between">
        <VideoPlayerSubscribe
          channelProfile={channelProfile}
          channelName={channelName}
          ifVerified={ifVerified}
          subscribers={subscribers}
          channelID={channelID}
        />

        <div className="flex items-center md:m-0 mt-5 md:justify-around gap-2">
          <div>
            {darkMode ? <VideoPlayerLikeDislike /> : <VideoPlayerLikeDislike />}
          </div>
          <div>
            {darkMode ? (
              <VideoPlayerButton
                icon={sharelight}
                tooltipText="Share"
                text="Share"
              />
            ) : (
              <VideoPlayerButton
                icon={sharedark}
                tooltipText="Share"
                text="Share"
              />
            )}
          </div>
          <div className="mlg:flex hidden">
            {darkMode ? (
              <VideoPlayerButton
                icon={download}
                tooltipText="Download"
                text="Download"
              />
            ) : (
              <VideoPlayerButton
                icon={downloaddark}
                tooltipText="Download"
                text="Download"
              />
            )}
          </div>
          <div>
            {darkMode ? (
              <DottedDropDownMenu
                icon={morelight}
                title="Save to watch later"
                styles={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "start",
                  height: "34px",
                  width: "34px",
                  alignItems: "center",
                  borderRadius: "50%",
                  backgroundColor: "#302f2e",
                  "&:hover": {
                    backgroundColor: "#454443", // Change the background color on hover
                  },
                }}
              />
            ) : (
              <DottedDropDownMenu
                icon={moredark}
                title="Save to watch later"
                styles={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "start",
                  height: "34px",
                  width: "34px",
                  alignItems: "center",
                  borderRadius: "50%",
                  backgroundColor: "#f2f2f2",
                  "&:hover": {
                    backgroundColor: "#e5e5e5", // Change the background color on hover
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerHeader;
