import Uploads from "./Uploads";

const RecentUploads = ({ setActiveIndex }) => {
  return (
    <div className="flex flex-wrap gap-[1rem]">
      {recentUploads.map((upload, i) => {
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
  );
};

const recentUploads = [
  {
    title: "Awwwards Deploy Clone",
    description:
      "An Awwwards website clone which is completely focus on recycling the garbage and make the better world, the website name is Deploy and developed it using React Js, TailwindCSS, GSAP, Locomotive-Scroll",
    tag: "landing page",
    image: "./Projects/Landing Page/deploy001.webp",
    date: "July 15, 2024",
    link: "./gallery/deploy-clone",
    value: 32,
  },
  {
    title: "Auto Scroll Up Transition",
    description:
      "A loading screen transition with name which is animated and removed by two boxes coming from down. This effect is made using React Js, TailwindCSS, GSAP.",
    tag: "transition",
    image: "./Projects/Intro Home-section/Intro Home-section001.webp",
    date: "July 11, 2024",
    link: "./gallery/auto-scroll-up-transition",
    value: 11,
  },
  {
    title: "Furniture Website Landing Page",
    description:
      "A landing page for a furniture business with animation and effects. This effect is made using React Js, TailwindCSS, GSAP.",
    tag: "landing page",
    image: "./Projects/Landing Page/LandingPage002.webp",
    date: "July 11, 2024",
    link: "./gallery/furniture-landing-page",
    value: 31,
  },
];

export default RecentUploads;
