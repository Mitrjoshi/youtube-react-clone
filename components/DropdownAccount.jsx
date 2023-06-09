import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ContextConstant } from "../context/Context.jsx";

const DropdownAccount = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const { darkMode } = useContext(ContextConstant);

  return (
    <div>
      {isAuthenticated ? (
        <div className="drop-down-account gap-4">
          <div>
            <img src={user.picture} alt="" className="h-[40px] rounded-[50%]" />
          </div>
          <div className="gap-2 grid">
            <div>
              <p
                className={`text-[16px] font-semibold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                {user.name}
              </p>
              <p
                className={`text-[14px] font-semibold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                {user.email}
              </p>
            </div>
            <div>
              <div>
                <p className=" text-[#3da1f7] text-[14px] cursor-pointer">
                  Manage your Google Account
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DropdownAccount;
