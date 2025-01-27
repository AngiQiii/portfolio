"use client";
import { ProjectsData } from "@/components/Projects/ProjectsData";
import { projectsDataTypes } from "@/components/Projects/ProjectsData";

import React from "react";
import ProjectsImageSlide from "@/components/Projects/ProjectsImageSlide";

const ProjectsPage: React.FC<projectsDataTypes> = function () {
  return (
    <div>
      {ProjectsData.map((data, projectIndex) => (
        <ProjectsImageSlide data={data} />
      ))}
    </div>
  );
};

export default ProjectsPage;
