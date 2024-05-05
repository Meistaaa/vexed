const WhyVexed = () => {
  return (
    <>
      <div className="mt-16 flex flex-col items-center justify-center ">
        <h1 className=" secondary-heading-gradient text-xl md:text-2xl lg:text-4xl font-bold text-center ">
          Why Vexed Solutions
        </h1>
        <div>
          <div className="relative rounded-full bg-white  h-[220px] w-[220px] flex flex-col items-center mt-8">
            <h1 className="lg:text-4xl md:text-2xl text-lg mt-2 md:mt-4 lg:mt-8  font-medium text-lightBlue">
              Since
            </h1>
            <h1 className="heading-gradient mt-2 lg:mt-4  font-bold text-2xl text-center md:text-4xl lg:text-6xl">
              2008
            </h1>
            <div className=" absolute -left-32 top-28  bg-white w-[200px] h-[191px] rounded-t-[40px] rounded-b-[12px]">
              <div>
                <img src="vexed.svg" alt="" />
              </div>
            </div>
            <div className="absolute left-8 top-96 w-12 h-12 border-2 border-dotted rounded-full">
              2
            </div>
            <div className=" absolute right-8 top-96 w-12 h-12 border-2 border-dotted rounded-full">
              3
            </div>
            <div className="absolute -bottom-5 w-12 h-12 border-2 border-dotted rounded-full">
              4
            </div>
            <div className=" absolute -right-8 top-48 w-12 h-12 border-2 border-dotted rounded-full"></div>
          </div>
        </div>
      </div>
      <div className=" relative flex justify-center items-center w-[500px] h-[500px] border-2 border-dotted rounded-full">
        <div className=" absolute -left-32 top-28  bg-white w-[200px] h-[191px] rounded-t-[40px] shape">
          <div>
            <img src="vexed.svg" alt="" />
          </div>
        </div>
        <div className="absolute left-8 top-96 w-12 h-12 border-2 border-dotted rounded-full">
          2
        </div>
        <div className=" absolute right-8 top-96 w-12 h-12 border-2 border-dotted rounded-full">
          3
        </div>
        <div className="absolute -bottom-5 w-12 h-12 border-2 border-dotted rounded-full">
          4
        </div>
        <div className=" absolute -right-8 top-48 w-12 h-12 border-2 border-dotted rounded-full"></div>
      </div>
    </>
  );
};

export default WhyVexed;
