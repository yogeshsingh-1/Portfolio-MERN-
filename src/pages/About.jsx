import React from "react";
import about from "../assets/about.png";
const About = () => {
  const userDetails = {
    Name: [
      "Yogesh Singh",
      "ri-user-fill bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
    ],
    Email: [
      "yogeshs368@gmail.com",
      "ri-mail-line bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
    ],

    Location: [
      "Kanpur nager,208017",
      "ri-map-pin-line bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
    ],
    Experience: [
      "1+ Year",
      "ri-briefcase-line bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
    ],
  };

  return (
    <div id="about" className="h-screen pt-18 max-w-[80%] w-full mx-auto">
      <h1 className="text-[1.375rem] font-semibold  text-center tracking-wide ">
        About Me
      </h1>
      <div className="flex h-[90%] gap-30  items-center">
        {/* left div */}
        <div className="flex-1 px-8 pt-5 space-y-5 ">
          <div className="text-md font-thiner opacity-80">
            Hello I am Yogesh Singh, a passionate MERN Stack Developer focused
            on building modern, scalable, and high performance web applications.
          </div>
          <div className="text-md font-thiner opacity-80">
            I love ideas into reality through clean code and efficient
            architecutre. I am also passionate about DevOps practices,
            automation and continious integration.
          </div>
          <div className="space-y-4">
            {/* item */}
            {Object.keys(userDetails).map((userDetail, index) => (
              <div className="flex space-x-3" key={index}>
                <div className="size-9 shadow-md text-center rounded-md bg-gradient-to-r from-indigo-600/10 to-purple-600/10">
                  <i className={`${userDetails[userDetail][1]} text-2xl`}></i>
                </div>
                <div className="flex flex-col font-semibold">
                  {userDetail}
                  <span className="text-xs font-medium  opacity-50">
                    {userDetails[userDetail][0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 rounded-lg text-sm font-semibold w-fit ">
            <button>Download CV</button>
          </div>
        </div>
        {/* right div*/}
        <div className="flex-1 h-[90%] pt-5 shadow-lg transform drop-shadow-[0_0_40px_rgba(124,58,237,0.3)] ">
          <img
            className="w-full h-full rounded-md  mx-auto  hover:scale-105 duration-500 object-cover"
            src={about}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
