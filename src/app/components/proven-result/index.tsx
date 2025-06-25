import Image from "next/image";
import XWhite from "../../../../public/images/x-white.png";
import LWhite from "../../../../public/images/L-white.png";
import { motion, Variants, useInView } from "framer-motion";
import React from "react";

export const ProvenResult = ({
  sectionVariants,
  itemVariants,
}: {
  sectionVariants: Variants;
  itemVariants: Variants;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const results = [
    {
      name: "Jane Doe",
      title: "VP",
      company: "Firstbank",
      testimony:
        "See what our clients say about their journey with Guten Capital. See what our clients say about their journey with Guten Capital.See what our clients say about their journey with Guten Capital.See what our clients say about their journey with Guten Capital.",
    },
    {
      name: "Jane Doe",
      title: "VP",
      company: "Firstbank",
      testimony:
        "See what our clients say about their journey with Guten Capital. See what our clients say about their journey with Guten Capital.See what our clients say about their journey with Guten Capital.See what our clients say about their journey with Guten Capital.",
    },
    {
      name: "Jane Doe",
      title: "VP",
      company: "Firstbank",
      testimony:
        "See what our clients say about their journey with Guten Capital. See what our clients say about their journey with Guten Capital.See what our clients say about their journey with Guten Capital.See what our clients say about their journey with Guten Capital.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      className="container flex flex-col w-full gap-12 px-4 py-14 lg:py-20"
    >
      <motion.div className="w-full" variants={itemVariants}>
        <h3 className="text-[2rem] text-gc_grey_800 font-bold leading-[2.4rem] mb-4 lg:text-[3rem] xl:text-[3.5rem] xl:leading-[4.1rem]">
          Trusted by investors.{" "}
          <span className="text-[#0E8216]"> Proven results.</span>
        </h3>
        <p className="text-sm text-gc_grey_400 font-normal leading-[1.5rem] lg:text-base lg:w-10/12 xl:w-7/12">
          At Guten, each service offering is powered by deep market insight,
          data driven decision making and a commitment to long-term value
          creation for both individuals and Institutional investors.
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center gap-6 md:gap-4 lg:gap-6">
        {results.map((result, id) => (
          <motion.div
            key={id}
            variants={itemVariants}
            className="bg-[#EFEFEF] relative overflow-hidden rounded-xl flex flex-col gap-4 p-6 w-full min-h-[370px] lg:min-h-[420px] md:w-[calc(33.33%-10.7px)] lg:w-[calc(33.33%-16px)]"
          >
            {(id === 0 || id === 2) && (
              <Image
                src={XWhite}
                alt="x white"
                className={`
                  ${
                    id === 0
                      ? "w-3/4 h-3/4 top-[-2rem] right-[-1.25rem] rotate-[350deg]"
                      : "w-3/4 h-3/4 top-[-3.25rem] right-[-3.5rem] rotate-[340deg]"
                  }
                  absolute 
                  `}
              />
            )}
            {id === 1 && (
              <Image
                src={LWhite}
                alt="L white"
                className="bottom-[-1rem] right-0 absolute 
                "
              />
            )}
            <span className="w-16 h-16 rounded-full bg-gc_grey_800 lg:w-20 lg:h-20"></span>

            <div className="inline-flex flex-col gap-2">
              <h5 className="text-lg font-medium leading-[1.55rem]">
                {result.name}{" "}
              </h5>
              <p className="text-gc_grey_800 text-base font-normal">
                {result.title},{" "}
                <span className="font-light">{result.company} </span>
              </p>
            </div>

            <div className="text-sm text-gc_grey_400 font-normal leading-[1.5rem] mt-4 pr-2">
              {result.testimony}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
