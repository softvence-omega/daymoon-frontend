import React, { useState } from "react";
import image1 from "../../../../assets/landing/product2.png";
import image2 from "../../../../assets/landing/product3.png";
import image3 from "../../../../assets/landing/products.png";

const earbuds = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image2 },
  { img: image1 },
  { img: image3 },
  { img: image2 },
];

const SingleProductImage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 max-h-[860px] min-h-[400px] flex-1">
      {/* Thumbnail strip */}
      <div className="w-full md:w-24 overflow-y-auto flex flex-row md:flex-col gap-4 py-2 pr-1">
        {earbuds.map((earbud, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer border rounded-xl overflow-hidden transition duration-200 ${
              activeIndex === index
                ? "border-catalien-blue"
                : "border-foundation-white"
            }`}
          >
            <img
              src={earbud.img}
              alt={`earbud-${index}`}
              className="w-full h-20 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Selected image display */}
      <div className="flex-1 flex items-center justify-center rounded-3xl border border-foundation-white min-h-[300px]">
        <img
          src={earbuds[activeIndex].img}
          alt="Selected Earbud"
          className="max-h-[600px] object-contain mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default SingleProductImage;
