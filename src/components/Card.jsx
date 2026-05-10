import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="flex w-full md:w-[48%] rounded-md overflow-hidden p-2 bg-[#0b1120] ">
      <div className="w-[35%] h-[90%] hidden md:block">
        <img
          src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex-1 px-5 space-y-3  pt-3 ">
        <div className="text-md font-semibold">E-Commerce Web App</div>
        <div className="text-xs opacity-50 tracking-wider">
          A full featured ecommerce frontend platform with full user interface
          and ui development of ecommerce.
        </div>
        <div className="flex gap-7 ">
          <button className="text-xs p-2 rounded-md bg-white/5  font-semibold ">
            Live Demo
          </button>
          <button className="text-xs p-2 rounded-md bg-white/5  font-semibold">
            GitHub
          </button>
          <button className="text-xs p-2 rounded-md bg-white/5 font-semibold">
            GitHub
          </button>
        </div>
        <div className="flex gap-8 text-sm mt-5">
          <Link className=" text-[#7c3aed] font-semibold  " to="">
            <i class="ri-external-link-line mr-2"></i>Live Demo
          </Link>
          <Link
            className=" text-[#94a3b8] font-semibold"
            to="https://github.com/yogeshsingh-1"
            target="_blank"
          >
            <i class="ri-github-fill mr-2"></i> GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
