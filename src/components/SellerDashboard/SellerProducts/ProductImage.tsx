import React from "react";
import product from "../../../assets/landing/products.png";
import box from "../../../assets/landing/box.svg";
import p1 from "../../../assets/landing/product2.png";
import p2 from "../../../assets/landing/product3.png";
import CommonHeader from "@/common/CommonHeader";

import { IoIosArrowForward } from "react-icons/io";
import Variants from "./Variants";
import SubHeader from "@/common/SubHeader";

const imageList = [{ img: p1 }, { img: p2 }, { img: product }];
type PriceTier = {
  range: string;
  price: string;
};

type ProductProps = {
  title: string;
  minOrderQuantity: string;
  priceTiers: PriceTier[];
  samplePrice: string;
};

const ProductImage: React.FC<ProductProps> = ({
  title,
  minOrderQuantity,
  priceTiers,
  samplePrice,
}) => {
  return (
    <div className="w-full flex flex-col gap-6 rounded-xl  lg:p-6 lg:border lg:border-foundation-white ">
      <img className=" w-full max-h-[400px] rounded-2xl" src={product} alt="" />
      <CommonHeader>{title}</CommonHeader>

      <div className=" pt-2">
        <SubHeader>Minimum Order Quantity</SubHeader>
        <CommonHeader>{minOrderQuantity}</CommonHeader>
      </div>

      {/* Pricing Tiers */}
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 ">
          {priceTiers.map((tier, index) => (
            <div key={index} className=" ">
              <SubHeader>{tier.range}</SubHeader>
              <CommonHeader className="!text-lg">{tier.price}</CommonHeader>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-1 lg:gap-4 bg-[#FCFCFC] border border-foundation-white rounded-xl px-4 py-3">
        <div className="flex gap-1 items-center">
          <img src={box} alt="" />
          <CommonHeader className=" !text-sm xl:!text-lg !text-black">
            Get Your Sample
            <span className=" text-sunset-orange ">({samplePrice})</span>
          </CommonHeader>
        </div>

        <div className=" bg-[#FEECEB] p-2 rounded-full">
          <span className="text-xl xl:text-2xl text-sunset-orange">
            <IoIosArrowForward />
          </span>
        </div>
      </div>

      <Variants imageList={imageList} />
    </div>
  );
};

export default ProductImage;
