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
    <>
      <h2 className="text-black/60 text-base">Variants</h2>
      <div className="flex items-center gap-6">
        {imageList.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <img
              key={idx}
              src={item.img}
              alt={`variant-${idx}`}
              onClick={() => setActiveIndex(idx)}
              className={`
                max-w-[97px] h-[88px] rounded-2xl border-1 last:border-dashed
                ${isActive ? "border-red-500" : "border-foundation-white "}
                object-cover cursor-pointer transition-shadow
                ${isActive ? "shadow-lg" : "hover:shadow-md"}
              `}
            />
          );
        })}
      </div>
    </>
  );
};

export default Variants;
