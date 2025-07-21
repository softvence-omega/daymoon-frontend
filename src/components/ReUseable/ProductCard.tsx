import star from "@/assets/Icon/star_rate.svg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import discImg from "../../assets/Icon/discount.svg";

interface ProductProps {
  title: string;
  images: string[];
  priceRange: string;
  rating: number;
  moq: string;
  discount: number;
}

const ProductCard = ({
  title,
  images = [],
  priceRange,
  rating,
  moq,
  discount,
}: ProductProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const [bookmarked, setBookmarked] = useState(false);

  const handleBookMark = () => {
    setBookmarked((prev) => !prev);
    if (!bookmarked) {
      toast.success("Product Bookmarked");
    } else {
      toast.info("Bookmark Removed");
    }
  };

  const location = "/single";

  return (
    <div className="bg-white shadow-[0px_0px_20px_1px_#ffbb763f] border border-[#e5e5e5]/[0.454] rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden relative flex flex-col md:min-h-[420px] lg:min-h-[420px] xl:min-h-[420px] 2xl:min-h-[420px]">
      {/* Discount Badge */}
      <div className="absolute top-2 max-[767px]:top-1 left-0 w-full px-2 flex items-center justify-between z-10">
        {discount > 0 ? (
          <div className="relative flex items-center">
            <img src={discImg} alt="discount" className="w-10 h-10 sm:w-12 sm:h-12" />
            <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
              {discount}%
            </span>
          </div>
        ) : (
          <div />
        )}
      </div>

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


      {/* Image Slider */}
      <div className="relative w-full h-[160px] md:h-[264px] lg:h-[264px] xl:h-[264px] 2xl:h-[264px] flex items-center justify-center">
        <Link
          to={location}
          className="relative w-full h-full flex items-center justify-center"
        >
          <div ref={sliderRef} className="keen-slider w-full h-full">
            {images.map((src, i) => (
              <div
                key={i}
                className="keen-slider__slide flex items-center justify-center"
              >
                <motion.img
                  src={src}
                  alt={`product-slide-${i}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            ))}
          </div>
        </Link>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            instanceRef.current?.prev();
          }}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white border border-[#E4E7EC] p-2 rounded-full shadow hover:bg-sunset-orange hover:text-white text-sunset-orange transition cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            instanceRef.current?.next();
          }}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white border border-[#E4E7EC] p-2 rounded-full shadow hover:bg-sunset-orange hover:text-white text-sunset-orange transition cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Pagination Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? "bg-sunset-orange" : "bg-[#E4E7EC]"
                  }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex md:flex-1 lg:flex-1 flex-col max-[767px]:gap-2 gap-3 md:justify-between lg:justify-between px-3 sm:px-[12px] pt-4 sm:pt-[20px] pb-4">
        <Link
          to={location}
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex items-start justify-between mb-2 gap-2">
            <h3 className="text-[14px] sm:text-[15px] font-medium line-clamp-2 leading-snug text-[#181C32] w-[85%]">
              {title}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <img src={star} alt="star" className="w-4 h-4" />
              <span className="text-[13px] sm:text-[14px] font-medium text-[#484848]">
                {rating}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[14px] max-[767px]:text-[12px] sm:text-[15px] font-semibold text-[#FCAB3F]">
              {priceRange}
            </span>
            <span className="text-[#484848] text-[14px] sm:text-[15px]">•</span>
            <span className="text-[12px] sm:text-[13px] text-[#484848]">{moq}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
