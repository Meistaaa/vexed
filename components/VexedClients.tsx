import clients from "@/constants/clients";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const VexedClients = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-16 mb-32">
      <div className="circle5 absolute left-0 -top-48 w-[753px] opacity-30 h-[753px] rounded-full blur-md -z-1"></div>
      <div className="circle1 absolute top-20 -right-24 w-[344px] opacity-90 h-[344px] rounded-full blur-sm -z-1"></div>
      <div className=" h-fit hero-gradient p-12 border border-1 border-white rounded-3xl">
        <h1 className=" secondary-heading-gradient text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-center ">
          Vexed Solutions Clients
        </h1>
        <p className="text-[#000000] mt-4 text-sm sm:text-base md:text-lg  text-center  w-[35ch] sm:w-[50ch] md:w-[70ch]">
          We go the extra mile to ensure everyone feels safe, valued and
          motivated in the workspace
        </p>
      </div>
      <div className="z-10 hero-gradient w-fit mt-8 py-8 px-4  border-[1px] border-white rounded-3xl max-w-xs sm:max-w-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="  ">
          <Carousel className="flex items-center justify-start gap-2">
            <CarouselPrevious></CarouselPrevious>
            <CarouselContent className=" flex ">
              <CarouselItem className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bg-white snap-center h-20 w-[200px] rounded-3xl flex flex-col items-center justify-center gap-4 drop-shadow-sm ">
                  <img src="vexed.svg" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bg-white snap-center h-20 w-[200px] rounded-3xl flex flex-col items-center justify-center gap-4 drop-shadow-sm ">
                  <img src="vexed.svg" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bg-white snap-center h-20 w-[200px] rounded-3xl flex flex-col items-center justify-center gap-4 drop-shadow-sm ">
                  <img src="vexed.svg" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bg-white snap-center h-20 w-[200px] rounded-3xl flex flex-col items-center justify-center gap-4 drop-shadow-sm ">
                  <img src="vexed.svg" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bg-white snap-center h-20 w-[200px] rounded-3xl flex flex-col items-center justify-center gap-4 drop-shadow-sm ">
                  <img src="vexed.svg" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bg-white snap-center h-20 w-[200px] rounded-3xl flex flex-col items-center justify-center gap-4 drop-shadow-sm ">
                  <img src="vexed.svg" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bg-white snap-center h-20 w-[200px] rounded-3xl flex flex-col items-center justify-center gap-4 drop-shadow-sm ">
                  <img src="vexed.svg" alt="" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext></CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default VexedClients;
