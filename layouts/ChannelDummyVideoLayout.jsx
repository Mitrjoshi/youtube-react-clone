import React from "react";

const ChannelDummyVideoLayout = () => {
  const elements = [];

  for (let i = 0; i < 30; i++) {
    elements.push(
      <div key={i} className="flex flex-col gap-4 max-w-[370px]">
        <div className="video-layout aspect-video rounded-[12px]"></div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-3 w-[100%]">
            <div className="h-[12px] w-[100%] rounded-[6px] video-layout"></div>
            <div className="h-[12px] w-[50%] rounded-[6px] video-layout"></div>
          </div>
        </div>
      </div>
    );
  }

  return elements;
};

export default ChannelDummyVideoLayout;
