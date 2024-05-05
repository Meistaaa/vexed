import React from "react";

const FeaturesSection = () => {
  return (
    <div className="my-16 max-w-screen-2xl">
      <h1 className=" secondary-heading-gradient text-xl md:text-2xl lg:text-4xl font-bold text-center ">
        Featured Work
      </h1>
      <div className="mt-12 flex items-center justify-center flex-wrap gap-8">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="h-fit hero-gradient  p-4 border border-1 border-white  rounded-3xl"
          >
            <div className="bg-white p-3 rounded-xl">
              <div className="w-48 h-32 md:w-64 md:h-48 bg-gray rounded-xl"></div>
              <p className="text-lightBlue text-center text-base md:text-xl mt-2">
                See Vexed Insights
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
