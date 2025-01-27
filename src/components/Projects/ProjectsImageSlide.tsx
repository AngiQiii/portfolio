"use client";
import { useState, useEffect } from "react";
import { projectsDataTypes } from "./ProjectsData";
import Image from "next/image";

const ProjectsImageSlide: React.FC<{ data: projectsDataTypes }> = function ({
  data,
}) {
  const { image, name, description, used, github, githubLink, url, urlName } =
    data;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === image.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [image.length]);

  return (
    <div className="grid grid-cols-5 gap-10 mb-10 mx-20 border-b-4 border-tertiary py-5 tablet:grid-cols-1 mobile:mx-[25px]">
      <div>
        <div>
          <Image
            src={image[currentImageIndex]}
            alt=""
            width={250}
            height={250}
            className="m-auto col-span-2 tablet:col-span-1 mb-[20px] tablet:w-full"
          />
        </div>

        <div className="flex items-center justify-center gap-[10px]">
          {image.map((_, imgIndex) => (
            <a
              key={imgIndex}
              onClick={() => setCurrentImageIndex(imgIndex)}
              className={`rounded-full w-[10px] h-[10px] cursor-pointer ${
                currentImageIndex === imgIndex ? "bg-tertiary" : "bg-white"
              } `}
            ></a>
          ))}
        </div>
      </div>

      <div className="text-center col-span-3 tablet:col-span-1">
        <h3 className="text-3xl mb-5 laptop:text-2xl laptop:mb-3">{name}</h3>
        <p className="mb-10 text-wrap laptop:text-base laptop:mb-5">
          {description}
        </p>
        <div className="flex items-center gap-3 justify-center">
          <h3>Used:</h3>
          {used.map((Icon, iconIndex) => (
            <Icon key={iconIndex} />
          ))}
        </div>
      </div>

      <div className="m-auto text-center col-span-1 tablet:col-span-1">
        <a href={githubLink} target="_black">
          {github.map((Icon, iconIndex) => (
            <Icon className="m-auto mb-5" key={iconIndex} />
          ))}
        </a>
        {url && (
          <a href={url} target="_blank">
            {urlName}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsImageSlide;
