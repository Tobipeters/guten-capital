import { motion } from "framer-motion";

interface IProps {
  options: { name: string; value: string }[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

export const TabNav = ({ options, setActive, active }: IProps) => {
  return (
    <ul className="flex overflow-x-auto border-b border-b-gc_gray_100 gap-4 no_scroll_x lg:gap-8">
      {options.map(({ name, value }, index) => (
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          key={index}
          onClick={() => setActive(value)}
          className="relative flex-none cursor-pointer text-base lg:text-xl pb-3"
        >
          <motion.span
            animate={{
              color: active === value ? "#1D4ED8" : "#9CA3AF", // Tailwind: gc_primary_500 (blue-600) & gc_grey_300
            }}
            transition={{ duration: 0.3 }}
            className={`font-${active === value ? "bold" : "normal"}`}
          >
            {name}
          </motion.span>

          {/* Border Animation */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: active === value ? "100%" : "0%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute left-0 bottom-0 h-[6px] bg-gc_primary_500 rounded-3xl"
          />
        </motion.li>
      ))}
    </ul>
  );
};
