import clients from "@/constants/clients";

const VexedClients = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 mb-32">
      <div className=" h-fit hero-gradient p-12 border border-1 border-white rounded-3xl">
        <h1 className=" secondary-heading-gradient text-4xl font-bold text-center ">
          Vexed Solutions Clients
        </h1>
        <p className="text-[#000000] mt-4 text-lg text-center  w-[70ch]">
          We go the extra mile to ensure everyone feels safe, valued and
          motivated in the workspace
        </p>
      </div>
      <div className="flex items-center justify-between gap-8 flex-wrap hero-gradient p-12 border border-1 border-white rounded-3xl mt-8">
        <button className="bg-primary h-12 w-12 rounded-2xl text-white flex items-center justify-center">
          <img src="arrow.svg" alt="" className="h-6 w-6 rotate-180" />
        </button>
        <div className="flex items-center justify-between gap-8">
          {clients.map((item) => (
            <div
              key={item.img}
              className="bg-white snap-center h-20 w-56 rounded-3xl flex flex-col items-center justify-center gap-4 drop-shadow-sm "
            >
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
        <button className="bg-primary h-12 w-12 rounded-2xl text-white flex items-center justify-center">
          <img src="arrow.svg" alt="" className="h-6 w-6 " />
        </button>
      </div>
    </div>
  );
};

export default VexedClients;
