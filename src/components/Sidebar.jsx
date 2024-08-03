// import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ activeIndex, handleClick }) => {
  let linkAvailable = true;

  return (
    <div className="sidebar h-[90%] m-[1rem] p-[1rem] border-r-[0.4px] border-r-[#bbb] overflow-y-scroll flex flex-col gap-[2rem]">
      {links.map((link, i) => (
        <div key={i}>
          <h1 className="font-bold text-[18px]">{link.megaTitle}</h1>
          <div className="flex flex-col px-0 py-2 text-[#777]">
            {link.titles.map((title, j) => (
              <Link
                key={j}
                to={title.href}
                className={`flex items-center gap-[6px] text-[14px] hover:bg-[#e9e5ff] p-2 rounded-md ${
                  activeIndex === title.value ? "active" : ""
                }`}
                onClick={() => handleClick(title.value)}>
                {title.title}
                {linkAvailable && (
                  <img
                    style={{ filter: "grayscale(1)" }}
                    className="w-[10px]"
                    src={title.img}></img>
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const links = [
  {
    megaTitle: "Getting Started",
    titles: [
      {
        title: "Introduction",
        href: "/blog-portfolio/",
        value: 0,
        linkAvailable: false,
      },
      {
        title: "Gallery",
        href: "/blog-portfolio/gallery",
        value: 1,
        linkAvailable: false,
      },
      {
        title: "Know more",
        href: "https://codesamprohan.me",
        value: 2,
        linkAvailable: true,
        img: "./link.png",
      },
    ],
  },
  {
    megaTitle: "Intro Animation",
    titles: [
      {
        title: "Auto Scroll Up Transition",
        href: "/blog-portfolio/gallery/auto-scroll-up-transition",
        value: 11,
        linkAvailable: false,
      },
    ],
  },
  {
    megaTitle: "Scroll Parallax",
    titles: [
      {
        title: "Text Image Parallax",
        href: "/blog-portfolio/gallery/text-image-parallax",
        value: 21,
        linkAvailable: false,
      },
    ],
  },
  {
    megaTitle: "Landing Page",
    titles: [
      {
        title: "Furniture Landing Page",
        href: "/blog-portfolio/gallery/furniture-landing-page",
        value: 31,
        linkAvailable: false,
      },
      {
        title: "Deploy Clone",
        href: "/blog-portfolio/gallery/deploy-clone",
        value: 32,
        linkAvailable: false,
      },
      {
        title: "Hyperspace Landing Page",
        href: "/blog-portfolio/gallery/Hyperspace-landing-page",
        value: 33,
        linkAvailable: false,
      },
    ],
  },
  {
    megaTitle: "Menu",
    titles: [
      {
        title: "Full Screen Menu",
        href: "/blog-portfolio/gallery/full-screen-menu",
        value: 41,
        linkAvailable: false,
      },
      {
        title: "Sonar Menu",
        href: "/blog-portfolio/gallery/sonar-menu",
        value: 42,
        linkAvailable: false,
      },
    ],
  },
  {
    megaTitle: "Portfolio",
    titles: [
      {
        title: "One Page Portfolio",
        href: "/blog-portfolio/gallery/full-screen-menu",
        value: 51,
        linkAvailable: false,
      },
    ],
  },
];

export default Sidebar;
