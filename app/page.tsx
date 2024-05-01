import Background from "@/components/Background";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TestimonialsImage from "@/components/TestimonialsImage";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="background-gradient h-fit ">
        <HeroSection></HeroSection>
      </div>
      <div className="bg-bgBlue h-[983px] overflow-hidden flex items-center justify-center">
        <VideoSection></VideoSection>
      </div>
      <div className="h-[983px] new-gradient flex items-center justify-center">
        <Services></Services>
      </div>
      <div className="bg-bgBlue flex flex-col items-center  h-[1440px] overflow-hidden">
        <Background></Background>
      </div>
    </div>
  );
}
