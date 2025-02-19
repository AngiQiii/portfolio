"use client";
import { ProjectsData } from "@/components/Projects/ProjectsData";

import React from "react";
import ProjectsImageSlide from "@/components/Projects/ProjectsImageSlide";

export default function ProjectsPage() {
  return (
    <div>
      {ProjectsData.map((data, projectIndex) => (
        <ProjectsImageSlide data={data} />
      ))}
    </div>
  );
}
