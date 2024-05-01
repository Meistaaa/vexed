import HeroContent from "./HeroContent";
import Navbar from "./Navbar";
import TopNav from "./TopNav";

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-screen-2xl py-3 px-3 sm:px-6 lg:px-8">
      <div className="mb-1">
        <TopNav></TopNav>
      </div>
      <div className="border-2 mb-4 border-white flex flex-col gap-4 hero-gradient  px-5 py-3 rounded-3xl h-fit">
        <div className=" border-[1px] drop-shadow-md border-white  sub-gradient h-max p-4 rounded-3xl">
          <Navbar></Navbar>
        </div>
        <div className="border-[1px]  border-white drop-shadow-sm sub-gradient h-max p-4 rounded-3xl">
          <HeroContent></HeroContent>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
