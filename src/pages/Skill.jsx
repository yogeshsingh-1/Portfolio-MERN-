import Icon from "../assets/Icon";
const Skill = () => {
  const skill = {
    Frontend: [
      { icon: Icon.React, name: "React" },
      { icon: Icon.Redux, name: "Redux" },
      { icon: Icon.Tailwind, name: "Tailwind" },
      { icon: Icon.MaterialUi, name: "Material UI" },
      { icon: Icon.Javascript, name: "JavaScript" },
      { icon: Icon.Typescript, name: "TypeScript" },
    ],

    Backend: [
      { icon: Icon.Node, name: "Node.js" },
      { icon: Icon.Express, name: "Express" },
      { icon: Icon.Socket, name: "Socket.io" },
      { icon: Icon.Passport, name: "Passport" },
      { icon: Icon.Mongo, name: "MongoDB" },
      { icon: Icon.Postgres, name: "PostgreSQL" },
    ],

    Devops: [
      { icon: Icon.Linux, name: "Linux" },
      { icon: Icon.Docker, name: "Docker" },
      { icon: Icon.Git, name: "Git" },
      { icon: Icon.GitHub, name: "GitHub" },
      { icon: Icon.GitAction, name: "GitHub Actions" },
      { icon: Icon.Nginx, name: "Nginx" },

      // { icon: Icon.Postman, name: "Postman" },
    ],

    // Other: [
    //   { icon: Icon.VS, name: "VS Code" },
    //   { icon: Icon.Linux, name: "Linux" },
    //   { icon: Icon.PM2, name: "PM2" },
    //   { icon: Icon.Sequelize, name: "Sequelize" },
    //   { icon: Icon.Dbeaver, name: "DBeaver" },
    //   { icon: Icon.NPM, name: "NPM" },
    // ],
  };
  return (
    <div id="skill" className="min-h-screen pt-18 max-w-[90%] w-full mx-auto ">
      <h1 className="text-[1.375rem] font-semibold  text-center tracking-wide">
        My Skills
      </h1>
      {/* bg-[#0b112090] */}
      <div className="w-full h-full space-y-2 ">
        {Object.keys(skill).map((item) => (
          <div className="max-w-[80%] w-full mx-auto ">
            <h2 className="font-semibold">{item}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4  py-3.5 rounded-lg shadow-xl flex-wrap bg-[#0b112090]">
              {skill[item].map((item, index) => (
                <div
                  className="group flex flex-col items-center  gap-2 cursor-pointer p-4 rounded-xl 
                  w-full max-w-28"
                  key={index}
                >
                  <i
                    className={`
      ${item.icon}
      text-4xl
      transition-all duration-300
      group-hover:-translate-y-2
      group-hover:scale-110
      group-hover:text-cyan-500 
    `}
                  ></i>

                  <span className="text-sm opacity-80 text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
