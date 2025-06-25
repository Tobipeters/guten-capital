import Image from "next/image";
import AssetManagedImg from "../../../../public/images/assets-managedpng.png";
import PremiumClientImg from "../../../../public/images/premium-clientpng.png";
import SettlementImg from "../../../../public/images/settlement-paidpng.png";
import { motion, Variants, useInView } from "framer-motion";
import React from "react";

export const EmpoweringSection = ({
  sectionVariants,
  itemVariants,
}: {
  sectionVariants: Variants;
  itemVariants: Variants;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    {
      name: "₦100+ billion",
      title: "Investment Portfolio",
      img: AssetManagedImg,
    },
    {
      name: "200+",
      title: "Investment Portfolio",
      img: PremiumClientImg,
    },
    {
      name: "₦700+ million",
      title: "Settlement Paid",
      img: SettlementImg,
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
        <h3 className="text-[2rem] text-gc_grey_800 font-bold leading-[2.4rem] lg:w-9/12 lg:text-[3rem] xl:text-[3.5rem] xl:leading-[4.1rem] xl:w-7/12">
          Empowering Your Financial Future with Expertise & Integrity.
        </h3>
      </motion.div>

      <div className="flex flex-wrap items-center gap-8 md:gap-4 lg:gap-10">
        {stats.map((stat, id) => (
          <motion.div
            key={id}
            variants={itemVariants}
            className="flex flex-col gap-4 w-full md:w-[calc(33.33%-10.7px)] lg:w-[calc(33.33%-26.7px)]"
           
          >
            <div className="w-full h-[240px] rounded-2xl relative overflow-hidden md:h-[200px] lg:h-[240px]">
              <Image
                src={stat.img}
                alt={stat.title}
                className="object-cover"
                fill
                quality={100}
              />
            </div>
            <div className="flex flex-col gap-2 w-full lg:gap-3">
              <h4 className="text-gc_primary_900 text-[2rem] font-medium lg:text-[2.5rem]">
                {stat.name}{" "}
              </h4>
              <p className="text-gc_grey_400 text-lg font-normal lg:text-3xl">
                {stat.title}{" "}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
