import React from "react";

import ig from "../../../Assets/instagram-white.png";
import wa from "../../../Assets/whatsapp-white.png";
import twt from "../../../Assets/twitter-white.png";
import tk from "../../../Assets/tiktok-white.png";
import icon from "../../../Assets/User.jpeg";

function Footer() {
  return (
    <footer className="py-10 w-full bg-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center w-full">
        <div className="md:flex grid md:items-center place-items-center md:justify-center mb-4 md:mb-0 text-white hover:text-gray-500 duration-500 md:w-3/5">
          <div className="pl-4 pb-2 md:pl-0 md:pb-0">
            <img
              src={icon}
              alt="Company Icon"
              className="w-32 h-32 mr-4 rounded-full items-center flex justify-center "
            />
          </div>
          <div className="">
            <h2 className="text-lg font-semibold md:block text-center md:text-start">
              Contact
            </h2>
            <p className="items-center space-x-2 font-semibold md:block">
              Contact us if you have any questions
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-4 md:w-2/5 pt-2 md:pt-0 place-content-center place-items-center">
          <a
            href="/"
            className="text-white hover:text-gray-500 duration-500 flex items-center md:space-x-2 font-semibold"
          >
            <img src={ig} alt="Company Icon" className="w-12 h-12 mr-4" />
            <p className="hidden md:block">sosial media 1</p>
          </a>
          <a
            href="/"
            className="text-white hover:text-gray-500 duration-500 flex items-center md:space-x-2 font-semibold"
          >
            <img src={wa} alt="Company Icon" className="w-12 h-12 mr-4" />
            <p className="hidden md:block">sosial media 1</p>
          </a>
          <a
            href="/"
            className="text-white hover:text-gray-500 duration-500 flex items-center md:space-x-2 font-semibold"
          >
            <img src={twt} alt="Company Icon" className="w-12 h-12 mr-4" />
            <p className="hidden md:block">sosial media 1</p>
          </a>
          <a
            href="/"
            className="text-white hover:text-gray-500 duration-500 flex items-center md:space-x-2 font-semibold"
          >
            <img src={tk} alt="Company Icon" className="w-12 h-12 mr-4" />
            <p className="hidden md:block">sosial media 1</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
