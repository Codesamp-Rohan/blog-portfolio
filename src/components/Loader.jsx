const Loader = () => {
  return (
    <div className="fixed flex items-center justify-center w-screen h-screen overflow-hidden text-[#022d42] z-[1000] bg-[#fff]">
      <p className="mb-[2rem]">my</p>
      <h1 className="font-bold text-[4rem]">Blog</h1>
      <div className="loader--animation w-[20px] mt-[2rem] h-[20px] bg-[#022d42] rounded-full"></div>
    </div>
  );
};

export default Loader;
