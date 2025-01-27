"use client";

import React, { useState } from "react";

import { NavigationData } from "./NavigationData";
import NavigationItem from "./NavigationsItem";
import { IoClose } from "react-icons/io5";

const Navigation: React.FC = function () {
  const [toggleNav, setToggleNav] = useState(false);

  function openNavHandler() {
    setToggleNav(true);
  }

  function closeNavHandler() {
    setToggleNav(false);
  }

  function handleNavigationClick(href: string) {
    const targetSection = document.querySelector(
      href.startsWith("/") ? href.slice(1) : href
    ); // Remove leading "/" for section IDs
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    closeNavHandler();
  }

  return (
    <div>
      {!toggleNav && (
        <button
          onClick={openNavHandler}
          className="mt-5 ml-5 hidden tablet:block"
        >
          <span className="h-[3px] w-8 bg-tertiary block rounded-full" />
          <span className="h-[3px] w-8 bg-tertiary block my-2 rounded-full" />
          <span className="h-[3px] w-8 bg-tertiary block rounded-full" />
        </button>
      )}

      {toggleNav && (
        <div className="z-10 w-full h-auto bg-secondary absolute top-0 left-0">
          <button onClick={closeNavHandler}>
            <IoClose color="rgb(16 185 129)" size={50} />
          </button>
          <ul className="flex flex-col items-center justify-evenly py-5">
            {NavigationData.map((navData, index) => (
              <NavigationItem
                key={navData.name}
                href={navData.href}
                name={navData.name}
                isLast={index === NavigationData.length - 1}
                className=""
                onClick={() => handleNavigationClick(navData.href)}
              />
            ))}
          </ul>
        </div>
      )}

      <ul className="flex items-center justify-evenly py-5">
        {NavigationData.map((navData, index) => (
          <NavigationItem
            key={navData.name}
            href={navData.href}
            name={navData.name}
            isLast={index === NavigationData.length - 1}
            className="tablet:hidden"
            onClick={() => handleNavigationClick(navData.href)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
