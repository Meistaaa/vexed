import Button from "./Button";
import HeroSlide from "./HeroSlide";

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="lg:text-4xl md:text-2xl text-lg mt-2 md:mt-4 lg:mt-8  font-medium text-lightBlue">
        Artificial Intelligence powered
      </h2>
      <h1 className="heading-gradient mt-2 lg:mt-4  font-bold text-2xl md:text-4xl lg:text-6xl">
        Ad & Social Creatives
      </h1>
      <p className="text-gray mt-4 text-xs md:text-sm lg:text-lg max-w-[80ch] text-center">
        Generate conversion focused ad creatives and social media post creatives
        in a matter of seconds using Artificial Intelligence. Get better results
        while saving time.
      </p>
      <div className="mt-2 md:mt-4 lg:mt-8">
        <Button name={"Contact Us"}></Button>
      </div>
      <div className="border-2 my-2 my-2 lg:my-8  border-white  sub-gradient h-max w-fit p-4 rounded-xl">
        <HeroSlide></HeroSlide>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="w-3 h-3 bg-white rounded-full drop-shadow-md"></div>
        <div className="w-3 h-3 bg-white rounded-full drop-shadow-md"></div>
        <div className="w-3 h-3 bg-white rounded-full drop-shadow-md"></div>
      </div>
    </div>
  );
};

export default HeroContent;
