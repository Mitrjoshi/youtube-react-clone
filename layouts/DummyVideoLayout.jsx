import React from "react";

const DummyVideoLayout = () => {
  const elements = [];

  for (let i = 0; i < 30; i++) {
    elements.push(
      <div key={i} className="flex flex-col gap-4 xs:max-w-[370px]">
        <div className="video-layout aspect-video rounded-[15px]"></div>
        <div className="flex gap-2">
          <div className="h-[40px] w-[40px] rounded-[50%] video-layout"></div>
          <div className="flex flex-col gap-3 w-[70%]">
            <div className="h-[20px] w-[100%] rounded-[6px] video-layout"></div>
            <div className="h-[20px] w-[50%] rounded-[6px] video-layout"></div>
          </div>
        </div>
      </div>
    );
  }

  return elements;
};

export default DummyVideoLayout;
