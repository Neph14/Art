import React, { Fragment } from "react";

import User from "../../../Assets/User.jpeg";

function Bodybottom() {
  return (
    <Fragment>
      <section className="bg-gradient-to-tr from-teal-200 to-blue-500 w-full py-5">
        <div className="container mx-auto text-center place-content-center grid">
          <h2 className="text-black text-2xl font-semibold mb-2">An Art</h2>
          <p className=" text-black mb-8 px-4 md:px-0 text-justify">
            Art embodies human creativity through visuals, sound, movement, and
            words. It inspires emotions, challenges norms, and celebrates
            universal beauty.
          </p>
          <div className="md:flex md:flex-wrap md:justify-center grid grid-cols-2 place-content-center place-items-center pl-20 md:pl-0 md:gap-x-10">
            <div className="w-40 mb-4 ">
              <img
                src={User}
                alt="Developer 1"
                className="w-1/2 md:w-full h-auto rounded-full"
              />
              <p className="text-black mt-2 w-1/2 md:w-full font-semibold">
                Asep
              </p>
            </div>
            <div className="w-40 mb-4">
              <img
                src={User}
                alt="Developer 2"
                className="w-1/2 md:w-full h-auto rounded-full"
              />
              <p className="text-black mt-2 w-1/2 md:w-full font-semibold">
                Agus
              </p>
            </div>
            <div className="w-40 mb-4">
              <img
                src={User}
                alt="Developer 3"
                className="w-1/2 md:w-full h-auto rounded-full"
              />
              <p className="text-black mt-2 w-1/2 md:w-full font-semibold">
                Rizal
              </p>
            </div>
            <div className="w-40 mb-4">
              <img
                src={User}
                alt="Developer 4"
                className="w-1/2 md:w-full h-auto rounded-full"
              />
              <p className="text-black mt-2 w-1/2 md:w-full font-semibold">
                Dimas
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Bodybottom;
