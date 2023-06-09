import React, { useState, useContext } from "react";
import { categories } from "../utils/constants.js";
import { CategoriesSmall, Logo, Button } from "../components";
import { ContextConstant } from "../context/Context.jsx";

const SidemenuDrawer = () => {
  const { activeCategory, setActiveCategory, darkMode } =
    useContext(ContextConstant);
  const handleMenuToggle = () => {
    setState(!stateToggle);
  };

  return (
    <div
      className={` ${
        darkMode ? "text-light bg-dark" : "text-black bg-light"
      } fixed top-[60px] w-[70px]`}
    >
      {categories.slice(0, 7).map((category, index) => {
        return (
          <div key={category.id}>
            {darkMode ? (
              <CategoriesSmall
                id={category.id}
                image={category.lightimg}
                text={category.title}
                url={category.url}
                tooltipText={category.title}
                to={category.to}
              />
            ) : (
              <CategoriesSmall
                id={category.id}
                image={category.darkimg}
                text={category.title}
                tooltipText={category.title}
                to={category.to}
                url={category.url}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SidemenuDrawer;
