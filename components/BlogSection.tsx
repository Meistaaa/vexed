import Link from "next/link";
import VexedClients from "./VexedClients";

const BlogSection = () => {
  return (
    <div className="my-16 max-w-xs sm:max-w-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <div>
        <h1 className="secondary-heading-gradient text-lg sm:text-xl md:text-2xl lg:text-4xl  font-bold text-center">
          Vexed Blog Section
        </h1>
        <p className="text-[#000000B2] mt-4 text-sm sm:text-base md:text-lg  text-center    ">
          We go the extra mile to ensure everyone feels safe, valued and
          motivated in the workspace
        </p>
      </div>
      <div className="relative mt-12 flex items-center justify-center flex-wrap gap-8">
        <div className="circle4 absolute left-0 -top-48 w-[753px] h-[753px] opacity-50 rounded-full blur-md"></div>
        <div className="circle4 absolute bottom-0 -right-40 w-[753px] h-[753px] opacity-50 rounded-full blur-md"></div>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="h-fit w-fit hero-gradient z-10 p-4 border border-1 border-white  rounded-3xl flex flex-col drop-shadow-md"
          >
            <div className="bg-white h-fit w-fit p-3 rounded-xl">
              <div className="mb-1 flex gap-2 ml-2">
                <div className="rounded-full w-3 h-3 bg-[#98939365]"></div>
                <div className="rounded-full w-3 h-3 bg-[#98939365]"></div>
                <div className="rounded-full w-3 h-3 bg-[#98939365]"></div>
              </div>
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:h-64 lg:w-64 bg-gray rounded-xl"></div>
            </div>
            <div className="ml-1 max-w-40 sm:max-w-48 md:max-w-56 lg:max-w-64">
              <h2 className="text-lightBlue  text-sm sm:text-base md:text-lg  mt-4 font-semibold">
                See Creative Insights
              </h2>
              <p className="text-[#26266680]  text-xs sm:text-sm md:text-base mt-4 ">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s,
              </p>
              <Link href="#">
                <div className="flex gap-1 items-center mt-2">
                  <p className="text-xs md:text-sm">Learn More </p>
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 23 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 37L20 20L3 3"
                      stroke="black"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <VexedClients></VexedClients>
    </div>
  );
};

export default BlogSection;
