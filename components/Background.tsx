"use client";
import React from "react";
import TestimonialsImage from "./TestimonialsImage";
import Testimonials from "./Testimonials";
import testimonials from "@/constants/testimonials";
const Background = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <div>
        <div className="relative rotate-180  w-0 h-0 border border-b-[#F5F5FF] border-x-[transparent] border-t-transparent border-x-[700px] border-b-[600px] ">
          <div className="absolute top-[400px]  left-[50%] transform -translate-x-1/2 rotate-180 w-fit">
            <h1 className="secondary-heading-gradient font-bold text-4xl text-center">
              Testimonials
            </h1>
            <p className="text-[#000000] mt-8 w-[70ch] text-center text-base">
              Check how happy our users are! AdCreative.ai is selected as a 2022
              Leader in it’s category by G2 and 2nd best product by Product
              Hunt!
            </p>
          </div>
          <div className="absolute right-[467px] top-[120px] rotate-[49.5deg]  w-0 h-0 border border-b-[#332b5480] border-x-[transparent] border-t-transparent border-x-[25px] border-b-[600px] "></div>
          <div className="absolute left-[467px] top-[120px] -rotate-[49.5deg]  w-0 h-0 border border-b-[#332b5480] border-x-[transparent] border-t-transparent border-x-[25px] border-b-[600px] "></div>
        </div>
      </div>

      <Testimonials testimonials={testimonials}></Testimonials>
    </div>
  );
};

export default Background;
