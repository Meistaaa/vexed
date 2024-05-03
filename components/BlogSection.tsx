import Link from "next/link";
import VexedClients from "./VexedClients";

const BlogSection = () => {
  return (
    <div className="my-16 max-w-screen-2xl">
      <div>
        <h1 className="secondary-heading-gradient text-4xl font-bold text-center">
          Vexed Blog Section
        </h1>
        <p className="text-[#000000B2] mt-4 text-lg text-center  ">
          We go the extra mile to ensure everyone feels safe, valued and
          motivated in the workspace
        </p>
      </div>
      <div className="mt-12 flex items-center justify-center flex-wrap gap-8">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="h-fit hero-gradient  p-4 border border-1 border-white  rounded-3xl flex flex-col drop-shadow-md"
          >
            <div className="bg-white p-3 rounded-xl">
              <div className="mb-1 flex gap-2 ml-2">
                <div className="rounded-full w-3 h-3 bg-[#98939365]"></div>
                <div className="rounded-full w-3 h-3 bg-[#98939365]"></div>
                <div className="rounded-full w-3 h-3 bg-[#98939365]"></div>
              </div>
              <div className="w-64 h-48 bg-gray rounded-xl"></div>
            </div>
            <div className="ml-1">
              <h2 className="text-lightBlue  text-xl mt-4 font-semibold">
                See Creative Insights
              </h2>
              <p className="text-[#26266680]  text-base mt-4  w-64">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s,
              </p>
              <Link href="#">
                <div className="flex gap-1 items-center mt-2">
                  <p className="text-sm">Learn More </p>
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
