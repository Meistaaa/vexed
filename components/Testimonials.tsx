"use clients";
import React, { useState } from "react";
import TestimonialsImage from "./TestimonialsImage";
import testimonials, { TestimonialsType } from "@/constants/testimonials";

const Testimonials = ({
  testimonials,
}: {
  testimonials: TestimonialsType[];
}): React.ReactNode => {
  const [index, setIndex] = useState<number>(0);

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-[320px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-full">
      <div className="flex items-center justify-between">
        <div className="bg-lightPurple h-16 w-16 md:h-24 md:w-24 lg:h-24 lg:w-24 rounded-3xl flex items-center justify-center transform hover:scale-110 transition-transform">
          <button onClick={prev}>
            <img src="arrow.svg" alt="" className="rotate-180" />
          </button>
        </div>
        <TestimonialsImage image={testimonials[index].img} />
        <div className="bg-lightPurple  h-16 w-16 md:h-24 md:w-24 lg:h-24 lg:w-24 rounded-3xl flex items-center justify-center transform hover:scale-110 transition-transform">
          <button onClick={next}>
            <img src="arrow.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="mt-4 md:mt-12 lg:mt-16 flex flex-col items-center justify-center transition-all duration-500">
        <h1 className="text-center text-white text-xl md:text-2xl  lg:text-4xl font-semibold mb-1">
          {testimonials[index].name}
        </h1>
        <p className="text-lightGray   text-sm md:text-lg text-center mb-4 md:mb-8 w-[70ch]">
          {testimonials[index].title}
        </p>
        <h1 className="text-center text-red text-lg  md:text-4xl lg:text-6xl font-bold mb-4 md:mb-8">
          {testimonials[index].title}
        </h1>
        <p className="text-lightGray  text-[10px] md:text-lg text-center mb-4 md:mb-20 lg:mb-24 w-[25ch] md:w-[70ch]">
          {testimonials[index].desc}
        </p>
        <div className="flex items-center justify-center transition-all duration-500">
          {[...Array(5)].map((star, starIndex) => (
            <div key={starIndex}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`w-8 h-8 md:w-12 md:h-12 ${
                  testimonials[index].reviews > starIndex
                    ? "fill-[#FFD700]"
                    : "fill-[#D9D9D9]"
                }`}
              >
                <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
