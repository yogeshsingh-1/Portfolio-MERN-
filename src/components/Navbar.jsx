import { useEffect, useRef } from "react";
import Icon from "../assets/Icon";
import gsap from "gsap";
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
  const icon = useRef();
  useEffect(() => {
    gsap.to(icon.current, {
      duration: 2,
      rotate:360,
      repeat: 2,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
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
        <span ref={icon}>{Icon.HTMX}</span>
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
    after:h-0.5
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
      <div className="bg-linear-to-r from-indigo-600 to-purple-600 px-3 py-2 rounded-lg text-sm font-semibold">
        <a href="./resume.pdf" download>
          <button>Download CV</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
