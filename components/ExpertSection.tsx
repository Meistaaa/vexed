import experts from "@/constants/experts";
import Button from "./Button";

const ExpertSection = () => {
  return (
    <div className=" flex flex-col items-center justify-center mt-16 mb-32">
      <div className="relative h-fit hero-gradient p-12 border border-1 border-white rounded-3xl">
        <h1 className=" secondary-heading-gradient text-4xl font-bold text-center ">
          Why vexed experts
        </h1>
        <p className="text-[#000000] mt-4 text-lg text-center  w-[70ch]">
          We go the extra mile to ensure everyone feels safe, valued and
          motivated in the workspace
        </p>
        <div className="absolute -z-10  blur-[2px] -left-12 -top-12 circle3 h-24 w-24 rounded-full"></div>
      </div>
      <div className="h-fit relative hero-gradient  p-12 border border-1 border-white mt-12 rounded-3xl ">
        <div className="flex items-center justify-center gap-8 my-12">
          <Button name="Values"></Button>
          <Button name="Industries"></Button>
          <Button name="Technologies"></Button>
        </div>
        <div className="flex items-center justify-between gap-8 flex-wrap">
          {experts.map((item) => (
            <div
              key={item.name}
              className="bg-white h-56 w-56 rounded-3xl flex flex-col items-center justify-center gap-4 drop-shadow-sm "
            >
              <img src={item.img} alt="" />
              <h1 className="text-primary text-2xl font-semibold">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
        <div className="absolute -z-[999999]  blur-[2px] -left-32 -bottom-24 circle2 h-64 w-64 rounded-full"></div>
        <div className="absolute -z-[999999]  blur-[2px] -right-32 -top-24 circle1 h-64 w-64 rounded-full"></div>
      </div>
    </div>
  );
};

export default ExpertSection;
