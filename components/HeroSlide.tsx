import Image from "next/image";
import React from "react";

const HeroSlide = () => {
  return (
    <div className="flex  items-center  justify-center gap-8 flex-wrap md:flex-none">
      <div className="bg-white drop-shadow-md flex items-center rounded-xl sm:w-24   lg:w-[149px] lg:h-[120px]  flex-col p-4">
        <button>Brand</button>
        <Image src={"/logo.png"} alt="logo" height={24} width={24}></Image>
      </div>
      <div className="bg-white flex  drop-shadow-md items-center rounded-xl sm:w-24 lg:w-[149px] lg:h-[120px]  flex-col p-4">
        <button>Brand</button>
        <Image src={"/logo.png"} alt="logo" height={24} width={24}></Image>
      </div>
      <div className="bg-white flex  drop-shadow-md items-center rounded-xl sm:w-24 lg:w-[149px] lg:h-[120px]  flex-col p-4">
        <button>Brand</button>
        <Image src={"/logo.png"} alt="logo" height={24} width={24}></Image>
      </div>
      <div className="bg-white flex  drop-shadow-md items-center rounded-xl sm:w-24 lg:w-[149px] lg:h-[120px]  flex-col p-4">
        <button>Brand</button>
        <Image src={"/logo.png"} alt="logo" height={24} width={24}></Image>
      </div>
    </div>
  );
};

export default HeroSlide;
