import { Heart } from "lucide-react";
import star from "@/assets/Icon/star_rate.svg";
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
  return (
    <div className="bg-white rounded-[12px] hover:shadow-md transition-shadow duration-300 overflow-hidden relative flex flex-col">
      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 z-10 h-8 w-8 flex items-center justify-center rounded-[10px] bg-[rgba(26,26,26,0.5)] backdrop-blur-[10.65px] hover:bg-sunset-orange cursor-pointer">
        <Heart className="h-4 w-4 text-white" />
      </button>

      {/* Product Image */}
      <div className="w-full h-[207px] rounded-[12px] overflow-hidden">
        <img
          src={images?.[0]}
          alt={title}
          className="w-full h-full object-cover rounded-[12px]"
        />
      </div>

      {/* Product Info */}
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

        <div className="flex items-center gap-2 pb-[12px]">
          <span className="text-[12px] lg:text-[14px] font-medium leading-[130%] text-[#FCAB3F]">
            {priceRange}
          </span>
          <img src={elli} alt="" />
          <span className="text-[12px] lg:text-[14px] font-medium leading-[130%] text-[#484848]">{moq}</span>
        </div>
      </div>
    </div>
  );
};

export default HomeProductCard;
