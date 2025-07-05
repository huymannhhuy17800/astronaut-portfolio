import React from "react";
import { Timeline } from "../components/timeline";
import { experiences } from "../constants/projects";

const WorkExperience = () => {
  return (
    <section className="w-full">
      <Timeline data={experiences} />
    </section>
  );
};

export default WorkExperience;
