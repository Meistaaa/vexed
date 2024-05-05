"use client";
import Background from "@/components/Background";
import BlogSection from "@/components/BlogSection";
import ExpertSection from "@/components/ExpertSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import VideoSectionBackground from "@/components/VideoSectionBackground";
import WhyVexed from "@/components/WhyVexed";

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
      <div className="new-gradient flex flex-col items-center justify-center overflow-hidden">
        <WhyVexed></WhyVexed>
      </div>
      <div className=" new-gradient flex items-center justify-center">
        <FeaturesSection></FeaturesSection>
      </div>
      <div className="bg-bgBlue flex flex-col items-center pb-12 overflow-hidden">
        <Background></Background>
      </div>
      <div className="bg-[#F5F5FF]  overflow-hidden flex flex-col items-center justify-center">
        <BlogSection></BlogSection>
      </div>
    </div>
  );
}
