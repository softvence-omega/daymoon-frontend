import { useState } from "react";
import star from "@/assets/Icon/star_rate.svg";
import elli from "@/assets/Icon/ellipse.svg";
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
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookMark = () => {
    setBookmarked((prev) => !prev);
    if (!bookmarked) {
      toast.success("Product Bookmarked");
    } else {
      toast.info("Bookmark Removed");
    }
  };

  return (
    <div className="relative bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col group max-[767px]:rounded-lg">
      {/* Bookmark Button */}
      <button
        onClick={handleBookMark}
        className="absolute top-3 right-3 z-10 h-9 w-9 flex items-center justify-center rounded-lg bg-[rgba(26,26,26,0.4)] backdrop-blur-md transition duration-200 max-[767px]:h-8 max-[767px]:w-8 cursor-pointer"
      >
        {bookmarked ? (
          // Sunset-orange filled icon (active state)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#FD6A3A"
            className="h-6 w-6 max-md:h-5 max-md:w-5"
          >
            <path d="M8.90108 13.5381C8.39441 13.9981 7.61441 13.9981 7.10775 13.5314L7.03441 13.4648C3.53441 10.2981 1.24775 8.22478 1.33441 5.63811C1.37441 4.50478 1.95441 3.41811 2.89441 2.77811C4.65441 1.57811 6.82775 2.13811 8.00108 3.51145C9.17441 2.13811 11.3477 1.57145 13.1077 2.77811C14.0477 3.41811 14.6277 4.50478 14.6677 5.63811C14.7611 8.22478 12.4677 10.2981 8.96775 13.4781L8.90108 13.5381Z" />
          </svg>
        ) : (
          // White outline icon (default state)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
            className="h-6 w-6 max-md:h-5 max-md:w-5"
          >
            <path
              d="M13.1081 2.77811C11.3481 1.57811 9.17478 2.13811 8.00144 3.51145C6.82811 2.13811 4.65478 1.57145 2.89478 2.77811C1.96144 3.41811 1.37478 4.49811 1.33478 5.63811C1.24144 8.22478 3.53478 10.2981 7.03478 13.4781L7.10144 13.5381C7.60811 13.9981 8.38811 13.9981 8.89478 13.5314L8.96811 13.4648C12.4681 10.2914 14.7548 8.21811 14.6681 5.63145C14.6281 4.49811 14.0414 3.41811 13.1081 2.77811ZM8.06811 12.4848L8.00144 12.5514L7.93478 12.4848C4.76144 9.61144 2.66811 7.71145 2.66811 5.78478C2.66811 4.45145 3.66811 3.45145 5.00144 3.45145C6.02811 3.45145 7.02811 4.11145 7.38144 5.02478H8.62811C8.97478 4.11145 9.97478 3.45145 11.0014 3.45145C12.3348 3.45145 13.3348 4.45145 13.3348 5.78478C13.3348 7.71145 11.2414 9.61144 8.06811 12.4848Z"
              fill="#FCFCFC"
            />
          </svg>
        )}
      </button>

      <Link to="/single" className="flex flex-col h-full">
        {/* Product Image */}
        <div className="rounded-xl overflow-hidden max-[767px]:rounded-lg">
          <motion.img
            src={images?.[0]}
            alt={title}
            className="w-full h-[220px] object-cover rounded-xl max-[767px]:h-[160px] max-[480px]:h-[140px]"
            whileHover={{ scale: 1.10 }}
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
