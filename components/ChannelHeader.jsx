import React, { useContext } from "react";
import { ContextConstant } from "../context/Context.jsx";
import { rightarrowdark, rightarrow } from "../assets";
import { SubscribeButton } from "../components";
import { useLocation } from "react-router-dom";
import { verified } from "../assets";

const ChannelHeader = ({
  avatar,
  title,
  channelHandle,
  subscriberCountText,
  videosCountText,
  description,
  isVerified,
}) => {
  const { darkMode } = useContext(ContextConstant);

  const location = useLocation();

  return (
    <>
      {location.pathname.startsWith("/channel") ? (
        <div className="flex sm:flex-row flex-col items-center sm:justify-between justify-center w-full">
          <div className="flex sm:flex-row flex-col items-center justify-between gap-5">
            <div className="grid justify-center sm:w-[145px]">
              <img
                src={avatar}
                alt={title}
                className="rounded-[50%] sm:h-[128px] sm:w-[128px] w-[96px] h-[96px]"
              />
            </div>

            <div className="flex flex-col gap-2 justify-center px-2 ">
              <div className="">
                <div className="flex items-center gap-3 sm:justify-start justify-center">
                  <h1
                    className={`text-center flex sm:justify-normal justify-center ${
                      darkMode ? "text-[#f1f1ea]" : "text-black"
                    } text-[25px] font-semibold`}
                  >
                    {title}
                  </h1>
                  <div className="flex items-center justify-center">
                    {isVerified === true ? (
                      <img
                        src={verified}
                        alt=""
                        className="h-[15px] w-[15px] "
                      />
                    ) : null}
                  </div>
                </div>
                <div
                  className={`flex sm:flex-row flex-col sm:justify-normal justify-center items-center gap-2 font-semibold ${
                    darkMode ? "text-[#aaaaaa]" : "text-[#606060]"
                  }`}
                >
                  <p>{channelHandle}</p>
                  <p>{subscriberCountText} subscribers</p>
                  <p>{videosCountText} videos</p>
                </div>
              </div>

              <div
                className={`flex items-center text-center sm:justify-normal justify-center ${
                  darkMode ? "text-[#aaaaaa]" : "text-[#606060]"
                } text-[15px]`}
              >
                {description ? (
                  <>
                    <h1>
                      {description.length > 70
                        ? description.slice(0, 70)
                        : description}
                      ...
                    </h1>
                    {darkMode ? (
                      <img
                        src={rightarrow}
                        alt=""
                        className="w-32px h-[32px]"
                      />
                    ) : (
                      <img
                        src={rightarrowdark}
                        alt=""
                        className="w-32px h-[32px]"
                      />
                    )}
                  </>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mt-5 sm:m-0">
            <SubscribeButton />
          </div>
        </div>
      ) : (
        <div className="flex sm:flex-row flex-col items-center sm:justify-between justify-center w-full">
          <div className="flex sm:flex-row flex-col items-center justify-between gap-5">
            <div className="grid justify-center sm:w-[145px]">
              <img
                src="https://yt3.googleusercontent.com/2i8eg8zcCZPw3dgtEM91Twd3w5x6EuEHtGdfLolveW4jgrS8Mb8Kk-fkg1sTm23kJ4UczO4zkXE=s176-c-k-c0x00ffffff-no-rj"
                className="rounded-[50%] sm:h-[128px] sm:w-[128px] w-[96px] h-[96px]"
              />
            </div>

            <div className="flex flex-col gap-2 justify-center px-2 ">
              <div className="">
                <div className="flex items-center gap-3 sm:justify-start justify-center">
                  <h1
                    className={` flex sm:justify-normal justify-center ${
                      darkMode ? "text-[#f1f1ea]" : "text-[#]"
                    } text-[25px] font-semibold`}
                  >
                    YouTube Originals
                  </h1>
                  <div className="flex items-center justify-center">
                    <img src={verified} alt="" className="h-[15px] w-[15px] " />
                  </div>
                </div>
                <div
                  className={`flex sm:flex-row flex-col sm:justify-normal justify-center items-center gap-2 font-semibold ${
                    darkMode ? "text-[#aaaaaa]" : "text-[#606060]"
                  }`}
                >
                  <p>@youtubeoriginals</p>
                  <p>6.74M subscribers</p>
                  <p>425 videos</p>
                </div>
              </div>

              <div
                className={`flex items-center sm:justify-normal justify-center ${
                  darkMode ? "text-[#aaaaaa]" : "text-[#606060]"
                } text-[15px]`}
              >
                <h1>
                  Discover original series and movies from today's hottest...
                </h1>
                {darkMode ? (
                  <img src={rightarrow} alt="" className="w-32px h-[32px]" />
                ) : (
                  <img
                    src={rightarrowdark}
                    alt=""
                    className="w-32px h-[32px]"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 sm:m-0">
            <SubscribeButton />
          </div>
        </div>
      )}
    </>
  );
};

export default ChannelHeader;
