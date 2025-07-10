import { motion } from "framer-motion";
import { useState } from "react";
import img1 from "../../assets/Home/electronics.png";
import img2 from "../../assets/Home/image(1).png";
import img11 from "../../assets/Home/image(10).png";
import img3 from "../../assets/Home/image(2).png";
import img4 from "../../assets/Home/image(3).png";
import img5 from "../../assets/Home/image(4).png";
import img6 from "../../assets/Home/image(5).png";
import img7 from "../../assets/Home/image(6).png";
import img8 from "../../assets/Home/image(7).png";
import img9 from "../../assets/Home/image(8).png";
import img10 from "../../assets/Home/image(9).png";
import img13 from "../../assets/Home/image.png";
import img12 from "../../assets/Home/outwear.png";

const categories = [
  {
    label: "Electronics",
    icon: img1,
    subcategories: [],
    slug: "electronics",
  },
  {
    label: "Home & Living",
    icon: img13,
    subcategories: [],
    slug: "home-and-living",
  },
  {
    label: "Fashion & Apparel",
    icon: img2,
    slug: "fashion-and-apparel",
    subcategories: [
      {
        label: "Men's Clothing",
        icon: img7,
        slug: "mens-clothing",
      },
      {
        label: "Women's Clothing",
        icon: img8,
        slug: "womens-clothing",
      },
      {
        label: "Footwear",
        icon: img9,
        slug: "footwear",
      },
      {
        label: "Accessories",
        icon: img10,
        slug: "accessories",
      },
      {
        label: "Sportswear",
        icon: img11,
        slug: "sportswear",
      },
      {
        label: "Outwear & Jackets",
        icon: img12,
        slug: "outwear-jackets",
      },
    ],
  },
  {
    label: "Beauty",
    icon: img3,
    subcategories: [],
    slug: "beauty",
  },
  {
    label: "Industrial",
    icon: img4,
    subcategories: [],
    slug: "industrial",
  },
  {
    label: "Health & Wellness",
    icon: img5,
    subcategories: [],
    slug: "health",
  },
  {
    label: "Furniture",
    icon: img6,
    subcategories: [],
    slug: "furniture",
  },
  {
    label: "Kids",
    icon: img6,
    subcategories: [],
    slug: "kids",
  },
  {
    label: "Jewellery",
    icon: img6,
    subcategories: [],
    slug: "jewellery",
  },
];

const NavCatgegory = ({
  data = categories,
}: {
  data?: typeof categories;
  onClose?: () => void;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hidden  bg-white  rounded-2xl p-8 lg:flex gap-8 min-w-[1000px]   relative">
      <div className="min-w-[540px] flex-1 ">
        <h2 className="text-4xl font-semibold mb-6 tracking-tight">
          CATEGORIES
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {data.map((cat, idx) => (
            <motion.button
              whileHover={{ scale: 1.03 }}
              className={`flex items-center justify-between w-full bg-white border cursor-pointer rounded-full px-2 py-2 gap-2 shadow-[0_0_1px_0px_#F46A39] transition ${
                activeIndex === idx
                  ? "border-[#F46A39] shadow-[0_0_0_2px_#F46A39]"
                  : "border-transparent"
              }`}
              key={cat.label}
              //   onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
            >
              <span className="flex items-center gap-3">
                <img
                  src={cat.icon}
                  alt={cat.label}
                  className="w-12 h-12 rounded-full object-cover "
                />
                <span className="font-semibold text-md">{cat.label}</span>
              </span>
              <span className="text-[#F46A39] text-xl">
                {activeIndex === idx ? "›" : "›"}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="flex-1 rounded-2xl  bg-white shadow-[0_0_1px_0px_#F46A39] p-7 max-w-[460px]  flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4 text-center">
          {data[activeIndex]?.label}
        </h3>
        <div className="grid grid-cols-3 gap-5 w-full">
          {data[activeIndex]?.subcategories?.map((sub) => (
            <div
              key={sub.label}
              className="flex cursor-pointer  hover:scale-[1.03] transition  flex-col items-center gap-2"
            >
              <img
                src={sub.icon}
                alt={sub.label}
                className="w-14 h-14 rounded-full object-cover  "
              />
              <span className="text-xs  text-center text-nowrap">
                {sub.label}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-[#F46A39] my-5 w-full" />

        <h4 className="text-lg font-semibold mb-8 text-center">
          Popular Categories
        </h4>
        <div className="grid grid-cols-3 gap-3 w-full">
          {data?.slice(0, 9).map((sub) => (
            <div
              key={sub.label + "-popular"}
              className="flex flex-col hover:scale-[1.03] cursor-pointer items-center gap-2"
            >
              <img
                src={sub.icon}
                alt={sub.label}
                className="w-14 h-14 rounded-full object-cover  "
              />
              <span className="text-xs  text-center text-nowrap">
                {sub.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavCatgegory;
