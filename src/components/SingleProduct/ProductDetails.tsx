import classNames from "classnames";
import { ChevronRight, StarIcon, Truck } from "lucide-react";
import { useState } from "react";
import image3 from "../../assets/landing/product2.png";
import image2 from "../../assets/landing/product3.png";
import image1 from "../../assets/landing/products.png";

import { IProduct } from "@/types";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../SellerDashboard/SellerProducts/Breadcrumbs";
import { StarRating } from "../SellerDashboard/SellerProducts/ProductDetails/StarRating";
import AddToCart from "./AddToCart";

const dummyProduct: IProduct = {
  productId: "BT-EARBUDS-BLACK",
  productSlug: "bluetooth-earbuds-deep-bass",
  productName:
    "Bluetooth Wireless Earbuds with Deep Bass, 40H Playtime, LED Display, IP7 Rating, Mic for iPhone and Android",
  productCategory: "Electronics",
  brandName: "Electronics Products Manufacturer",
  skuNo: "EBB-1001",
  description:
    "High-quality wireless earbuds with deep bass and long playtime.",
  aboutProduct:
    "Enjoy immersive sound with these waterproof, long-lasting earbuds perfect for both casual and active lifestyles.",
  vendorInfo: {
    vendorId: "VEND-202",
    vendorName: "ElectroMart",
    storeUrl: "/vendors/electromart",
    contactEmail: "sales@electromart.com",
    verified: true,
    vendorLogo: "https://example.com/vendor-shop-image.jpg",
    vendorRating: 4.5,
    vendorTotalReviews: 7457,
    vendorLocation: "123 Tech Street, San Francisco, CA, USA",
  },

  samplePrice: "$1.50",
  minOrderQuantity: 10,
  moq: [
    { range: "10-199", price: 5.34 },
    { range: "200-499", price: 3.45 },
    { range: "500-999", price: 1.56 },
    { range: "1000-10000", price: 0.56 },
  ],
  discounts: [{ type: "bulk", minQty: 500, discountPercent: 15 }],
  inventory: {
    stock: 1500,
    inStock: true,
    lowStockThreshold: 100,
  },
  variants: [
    { color: "Black", image: image1 },
    { color: "White", image: image2 },
    { color: "pink", image: image3 },
  ],
  sizes: [],
  keyFeatures: [
    "Crystal Clear Sound",
    "True Wireless Connectivity",
    "Bluetooth 5.0",
    "40 Hours Playtime",
  ],
  additionalFeatures: [
    {
      title: "LED Display",
      description: "Real-time battery level display on case.",
    },
    {
      title: "Water Resistant",
      description: "IP7 Rating ensures durability against sweat and water.",
    },
  ],
  keyAttributes: {
    Model: "TrueSound Pro Wireless Earbuds",
    Connectivity: "Bluetooth 5.0",
    BatteryLife: "Up to 10 hours of playtime",
    ChargingTime: "1.5 hours",
    DriverSize: "10mm dynamic drivers",
    Packaging: "Earbuds, charging case, USB-C cable, 3 ear tip sizes",
  },
  ratings: {
    score: 4.5,
    totalReviews: 7457,
  },
  reviews: [
    {
      userId: "USER-1001",
      rating: 5,
      comment: "Excellent sound quality and battery life!",
      date: "2025-07-06",
    },
  ],
  customizations: [
    { option: "Logo/graphic design", price: 0.2 },
    { option: "Extended Battery (10+ hours)", price: 3 },
    { option: "Wireless Charging Case", price: 4 },
  ],
};

export default function ProductDetails() {
  const [product, setProduct] = useState<IProduct>(dummyProduct);

  console.log("setProduct", setProduct);

  const [selectedColor, setSelectedColor] = useState<string>(
    product.variants[0]?.color || ""
  );

  return (
    <div className="mt-6 mx-auto">
      <Breadcrumbs
        title="Shop"
        subtitle="Products"
        subtitle2={product.productName}
      />
      <Link to="/manufacturers">
        <div className="flex items-center mt-7  rounded-lg shadow-none border-none gap-2">
          <img
            src={product.vendorInfo.vendorLogo}
            alt="Vendor Logo"
            className="w-8 h-8 rounded-full border-2 border-gray-300"
          />

          <div className="flex flex-row items-center space-x-2">
            <p className="text-sm font-semibold underline text-[#FCAB3F]">
              {product.vendorInfo.vendorName}
            </p>
            <StarIcon className="h-4 w-4 mx-1 text-yellow-400" />

            <span className="text-sm mr-1 text-gray-600">
              {product.vendorInfo.vendorRating} (
              {product.vendorInfo.vendorTotalReviews})
            </span>
          </div>
        </div>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <div className="relative">{/* <SingleProductImage /> */}</div>

        <div className="space-y-4 text-sm bg-white p-4 rounded-xl shadow-[0_0_1px_0] ">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold leading-tight text-gray-800">
              {product.productName}
            </h1>
            <div className="flex items-center gap-2 text-gray-500 mt-5 ">
              <StarRating rating={product.ratings.score} />
              {product.ratings.score}/5 ({product.ratings.totalReviews} )
            </div>
          </div>

          <div>
            <p className="text-[#666] font-medium">Minimum Order Quantity</p>
            <p className="mb-2 text-gray-900 text-lg font-semibold">
              {product.minOrderQuantity} pcs
            </p>
            <div className="flex justify-start flex-wrap items-center mt-5  gap-5 ">
              {product.moq.map((tier, i) => (
                <div key={i} className="border-none rounded-md p-2 text-start ">
                  <p className="text-sm  text-[#666]">{tier.range}</p>
                  <p className="text-lg md:font-semibold mt-2 md:text-xl text-gray-800">
                    {tier.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex mt-8 items-center justify-between  border-[#e5e5e5] border rounded-lg p-4">
            <div className="font-medium text-base">
              🎁 Get Your Sample{" "}
              <span className="text-red-600  ">({product.samplePrice})</span>
            </div>
            <ChevronRight className="text-orange-600 bg-[#FEECEB] w-6 h-6 rounded-full" />
          </div>
          <hr className="text-[#B3B3B3] my-8 h1 w-full" />
          <div>
            <p className=" text-[#B3B3B3]  text-base mb-2">Variants</p>
            <div className="flex gap-5 mt-5 flex-wrap ">
              {product.variants.map((variant, i) => (
                <img
                  key={i}
                  src={variant.image}
                  alt={variant.color}
                  onClick={() => {
                    setSelectedColor(variant.color!);
                  }}
                  className={classNames(
                    "w-14 h-14 object-cover border-[#b5b5b5] border-1 rounded-lg cursor-pointer p-1",
                    {
                      "border-[#F04436] ring-1 ring-[#F04436]":
                        selectedColor === variant.color,
                    }
                  )}
                />
              ))}
            </div>
          </div>
          <hr className="text-[#B3B3B3] my-8 h1 w-full" />
          <div className=" border-none rounded-lg text-sm space-y-1">
            <div className="flex items-center gap-2   text-[#B3B3B3]">
              <Truck className="w-4 h-4 text-orange-500" /> Shipping
            </div>
            <div className="border-[#e5e5e5] mt-5 border-1 p-3 rounded-2xl">
              <p className="text-gray-800 text-lg font-medium ">Standard</p>
              <p className="text-[#666]">
                Lorem ipsum dolor sit amet consectetur. Eget volutpat varius
                proin risus nisi.
              </p>
            </div>
          </div>
          <hr className="text-[#B3B3B3] my-8 h1 w-full" />
          <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-3 ">
            <AddToCart productData={product} />
            <motion.button className=" px-10 py-3 rounded-3xl border-[#F04436] border-1 hover:bg-[#F04436] hover:text-white text-[#F04436] transition-colors duration-200 font-semibold ">
              Chat Now
            </motion.button>
            <motion.button className=" px-10 py-3 rounded-3xl border-[#F04436] border-1 hover:bg-[#F04436] hover:text-white text-[#F04436] transition-colors duration-200 font-semibold ">
              Buy Now
            </motion.button>
          </div>

          <div className="border-[#e5e5e5] mt-12 border-1 rounded-xl p-6 ">
            <p className="font-semibold mb-2 text-lg">About This Product</p>
            <p className="text-[#484848] text-base leading-relaxed">
              {product.aboutProduct}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
