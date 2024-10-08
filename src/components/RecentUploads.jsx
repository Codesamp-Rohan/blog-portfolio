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
    title: "Hyperspace Landing Page",
    description:
      "A landing page for a furniture business with animation and effects. This effect is made using React Js, TailwindCSS, GSAP.",
    tag: "landing page",
    image: "./LandingPage003a.webp",
    date: "July 11, 2024",
    link: "./gallery/hyperspace-landing-page",
    value: 33,
  },
  {
    title: "Awwwards Deploy Clone",
    description:
      "An Awwwards website clone which is completely focus on recycling the garbage and make the better world, the website name is Deploy and developed it using React Js, TailwindCSS, GSAP, Locomotive-Scroll",
    tag: "landing page",
    image: "./deploy001.webp",
    date: "July 15, 2024",
    link: "./gallery/deploy-clone",
    value: 32,
  },
  {
    title: "Auto Scroll Up Transition",
    description:
      "A loading screen transition with name which is animated and removed by two boxes coming from down. This effect is made using React Js, TailwindCSS, GSAP.",
    tag: "transition",
    image: "./Intro Home-section001.webp",
    date: "July 11, 2024",
    link: "./gallery/auto-scroll-up-transition",
    value: 11,
  },
];

export default RecentUploads;
