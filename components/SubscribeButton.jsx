import React, { useContext, useState } from "react";
import { ContextConstant } from "../context/Context.jsx";

const SubscribeButton = ({ bg }) => {
  const { darkMode } = useContext(ContextConstant);
  const [clicked, setClicked] = useState(false);

  let subscribe = "";

  const handleSubscribed = () => {
    setClicked(!clicked);
  };

  if (clicked === true) {
    subscribe = "Unsubscribe";
  } else {
    subscribe = "Subscribe";
  }

  return (
    <button
      className={`font-semibold h-[36px] px-6 rounded-[50px] ${
        darkMode
          ? "bg-white text-black"
          : "bg-[#0f0f0f] hover:bg-[#272727] text-white"
      }`}
      onClick={handleSubscribed}
    >
      {subscribe}
    </button>
  );
};

export default SubscribeButton;
