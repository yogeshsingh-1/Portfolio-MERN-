import Icon from "../assets/Icon";
import home from "../assets/home.png";

const Home = () => {
  return (
    <div id="home" className="w-full md:h-screen mx-auto pt-18 ">
      <div className="w-[80%] min-h-[80%] mx-auto flex flex-col md:flex-row  items-center justify-center ">
        {/* left-div */}
        <div className="flex-1 space-y-4 self-center">
          <div className="text-[#7c3aed] text-sm md:text-lg font-semibold text-center md:text-start">
            MERN STACK DEVELOPER
          </div>
          <div className="leading-10  md:leading-14  text-3xl md:text-3xl lg:text-5xl  font-semibold text-center md:text-start">
            Hi, I'm Yogesh Singh <br />I build scalable <br />
            <span className="text-[#7c3aed]">web applications</span>
          </div>
          <div className="text-xs md:text-sm text-[#94a3b8] leading-5 text-center md:text-start">
            Passionate about building performant, scalable and secure full-stack
            web application.
          </div>
          <div className="flex space-x-3 justify-center md:justify-start ">
            <a
              className="bg-linear-to-r from-indigo-600 to-purple-600 px-3 py-3 rounded-lg text-xs md:text-sm font-semibold"
              href="#project"
            >
              View My Work
            </a>
            <a
              className="border px-3 py-3 rounded-lg text-xs md:text-sm font-semibold"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* right-div */}
        <div className="flex-1  w-full h-full self-center">
          <img
            src={home}
            className="w-full h-full transform drop-shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:scale-105 duration-500 object-contain"
          />
        </div>
      </div>

      {/* Items */}
      <div className=" flex flex-col justify-center items-center space-y-4 0 min-h-[20%]">
        <div className="text-center text-[#94a3b8]">Trusted Technolgies</div>
        {/* Icons child*/}
        <div className="flex justify-center flex-wrap space-x-10 overflow-x-hidden">
          <div className="flex items-center space-x-2">
            <i className={`${Icon.Mongo} text-3xl`}></i>
            <span>MongoDB</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className={`${Icon.Express} text-3xl`}></i>
            <span>Express.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className={`${Icon.React} text-3xl`}></i>
            <span>React</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className={`${Icon.Node} text-3xl`}></i>
            <span>Node.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className={`${Icon.Docker} text-3xl`}></i>
            <span>Docker</span>
          </div>
          <div className="flex items-center space-x-2 ">
            <i className={`${Icon.Git} text-3xl`}></i>
            <span>Git</span>
          </div>
          <div className="flex items-center space-x-2 ">
            <i className={`${Icon.GitAction} text-3xl`}></i>
            <span className="text-sm">GitHub Actions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
