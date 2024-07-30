import React from "react";
import HeroSectionItems from "./HeroSectionItems";

const HeroSection: React.FC = function () {
  return (
    <div className="w-full h-auto my-5">
      <div className="flex items-center justify-between">
        <div>
          <HeroSectionItems />
          <div className="ml-20 z-50">
            <h3 className="text-2xl">MY NAME IS</h3>
            <h2 className="text-4xl">ANGELIQUE BONITA PRETORIUS</h2>
            <p className="bg-primary w-[20rem] h-auto p-2 shadow-sm shadow-slate-400">
              I'M A JUNIOR FRONT-END DEVELOPER
            </p>
          </div>
        </div>

        <img
          className="w-1/3 mr-32 rounded-full"
          src="https://www.shutterstock.com/shutterstock/photos/1036458553/display_1500/stock-photo-random-frame-the-child-is-cheerfully-picking-at-the-nose-black-and-white-image-1036458553.jpg"
          alt="my face"
        />
      </div>
    </div>
  );
};

export default HeroSection;
