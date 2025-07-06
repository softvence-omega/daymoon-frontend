import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
const SharedButton = () => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
      className="px-5 py-4  text-[#F04436]  shadow-md rounded-[20px] bg-white  text-lg font-medium hover:bg-[#F04436] hover:text-white transition-ease transition-colors duratrion-200 flex gap-2 justify-center items-center "
    >
      Explore More
      <span className="ml-2">
        {" "}
        <ChevronRight></ChevronRight>
      </span>
    </motion.button>
  );
};

export default SharedButton;
