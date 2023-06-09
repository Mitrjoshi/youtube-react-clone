import React from "react";

const DummySearchVideoLayout = () => {
  const elements = [];

  for (let i = 0; i < 20; i++) {
    elements.push(
      <div key={i}>
        <div className="sm:flex hidden justify-center flex-col gap-2 w-full">
          <div className="gap-2 search-video-player">
            <div className="video-layout aspect-video max-w-[360px] rounded-[15px]"></div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="video-layout h-[20px] w-[80%] rounded-[15px]"></div>
              <div className="video-layout h-[20px] w-[20%] rounded-[15px]"></div>
              <div className="flex gap-4 items-center">
                <div className="video-layout h-[32px] w-[32px] rounded-[50%]"></div>
                <div className="video-layout h-[20px] w-[20%] rounded-[15px]"></div>
              </div>
              <div className="video-layout h-[20px] w-[80%] rounded-[15px]"></div>
            </div>
          </div>
        </div>

        <div className="sm:hidden flex flex-col gap-4 max-w-[370px]">
          <div className="video-layout aspect-video w-full rounded-[15px]"></div>
          <div className="flex gap-2">
            <div className="h-[40px] w-[40px] rounded-[50%] video-layout"></div>
            <div className="flex flex-col gap-3 w-[70%]">
              <div className="h-[20px] w-[100%] rounded-[6px] video-layout"></div>
              <div className="h-[20px] w-[50%] rounded-[6px] video-layout"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return elements;
};

export default DummySearchVideoLayout;
