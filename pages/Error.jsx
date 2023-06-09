import React, { useContext } from "react";
import { VideoPlayerSubscribe } from "../components";
import { ContextConstant } from "../context/Context.jsx";
import { Link } from "react-router-dom";

const Error = () => {
  const { darkMode } = useContext(ContextConstant);

  return (
    <div
      className={` ${
        darkMode ? "bg-dark text-light" : "bg-light text-black"
      } error-page mt-[60px] flex flex-col gap-4 justify-center items-center absolute top-[-60px] `}
    >
      <img
        src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
        alt="Oops"
      />
      <div
        className={`text-[20px] flex justify-center items-center flex-col ${
          darkMode ? "text-light" : "text-black"
        }`}
      >
        <p>This page isn't available. Sorry about that.</p>
        <p>Try searching for something else.</p>
      </div>
      <Link
        to="/"
        className={` py-2 px-5 rounded-full ${
          darkMode
            ? "xs:hover:bg-[#3d3d3d] bg-[#272727] text-white"
            : "xs:hover:bg-[#dfdfdf] bg-[#ececec] text-black"
        }`}
      >
        Back to Home page
      </Link>
    </div>
  );
};

export default Error;
