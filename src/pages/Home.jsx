import Icon from "../assets/Icon";
const Home = () => {
  // const icon

  return (
    <div style={{ height: "calc(100vh-80px)" }} className=" w-screen">
      <div className="h-full flex w-[90%] mx-auto flex-col md:flex-row ">
        <div className="flex-1 bg-green-400">
          <div className="text-[#7c3aed]">MERN STACK DEVELOPER</div>
          <div className="">
            Hi, I'm Yogesh Singh <br />I build scalable <br />
            web applications
          </div>
          <div className="">
            Passionate about building performant, scalable and secure full-stack
            web application.
          </div>
          <div className="flex ">
            <button>View My Work</button>
            <button>Contact Me</button>
          </div>
        </div>
        <div className="flex-1 bg-amber-300"></div>
      </div>

      {/* Items */}
      <div className="flex flex-col">
        <div className="text-center text-[#94a3b8]">Trusted Technolgies</div>
        {/* Icons child*/}
        <div className="flex justify-center space-x-10">
          <div className="flex items-center space-x-2">
            {Icon.Mongo} <span>MongoDB</span>
          </div>
          <div className="flex items-center space-x-2">
            {Icon.Express} <span>Express.js</span>
          </div>
          <div className="flex items-center space-x-2">
            {Icon.React}
            <span>React</span>
          </div>
          <div className="flex items-center space-x-2">
            {Icon.Node} <span>Node.js</span>
          </div>
          <div className="flex items-center space-x-2">
            {Icon.Docker}
            <span>Docker</span>
          </div>
          <div className="flex items-center space-x-2">
            {Icon.Git}
            <span>Git</span>
          </div>
          <div className="flex items-center space-x-2">
            {Icon.GitAction}
            <span>GitHub Actions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
