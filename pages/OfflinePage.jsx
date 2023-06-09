import React, { useContext } from "react";
import { internet } from "../assets";
import { ContextConstant } from "../context/Context.jsx";

const OfflinePage = () => {
  const { darkMode } = useContext(ContextConstant);

  const body = document.querySelector("body");
  if (darkMode) {
    body.style.backgroundColor = "#0f0f0f";
  } else {
    body.style.backgroundColor = "white";
  }

  const handleRetry = () => {
    setIsOnline(navigator.onLine);
  };

  return (
    <div
      className={`main-page  ${
        darkMode ? "bg-dark text-white" : "bg-light text-black"
      }`}
    >
      <div
        className={`flex flex-col justify-center items-center no-network-page gap-4`}
      >
        <img src={internet} alt="Oops" />
        <div
          className={`text-[20px] flex justify-center items-center flex-col ${
            darkMode ? "text-light" : "text-black"
          }`}
        >
          <p>Connect to the Internet.</p>
          <p>You're offline. Check your connection..</p>
        </div>
        {darkMode ? (
          <button
            className="font-semibold border profile-icon border-[#353535] text-[#3ea6e8] xs:hover:bg-[#263850] h-[35px] px-4 gap-2 flex justify-center items-center rounded-[20px]"
            onClick={handleRetry}
          >
            Retry
          </button>
        ) : (
          <button
            className="font-semibold border profile-icon border-[#d4d4d4] text-[#065fd8] xs:hover:bg-[#def1ff] h-[35px] px-4 gap-2 flex justify-center items-center rounded-[20px]"
            onClick={handleRetry}
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default OfflinePage;
