import React from "react";

import { NavigationData } from "./navigationData";
import NavigationItem from "./NavigationItem";

const Navigation: React.FC = function () {
  return (
    <nav className="w-full h-auto bg-primary py-3 px-10 flex items-center justify-between ">
      <h2>PORTFOLIO</h2>
      <ul className="flex items-center gap-5">
        {NavigationData.map((navData) => (
          <NavigationItem
            key={navData.name}
            name={navData.name}
            href={navData.href}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
