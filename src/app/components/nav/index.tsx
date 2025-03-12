"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/images/logo/logo.png";
import MenuIcon from "../../../../public/images/icons/menu.svg";
import { GcButton } from "../button";
import React from "react";
import NavPattern from "../../../../public/images/pattern.png";
import { GcModal } from "../modal";
import { ContactUs } from "../contact";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const Nav = () => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [openContact, setOpenContact] = React.useState(false);
  const [isLgScreen, setIsLgScreen] = React.useState(false);
  const HOME_URL = "/";
  const ABOUT_URL = "/about-us";

  // This effect will only run on the client side
  React.useEffect(() => {
    setIsLgScreen(window.innerWidth < 1024); // Update based on the screen size
  }, []);

  const menus = [
    { name: "Home", url: HOME_URL },
    { name: "About us", url: ABOUT_URL },
  ];

  const handleToggle = () => setOpen(!open);

  return (
    <nav className="bg-[#292828] relative flex items-center h-12 lg:h-24">
      <div className="container flex items-center px-4">
        <Link className="relative h-5 w-16 lg:h-[44px] lg:w-[140px]" href={"/"}>
          <Image
            src={Logo}
            alt="Guten capital logo"
            fill
            quality={100}
            className=""
          />
        </Link>

        <motion.ul
          initial={isLgScreen ? (open ? "visible" : "hidden") : "visible"}
          animate={isLgScreen ? (open ? "visible" : "hidden") : "visible"}
          variants={menuVariants}
          style={{
            backgroundImage: `url(${NavPattern.src})`,
          }}
          className={`${
            open
              ? "px-6 pt-[64px] inline-flex flex-col gap-10 items-start absolute w-full top-12 left-0 h-[calc(100vh-48px)] bg-gc_primary_500 z-50 lg:gap-0 lg:pt-0 lg:bg-transparent lg:w-fit lg:top-[unset] lg:h-[unset] lg:relative lg:flex-row"
              : "hidden lg:!inline-flex"
          } text-white lg:!bg-none lg:mx-auto lg:text-base lg:!inline-flex lg:items-center`}
        >
          {menus.map((menu, id) => (
            <li
              key={id}
              onClick={handleToggle}
              className={`text-center h-fit md:container md:text-left md:px-4 lg:w-[150px] lg:h-full lg:text-center relative ${
                pathname === menu.url
                  ? "text-gc_grey_800 lg:text-white lg:after:content-['']"
                  : "lg:after:content-none"
              } lg:after:absolute lg:after:w-[7px] lg:after:h-[6px] lg:after:bg-white lg:after:-bottom-2 lg:after:rounded-full lg:after:left-[50%] lg:after:ml-[-3.5px]`}
            >
              <Link
                href={menu.url}
                className="text-[2.25rem] font-extrabold lg:text-base lg:font-bold lg:leading-[1.5rem]"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </motion.ul>

        <button
          onClick={handleToggle}
          className={`${
            open ? "border-gc_primary_900 bg-gc_primary_500" : ""
          } !outline-none absolute right-0 text-white text-xs inline-flex gap-1 items-center border-l border-[#FFFFFF4D] p-4 md:relative md:ml-auto md:pr-5 lg:hidden`}
        >
          <Image src={MenuIcon} alt="menu icon" width={16} height={16} />
          Menu
        </button>

        <div className="hidden lg:block">
          <GcButton
            onClick={() => setOpenContact(true)}
            variant="primaryOutline"
            text="Contact us"
          />
        </div>
      </div>

      <GcModal
        title="Let's Talk"
        details="Talk to one of our experts today and unlock your financial future"
        open={openContact}
        handleClose={() => setOpenContact(false)}
      >
        <ContactUs />
      </GcModal>
    </nav>
  );
};
