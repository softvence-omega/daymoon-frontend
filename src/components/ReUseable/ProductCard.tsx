import star from "@/assets/Icon/star_rate.svg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
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

  const handleBookmark = () => {
    toast.success("Product Bookmarked!");
  };

  const location = "/single";

  return (
    <div className="bg-white shadow-[0px_0px_20px_1px_#ffbb763f] border border-[#e5e5e5]/[0.454] rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden relative flex flex-col md:min-h-[420px] lg:min-h-[420px] xl:min-h-[420px] 2xl:min-h-[420px]">
      {/* Discount Badge */}
      <div className="absolute top-4 left-0 w-full px-4 flex items-center justify-between z-10">
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
        onClick={handleBookmark}
        className="absolute top-4 right-4 z-10 h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-[12px] bg-[rgba(26,26,26,0.5)] backdrop-blur-[10.65px] hover:bg-sunset-orange"
      >
        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Image Slider */}
      <div className="relative w-full h-[200px] md:h-[264px] lg:h-[264px] xl:h-[264px] 2xl:h-[264px] flex items-center justify-center">
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
