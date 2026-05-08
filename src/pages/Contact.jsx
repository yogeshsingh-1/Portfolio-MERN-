import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import axios from "axios";
const Contact = () => {
  const url = "http://localhost:8001/auth/cap";
  const siteKey = "0x4AAAAAADLZem59QbuIqDTx";
  const [token, setToken] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(url, {
        token: token,
      });
      console.log(res.data);
    } catch (E) {
      console.log(E);
    }
  };
  const userDetails = {
    Email: [
      "yogeshs368@gmail.com",
      "ri-mail-line bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
    ],
    Phone: [
      "+91 9696671154",
      "ri-phone-line bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
    ],
    Location: [
      "Kanpur nager,208017",
      "ri-map-pin-line bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
    ],
    GitHub: [
      "https://github.com/yogeshsingh-1",
      "ri-github-fill bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
    ],
    Linkedin: [
      "https://github.com/yogeshsingh-1",
      "ri-linkedin-box-fill bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
    ],
  };
  return (
    <div id="contact" className="h-screen pt-18 max-w-[80%] w-full mx-auto">
      <h1 className="text-[1.375rem] font-semibold  text-center tracking-wide ">
        Contact Me
      </h1>
      <div className="flex h-[90%] ">
        {/* left div */}
        <div className="flex-1 px-8 pt-10 space-y-4 ">
          <h2 className="text-lg font-semibold">Lets work together!</h2>
          <div className="text-sm font-thiner opacity-60">
            Hava a project in mind or want to discuss an opportunity? Feel free
            to react out.
          </div>
          <div className="space-y-4">
            {/* item */}
            {Object.keys(userDetails).map((userDetail, index) => (
              <div className="flex space-x-3" key={index}>
                <div className="size-9 shadow-md text-center rounded-md bg-gradient-to-r from-indigo-600/10 to-purple-600/10">
                  <i className={`${userDetails[userDetail][1]} text-2xl`}></i>
                </div>
                <div className="flex flex-col font-semibold">
                  {userDetail}
                  <span className="text-xs font-medium  opacity-50">
                    {userDetails[userDetail][0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right form */}
        <div className="flex-1 px-10 pt-10  ">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#0b1120] border-none outline-white focus:outline-1 h-10 px-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#0b1120] border-none outline-white focus:outline-1  h-10 px-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Message</label>
              <textarea
                rows="5"
                cols="30"
                placeholder="Your Message"
                className=" bg-[#0b1120] border-none outline-white focus:outline-1 p-2 rounded-md"
              />
            </div>
            {/* <div>
              <Turnstile
                siteKey={siteKey}
                onSuccess={(token) => {
                  // console.log("Token:", token);
                  setToken(token);
                }}
              />
            </div> */}
            <div className="">
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 py-2.5 rounded-lg text-md font-semibold w-full "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
{
  /* <i className={`${userDetails.Email[1]}`}></i> */
}

export default Contact;
