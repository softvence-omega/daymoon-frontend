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
  const [selectedImage, setSelectedImage] = useState(earbuds[0].img);

  return (
    <div className="flex gap-8   max-h-[860px]">
      {/* Thumbnail List */}
      <div className="w-24 overflow-y-auto flex flex-col gap-4 py-2 pr-1">
        {earbuds.map((earbud, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(earbud.img)}
            className={`cursor-pointer border rounded-xl overflow-hidden transition duration-200 ${
              selectedImage === earbud.img
                ? "border-catalien-blue  "
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

      <div className="flex-1 flex items-center justify-center rounded-3xl border border-foundation-white ">
        <img
          src={selectedImage}
          alt="Selected Earbud"
          className="max-h-[600px] object-contain  mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default SingleProductImage;
