import React from "react";

const Card = ({
  title,
  img,
  desc,
}: {
  title: string;
  img: string;
  desc: string;
}) => {
  return (
    <div className="h-fit md:h-72 w-72 relative border-4 border-white px-4 rounded-3xl mb-8">
      <div className="pt-12 mb-4">
        <h1 className="font-bold secondary-heading-gradient text-lg md:text-xl  lg:text-2xl uppercase text-center tracking-tight my-1 mb-4">
          {title}
        </h1>
        <p className="text-center text-primary text-xs md:text-base tracking-wide font-normal ">
          {desc}
        </p>
      </div>
      <div className="absolute  left-24 -top-12 card-gradient h-[88px] w-[88px] p-2  border-[0.2px] border-white rounded-xl">
        <div className=" card-img-gradient p-3 rounded-xl flex items-center h-fit  justify-center">
          <img src={img} alt="frame" />
        </div>
      </div>
    </div>
  );
};

export default Card;
