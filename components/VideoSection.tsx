import Image from "next/image";

const VideoSection = () => {
  return (
    <div className="max-w-screen-2xl overflow-hidden ">
      <div className="py-16 ">
        <h2 className="font-semibold text-4xl text-center text-white mb-4">
          Generate ad creatives that help you sell. Fast.
        </h2>
        <h1 className="text-center text-red text-6xl font-bold mb-2">
          Using Artificial Intelligence
        </h1>
        <p className="text-lightGray mt-4 text-lg text-center mb-24">
          In 2023, every single thing in Digital Marketing is optimized by
          Artificial Intelligence, except Creatives. Vexed solution{" "}
        </p>
        <div className="flex items-center justify-center ">
          <div className="p-4 flex items-center justify-center w-[1134px] h-[567px] video-background-gradient rounded-[20px]">
            <div className="border-8 flex items-center justify-center border-white  bg-[#D9D9D9] h-[100%] rounded-[20px] w-[100%]">
              <button
                type="button"
                className="w-24 h-24 relative bg-white flex items-center justify-center rounded-full  "
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
  );
};

export default VideoSection;
