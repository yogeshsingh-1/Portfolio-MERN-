import Icon from "../assets/Icon";
const Navbar = () => {
  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Projects", path: "#project" },
    { name: "Skills", path: "#skill" },
    // { name: "Blog", path: "#blog" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];
  // fixed top-0 left-0

  return (
    <nav
  className="
    fixed top-0 left-0 z-50
    h-20 w-full
    flex justify-between items-center
    px-10
    bg-[#050816]/80
    backdrop-blur-md
  "
>
      <div className=" cursor-pointer font-semibold flex gap-1.5 items-center">
        {Icon.HTMX}
        <a href="#home" className="text-2xl">
          Portoli
        </a>
      </div>

      <div className="gap-9 hidden lg:flex" onClick="">
        {navItems.map((item) => (
          <a
  key={item.name}
  href={item.path}
  className="
    relative
    text-xs
    font-medium
    opacity-80
    p-2
    after:absolute
    after:left-1/2
    after:-translate-x-1/2
    after:bottom-0
    after:h-[2px]
    after:w-0
    after:bg-[#7c3aed]
    after:transition-all
    after:duration-300
    hover:after:w-1/2
  "
>
  {item.name}
</a>
        ))}
      </div>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-2 rounded-lg text-sm font-semibold">
        <button>Download CV</button>
      </div>
    </nav>
  );
};

export default Navbar;
