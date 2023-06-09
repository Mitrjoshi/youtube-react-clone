import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextConstant } from "../context/Context.jsx";

const InvalidLink = ({ name }) => {
  const { darkMode } = useContext(ContextConstant);

  console.log(name);

  return (
    <div
      className={`${darkMode ? "bg-dark text-white" : "bg-light text-black"}`}
    >
      <div
        className={`flex flex-col justify-center items-center no-network-page gap-4`}
      >
        <img
          src="https://www.youtube.com/img/desktop/unavailable/unavailable_video_dark_theme.png"
          alt="not available"
          className="aspect-video h-[160px]"
        />
        <h1 className="text-[25px] font-semibold">
          This {name} isn't available any more
        </h1>
        {darkMode ? (
          <Link
            to="/"
            className="font-semibold border profile-icon border-[#353535] text-[#3ea6e8] xs:hover:bg-[#263850] h-[35px] px-4 gap-2 flex justify-center items-center rounded-[20px]"
          >
            GO TO HOME
          </Link>
        ) : (
          <Link
            to="/"
            className="font-semibold border profile-icon border-[#d4d4d4] text-[#065fd8] xs:hover:bg-[#def1ff] h-[35px] px-4 gap-2 flex justify-center items-center rounded-[20px]"
          >
            GO TO HOME
          </Link>
        )}
      </div>
    </div>
  );
};

export default InvalidLink;
