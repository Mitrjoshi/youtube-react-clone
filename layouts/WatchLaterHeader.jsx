import React from "react";

const WatchLaterHeader = ({ thumbnail, title, name }) => {
  return (
    <div>
      <div className="md:flex hidden flex-row gap-1">
        <div className="fixed w-[360px]">
          <div className="p-5 h-[88vh] relative overflow-hidden rounded-[15px]">
            <img
              src={thumbnail}
              alt={title}
              className="h-full z-0 w-full rounded-[15px] object-cover blur-[100px] absolute top-0"
            />
            <div className="z-50 flex flex-col items-center">
              <div className="z-50">
                <img src={thumbnail} alt={title} className=" rounded-[12px]" />
                <p className="text-[25px] font-bold text-[#f1f1f1] mt-4">
                  Watch Later
                </p>
                <p className=" text-[#f1f1f1] text-[18px]">{name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex hidden md:hidden flex-row mt-4">
        <div className="w-full">
          <div className="p-5 h-[35vh] relative overflow-hidden rounded-[15px] xs:flex hidden">
            <img
              src={thumbnail}
              alt={title}
              className="h-full z-0 w-full rounded-[15px] object-cover  blur-[100px] absolute top-0 object-"
            />
            <div className="z-50 flex">
              <div className="z-50 flex sm:flex-row flex-col  gap-5">
                <img
                  src={thumbnail}
                  alt={title}
                  className="rounded-[12px] aspect-video"
                />
                <div className="flex flex-col">
                  <p className="text-[25px] font-bold text-[#f1f1f1] mt-4">
                    Watch Later
                  </p>
                  <p className=" text-[#f1f1f1] text-[18px]">{name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLaterHeader;
