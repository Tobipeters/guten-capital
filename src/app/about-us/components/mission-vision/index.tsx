"use client";
import React from "react";
import Image from "next/image";
import TwoCircle from "../../../../../public/images/2-circle.png";
import ThreeCircle from "../../../../../public/images/3-circle.png";
import { TabNav } from "@/app/components";

export const OurMissionAndVision = () => {
  const [active, setActive] = React.useState<string>("vision");

  const options = [
    {
      name: "Our Vision",
      value: "vision",
    },
    {
      name: "Our Mission",
      value: "mission",
    },
  ];

  return (
    <section className="container flex flex-col w-full gap-8 md:gap-12 px-4 py-14 lg:py-16">
      <TabNav options={options} active={active} setActive={setActive} />

      {active === "mission" && (
        <div className="flex flex-wrap gap-y-9 items-center w-full h-full">
          <div className="w-full flex flex-col gap-6 lg:w-7/12 lg:gap-10 xl:w-8/12 2xl:w-1/2">
            <p className="text-base text-gc_grey_400 font-normal leading-[1.5rem] lg:leading-[2.25rem] lg:text-2xl">
              Provide personalized financial solutions that optimize portfolios
              and foster wealth maximization for every client. We do this by;
            </p>
            <ol className="flex flex-col gap-5 text-base text-gc_grey_400 leading-[24px] lg:leading-[36px] lg:text-2xl">
              <li>
                <strong className="font-bold">
                  1. Tailored Service for Unique Clientele and Support:
                </strong>{" "}
                to provide expert resources and support to a select range of
                clients in order to foster a relationship of trust,
                sustainability, and growth.
              </li>
              <li>
                <strong className="font-bold">
                  2. Understanding and Knowledge-Based Portfolio Design:
                </strong>{" "}
                to provide a customized and educational approach to designing a
                financial roadmap, ensuring long-term financial freedom for
                clientele through sustainable growth, minimized risk, and
                maximum return rates.
              </li>
              <li>
                <strong className="font-bold">
                  3. Maximized Returns and Portfolio Creation:
                </strong>{" "}
                to provide exclusive clientele access to the ESPA strategies,
                tailored financial solutions, and a support system that enables
                portfolio maximization, wealth creation, and consistent
                long-term growth
              </li>
            </ol>
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
          <div className="w-full flex flex-col gap-6 lg:w-7/12 lg:gap-10 xl:w-8/12 2xl:w-1/2">
            <p className="text-base text-gc_grey_400 font-normal leading-[1.5rem] lg:leading-[2.25rem] lg:text-2xl">
            To be the trusted partner empowering our clients to maximize their wealth through expert strategies, tailored solutions and exclusive access to financial opportunities
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
