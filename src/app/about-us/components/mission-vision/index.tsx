import React from "react";
import Image from "next/image";
import TwoCircle from "../../../../../public/images/2-circle.png";
import ThreeCircle from "../../../../../public/images/3-circle.png";

export const OurMissionAndVision = () => {
  const [active, setActive] = React.useState<string>("mission");

  const options = [
    {
      name: "Our Mission",
      value: "mission",
    },
    {
      name: "Our Vision",
      value: "vision",
    },
  ];

  return (
    <section className="container flex flex-col w-full gap-8 md:gap-12 px-4 py-14 lg:py-16">
      <ul className="flex overflow-x-auto border-b border-b-gc_gray_100 gap-4 lg:gap-8">
        {options.map(({ name, value }, index) => (
          <div
            key={index}
            onClick={() => setActive(value)}
            className={`${
              active === value
                ? "text-gc_primary_500 font-bold after:content-[''] after:absolute after:bg-gc_primary_500 after:rounded-3xl after:h-[6px] after:w-full after:left-0 after:right-0 after:bottom-0"
                : "text-gc_grey_300 font-normal"
            } flex-none cursor-pointer text-base lg:text-xl relative pb-3`}
          >
            {name}
          </div>
        ))}
      </ul>

      {active === "mission" && (
        <div className="flex flex-wrap gap-y-9 items-center w-full h-full">
          <div className="w-full flex flex-col gap-6 lg:w-7/12 lg:gap-10 xl:w-8/12">
            <p className="text-base text-gc_grey_400 font-normal leading-[1.5rem] lg:leading-[2.25rem] lg:text-3xl">
              At Guten Capital Limited, we are driven by a visionary goal: to
              emerge as a transformative force in reshaping the path to
              financial success for both individuals and institutions. Our
              vision encompasses a future where our clients navigate the vast
              and ever-changing financial landscape with absolute confidence and
              clarity.
            </p>
          </div>

          <div className="w-full flex items-center justify-center lg:justify-end lg:w-5/12 xl:w-4/12">
            <div className="relative overflow-hidden w-[294px] h-[268px] lg:w-[340px] lg:h-[310px]">
              <Image
                fill
                quality={100}
                src={TwoCircle}
                alt="2 Circle"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {active === "vision" && (
        <div className="flex flex-wrap gap-y-9 items-center w-full h-full">
          <div className="w-full flex flex-col gap-6 lg:w-7/12 lg:gap-10 xl:w-8/12">
            <p className="text-base text-gc_grey_400 font-normal leading-[1.5rem] lg:leading-[2.25rem] lg:text-3xl">
              At Guten Capital Limited our primary mission is to offer inclusive
              services in securities trading, investment, and advisory. We are
              dedicated to empowering our clients, enabling them to make astute
              financial judgements and accomplish their long-term aspirations.
              We are committed to providing exceptional value and crafting
              tailored solutions that perfectly align with the distinct needs of
              each individual or institution.
            </p>
          </div>

          <div className="w-full flex items-center justify-center lg:justify-end lg:w-5/12 xl:w-4/12">
            <div className="relative overflow-hidden w-[294px] h-[268px] lg:w-[340px] lg:h-[310px]">
              <Image
                fill
                quality={100}
                src={ThreeCircle}
                alt="3 Circle"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
