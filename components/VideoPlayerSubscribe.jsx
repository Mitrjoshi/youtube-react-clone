import React, { useContext, useState } from "react";
import { ContextConstant } from "../context/Context.jsx";
import { verified } from "../assets";
import { Link } from "react-router-dom";

const VideoPlayerSubscribe = ({
  channelProfile,
  channelName,
  subscribers,
  ifVerified,
  channelID,
}) => {
  const { darkMode } = useContext(ContextConstant);
  const [clicked, setClicked] = useState(false);

  let subscribe = "";

  const handleSubscribed = () => {
    setClicked(!clicked);
  };

  if (clicked === true) {
    subscribe = "Unsubscribe";
  } else {
    subscribe = "Subscribe";
  }

  return (
    <div className="flex items-center z-50 gap-5 md:justify-normal justify-between">
      <div className="video-header-of-channel items-center gap-2">
        <Link to={`/channel/${channelID}`}>
          <img
            src={channelProfile}
            alt={channelName}
            className="h-[40px] w-[40px] rounded-[50%]"
          />
        </Link>

        <div>
          <div className="flex gap-1 items-center justify-start">
            <Link to={`/channel/${channelID}`}>
              <span className="text-[16px] h-[25px] font-semibold">
                {channelName}
              </span>
            </Link>
            {ifVerified ? (
              <img src={verified} alt="" className="h-[15px] w-[15px] " />
            ) : null}
          </div>

          <p className={`${darkMode ? "text-[#989898]" : "text-[#606060]"}`}>
            {subscribers} subscribers
          </p>
        </div>
      </div>
      <div>
        <button
          className={`font-semibold h-[36px] px-6 rounded-[50px] ${
            darkMode
              ? "bg-white text-black"
              : "bg-[#0f0f0f] hover:bg-[#272727] text-white"
          }`}
          onClick={handleSubscribed}
        >
          {subscribe}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerSubscribe;
