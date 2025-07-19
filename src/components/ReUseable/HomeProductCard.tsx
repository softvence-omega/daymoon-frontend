import star from "@/assets/Icon/star_rate.svg";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import elli from "../../assets/Icon/ellipse.svg";

interface ProductProps {
  title: string;
  images: string[];
  priceRange: string;
  rating: number;
  moq: string;
}

const HomeProductCard = ({
  title,
  images = [],
  priceRange,
  rating,
  moq,
}: ProductProps) => {
  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -5 },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };
  const handleBookMark = () => {
    toast.success("Product Bookmarked");
  };
  return (
    <motion.div
      className="bg-white rounded-[12px] transition-shadow duration-300 overflow-hidden relative   flex flex-col"
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <motion.button
        className="absolute top-3 right-3 z-10 h-8 w-8 flex items-center justify-center rounded-[10px] bg-[rgba(26,26,26,0.5)] backdrop-blur-[10.65px] hover:bg-sunset-orange cursor-pointer"
        whileTap={{ scale: 0.9 }}
        onClick={handleBookMark}
      >
        <Heart className="h-5 w-5 text-white" />
      </motion.button>
      <Link to="/single">
        <motion.div
          className="w-full h-[207px] rounded-[12px] overflow-hidden"
          variants={imageVariants}
          transition={{ duration: 0.4 }}
        >
          <img
            src={images?.[0]}
            alt={title}
            className="w-full h-full object-cover rounded-[12px]"
          />
        </motion.div>

        <div className="flex-1 flex flex-col justify-between gap-2 px-[12px] pt-[16px]">
          <div className="flex items-start justify-between mb-2 gap-2">
            <h3 className="text-[14px] font-medium leading-[130%] line-clamp-2 text-[#181C32] w-[85%]">
              {title}
            </h3>
            <div className="flex items-center gap-1">
              <img src={star} alt="star" className="w-4 h-4" />
              <span className="text-[14px] font-medium leading-[130%] text-[#484848]">
                {rating}
              </span>
            </div>
          </div>

          <div className="flex justify-between mb-6 flex-row md:items-center gap-2 md:pb-[12px]">
            <span className="text-[12px] lg:text-[14px] font-medium leading-[130%] text-[#FCAB3F]">
              {priceRange}
            </span>
            <div className="flex items-center gap-1">
              <img src={elli} alt="" className="w-4 md:w-2 h-4" />
              <span className="text-[12px] lg:text-[14px] font-medium leading-[130%] text-[#484848]">
                {moq}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default HomeProductCard;
