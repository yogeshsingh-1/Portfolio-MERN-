const Navbar = () => {
  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#project" },
    { name: "Skills", path: "#skill" },
    { name: "Blog", path: "#blog" },
    { name: "Contact", path: "#contact" },
  ];
  // fixed top-0 left-0
  return (
    <nav className="h-20 w-full  flex justify-between items-center pl-15 pr-9 bg-red-200/10">
      <div className=" cursor-pointer font-semibold text-xl"> Portoli</div>

      <div className="gap-9 hidden lg:flex">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="cursor-pointer text-xs font-medium opacity-80"
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
