import Image from "next/image";

const VideoSectionBackground = () => {
  return (
    <div className="flex flex-col  ">
      <div className="self-center flex flex-col items-center justify-center pt-24">
        <h2 className="font-semibold  text-sm lg:text-4xl md:text-2xl text-center text-white mb-4">
          Generate ad creatives that help you sell. Fast.
        </h2>
        <h1 className="text-center text-red text-xl md:text-4xl  lg:text-6xl font-bold mb-2">
          Using Artificial Intelligence
        </h1>
        <p className="text-lightGray mt-4 text-xs md:text-sm lg:text-lg w-[40ch] md:w-[60ch] lg:w-full text-center mb-24">
          In 2023, every single thing in Digital Marketing is optimized by
          Artificial Intelligence, except Creatives. Vexed solution{" "}
        </p>
      </div>
      <div className="mt-auto">
        <div className="relative   w-0 h-0 border border-b-[#F5F5FF] border-x-[transparent] border-t-transparent border-x-[200px] border-b-[200px] md:border-x-[400px] md:border-b-[400px] lg:border-x-[700px] lg:border-b-[600px]">
          <div className="absolute  sm:top-[400px]  sm:left-[50%] transform -translate-x-1/2 rotate-180 w-fit"></div>
          <div className="z-0 absolute right-[280px] top-0 rotate-[46.5deg] md:right-[400px] md:top-[120px] lg:right-[467px] lg:top-[120px] md:rotate-[46.5deg] lg:rotate-[49.5deg]  w-0 h-0 border border-b-[#332b5480] border-x-[transparent] border-t-transparent border-x-[25px] border-b-[600px] "></div>
          <div className="z-0 absolute left-[280px] top-0 -rotate-[46.5deg] md:left-[400px] md:top-[120px] lg:left-[467px] lg:top-[120px] md:-rotate-[46.5deg] lg:-rotate-[49.5deg]  w-0 h-0 border border-b-[#332b5480] border-x-[transparent] border-t-transparent border-x-[25px] border-b-[600px] "></div>
          <div className="flex items-center justify-center z-30 ">
            <div className="p-4  absolute -top-[50px] flex items-center justify-center w-[350px] h-[200px] md:w-[780px] md:h-[400px] lg:w-[1024px] lg:h-[500px] xl:w-[1134px] xl:h-[567px] video-background-gradient rounded-[20px]">
              <div className="border-8 flex items-center justify-center border-white  bg-[#D9D9D9] h-[100%] rounded-[20px] w-[100%]">
                <button
                  type="button"
                  className="w-24 h-24 relative bg-white flex items-center justify-center rounded-full z-40 "
                >
                  <Image
                    src={"/polygon3.png"}
                    alt="polygon3"
                    height={48}
                    width={48}
                    className="ml-3"
                  ></Image>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSectionBackground;
