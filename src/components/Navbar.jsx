import { useEffect, useRef, useState } from "react";
import Icon from "../assets/Icon";
import gsap from "gsap";
const Navbar = () => {
  const [open, setOpen] = useState(false);
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
      rotate: 360,
      repeat: 2,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <nav
      className="
    fixed top-0 left-0 
     w-full
    py-5
    flex flex-col
    px-10
    backdrop-blur-md z-50 bg-[#050816]/80
    duration-300
    transaction ease-in-out
    "
      onMouseLeave={() => setOpen(!open)}
    >
      <div className="w-full flex justify-between items-center">
        <div className=" cursor-pointer font-semibold flex gap-1.5 items-center">
          <span ref={icon}>{Icon.HTMX}</span>
          <a href="#home" className="text-2xl">
            Portoli
          </a>
        </div>

        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {!open ? <i class="ri-menu-line"></i> : <i class="ri-close-line"></i>}
        </div>

        {/* desktop menu items */}
        <div className="hidden md:flex md:gap-4 lg:gap-9 " onClick="">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="
    relative
    text-xs
    font-medium
    opacity-80
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
        {/* desktop button */}
        <div className="hidden md:block bg-linear-to-r from-indigo-600 to-purple-600 px-3 py-2 rounded-lg text-sm font-semibold ">
          <a href="./resume.pdf" download>
            <button>Download CV</button>
          </a>
        </div>
      </div>

      {/* mobile menu items */}
      {open && (
        <div
          className="mt-2 flex flex-col gap-3 md:hidden transaction ease-in-out
        duration-300"
          onClick=""
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="
    relative
    text-xs
    font-medium
    opacity-80
    after:absolute
    after:left-1
    
    after:bottom-0
    after:h-0.5
    after:w-0
    after:bg-[#7c3aed]
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
