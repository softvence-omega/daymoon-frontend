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
    <div className="flex justify-center mt-[48px]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
        onClick={onClick}
        className="flex h-10 md:h-[50px] px-5 gap-3 items-center rounded-[20px] bg-white shadow-[3px_4px_14.6px_0_rgba(0,0,0,0.12)]
          text-sunset-orange font-medium md:font-semibold text-base text-[14px] md:text-[18px] lg:text-[18px] not-italic 
           transition-shadow cursor-pointer"
      >
        {text}
        <img
          src={arrow}
          alt="arrow icon"
          className="w-4 h-4 lg:h-6 lg:w-6 md:h-6 md:w-6 object-contain"
        />
      </motion.button>
    </div>
  );
};

export default MoreButton;
