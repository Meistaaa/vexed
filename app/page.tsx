import Background from "@/components/Background";
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
      <div className="h-[983px] new-gradient flex items-center justify-center">
        <Services></Services>
      </div>
      <div className="bg-bgBlue flex flex-col items-center  h-[1440px] overflow-hidden">
        <Background></Background>
      </div>
    </div>
  );
}
