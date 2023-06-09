import React from "react";
import ReactPlayer from "react-player";

const ShortsPlayer = ({ shortsId, index, currentVideoIndex }) => {
  return (
    <div className=" flex items-end gap-2">
      <div className="shorts-player ss:h-[84vh] shorts-layouts video-layout ss:aspect-[9/16] ss:rounded-[15px]">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${shortsId}`}
          controls
          width="100%"
          height="100%"
          playing={index === currentVideoIndex}
        />
      </div>
    </div>
  );
};

export default ShortsPlayer;
