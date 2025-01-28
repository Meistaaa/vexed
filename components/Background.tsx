"use client";
import React from "react";
import Testimonials from "./Testimonials";
import testimonials from "@/constants/testimonials";
const Background = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <div>
        <div className="relative rotate-180 w-0 h-0 border border-b-[#F5F5FF] border-x-[transparent] border-t-transparent border-x-[200px] border-b-[200px] md:border-x-[400px] md:border-b-[400px] lg:border-x-[500px] lg:border-b-[600px] xl:border-x-[700px] xl:border-b-[600pxl">
          <div className="absolute top-[120px] left-[50%] sm:top-[120px]  sm:left-[50%]  lg:top-[400px]  lg:left-[50%] md:top-[225px]  md:left-[50%] transform -translate-x-1/2 rotate-180 w-fit">
            <h1 className="secondary-heading-gradient font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl text-center">
              Testimonials
            </h1>
            <p className="text-[#000000] sm:mt-2 md:mt-4 lg:mt-8    w-[40ch] md:w-[50ch] lg:w-[70ch] xl:w-[80ch] text-center text-[8px] md:text-sm xl:text-base">
              Check how happy our users are! AdCreative.ai is selected as a 2022
              Leader in it’s category by G2 and 2nd best product by Product
              Hunt!
            </p>
          </div>

          <div className="z-0 absolute right-[280px] top-0 rotate-[45.68deg] md:right-[400px] md:top-[120px] lg:right-[325px] lg:top-[120px] xl:right-[467px] xl:top-[120px] md:rotate-[45.5deg] lg:rotate-[39deg] xl:rotate-[49.5deg]  w-0 h-0 border border-b-[#332b5480] border-x-[transparent] border-t-transparent border-x-[25px] border-b-[600px] "></div>
          <div className="z-0 absolute left-[280px] top-0 -rotate-[45.68deg] md:left-[400px] md:top-[120px] lg:left-[325px] lg:top-[120px] xl:left-[467px] xl:top-[120px] md:-rotate-[45.5deg] lg:-rotate-[39deg] xl:-rotate-[49.5deg]  w-0 h-0 border border-b-[#332b5480] border-x-[transparent] border-t-transparent border-x-[25px] border-b-[600px] "></div>
        </div>
      </div>

      <Testimonials testimonials={testimonials}></Testimonials>
    </div>
  );
};

export default Background;
