const Footer = () => {
  return (
    <footer className="w-screen ppm h-[60vh] bg-[#fff] text-[#777] border-t-[0.4px] border-[#bbb] p-[2rem]">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-2 w-fit">
          <p className="font-bold ppe text-[32px]">
            Subscribe to the newsletter to get
            <br /> the latest update.
          </p>
          <span className="flex flex-col gap-1">
            <input
              className="p-2 rounded-full ring-1 ring-[#6779ff] bg-[#fff]"
              placeholder="Email"
            />
            <button className="uppercase font-bold ring-1 ring-[#6779ff] bg-[#cbd1ff] hover:bg-[#b4bcff] py-2 px-6 rounded-full text-[#3e54ff]">
              subscribe
            </button>
          </span>
        </div>
        <div className="flex gap-4">
          <a href="https://instagram.com/rohan_chaudharygadda" target="_blank">
            Instagram
          </a>
          <a href="mailto:rohanchaudhary.bkbiet2022@gmail.com" target="_blank">
            Gmail
          </a>
          <a href="https://codesamprohan.me" target="_blank">
            Portfolio
          </a>
          <a href="https://github.com/codesamp-rohan" target="_blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rohan-chaudhary-399742255/"
            target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
