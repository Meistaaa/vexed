import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  //Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" flex items-center justify-between gap-8">
      <div>
        <Image
          src={"/logo.png"}
          alt="logo"
          height={73}
          width={162}
          className="h-8 w-20 md:w-20 lg:h-[73px] lg:w-[162px] "
        ></Image>
      </div>
      <div className="hidden md:flex  md:items-center md:justify-between md:gap-2 lg:gap-4 text-primary font-semibold text-xl lg:text-[18px] md:text-xs">
        <Link href="#">Home</Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1">
            Company
            <div className="flex flex-col items-center pt-1">
              <img src="doubleArrows.svg" alt="" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white bg-opacity-[70%] rounded-3xl p-4   mt-2">
            <DropdownMenuItem className="text-lg cursor-pointer text-center transition duration-150 ease-in-out hover:bg-zinc-100 p-2">
              Profile
            </DropdownMenuItem>
            <div className="w-full bg-primary"> </div>
            <DropdownMenuItem className="text-lg cursor-pointer text-center transition duration-150 ease-in-out hover:button-gradient hover:bg-opacity-[100%] p-2">
              Team
            </DropdownMenuItem>
            <DropdownMenuItem className="text-lg cursor-pointer text-center transition duration-150 ease-in-out hover:bg-zinc-100  p-2">
              Subscription
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1">
            Services
            <div className="flex flex-col items-center pt-1">
              <img src="doubleArrows.svg" alt="" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white bg-opacity-[70%] rounded-3xl p-4   mt-2">
            <DropdownMenuItem className="text-lg cursor-pointer text-center transition duration-150 ease-in-out hover:bg-zinc-100 p-2">
              Profile
            </DropdownMenuItem>
            <div className="w-full bg-primary"> </div>
            <DropdownMenuItem className="text-lg cursor-pointer text-center transition duration-150 ease-in-out hover:button-gradient hover:bg-opacity-[100%] p-2">
              Team
            </DropdownMenuItem>
            <DropdownMenuItem className="text-lg cursor-pointer text-center transition duration-150 ease-in-out hover:bg-zinc-100  p-2">
              Subscription
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="#">Portfolio</Link>
        <Link href="#">Case Studies</Link>
        <Link href="#">Clients</Link>
        <Link href="#">Bugs</Link>
      </div>
      <div className="hidden md:block">
        <Button name={"Contact Us"}></Button>
      </div>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-align-justify"
        >
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
