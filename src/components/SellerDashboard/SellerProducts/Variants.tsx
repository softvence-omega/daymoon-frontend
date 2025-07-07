import SubHeader from "@/common/SubHeader";
import React, { useState } from "react";

interface ImageItem {
  img: string;
}

interface VariantsProps {
  imageList: ImageItem[];
}

const Variants: React.FC<VariantsProps> = ({ imageList }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      <SubHeader className="!pb-5">Variants</SubHeader>
      <div className="flex items-center flex-wrap gap-6">
        {imageList.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <img
              key={idx}
              src={item.img}
              alt={`variant-${idx}`}
              onClick={() => setActiveIndex(idx)}
              className={`
                max-w-[97px] h-[88px] rounded-2xl border-1 last:border-dashed last:w-full
                ${isActive ? "border-red-500" : "border-foundation-white "}
                object-cover cursor-pointer transition-shadow
                ${isActive ? "shadow-lg" : "hover:shadow-md"}
              `}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Variants;
