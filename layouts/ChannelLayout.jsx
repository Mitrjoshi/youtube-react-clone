import React from "react";
import { Link } from "react-router-dom";

const ChannelLayout = ({ thumbnail, title }) => {
  return (
    <div>
      <div className="ss:hidden flex justify-between pr-[10px] items-center">
        <div className="flex justify-center items-center gap-3">
          <img
            src={thumbnail}
            alt=""
            className="ss:max-w-[200px] max-w-[80px] rounded-[50%]"
          />
          <h1 className="text-[20px] flex justify-center">{title}</h1>
        </div>

        <div>
          <button className="border border-[#353535] text-[#2e96ff] xs:hover:bg-[#263850] h-[35px] px-3 gap-2 flex justify-center items-center rounded-[20px]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="hidden ss:flex justify-between pr-[10px] items-center w-full">
        <div className="flex justify-center items-center">
          <img
            src={thumbnail}
            alt=""
            className="ss:max-w-[200px] max-w-[80px] rounded-[50%]"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-[20px] flex justify-center">{title}</h1>
          <button className="border border-[#353535] text-[#2e96ff] xs:hover:bg-[#263850] h-[35px] px-3 gap-2 flex justify-center items-center rounded-[20px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChannelLayout;
