import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ContextConstant } from "../context/Context.jsx";
import { moon, moondark } from "../assets";

const DropdownObjects = ({ text, image, arrow, id, mode, index }) => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const { darkMode, setDarkMode } = useContext(ContextConstant);

  const themeDelay = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  const toggleDarkMode = () => {
    setTimeout(themeDelay, 750);
  };

  return (
    <div>
      {darkMode ? (
        <div>
          {id === 3 || id === 4 ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="flex cursor-pointer text-white h-[40px] items-center w-full hover:bg-[#3e3e3e]"
            >
              <img src={image} alt="" className="h-[24px] w-[24px] mx-4 " />
              <div className="flex justify-between items-center w-full">
                <p className="text-[14px] font-semibold">{text}</p>
                <img src={arrow} alt="" />
              </div>
            </button>
          ) : (
            <div className="flex cursor-pointer text-white h-[40px] items-center w-full hover:bg-[#3e3e3e]">
              <img src={image} alt="" className="h-[24px] w-[24px] mx-4 " />
              <div className="flex justify-between items-center w-full">
                <p className="text-[14px] font-semibold">{text}</p>
                <img src={arrow} alt="" />
              </div>
            </div>
          )}
          {index === 7 ? (
            <button
              className="flex cursor-pointer text-white h-[40px] items-center w-full hover:bg-[#3e3e3e]"
              onClick={toggleDarkMode}
            >
              <img src={moon} alt="" className="h-[24px] w-[24px] mx-4 " />
              <div className="flex justify-between items-center w-full">
                {darkMode ? (
                  <p className="text-[14px] font-semibold">Appearance: Dark</p>
                ) : (
                  <p className="text-[14px] font-semibold">Appearance: Light</p>
                )}

                <img src={arrow} alt="" />
              </div>
            </button>
          ) : null}
        </div>
      ) : (
        <div>
          {id === 3 || id === 4 ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="flex cursor-pointer text-black h-[40px] items-center w-full hover:bg-[#f2f2f2]"
            >
              <img src={image} alt="" className="h-[24px] w-[24px] mx-4 " />
              <div className="flex justify-between items-center w-full">
                <p className="text-[14px] font-semibold">{text}</p>
                <img src={arrow} alt="" />
              </div>
            </button>
          ) : (
            <div className="flex cursor-pointer text-black h-[40px] items-center w-full hover:bg-[#f2f2f2]">
              <img src={image} alt="" className="h-[24px] w-[24px] mx-4 " />
              <div className="flex justify-between items-center w-full">
                <p className="text-[14px] font-semibold">{text}</p>
                <img src={arrow} alt="" />
              </div>
            </div>
          )}

          {index === 7 ? (
            <button
              className="flex cursor-pointer text-black h-[40px] items-center w-full hover:bg-[#f2f2f2]"
              onClick={toggleDarkMode}
            >
              <img src={moondark} alt="" className="h-[24px] w-[24px] mx-4 " />
              <div className="flex justify-between items-center w-full">
                {darkMode ? (
                  <p className="text-[14px] font-semibold">Appearance: Dark</p>
                ) : (
                  <p className="text-[14px] font-semibold">Appearance: Light</p>
                )}

                <img src={arrow} alt="" />
              </div>
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default DropdownObjects;
