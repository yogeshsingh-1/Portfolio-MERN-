import React from "react";
import Card from "../components/Card";
const Project = () => {
  const projectList = [1, 2, 3, 4];

  return (
    <div id="project" className="h-screen pt-18 max-w-[80%] w-full mx-auto">
      <h1 className="text-[1.375rem] font-semibold  text-center tracking-wide ">
        My Projects
      </h1>
      <div className="flex gap-4 flex-wrap h-[90%] w-full pt-5 ">
        {projectList.map((project, index) => (
          <Card  key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Project;
