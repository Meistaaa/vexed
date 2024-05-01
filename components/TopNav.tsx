// import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
// import social, { SocialLink } from "constants/data";
import social, { SocialLink } from "@/constants/topNav";
import Image from "next/image";

const TopNav = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <span className="flex rounded-lg bg-primary-dark p-2">
              {/* <PhoneIcon
                  className="md:h-6 md:w-6 h-3 w-3 text-white"
                  aria-hidden="true"
                /> */}
              <Image
                src={"phone.svg"}
                alt="phone icon"
                height={3}
                width={3}
                className="md:h-6 md:w-6"
              />
            </span>
            <p className="truncate font-medium text-primary text-sm">
              <span className="md:hidden text-[12px]">+92-320-3337400</span>
              <span className="hidden md:inline">+92-320-3337400</span>
            </p>
          </div>
          <div className="flex items-center">
            <span className="flex rounded-lg bg-primary-dark p-2">
              {/* <MapPinIcon
                  className="md:h-6 md:w-6 h-3 w-3 text-white"
                  aria-hidden="true"
                /> */}
              <Image
                src={"info.svg"}
                alt="phone icon"
                height={3}
                width={3}
                className="md:h-6 md:w-6"
              />
            </span>
            <p className=" truncate font-medium text-primary text-sm">
              <span className="md:hidden text-[12px]">
                info@vexedsolutions.com
              </span>
              <span className="hidden md:inline">info@vexedsolutions.com</span>
            </p>
          </div>
          <div className="flex items-center">
            <span className="flex rounded-lg bg-primary-dark p-2">
              {/* <PhoneIcon
                  className="md:h-6 md:w-6 h-3 w-3 text-white"
                  aria-hidden="true"
                /> */}
              <Image
                src={"map.svg"}
                alt="phone icon"
                height={3}
                width={3}
                className="md:h-6 md:w-6"
              />
            </span>
            <p className=" truncate font-medium text-primary text-sm">
              <span className="md:hidden text-[12px]">+92-320-3337400</span>
              <span className="hidden md:inline">+92-320-3337400</span>
            </p>
          </div>
        </div>
        <div className="mt-2 w-full gap-4 flex sm:mt-0 sm:w-auto justify-around">
          {social.map((item: SocialLink) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-100"
            >
              <span className="sr-only">{item.name}</span>
              <Image
                src={item.icon}
                height={6}
                width={6}
                className="md:h-6 md:w-6"
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
