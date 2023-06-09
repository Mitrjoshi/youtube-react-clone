import React, { useContext } from "react";
import { Button } from "../components";
import { ContextConstant } from "../context/Context.jsx";
import { categories } from "../utils/constants.js";
import { TopOptions } from "../components";
import { top_options } from "../utils/constants.js";
import {
  toprightdark,
  toprightlight,
  topleftdark,
  topleftlight,
} from "../assets";

const TopOptionsLayout = ({ background }) => {
  const { darkMode, setDarkMode, category } = useContext(ContextConstant);

  return (
    <div
      className={`overflow-x-auto whitespace-nowrap h-[55px] mb-2 xs:mb-5 top-section-scrollbar flex items-center ${
        darkMode ? `${background}` : "bg-light"
      }`}
    >
      {darkMode ? (
        <>
          <div className="xs:flex hidden">
            <div className="flex gap-3 ">
              {top_options.map((option, index) => {
                return (
                  <div key={index}>
                    <TopOptions
                      title={option.title}
                      url={option.url}
                      id={option.id}
                      tooltipText={option.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="xs:hidden flex">
            <div className="flex gap-2">
              {top_options.map((option, index) => {
                return (
                  <div key={index}>
                    <TopOptions
                      title={option.title}
                      url={option.url}
                      id={option.id}
                      tooltipText={option.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="xs:flex hidden">
            <div className="flex gap-3 z-0">
              {top_options.map((option, index) => {
                return (
                  <div key={index}>
                    <TopOptions
                      title={option.title}
                      id={option.id}
                      url={option.url}
                      tooltipText={option.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="xs:hidden flex">
            <div className="flex gap-2 z-0">
              {top_options.map((option, index) => {
                return (
                  <div key={index}>
                    <TopOptions
                      title={option.title}
                      url={option.url}
                      id={option.id}
                      tooltipText={option.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TopOptionsLayout;
