"use client";
import LogoId from "../../../../public/images/logo/Logo-Id-White.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ height: "100%", opacity: 1, visibility: 'visible' }}
      animate={{ height: "0%", opacity: 0, visibility: 'hidden' }}
      transition={{ duration: 2.0, delay: 2.2 }}
      className="w-full h-screen fixed z-50 bg-white flex items-center justify-center"
    >
      <div className="inline-flex flex-col items-center gap-4 mx-auto w-10/12 md:w-4/12 lg:w-5/12 2xl:w-3/12 lg:gap-8">
        <h6 className="text-xl text-gc_grey_800 font-bold leading-[120%] inline-flex items-center gap-1 lg:text-3xl">
          Loading...
        </h6>

        <div className="relative overflow-hidden bg-gc_secondary_50 h-8 rounded-[0.25rem] w-full lg:rounded-lg lg:h-14">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.0, delay: 0.3 }}
            className="h-full inline-flex items-center absolute left-0 bg-gc_primary_500 rounded-[0.25rem] w-3/12 lg:rounded-lg"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.0 }}
            >
              <Image
                priority
                src={LogoId}
                alt="Guten Capital Logo"
                width={34}
                height={24}
                className="w-[17px] h-[12] ml-auto mr-[0.625rem] lg:w-[34px] lg:h-[24px] lg:mr-4"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
