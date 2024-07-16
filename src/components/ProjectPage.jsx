import { Link } from "react-router-dom";

const ProjectPage = ({ ProjectDetail, setActiveIndex }) => {
  return (
    <div className="home md:px-1 w-full h-full overflow-y-scroll flex flex-col gap-6">
      {ProjectDetail.map((project, index) => {
        return (
          <>
            <div key={index} className="flex flex-col gap-[10px]">
              <Link
                to="/blog-portfolio/gallery"
                className="flex items-center gap-1 text-[14px] text-[#4f576c]"
                onClick={() => setActiveIndex(1)}>
                <img className="w-[10px]" src="../left-arrow.png"></img>go back
              </Link>
              <div className="my--section flex items-center gap-[10px]">
                <img
                  className="w-[40px] rounded-full bg-[#6B946F]"
                  src="../snapRohan.png"
                  loading="lazy"></img>
                <span>
                  <p className="text-[#4f576c]">Rohan Chaudhary</p>
                  <span className="text-[10px] flex items-center gap-2 font-bold text-[#524f4f]">
                    <p>{project.date}</p>/<p>{project.difficulty}</p>/
                    <p>{project.timeTaken}</p>
                  </span>
                </span>
              </div>
            </div>
            <h1 className="text-[24px] font-bold">{project.title}</h1>
            <p className="text-[#777] w-[90%]">{project.description}</p>
            <span className="flex gap-4">
              {project.links.map((link, index) => {
                return (
                  <Link
                    key={index}
                    to={link.link}
                    target="_blank"
                    className="flex items-center gap-[8px] w-fit px-3 p-2 hover:ring-1 hover:ring-[#846eff] cursor-pointer font-medium text-[#846eff] bg-[#e9e5ff] rounded-xl">
                    {link.name}
                    <img className="w-[10px]" src="../link.png"></img>
                  </Link>
                );
              })}
            </span>
            {project.images.map((image, index) => {
              return (
                <img
                  key={index}
                  className="md:w-[90%] rounded-xl border-[0.5px] border-[#000]"
                  src={image.img}
                  loading="lazy"></img>
              );
            })}
            {project.video.map((video, index) => {
              return (
                <video
                  key={index}
                  className={`md:w-[90%] rounded-xl border-[0.5px] border-[#000] mb-[100px] ${
                    video.available
                      ? `h-full`
                      : `h-0 opacity-0 pointer-events-none`
                  }`}
                  src={video.video}
                  loading="lazy"
                  autoPlay
                  muted
                  loop></video>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default ProjectPage;
