import star from "@/assets/Icon/star_rate.svg";
import elli from "@/assets/Icon/ellipse.svg";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

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
  const handleBookMark = () => {
    toast.success("Product Bookmarked");
  };

  return (
    <div className="relative bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col group max-[767px]:rounded-lg">
      {/* Bookmark Button */}
      <button
        onClick={handleBookMark}
        className="absolute top-3 right-3 z-10 h-9 w-9 flex items-center justify-center rounded-lg bg-[rgba(26,26,26,0.4)] backdrop-blur-md hover:bg-sunset-orange transition duration-200 max-[767px]:h-8 max-[767px]:w-8 cursor-pointer"
      >
        <Heart className="h-5 w-5 text-white max-[767px]:h-4 max-[767px]:w-4" />
      </button>

      <Link to="/single" className="flex flex-col h-full">
        {/* Product Image */}
        <div className="rounded-xl overflow-hidden max-[767px]:rounded-lg">
          <motion.img
            src={images?.[0]}
            alt={title}
            className="w-full h-[220px] object-cover rounded-xl max-[767px]:h-[160px] max-[480px]:h-[140px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between p-4 gap-8 max-[767px]:px-2 max-[767px]:gap-4 max-[767px]:py-3">
          {/* Title & Rating */}
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-sm font-semibold leading-snug text-[#181C32] line-clamp-2 w-[80%] max-[480px]:text-xs">
              {title}
            </h3>
            <div className="flex items-center gap-1">
              <img src={star} alt="star" className="w-4 h-4 max-[480px]:w-3 max-[480px]:h-3" />
              <span className="text-sm font-medium text-[#484848] max-[480px]:text-xs">
                {rating}
              </span>
            </div>
          </div>

          {/* Price & MOQ */}
          <div className="flex gap-2 items-center">
            <span className="text-sm font-semibold text-[#FCAB3F] max-[480px]:text-xs">
              {priceRange}
            </span>
            <div className="flex items-center gap-2">
              <img src={elli} alt="dot" className="w-2 h-2" />
              <span className="text-sm font-medium text-[#484848] max-[480px]:text-xs">
                {moq}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeProductCard;
