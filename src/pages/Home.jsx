import Icon from "../assets/Icon";
import home from "../assets/home.png";
const Home = () => {
  // const icon
  // height: "calc(100vh-80px)"
  return (
    <div className="w-screen h-full lg:h-[calc(100vh-5rem)] mx-auto ">
      <div className="w-[80%] h-[80%] mx-auto flex flex-col md:flex-row  ">
        {/* left-div */}
        <div className="flex-1 space-y-4 self-center">
          <div className="text-[#7c3aed] text-lg font-semibold">
            MERN STACK DEVELOPER
          </div>
          <div className="leading-14  text-5xl font-[600]">
            Hi, I'm Yogesh Singh <br />I build scalable <br />
            <span className="text-[#7c3aed]">web applications</span>
          </div>
          <div className="text-sm text-[#94a3b8] leading-5">
            Passionate about building performant, scalable and secure full-stack
            web application.
          </div>
          <div className="flex space-x-3">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-2 rounded-lg text-sm font-semibold">
              View My Work
            </button>
            <button className="border px-3 py-2 rounded-lg text-sm font-semibold">
              Contact Me
            </button>
          </div>
        </div>
        {/* right-div */}
        <div className="flex-1  w-full h-full self-center ">
          <img
            src={home}
            className="w-full h-full  object-contain transform drop-shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:scale-105 duration-500"
          />
        </div>
      </div>
      {/* absolute w-[350px] h-[350px] bg-purple-600/30 blur-[120px] rounded-full */}
      {/* Items */}
      <div className="h-[20%] flex flex-col  space-y-4">
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
          <div className="flex items-center space-x-2 ">
            {Icon.Git}
            <span>Git</span>
          </div>
          <div className="flex items-center space-x-2 ">
            {Icon.GitAction}
            <span className="text-sm">GitHub Actions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
