import Image from "next/image";
import AboutBg from "../../../../../public/images/about-us-bg.png";

export const Header = () => {
  return (
    <section className="container flex flex-col w-full gap-12 px-4 py-14 lg:py-20">
      <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-10/12">
        <div className="inline-flex flex-col gap-4 text-sm text-gc_secondary_900 font-normal leading-[1.65rem] lg:text-lg">
          ABOUT US
        </div>
        <h3 className="text-[2rem] text-gc_grey_800 font-bold leading-[2.4rem] lg:text-[3rem] xl:text-[3.5rem] xl:leading-[4.1rem]">
          <span className="text-gc_primary_500"> Reshaping</span> the path to{" "}
          <span className="text-gc_primary_500">financial success</span> for
          individuals and institutions
        </h3>
      </div>

      <div className="relative rounded-2xl overflow-hidden w-full h-[350px] lg:h-[650px]">
        <Image
          fill
          quality={100}
          src={AboutBg}
          alt="Secure your financial future"
          className="object-cover"
        />
      </div>
    </section>
  );
};
