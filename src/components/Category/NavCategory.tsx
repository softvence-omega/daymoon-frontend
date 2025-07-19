import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useRef, useState } from "react";
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
import arrow2 from "../../assets/Navbar/arrow_forward.svg";
import arrow1 from "../../assets/Navbar/arrow_forward_ios.svg";

const categories = [
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
    label: "Beauty",
    icon: img3,
    subcategories: [],
    slug: "beauty",
  },
  {
    label: "Industrial",
    icon: img4,
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

const NavCatgegory = ({ data = categories }: { data?: typeof categories }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const dropdownTriggerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className="flex items-center bg-transparent text-lg text-[#666] hover:bg-white space-x-1 hover:text-[#F04436] cursor-pointer"
          onClick={handleOpen}
          ref={dropdownTriggerRef}
        >
          <span>Categories</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="bg-[#FCFCFC] border-none max-w-[1100px] p-8 rounded-2xl shadow-[0_0_1px_0px_#666]  z-60"
        align="start"
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-4xl text-[#1A1A1A] font-semibold tracking-tight">
            CATEGORIES
          </h2>
          <DropdownMenuItem
            className="cursor-pointer p-2 rounded-full bg-[#FEECEB] hover:scale-110 duration-150"
            onClick={handleClose}
          >
            <X className="w-6 h-6 text-[#F46A39]" />
          </DropdownMenuItem>
        </div>

        <div className="lg:flex gap-8">
          <div className="min-w-[580px] flex-1 flex justify-center items-start">
            <div className="grid grid-cols-2 gap-4">
              {data.map((cat, idx) => (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-center justify-between w-full bg-white  cursor-pointer rounded-xl px-2 py-2 gap-2 !shadow-[0_1px_2px_rgba(0,0,0,0.06)]   transition ${
                    activeIndex === idx
                      ? " border border-[#B3B3B3]"
                      : "border-none"
                  }`}
                  key={cat.label}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className="flex items-center gap-3">
                    <img
                      src={cat.icon}
                      alt={cat.label}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="font-semibold text-md">{cat.label}</span>
                  </span>
                  <div className="bg-[#E8E8E8] w-8 h-8 rounded-full flex items-center justify-center mr-2">
                    {activeIndex === idx ? (
                      <img src={arrow1} className="w-4 h-4" />
                    ) : (
                      <img src={arrow2} className="w-4 h-4" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex-1 rounded-2xl bg-white shadow-[0_0_1px_0px_#F46A39] p-7 max-w-[420px] flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-center">
              {data[activeIndex]?.label}
            </h3>
            <div className="grid grid-cols-3 gap-5 w-full">
              {data[activeIndex]?.subcategories?.map((sub) => (
                <div
                  key={sub.label}
                  className="flex cursor-pointer hover:scale-[1.03] transition flex-col items-center gap-2"
                >
                  <img
                    src={sub.icon}
                    alt={sub.label}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <span className="text-xs text-center text-nowrap">
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
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <span className="text-xs text-center text-nowrap">
                    {sub.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavCatgegory;
