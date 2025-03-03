import Image from "next/image";
import Logo from "@/app/assets/images/logo/Logo-White.svg";
import FbIcon from "@/app/assets/images/icons/facebook.svg";
import LinkedinIcon from "@/app/assets/images/icons/Linkedin.svg";
import TwitterIcon from "@/app/assets/images/icons/twitter.svg";
import IGIcon from "@/app/assets/images/icons/instagram.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gc_primary_900">
      <div className="container w-full px-4 md:px-0">
        <div className="mx-auto flex items-center flex-col gap-2 pt-14 md:gap-4 md:pb-[120px]">
          <Image
            src={Logo}
            alt="Guten Capital logo"
            width={428}
            height={134}
            className="w-[162px] h-[51px] md:w-[350px] md:h-[100px] lg:w-[428px] lg:h-[134px]"
          />
          <p className="text-sm text-white text-center font-normal md:text-base">
            Reshaping the path to financial success for individuals and
            institutions
          </p>
        </div>

        <div className="text-white text-sm flex flex-col border-b border-white pb-4 lg:text-base lg:flex-row lg:items-center lg:justify-between">
          <ul className="inline-flex flex-wrap justify-center gap-4 pt-[94px] pb-[148px] md:items-center md:gap-6 md:py-0">
            <li className="w-1/3 md:w-[unset]">
            <Link href="" className="text-center inline-flex items-center gap-2">
              <Image
                src={TwitterIcon}
                alt="Twitter account Guten capical"
                width={20}
                height={20}
                className="w-[14px] h-[14px] md:w-5 md:h-5"
              />
              Twitter
              </Link>
            </li>
            <li className="w-1/3 md:w-[unset]">
            <Link href="" className="text-center inline-flex items-center gap-2">
              <Image
                src={FbIcon}
                alt="Facebook account Guten capical"
                width={20}
                height={20}
                className="w-[14px] h-[14px] md:w-5 md:h-5"
              />
              Facebook
              </Link>
            </li>
            <li className="w-1/3 md:w-[unset]">
            <Link href="" className="text-center inline-flex items-center gap-2">
              <Image
                src={LinkedinIcon}
                alt="LinkedIn account Guten capical"
                width={20}
                height={20}
                className="w-[14px] h-[14px] md:w-5 md:h-5"
              />
              LinkedIn
              </Link>
            </li>
            <li className="w-1/3 md:w-[unset]">
            <Link href="" className="text-center inline-flex items-center gap-2">
              <Image
                src={IGIcon}
                alt="Instagram account Guten capical"
                width={20}
                height={20}
                className="w-[14px] h-[14px] md:w-5 md:h-5"
              />
              Instagram
              </Link>
            </li>
          </ul>

          <div className="inline-flex justify-center items-center">
            <a href="mailto:gutencapital@gmai.com">gutencapital@gmai.com</a>
            &nbsp; |&nbsp;
            <a href="tel:2348121717629">+2348121717629</a>
          </div>
        </div>

        <div className="text-sm text-center text-white font-normal pt-4 pb-8 md:text-base md:py-6">
          &copy; Copyright {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
