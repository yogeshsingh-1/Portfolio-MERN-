import React from "react";

const Project = () => {
  const projectList = [1, 2, 3, 4];
  return (
    <div id="project" className="h-screen pt-18 max-w-[80%] w-full mx-auto">
      <h1 className="text-[1.375rem] font-semibold  text-center tracking-wide ">
        My Projects
      </h1>
      <div className="flex gap-4 flex-wrap h-[90%] w-full pt-5 ">
        {projectList.map((project, index) => (
          <div
            className="flex w-[48%] rounded-md overflow-hidden p-2 bg-[#0b1120]"
            key={index}
          >
            <div className="w-[35%] h-[90%]">
              <img
                src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-1 px-4 py-2">
              <div className="">E-Commerce Web App</div>
              <div className="text-xs">
                A full featured ecommerce frontend platform with full user
                interface and ui development
              </div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
