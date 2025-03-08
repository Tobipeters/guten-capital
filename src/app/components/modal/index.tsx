import React from "react";
import Image from "next/image";
import CloseIcon from "../../../../public/images/icons/close.svg";
import { motion, AnimatePresence } from "framer-motion";

export const GcModal = ({
  open,
  handleClose,
  title,
  details,
  children,
}: {
  open: boolean;
  title: string;
  details: string;
  children: React.ReactNode;
  handleClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`     
        bg-[#33333380] flex items-end justify-center fixed z-50 top-0 right-0 left-0 bottom-0 h-full w-full overflow-hidden lg:items-start`}
        >
          <motion.div
            initial={{ y: "100%" }} // Mobile: Start from bottom
            animate={{ y: 0 }} // Move to its position
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white relative flex flex-col gap-6 rounded-t-3xl px-4 pt-8 pb-20 w-full lg:w-[750px] lg:rounded-3xl lg:px-14 lg:py-16 lg:pb-20 lg:mt-[200px] lg:initial lg:animate-none"
          >
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between">
                <h3 className="text-gc_primary_900 text-xl font-bold lg:text-[2rem] lg:leading-[1.65rem]">
                  {title}
                </h3>

                <Image
                  src={CloseIcon}
                  alt="Close icon"
                  width={30}
                  height={30}
                  className="w-5 h-5 cursor-pointer lg:w-7 lg:h-7"
                  onClick={handleClose}
                />
              </div>

              <p className="text-gc_grey_400 text-sm lg:text-lg lg:leading-[1.5rem]">
                {details}
              </p>
            </div>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
