// import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
// import social, { SocialLink } from "constants/data";
import social, { SocialLink } from "@/constants/topNav";
import Image from "next/image";

const TopNav = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-start md:justify-between md:gap-4 gap-0 ">
          <div className="flex items-center justify-center">
            <span className="flex rounded-lg bg-primary-dark p-2">
              <Image
                src={"phone.svg"}
                alt="phone icon"
                height={3}
                width={3}
                className="h-3 w-3 md:h-6 md:w-6"
              />
            </span>
            <p className="truncate font-medium text-primary ">
              <span className="text-[8px] sm-text-[10px] md:text-[12px]">
                +92-320-3337400
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <span className="flex rounded-lg bg-primary-dark p-2">
              <Image
                src={"info.svg"}
                alt="phone icon"
                height={3}
                width={3}
                className="h-3 w-3 md:h-6 md:w-6"
              />
            </span>
            <p className=" truncate font-medium text-primary text-sm">
              <span className="text-[8px] sm-text-[10px] md:text-[12px]">
                info@vexedsolutions.com
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <span className="flex rounded-lg bg-primary-dark p-2">
              <Image
                src={"map.svg"}
                alt="phone icon"
                height={3}
                width={3}
                className="h-3 w-3 md:h-6 md:w-6"
              />
            </span>
            <p className=" truncate font-medium text-primary text-sm">
              <span className="text-[8px] sm-text-[10px] md:text-[12px]">
                +92-320-3337400
              </span>
            </p>
          </div>
        </div>
        <div className="mt-2 w-full gap-4 flex ml-2 md:ml-0 sm:mt-0 sm:w-auto ">
          {social.map((item: SocialLink) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-100"
            >
              <Image
                src={item.icon}
                height={6}
                width={6}
                className="h-3 w-3 md:h-6 md:w-6"
                alt={item.name}
              ></Image>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TopNav;
