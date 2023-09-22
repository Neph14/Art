import React, { Fragment } from "react";

import "../../../App.css";

function Header() {
  return (
    <Fragment>
      <div className="h-full w-full flex ">
        <div className="h-full w-1/2 md:w-1/3 grid grid-cols-1 place-content-end place-items-start ml-5 md:ml-10 pb-5 md:pb-10">
          <div className="text-white font-bold text-5xl mb-5">Header</div>
          <div className="text-white font-normal text-md text-justify hidden md:block ">
            Art embodies human creativity through visuals, sound, movement, and
            words. It inspires emotions, challenges norms, and celebrates
            universal beauty. From traditional to contemporary, art captures
            culture, history, and individual expression, inviting us to explore,
            reflect, and connect with diverse perspectives and imaginative
            realms.{" "}
          </div>
          <div className="text-white font-normal text-md text-justify block md:hidden ">
            Art embodies human creativity through visuals, sound, movement, and
            words.{" "}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
