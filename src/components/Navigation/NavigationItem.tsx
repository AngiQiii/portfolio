import React from "react";

import { NavigationType } from "./navigationData";

const NavigationItem: React.FC<NavigationType> = function (props) {
  return (
    <li className="bg-primary px-3 py-1 rounded-full hover:scale-110 shadow-sm shadow-black">
      <a href={props.href}>{props.name}</a>
    </li>
  );
};

export default NavigationItem;
