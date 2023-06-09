import React, { useContext, useState } from "react";
import { ContextConstant } from "../context/Context.jsx";

const convertViewsToRoundFigure = (views) => {
  if (views >= 1000000000) {
    return (views / 1000000000).toFixed(1) + "B";
  } else if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M";
  } else if (views >= 10000 || views >= 1000) {
    return (views / 1000).toFixed(1) + "K";
  } else {
    return views.toString();
  }
};

const Description = ({ views, publishedAt, description }) => {
  const { darkMode } = useContext(ContextConstant);

  const date = new Date(publishedAt);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-IN", options);

  const [descriptionHeight, setDescriptionHeight] = useState(false);

  let formattedViews;

  if (views > 0) {
    formattedViews = convertViewsToRoundFigure(views);
  } else {
    formattedViews = 0;
  }

  let showText = "";
  let formattedViewsWithCommas;
  const handleDescripitionHeight = () => {
    setDescriptionHeight(!descriptionHeight);
  };

  if (views) {
    var viewsString = views.toString();
    formattedViewsWithCommas = viewsString.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
  }

  if (descriptionHeight) {
    showText = "Show less";
  } else {
    showText = "Show more";
  }

  return (
    <>
      {description ? (
        <div>
          <div
            className={`w-full flex cursor-pointer z-50 flex-col gap-1 z-5 mt-5 rounded-[12px] ${
              darkMode
                ? " bg-[#302f2e] text-[#ebecec] "
                : " bg-[#f2f2f2] text-[#1f1f1f]"
            } ${descriptionHeight ? "" : "h-auto overflow-hidden"}  ${
              darkMode
                ? "xs:hover:bg-[#454443] bg-[#302f2e] text-[#ebecec] "
                : "xs:hover:bg-[#e5e5e5] bg-[#f2f2f2] text-[#1f1f1f]"
            }   p-4 `}
            onClick={handleDescripitionHeight}
          >
            <div>
              <div className="font-bold text-[14px] flex items-center gap-3">
                {description.length > 150 ? (
                  descriptionHeight ? (
                    <p>{formattedViewsWithCommas} views</p>
                  ) : (
                    <p>{formattedViews} views</p>
                  )
                ) : (
                  <p>{formattedViews} views</p>
                )}

                <p>{formattedDate}</p>
              </div>
              <div
                className={`font-semibold w-full ${
                  darkMode ? "text-[#f1f1f1]" : "text-[#0f0f0f]"
                } font-light`}
              >
                {description.length > 150 ? (
                  descriptionHeight ? (
                    <div className="flex flex-col gap-4">
                      <p className="w-full text-[14px] gap-3">{description}</p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {description != null ? (
                        <p className="text-[14px] gap-3">
                          {description.slice(0, 150)}...
                        </p>
                      ) : null}
                    </div>
                  )
                ) : (
                  <div className="flex flex-col gap-4">
                    <p className="w-full text-[14px] gap-3">{description}</p>
                  </div>
                )}
              </div>
            </div>
            <div>
              {description.length > 150 ? (
                <button
                  onClick={handleDescripitionHeight}
                  className={`${
                    darkMode ? "text-[#f1f1f1]" : "text-[#1f1f1f]"
                  } text-[15px] font-bold mt-3`}
                >
                  {showText}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className={`w-full flex cursor-pointer z-50 ${
              darkMode
                ? " bg-[#302f2e] text-[#ebecec] "
                : " bg-[#f2f2f2] text-[#0f0f0f]"
            } flex-col gap-1 z-5 mt-5  rounded-[12px]  p-4 `}
          >
            <div className="font-bold text-[14px] flex items-center gap-3">
              {descriptionHeight ? (
                <p>{formattedViewsWithCommas} views</p>
              ) : (
                <p>{formattedViews} views</p>
              )}

              <p>{formattedDate}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Description;
