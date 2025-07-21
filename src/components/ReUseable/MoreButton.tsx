import { motion } from "framer-motion";
import arrow from "../../assets/Icon/arrow.svg";

interface ExploreMoreButtonProps {
  onClick: () => void;
  text?: string;
}

const MoreButton: React.FC<ExploreMoreButtonProps> = ({
  onClick,
  text = "Explore More",
}) => {
  return (
    <div className="flex justify-center mt-6 md:mt-8 lg:mt-8 xl:mt-10 2xl:mt-10">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="flex items-center gap-2 md:gap-3 px-5 md:px-6 h-10 md:h-[50px]
          rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300
          text-sunset-orange text-[12px] md:text-base font-medium md:font-semibold 
          focus:outline-none cursor-pointer"
      >
        <span>{text}</span>
        <img
          src={arrow}
          alt="arrow icon"
          className="w-4 h-4 md:w-5 md:h-5 object-contain"
        />
      </motion.button>
    </div>
  );
};

export default MoreButton;
