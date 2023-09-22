import React, { useState } from "react";

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="w-screen h-auto overflow-x-hidden">
      <div className="md:flex items-center justify-between font-semibold bg-white dark:bg-black py-4 md:px-10 px-7 text-black dark:text-white">
        <a href="/" class="flex items-center">
          <p>An Art</p>
        </a>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-3 cursor-pointer bg-white dark:bg-black md:hidden "
        >
          <span className="text-black dark:text-white flex">
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </span>
        </div>
        <div>
          <ul
            className={`md:flex w-screen md:px-0 bg-white dark:bg-black text-center md:items-center md:pb-0 pb-10 absolute md:static  md:z-auto left-0  md:w-auto md:pl-0 transition-all duration-500 ease-in ${
              open ? "top-14 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-sm md:my-0 my-7  text-center"
              >
                <a
                  href={link.link}
                  className="text-black dark:text-white hover:text-gray-500 duration-500 px-7 "
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="sm:block md:hidden text-center ">
              <button className="bg-white dark:bg-black hover:bg-gray-500 duration-500 px-5 text-white pb-1 hover:text-black">
                Login
              </button>
            </div>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className="bg-white dark:bg-black hover:bg-gray-500 duration-500 px-5 text-white pb-1 hover:text-black">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
