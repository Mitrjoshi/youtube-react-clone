import React, { useState, useEffect, useRef, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Logo, SearchBar, Signin, Button, SearchBarSmall } from "../components";
import {
  menu,
  mic,
  micdark,
  create,
  createdark,
  bell,
  belldark,
  search,
  searchdark,
} from "../assets";
import { Sidebar } from "./";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ContextConstant } from "../context/Context.jsx";

const Navbar = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const { darkMode } = useContext(ContextConstant);

  const navbarRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const [searchToggle, setSearchToggle] = useState(false);
  const menuRef = useRef(null);

  const handleSearchToggle = () => {
    setSearchToggle(!searchToggle);
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuToggle(false);
    }
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideMenu);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className={`sm:grid hidden `}>
        <nav
          ref={navbarRef}
          className={`navbar-body h-[60px] sm:gap-[55px]  ${
            isAuthenticated ? null : "pr-4"
          } ${
            darkMode
              ? isScrolled
                ? "bg-dark"
                : "bg-transparent"
              : isScrolled
              ? "bg-light"
              : "bg-transparent"
          } `}
        >
          <div className="flex justify-around items-center gap-4 pl-3">
            <div>
              <Sidebar />
            </div>

            <Logo />
          </div>
          <div className="flex justify-center items-center gap-3">
            <SearchBar />
            {darkMode ? (
              <span className="bg-[#181818] rounded-[50%]">
                <Button icon={mic} tooltipText="Search with your voice" />
              </span>
            ) : (
              <span className="rounded-[50%]">
                <Button icon={micdark} tooltipText="Search with your voice" />
              </span>
            )}
          </div>
          <div
            className={`${
              isAuthenticated
                ? "flex justify-center items-center mr-0 gap-3"
                : "flex justify-around items-center"
            }`}
          >
            {darkMode ? (
              <div className="flex justify-around items-center gap-2">
                <Button icon={create} tooltipText="Create" />
                <Button icon={bell} tooltipText="Notifications" />
              </div>
            ) : (
              <div className="flex justify-around items-center gap-2">
                <Button icon={createdark} tooltipText="Create" />
                <Button icon={belldark} tooltipText="Notifications" />
              </div>
            )}

            <Signin />
          </div>
        </nav>
      </div>

      {/* small */}
      <div className={`sm:hidden grid `}>
        <nav
          ref={navbarRef}
          className={`${
            searchToggle
              ? `${
                  isAuthenticated
                    ? "navbar-body-small-authenticated"
                    : "navbar-body-small"
                }`
              : "flex justify-between"
          }  flex pr-4 items-center h-[60px] fixed w-full z-[99] ${
            darkMode
              ? isScrolled
                ? "bg-dark"
                : "bg-transparent"
              : isScrolled
              ? "bg-light"
              : "bg-transparent"
          }`}
        >
          <div className="flex justify-start items-center gap-2">
            <div>
              <Sidebar />
            </div>
            {searchToggle ? null : <Logo />}
          </div>
          {searchToggle ? <SearchBarSmall /> : null}
          <div className="flex items-center justify-center">
            {darkMode ? (
              <div className="flex justify-around items-center">
                {searchToggle ? (
                  <button
                    className="flex justify-center items-center xs:hover:bg-[#272727] w-[42px] h-[42px] xs:rounded-[50%]"
                    onClick={handleSearchToggle}
                  >
                    <CloseRoundedIcon sx={{ color: "white" }} />
                  </button>
                ) : (
                  <>
                    <span onClick={handleSearchToggle}>
                      <Button icon={search} />
                    </span>
                    <Button icon={bell} />
                  </>
                )}
              </div>
            ) : (
              <div className="flex justify-around items-center">
                {searchToggle ? (
                  <button
                    className="flex justify-center items-center xs:hover:bg-[#272727] w-[42px] h-[42px] xs:rounded-[50%]"
                    onClick={handleSearchToggle}
                  >
                    <CloseRoundedIcon />
                  </button>
                ) : (
                  <>
                    <span onClick={handleSearchToggle}>
                      <Button icon={searchdark} />
                    </span>
                    <Button icon={belldark} />
                  </>
                )}
              </div>
            )}

            <Signin />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
