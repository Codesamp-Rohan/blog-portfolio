import { Link } from "react-router-dom";

const Uploads = ({
  index,
  link,
  value,
  image,
  date,
  tag,
  title,
  description,
  setActiveIndex,
}) => {
  return (
    <div key={index} className="w-[100%] md:w-[350px] flex flex-col gap-2">
      <Link to={link} onClick={() => setActiveIndex(value)}>
        <img
          className="rounded-lg border-[0.4px] border-[#bbb] duration-300 hover:shadow-sm shadow-xl"
          src={image}
          loading="lazy"></img>
      </Link>
      <p className="text-[12px] text-[#444]">{date}</p>
      <p className="tag px-3 py-1 uppercase text-[10px] bg-[#eee] w-fit rounded-full">
        {tag}
      </p>
      <h1 className="font-bold">{title}</h1>
      <p className="text-[10px] text-justify">{description}</p>
    </div>
  );
};

export default Uploads;
