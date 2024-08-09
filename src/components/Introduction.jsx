import { Link } from "react-router-dom";
import RecentUploads from "./RecentUploads";

const Introduction = ({ setActiveIndex }) => {
  return (
    <div className="home px-1 w-full h-full overflow-y-scroll flex flex-col gap-6">
      <h1 className="text-[1.4rem] md:text-[3rem] text-[#444] md:max-w-[80%] font-medium leading-tight">
        Hi, I am Rohan a Frontend Web Developer and I add all the cool stuffs
        over here.
      </h1>
      <div className="me--links flex gap-[1rem]">
        <Link
          to="/blog-portfolio/gallery"
          className="px-3 p-2 uppercase hover:ring-1 hover:ring-[#846eff] cursor-pointer font-medium text-[#846eff] bg-[#e9e5ff] rounded-xl"
          onClick={() => setActiveIndex(1)}>
          Gallery
        </Link>
        <a
          target="_blank"
          href="https://dribbble.com/codesamprohan"
          className="px-3 flex items-center gap-2 p-2 uppercase hover:ring-1 hover:ring-[#846eff] cursor-pointer font-medium text-[#846eff] bg-[#e9e5ff] rounded-xl">
          Dribbble
          <img className="w-[12px]" src="./link.png" alt="icon"></img>
        </a>
        <a
          href="https://codesamprohan.me"
          target="_blank"
          className="px-3 flex items-center gap-2 p-2 uppercase hover:ring-1 hover:ring-[#846eff] cursor-pointer font-medium text-[#846eff] bg-[#e9e5ff] rounded-xl">
          Portfolio
          <img className="w-[12px]" src="./link.png" alt="icon"></img>
        </a>
      </div>
      <div className="recent uploads mt-[50px]">
        <span className="flex justify-between items-center">
          <h1 className="font-bold text-[1.5rem] text-[#111]">
            Recent Uploads
          </h1>
          <Link
            to="./gallery"
            className="text-[#846eff]"
            onClick={() => setActiveIndex(1)}>
            See All
          </Link>
        </span>
        <RecentUploads setActiveIndex={setActiveIndex} />
      </div>
      <div className="mt-[50px] mb-[100px]">
        <h1 className="font-bold text-[1.5rem] text-[#111]">All Works</h1>
        {dateUploads.map((data, index) => {
          return (
            <>
              <div key={index} className="flex flex-col gap-2 mt-[20px]">
                <h1 className="mt-[30px] font-bold">{data.megaTitle}</h1>
                <ul>
                  {data.title.map((data, i) => {
                    return (
                      <li
                        key={i}
                        className="flex gap-[10rem] border-b-[0.5px] hover:pb-[10px] duration-200 border-[#000] py-2 text-[#4f576c] text-[12px]">
                        <p>{data.date}</p>
                        <Link to={data.link}>{data.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

const dateUploads = [
  {
    megaTitle: "Intro Animation",
    title: [
      {
        date: "July 11, 2024",
        link: "/blog-portfolio/gallery/auto-scroll-up-transition",
        name: "Auto Scroll Up Transition",
      },
    ],
  },
  {
    megaTitle: "Scroll Parallax",
    title: [
      {
        date: "July 11, 2024",
        link: "/blog-portfolio/gallery/text-image-parallax",
        name: "Text Image parallax",
      },
    ],
  },
  {
    megaTitle: "Landing Page",
    title: [
      {
        date: "July 11, 2024",
        link: "/blog-portfolio/gallery/furniture-landing-page",
        name: "Furniture Landing Page",
      },
      {
        date: "July 15, 2024",
        link: "/blog-portfolio/gallery/deploy-clone",
        name: "Awwwards Deploy Clone",
      },
      {
        date: "August 03, 2024",
        link: "/blog-portfolio/gallery/hyperspace-landing-page",
        name: "Hyperspace Landing Page",
      },
    ],
  },
  {
    megaTitle: "Menu",
    title: [
      {
        date: "July 11, 2024",
        link: "/blog-portfolio/gallery/full-screen-menu",
        name: "Full Screen Menu",
      },
      {
        date: "July 18, 2024",
        link: "/blog-portfolio/gallery/sonar-menu",
        name: "Sonar Menu",
      },
    ],
  },
  {
    megaTitle: "Portfolio",
    title: [
      {
        date: "July 11, 2024",
        link: "/blog-portfolio/gallery/auto-scroll-up-transition",
        name: "One Page Portfolio",
      },
    ],
  },
];

export default Introduction;
