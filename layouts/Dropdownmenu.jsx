import React, { useContext } from "react";
import { dropdown_options } from "../utils/constants.js";
import { DropdownObjects, DropdownAccount } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import { ContextConstant } from "../context/Context.jsx";

const Dropdownmenu = ({ menuState, setMenuState }) => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const { darkMode } = useContext(ContextConstant);

  return (
    <div
      className={`pb-[20px] absolute sm:top-[12px] top-[55px] sm:right-[80px] right-[15px] w-[298px]  rounded-[10px] ${
        darkMode ? "bg-[#282828]" : "bg-light"
      }`}
    >
      <div>
        <DropdownAccount />
        <hr className={`border-[#3e3e3e] my-3 `} />
      </div>
      <div className="overflow-auto dropdown-menu h-[600px] z-10">
        {dropdown_options.map((option, index) => {
          return darkMode ? (
            <div key={index}>
              <DropdownObjects
                text={option.title}
                image={option.lightimg}
                arrow={option.arrow}
                id={option.id}
                index={index}
              />
              {option.status === true && (
                <hr className={`border-[#3e3e3e] my-3`} />
              )}
            </div>
          ) : (
            <div key={index}>
              <DropdownObjects
                text={option.title}
                image={option.darkimg}
                arrow={option.darkarrow}
                id={option.id}
                index={index}
              />
              {option.status === true && (
                <hr className={`border-[#3e3e3e] my-3`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdownmenu;
