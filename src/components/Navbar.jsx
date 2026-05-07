import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navItems = [
    {
      elem: "Home",
      nav: "/",
    },
    {
      elem: "About",
      nav: "/about",
    },
    {
      elem: "Projects",
      nav: "/projects",
    },
    {
      elem: "Skills",
      nav: "/skills",
    },
    {
      elem: "Blog",
      nav: "/blog",
    },
    {
      elem: "Contact",
      nav: "/contact",
    },
  ];

  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center pl-15 pr-9 h-20 ">
      <div className=" cursor-pointer font-semibold text-xl"> Portoli</div>

      <div className="flex gap-9">
        {navItems.map((item, id) => (
          <div
            key={id}
            onClick={() => navigate(`${item.nav}`)}
            className="cursor-pointer text-xs font-medium opacity-80"
          >
            {item.elem}
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-2 rounded-lg text-sm font-semibold">
        <button>Download CV</button>
      </div>
    </nav>
  );
};

export default Navbar;
