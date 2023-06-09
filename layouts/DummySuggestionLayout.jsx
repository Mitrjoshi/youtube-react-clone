import React from "react";

const DummySuggestionLayout = () => {
  const elements = [];

  for (let i = 0; i < 20; i++) {
    elements.push(
      <div key={i} className="z-0">
        <div className="lg:flex hidden justify-center flex-col gap-2 w-full">
          <div className="suggested-video-player  gap-2">
            <div className="video-layout aspect-video rounded-[15px]"></div>
            <div className="flex flex-col gap-3 mt-2">
              <div className="video-layout h-[20px] w-[100%] rounded-[15px]"></div>
              <div className="video-layout h-[20px] w-[90%] rounded-[15px]"></div>
              <div className="video-layout h-[20px] w-[45%] rounded-[15px]"></div>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex justify-center flex-col gap-2 w-full">
          <div className="gap-2 dummy-suggestion">
            <div className="video-layout aspect-video rounded-[15px]"></div>
            <div className="flex flex-col gap-3 mt-2 ">
              <div className="video-layout h-[20px] md:w-[60%] w-[80%] rounded-[15px]"></div>
              <div className="video-layout h-[20px] md:w-[45%] w-[65%] rounded-[15px]"></div>
              <div className="video-layout h-[20px] md:w-[25%] w-[45%] rounded-[15px]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return elements;
};

export default DummySuggestionLayout;
