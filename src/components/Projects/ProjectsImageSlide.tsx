"use client";
import { useState, useEffect } from "react";
import { projectsDataTypes } from "./ProjectsData";
import Image from "next/image";

const ProjectsImageSlide: React.FC<{ data: projectsDataTypes }> = ({
  data,
}) => {
  const { image, name, description, used, github, githubLink, url, urlName } =
    data;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullScreenImageIndex, setFullScreenImageIndex] = useState(0);
  const [showFullScreen, setShowFullScreen] = useState(false);

  useEffect(() => {
    if (!showFullScreen) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === image.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slides every 5 seconds
      return () => clearInterval(interval);
    }
  }, [image.length, showFullScreen]);

  const openFullScreen = (index: number) => {
    setFullScreenImageIndex(index);
    setShowFullScreen(true);
  };

  const closeFullScreen = () => setShowFullScreen(false);

  const nextImage = () =>
    setFullScreenImageIndex((prev) =>
      prev === image.length - 1 ? 0 : prev + 1
    );
  const prevImage = () =>
    setFullScreenImageIndex((prev) =>
      prev === 0 ? image.length - 1 : prev - 1
    );

  return (
    <>
      {/* Main content */}
      <div className="grid grid-cols-5 gap-10 mb-10 mx-20 border-b-4 border-tertiary py-5 tablet:grid-cols-1 mobile:mx-[25px]">
        <div>
          <div onClick={() => openFullScreen(currentImageIndex)}>
            <Image
              src={image[currentImageIndex]}
              alt={name}
              width={250}
              height={250}
              className="m-auto col-span-2 tablet:col-span-1 mb-[20px] tablet:w-full"
            />
          </div>
          <div className="flex items-center justify-center gap-[10px]">
            {image.map((_, imgIndex) => (
              <button
                key={imgIndex}
                onClick={() => setCurrentImageIndex(imgIndex)}
                className={`rounded-full w-[10px] h-[10px] cursor-pointer ${
                  currentImageIndex === imgIndex ? "bg-tertiary" : "bg-white"
                }`}
              ></button>
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
          <a href={githubLink} target="_blank" rel="noreferrer">
            {github.map((Icon, iconIndex) => (
              <Icon className="m-auto mb-5" key={iconIndex} />
            ))}
          </a>
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              {urlName}
            </a>
          )}
        </div>
      </div>

      {/* Fullscreen modal slider */}
      {showFullScreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          {/* Close button */}
          <button
            onClick={closeFullScreen}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>
          {/* Previous arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-3xl"
          >
            &lt;
          </button>
          {/* Image display */}
          <div className="max-w-full max-h-full">
            <Image
              src={image[fullScreenImageIndex]}
              alt={name}
              width={1200}
              height={1200}
              className="object-contain"
            />
          </div>
          {/* Next arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-3xl"
          >
            &gt;
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectsImageSlide;
