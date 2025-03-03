import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/logo/Logo-White.svg";
import MenuIcon from "../../assets/images/icons/menu.svg";
import { GcButton } from "../button";

export const Nav = () => {
  return (
    <nav className="bg-[#292828] flex items-center h-12 px-4 md:px-0 md:h-18 lg:h-24">
      <div className="container flex items-center">
        <Link className="relative h-5 w-16 md:h-[44px] md:w-[140px]" href={"/"}>
          <Image
            src={Logo}
            alt="Guten capital logo"
            fill
            quality={100}
            className=""
          />
        </Link>

        <ul className="hidden text-white md:mx-auto md:text-base md:inline-flex md:items-center ">
          <li className="h-full text-center md:font-bold md:leading-[1.5rem] md:w-[150px]">
            Home
          </li>
          <li className="h-full text-center md:font-bold md:leading-[1.5rem] md:w-[150px]">
            About us
          </li>
        </ul>

        <button className="ml-auto text-white text-xs inline-flex gap-1 items-center border-l border-[#FFFFFF4D] p-4 pr-0 md:hidden">
          <Image src={MenuIcon} alt="menu icon" width={16} height={16} />
          Menu
        </button>

        <div className="hidden md:block">
          <GcButton variant="primaryOutline" text="Contact us" />
        </div>
      </div>
    </nav>
  );
};
