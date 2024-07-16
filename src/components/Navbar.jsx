import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 duration-500 right-0 mt-20 mx-2 w-[340px] rounded-lg bg-[#fff] z-[999] ${
          menuOpen ? "opacity-1" : "opacity-0 pointer-events-none"
        }`}>
        <span className="flex p-6 items-center gap-2">
          <a href="/blog-portfolio/">
            <img
              className="w-[40px] bg-[#bc65ff] rounded-full"
              src="./snapRohan.png"></img>
          </a>
          <span className=" leading-5">
            <h1 className="font-bold text-[18px]">Rohan Chaudhary</h1>
            <a
              className="text-[12px] text-[#4f576c]"
              href="mailto:rohanchaudhary.bkbiet2022@gmail.com">
              rohanchaudhary.bkbiet2022@gmail.com
            </a>
          </span>
        </span>
        <hr />
        <p className="text-[#4f576c] py-2 px-7 bg-[#e9e5ff]">Navigation</p>
        <span className="flex flex-col">
          <Link
            to="/"
            className="text-[#846eff] px-7 py-4 hover:px-12 duration-300 hover:bg-[#f7f7f7]">
            Home
          </Link>
          <Link
            to="/blog-portfolio/gallery"
            className="text-[#846eff] px-7 py-4 hover:px-12 duration-300 hover:bg-[#f7f7f7]">
            Gallery
          </Link>
          <Link
            to="/"
            className="text-[#846eff] px-7 py-4 hover:px-12 duration-300 hover:bg-[#f7f7f7]">
            Demos
          </Link>
        </span>
        <p className="text-[#4f576c] py-2 px-7 bg-[#e9e5ff]">Socials</p>
        <span className="flex flex-col">
          <Link
            to="/"
            className="text-[#777] flex items-center gap-3 px-7 py-4 hover:px-12 duration-300 hover:bg-[#f7f7f7]">
            <img className="w-[20px]" src="./github.png"></img>
            GitHub
          </Link>
          <Link
            to="/"
            className="text-[#777] flex items-center gap-3 px-7 py-4 hover:px-12 duration-300 hover:bg-[#f7f7f7]">
            <img className="w-[20px]" src="./github.png"></img>
            Portfolio
          </Link>
          <Link
            to="/"
            className="text-[#777] flex items-center gap-3 px-7 py-4 hover:px-12 duration-300 hover:bg-[#f7f7f7]">
            <img className="w-[20px]" src="./dribbble2.png"></img>
            Dribbble
          </Link>
        </span>
      </div>
      <div
        className={`overlay fixed duration-500 w-screen h-screen bg-[#000000e0] z-[900] ${
          menuOpen ? `opacity-1` : `opacity-0 pointer-events-none`
        }`}
        onClick={handleMenuClick}></div>
      <nav className="w-screen z-[999] sticky top-0 bg-[#fff] flex items-center border-b-[0.5px] border-b-[#bbb] justify-between px-[2rem] py-3">
        <a href="/blog-portfolio/">
          <img
            className="w-[50px] bg-[#6C946F] rounded-full"
            src="./snapRohan.png"
            alt=""
          />
        </a>
        <button
          onClick={handleMenuClick}
          className="px-4 p-1 rounded-xl duration-300 hover:ring-1 hover:ring-[#5a5aff] hover:shadow-lg hover:shadow-[#5a5aff5c] bg-[#eee]">
          <p>menu</p>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
