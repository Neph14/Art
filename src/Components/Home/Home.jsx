import React, { Fragment } from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Bodytop from "./Body/Bodytop";
import Footer from "./Footer/Footer";
import Bodybottom from "./Body/Bodybottom";
import Space from "../../Assets/Space.jpg";

function Home() {
  return (
    <>
      <div className="grid place-items-center place-content-center w-full h-full left-0">
        <nav className="flex w-screen h-16 fixed top-0">
          <Navbar />
        </nav>
        <div
          className="flex border-b-2 border-black w-full bg-cover bg-bottom h-screen"
          style={{ backgroundImage: `url(${Space})` }}
        >
          <Header />
        </div>
        <div className="flex items-center justify-center bg-blue-500 border-y-2 border-black w-full h-full">
          <Bodytop />
        </div>
        <div className="flex border-y-2 border-black w-full h-full">
          <Bodybottom />
        </div>
        <div className="flex border-t-2 border-black w-full h-full">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
