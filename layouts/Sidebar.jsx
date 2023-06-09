import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { categories } from "../utils/constants.js";
import { Categories, Copyright, Logo, Links } from "../components";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ContextConstant } from "../context/Context.jsx";
import { menu, menudark } from "../assets";

const Sidebar = () => {
  const { darkMode } = useContext(ContextConstant);

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) =>
    darkMode ? (
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 230,
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        className="bg-dark"
      >
        <div
          className={`flex h-[60px] w-full pl-6 gap-6 items-center justify-start sticky top-0 bg-dark`}
        >
          <Logo />
        </div>

        {categories.map((category, index) => {
          return (
            <div key={index}>
              {category.id === 9 ? (
                <h1
                  className={`px-7 pb-2 text-[16px] font-semibold text-light`}
                >
                  Explore
                </h1>
              ) : category.id === 19 ? (
                <h1
                  className={`px-7 pb-2 text-[16px] font-semibold text-light`}
                >
                  More from YouTube
                </h1>
              ) : null}

              <Categories
                setMenuToggle={setState}
                id={category.id}
                image={category.lightimg}
                text={category.title}
                url={category.url}
                tooltipText={category.title}
                to={category.to}
              />
              {category.status === true && (
                <hr className={`border-[#353535] my-3 mx-2`} />
              )}
            </div>
          );
        })}
        <div className="pt-5">
          <Links />

          <div>
            <Copyright />
          </div>
        </div>
      </Box>
    ) : (
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 235,
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        className="bg-light"
      >
        <div
          className={`flex h-[60px] w-full pl-6 gap-6 items-center justify-start sticky top-0 bg-light`}
        >
          <Logo />
        </div>

        {categories.map((category, index) => {
          return (
            <div key={index}>
              {category.id === 9 ? (
                <h1 className={`px-7 pb-2 text-[18px] font-semibold text-dark`}>
                  Explore
                </h1>
              ) : category.id === 19 ? (
                <h1 className={`px-7 pb-2 text-[16px] font-semibold text-dark`}>
                  More from YouTube
                </h1>
              ) : null}
              <Categories
                setMenuToggle={setState}
                id={category.id}
                image={category.darkimg}
                text={category.title}
                url={category.url}
                tooltipText={category.title}
                to={category.to}
              />
              {category.status === true && (
                <hr className={`border-[#353535] my-3 mx-2`} />
              )}
            </div>
          );
        })}
        <div className="pt-5">
          <Links />

          <div>
            <Copyright />
          </div>
        </div>
      </Box>
    );

  return (
    <div className="">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            onClick={toggleDrawer(anchor, true)}
            className={`flex justify-center items-center  w-[42px] h-[42px] xs:rounded-[50%] ${
              darkMode ? "xs:hover:bg-[#e5e5e520]" : "xs:hover:bg-[#e5e5e5]"
            }`}
          >
            {darkMode ? (
              <img src={menu} alt="menu" className="h-[24px] w-[24px]" />
            ) : (
              <img src={menudark} alt="menu" className="h-[24px] w-[24px]" />
            )}
          </button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
