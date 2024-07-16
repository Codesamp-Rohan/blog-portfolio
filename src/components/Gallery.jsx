import Uploads from "../components/Uploads";

const Gallery = ({ setActiveIndex }) => {
  return (
    <div className="flex flex-col w-full h-full overflow-y-scroll home">
      <h1 className="font-bold text-[1.5rem] mb-[20px]">All the Projects</h1>
      <div className="flex flex-wrap gap-[1rem]">
        {gallery.map((upload, i) => {
          return (
            <Uploads
              key={i}
              index={upload.index}
              link={upload.link}
              image={upload.image}
              date={upload.date}
              tag={upload.tag}
              title={upload.title}
              description={upload.description}
              value={upload.value}
              setActiveIndex={setActiveIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

const gallery = [
  {
    title: "Auto Scroll Up Transition",
    description:
      "A loading screen transition with name which is animated and removed by two boxes coming from down. This effect is made using React Js, TailwindCSS, GSAP.",
    tag: "transition",
    image: "./Projects/Intro Home-section/Intro Home-section001.webp",
    date: "July 11, 2024",
    link: "./auto-scroll-up-transition",
    value: 11,
  },
  {
    title: "Furniture Website Landing Page",
    description:
      "A loading screen transition with name which is animated and removed by two boxes coming from down. This effect is made using React Js, TailwindCSS, GSAP.",
    tag: "landing page",
    image: "./Projects/Landing Page/LandingPage002.webp",
    date: "July 09, 2024",
    link: "./furniture-landing-page",
    value: 31,
  },
  {
    title: "Awwwards Deploy Clone",
    description:
      "A loading screen transition with name which is animated and removed by two boxes coming from down. This effect is made using React Js, TailwindCSS, GSAP.",
    tag: "landing page",
    image: "./Projects/Landing Page/deploy001.webp",
    date: "July 15, 2024",
    link: "./deploy-clone",
    value: 32,
  },
  {
    title: "Text Image Parallax",
    description:
      "A loading screen transition with name which is animated and removed by two boxes coming from down. This effect is made using React Js, TailwindCSS, GSAP.",
    tag: "parallax",
    image: "./Projects/Parallax/Text Image Parallax.webp",
    date: "July 09, 2024",
    link: "./text-image-parallax",
    value: 21,
  },
  {
    title: "Full Screen Menu",
    description:
      "A loading screen transition with name which is animated and removed by two boxes coming from down. This effect is made using React Js, TailwindCSS, GSAP.",
    tag: "menu",
    image: "./Projects/Menu/menu1.webp",
    date: "July 08, 2024",
    link: "./full-screen-menu",
    value: 21,
  },
];

export default Gallery;
