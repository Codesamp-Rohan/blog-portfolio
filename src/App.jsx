import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Introduction from "./components/Introduction.jsx";
import Gallery from "./components/Gallery.jsx";
import { useState } from "react";
// import TextImageParallax from "./Gallery/TextImageParallax";
import ProjectPage from "./components/ProjectPage";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };
  // Pass links as props

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="page-container flex w-screen h-screen">
          <Sidebar activeIndex={activeIndex} handleClick={handleClick} />
          <main className="content w-full p-[1rem] md:p-[2rem] overflow-x-hidden">
            <Routes>
              <Route
                path="/blog-portfolio/"
                element={<Introduction setActiveIndex={setActiveIndex} />}
              />
              <Route
                path="/blog-portfolio/gallery"
                element={<Gallery setActiveIndex={setActiveIndex} />}
              />
              {ProjectDetail.map((project, index) => {
                return (
                  <Route
                    key={index}
                    path={project.path}
                    element={
                      <ProjectPage
                        setActiveIndex={setActiveIndex}
                        ProjectDetail={project.detail}
                      />
                    }
                  />
                );
              })}
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

const ProjectDetail = [
  {
    path: "blog-portfolio/gallery/auto-scroll-up-transition",
    detail: [
      {
        title: "Auto Scroll Up Transition",
        description:
          "A cool loading transition for your website developed using React JS, TailwindCSS, GSAP.",
        tag: "transition",
        date: "July 11, 2024",
        timeTaken: "Medium",
        difficulty: "Intermediate",
        links: [
          {
            name: "Demo",
            link: "https://github.com",
          },
          {
            name: "Source Code",
            link: "https://github.com",
          },
        ],
        images: [
          {
            img: "../Intro Home-section001.webp",
          },
        ],
        video: [
          {
            available: true,
            video: "../Intro Home-section1.mp4",
          },
        ],
        value: 11,
      },
    ],
  },
  {
    path: "/blog-portfolio/gallery/furniture-landing-page",
    detail: [
      {
        title: "Furniture Landing Page",
        description:
          "An awwwards like landing page for you furniture website with cool animation and smoothness. I developed it using React Js, TailwindCSS, GSAP.",
        tag: "landing page",
        date: "July 09, 2024",
        timeTaken: "Medium",
        difficulty: "Intermediate",
        links: [
          {
            name: "Demo",
            link: "https://codesamp-rohan.github.io/Furniture-Landing-Page/",
          },
          {
            name: "Source Code",
            link: "https://github.com/Codesamp-Rohan/Furniture-Landing-Page",
          },
        ],
        images: [
          {
            img: "../LandingPage002.webp",
          },
          {
            img: "../LandingPage001.webp",
          },
        ],
        video: [
          {
            available: false,
            video: "",
          },
        ],
        value: 11,
      },
    ],
  },
  {
    path: "/blog-portfolio/gallery/text-image-parallax",
    detail: [
      {
        title: "Text Image Parallax",
        description:
          "A horizontal marquee move on scroll with change in the boldness of the font. Developed using React Js, TailwindCSS and GSAP.",
        tag: "parallax",
        date: "July 06, 2024",
        timeTaken: "Medium",
        difficulty: "Intermediate",
        links: [
          {
            name: "Demo",
            link: "https://codesamp-rohan.github.io/text-image-parallax/",
          },
          {
            name: "Source Code",
            link: "https://github.com/Codesamp-Rohan/text-image-parallax",
          },
        ],
        images: [
          {
            img: "../Text Image Parallax.webp",
          },
        ],
        video: [
          {
            available: false,
            video: "",
          },
        ],
        value: 11,
      },
    ],
  },
  {
    path: "/blog-portfolio/gallery/full-screen-menu",
    detail: [
      {
        title: "Full Screen Menu",
        description: "A simple auto scroll up transition on scroll.",
        tag: "menu",
        date: "July 06, 2024",
        timeTaken: "Low",
        difficulty: "Easy",
        links: [
          {
            name: "Demo",
            link: "https://codesamp-rohan.github.io/full-page-menu/",
          },
          {
            name: "Source Code",
            link: "https://github.com/Codesamp-Rohan/full-page-menu",
          },
        ],
        images: [
          {
            img: "../menu1.webp",
          },
        ],
        video: [
          {
            available: true,
            video: "../menu1 video.mp4",
          },
        ],
        value: 41,
      },
    ],
  },
  {
    path: "/blog-portfolio/gallery/sonar-menu",
    detail: [
      {
        title: "Sonar Menu",
        description: "A cool awwwards like menu animation.",
        tag: "menu",
        date: "July 18, 2024",
        timeTaken: "Low",
        difficulty: "Easy",
        links: [
          {
            name: "Demo",
            link: "https://codesamp-rohan.github.io/full-page-menu/",
          },
          {
            name: "Source Code",
            link: "https://github.com/Codesamp-Rohan/full-page-menu",
          },
        ],
        images: [
          {
            img: "",
          },
        ],
        video: [
          {
            available: true,
            video: "../sonar-menu.mp4",
          },
        ],
        value: 41,
      },
    ],
  },
  {
    path: "/blog-portfolio/gallery/deploy-clone",
    detail: [
      {
        title: "Awwwards Deploy Clone",
        description: "A simple auto scroll up transition on scroll.",
        tag: "landing page",
        date: "July 15, 2024",
        timeTaken: "Intermediate",
        difficulty: "Hard",
        links: [
          {
            name: "Demo",
            link: "https://codesamp-rohan.github.io/deploy-clone/",
          },
          {
            name: "Source Code",
            link: "https://github.com/Codesamp-Rohan/deploy-clone",
          },
        ],
        images: [
          {
            img: "../deploy001.webp",
          },
          {
            img: "../deploy002.webp",
          },
          {
            img: "../deploy003.webp",
          },
        ],
        video: [
          {
            available: true,
            video: "../deployVideo.mp4",
          },
        ],
        value: 41,
      },
    ],
  },
];

export default App;
