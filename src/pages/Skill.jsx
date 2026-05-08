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
      { icon: Icon.Docker, name: "Docker" },
      { icon: Icon.Git, name: "Git" },
      { icon: Icon.GitHub, name: "GitHub" },
      { icon: Icon.GitAction, name: "GitHub Actions" },
      { icon: Icon.Nginx, name: "Nginx" },
      { icon: Icon.Postman, name: "Postman" },
    ],

    Other: [
      { icon: Icon.VS, name: "VS Code" },
      { icon: Icon.Linux, name: "Linux" },
      { icon: Icon.PM2, name: "PM2" },
      { icon: Icon.Sequelize, name: "Sequelize" },
      { icon: Icon.Dbeaver, name: "DBeaver" },
      { icon: Icon.NPM, name: "NPM" },
    ],
  };
  return (
    <div id="skill" className="h-screen pt-18 max-w-[80%] w-full mx-auto bg-red-400">
      <h1 className="text-[1.375rem] font-semibold  text-center tracking-wide">
        My Skills
      </h1>
      <div className="w-full h-full space-y-2 ">
        {Object.keys(skill).map((item) => (
          <div className=" max-w-[80%] w-full mx-auto ">
            <h2 className="font-semibold">{item}</h2>
            <div className="flex justify-around bg-[#0b112090] py-3.5 rounded-lg shadow-xl ">
              {skill[item].map((item, index) => (
                <div
                  className="flex flex-col space-y-2 items-center"
                  key={index}
                >
                  <i className={`${item.icon} text-4xl`}></i>
                  <span className="text-sm">{item.name}</span>
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
