import React, { Fragment } from "react";

import hdbg from "../../../Assets/Login.jpg";

const Bodytop = () => {
  return (
    <Fragment>
      <div className="w-11/12 h-screen bg-transparent md:flex md:justify-center md:items-center">
        <div
          className="bg-cover bg-no-repeat bg-center w-full md:w-1/2 h-1/2 md:h-5/6 border-8 border-red-400"
          style={{ backgroundImage: `url(${hdbg})` }}
        />
        <div className="w-full md:w-1/2 h-1/2 md:h-full grid place-content-center place-items-center text-justify px-5 pt-0 md:pt-10">
          <div>
            <p className="font-semibold text-2xl md:text-4xl text-black md:text-white pb-5">
              An Art
            </p>
            <p className="font-bold text-xl md:text-xl text-black md:text-white pb-5">
              Heading
            </p>
            <p className="text-black md:text-white pb-5">
              Art embodies human creativity through visuals, sound, movement,
              and words.
            </p>
            <p className="">
              <button className="bg-gray-600 hover:bg-gray-400 duration-500 text-black md:text-white hover:text-black px-5">
                Mulai
              </button>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Bodytop;
