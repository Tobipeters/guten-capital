"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/images/logo/Logo-White.svg";
import MenuIcon from "../../../../public/images/icons/menu.svg";
import { GcButton } from "../button";
import React from "react";
import NavPattern from "../../../../public/images/pattern.png";

export const Nav = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <nav className="bg-[#292828] relative flex items-center h-12 px-4 lg:h-24">
      <div className="container flex items-center ">
        <Link className="relative h-5 w-16 lg:h-[44px] lg:w-[140px]" href={"/"}>
          <Image
            src={Logo}
            alt="Guten capital logo"
            fill
            quality={100}
            className=""
          />
        </Link>

        <ul
          style={{
            backgroundImage: `url(${NavPattern.src})`,
          }}
          className={`${
            open
              ? "px-6 pt-[64px] inline-flex flex-col gap-10 items-start absolute w-full top-12 left-0 h-[calc(100vh-48px)] bg-gc_primary_500 z-50 lg:gap-0 lg:pt-0 lg:bg-transparent lg:w-fit lg:top-[unset] lg:h-[unset] lg:relative lg:flex-row"
              : "hidden lg:inline-flex"
          } text-white lg:mx-auto lg:text-base lg:inline-flex lg:items-center`}
        >
          <li className="text-[2.25rem] h-fit text-center font-extrabold lg:text-base lg:font-bold lg:leading-[1.5rem] lg:w-[150px] lg:h-full">
            Home
          </li>
          <li className="text-[2.25rem] h-fit text-center font-extrabold lg:text-base lg:font-bold lg:leading-[1.5rem] lg:w-[150px] lg:h-full">
            About us
          </li>
        </ul>

        <button
          onClick={handleToggle}
          className={`${
            open ? "border-gc_primary_900 bg-gc_primary_500" : ""
          } !outline-none absolute right-0 text-white text-xs inline-flex gap-1 items-center border-l border-[#FFFFFF4D] p-4 lg:hidden`}
        >
          <Image src={MenuIcon} alt="menu icon" width={16} height={16} />
          Menu
        </button>

        <div className="hidden lg:block">
          <GcButton variant="primaryOutline" text="Contact us" />
        </div>
      </div>
    </nav>
  );
};
