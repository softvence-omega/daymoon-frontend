import { motion } from "motion/react";
import React from "react";

interface RedButtonProps {
  title: string;
  className?: string;
  Icon?: React.ComponentType<{ className?: string }>;
}

const RedButton = ({ title, className = "", Icon }: RedButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.02 }}
      className={`w-full bg-[#F04436] hover:bg-[#AA3026] text-white flex justify-center text-sm md:text-base itews-center gap-2 px-4 py-3 mt-6 ${className} rounded-xl cursor-pointer`}
    >
      {Icon && <Icon className="w-6 h-6 " />} {title}
    </motion.button>
  );
};

export default RedButton;
