import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="ms-8 flex items-center justify-between">
      <div>
        <Image src={"/logo.png"} alt="logo" height={73} width={162}></Image>
      </div>
      <div className="flex items-center justify-between gap-8 text-primary font-semibold text-xl">
        <Link href="#">Home</Link>
        <Link href="#">Company</Link>
        <Link href="#">Services</Link>
        <Link href="#">Portfolio</Link>
        <Link href="#">Case Studies</Link>
        <Link href="#">Clients</Link>
        <Link href="#">Bugs</Link>
      </div>
      <div>
        <Button name={"Contact Us"}></Button>
      </div>
    </div>
  );
};

export default Navbar;
