const Card = () => {
  return (
    <div className="flex w-[48%] rounded-md overflow-hidden p-2 bg-[#0b1120] ">
      <div className="w-[35%] h-[90%]">
        <img
          src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex-1 px-5 space-y-4  pt-3 ">
        <div className="text-lg font-semibold">E-Commerce Web App</div>
        <div className="text-sm opacity-50 tracking-wide">
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
        <div className="flex gap-3">
          <button className="text-[#7c3aed] font-semibold">Live Demo</button>
          <button className="text-[#94a3b8] font-semibold">GitHub</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
