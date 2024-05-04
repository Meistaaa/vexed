"use client";
import Background from "@/components/Background";
import BlogSection from "@/components/BlogSection";
import Filter from "@/components/ClientCard";
import ExpertSection from "@/components/ExpertSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import VideoSectionBackground from "@/components/VideoSectionBackground";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div></div>
      <div className="background-gradient h-fit ">
        <HeroSection></HeroSection>
      </div>
      <div className="bg-bgBlue flex flex-col items-center justify-end  overflow-hidden">
        <VideoSectionBackground></VideoSectionBackground>
      </div>
      <div className=" new-gradient flex items-center justify-center">
        <Services></Services>
      </div>
      <div className="expert-section-gradient flex flex-col items-center justify-center overflow-hidden">
        <ExpertSection></ExpertSection>
      </div>
      <div className=" new-gradient flex items-center justify-center">
        <FeaturesSection></FeaturesSection>
      </div>
      <div className="bg-bgBlue flex flex-col items-center pb-12 overflow-hidden">
        <Background></Background>
      </div>
      {/* <div className="expert-section-gradient flex flex-col items-center justify-center">
        <BlogSection></BlogSection>
      </div> */}
      <div className="w-[1440px]"></div>
    </div>
  );
}
