import React, { useContext } from "react";
import { ContextConstant } from "../context/Context.jsx";

const Links = () => {
  const { darkMode } = useContext(ContextConstant);
  return (
    <div
      className={`grid gap-3  ${
        darkMode ? "text-[#aaaaa5]" : "text-[#7c7c7c]"
      }`}
    >
      <div className="px-5 grid text-[12px] font-bold">
        <div className="flex gap-2">
          <a href="">About</a>
          <a href="">Press</a>
          <a href="">Copyright</a>
        </div>
        <div className="flex gap-2">
          <a href="">Contact Us</a>
          <a href="">Creator</a>
          <a href="">Advertise</a>
        </div>
        <div>
          <a href="">Developers</a>
        </div>
      </div>
      <div className="px-5 grid text-[12px] font-bold">
        <div className="flex gap-2">
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">Policy&Safety</a>
        </div>
        <div className="flex gap-2">
          <a href="">How YouTube Works</a>
        </div>
        <div>
          <a href="">Test new features</a>
        </div>
      </div>
    </div>
  );
};

export default Links;
