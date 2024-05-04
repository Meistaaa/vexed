import card from "@/constants/cards";
import Card from "./Card";

const Services = () => {
  return (
    <div className="max-w-screen-2xl my-16 flex-col gap-32">
      <div className="mb-32 flex items-center justify-center flex-col">
        <h1 className="secondary-heading-gradient text-xl md:text-2xl text-4xl font-bold text-center ">
          Vexed Solution Services
        </h1>
        <p className="text-gray mt-4 text-sm md:text-lg lg:max-w-[80ch] text-center">
          Whether you’re a Fortune 500 or a startup in stealth vexed solutions
          give creative, technical and business talent you need to succeed
        </p>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-8">
        {card.map((item) => (
          <div key={item.title} className="flex items-center justify-center">
            <Card title={item.title} img={item.img} desc={item.desc}></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
