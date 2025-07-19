import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircleMore } from "lucide-react";
import { useState } from "react";

import image1 from "../../assets/landing/product2.png";
import image2 from "../../assets/landing/product3.png";
import image3 from "../../assets/landing/products.png";
import Reviews from "../ReUseable/Reviews";

const earbuds = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image2 },
  { img: image1 },
  { img: image3 },
  { img: image2 },
];

interface Product {
  productId: string;
  productSlug: string;
  productName: string;
  productCategory: string;
  brandName: string;
  skuNo: string;
  description: string;
  aboutProduct: string;
  vendorInfo: {
    vendorId: string;
    vendorName: string;
    storeUrl: string;
    contactEmail: string;
    verified: boolean;
  };
  pricePerUnit: string;
  samplePrice: string;
  moq: Array<{ range: string; price: string }>;
  discounts: Array<{ type: string; minQty: number; discountPercent: number }>;
  inventory: {
    stock: number;
    inStock: boolean;
    lowStockThreshold: number;
  };
  variants: Array<{ color: string; image: string }>;
  sizes: string[];
  keyFeatures: { title: string; description: string }[];
  additionalFeatures: Array<{ title: string; description: string }>;
  keyAttributes: { title: string; description: string }[];
  ratings: {
    score: number;
    totalReviews: number;
  };
  reviews: Array<{
    userId: string;
    rating: number;
    comment: string;
    date: string;
  }>;
  customizations: Array<{ option: string; price: string }>;
}

const dummyProduct: Product = {
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
  },
  pricePerUnit: "$5.34",
  samplePrice: "$1.50",
  moq: [
    { range: "10-199", price: "$5.34" },
    { range: "200-499", price: "$3.45" },
    { range: "500-999", price: "$1.56" },
    { range: "1000+", price: "$0.56" },
  ],
  discounts: [{ type: "bulk", minQty: 500, discountPercent: 15 }],
  inventory: {
    stock: 1500,
    inStock: true,
    lowStockThreshold: 100,
  },
  variants: [
    { color: "Black", image: "/img/black_Earbuds1.png" },
    { color: "White", image: "/img/white_Earbuds1.png" },
    { color: "Pink", image: "/img/pink_Earbuds1.png" },
  ],
  sizes: [],
  keyFeatures: [
    {
      title: "Crystal Clear Sound",
      description:
        "Experience high-fidelity audio with rich bass and crisp treble.",
    },
    {
      title: "True Wireless Connectivity",
      description: "Enjoy the freedom of tangle-free wireless listening.",
    },
    {
      title: "Bluetooth 5.0",
      description: "Faster, more stable connection with extended range.",
    },
    {
      title: "40 Hours Playtime",
      description:
        "Listen longer with extended battery life and quick charging.",
    },
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
  keyAttributes: [
    {
      title: "Model",
      description: "TrueSound Pro Wireless Earbuds",
    },
    {
      title: "Connectivity",
      description: "Bluetooth 5.0",
    },
    {
      title: "Battery Life",
      description: "Up to 10 hours of playtime",
    },
    {
      title: "Charging Time",
      description: "1.5 hours",
    },
    {
      title: "Driver Size",
      description: "10mm dynamic drivers",
    },
    {
      title: "Packaging",
      description: "Earbuds, charging case, USB-C cable, 3 ear tip sizes",
    },
  ],
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
    { option: "Add Logo", price: "$0.50" },
    { option: "Add Logo", price: "$0.50" },
    { option: "Add Logo", price: "$0.50" },
  ],
};

export default function ProductExtraDetails() {
  const [product] = useState(dummyProduct);

  const [tabValue, setTabValue] = useState("details");

  return (
    <div className="mt-32 max-[767px]:mt-16 space-y-10">
      <Tabs value={tabValue} onValueChange={setTabValue} className="w-full ">
        <TabsList className=" w-full   gap-5 flex lg:gap-8 bg-transparent border-b border-[#B3B3B3] rounded-none h-auto p-0  flex-row">
          <TabsTrigger
            value="details"
            className=" font-semibold text-[#484848] pb-3 px-0 bg-transparent border-b-2 border-transparent data-[state=active]:border-orange-400 data-[state=active]:bg-transparent  data-[state=active]:text-jet-black  text-xs md:text-2xl rounded-none shadow-none"
          >
            PRODUCT DETAILS
          </TabsTrigger>
          <TabsTrigger
            value="review"
            className=" font-semibold text-[#484848] pb-3 px-0 bg-transparent text-xs md:text-2xl border-b-2 border-transparent data-[state=active]:border-orange-400 data-[state=active]:bg-transparent rounded-none shadow-none"
          >
            RATINGS & ATTRIBUTES
          </TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="mt-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-gray-900">
                  PRODUCT DETAILS
                </h2>
                <p className="text-base  md:text-lg text-[#484848] leading-relaxed">
                  Step into the future of audio with our {product.productName} —
                  designed for comfort, convenience, and exceptional sound
                  quality.
                </p>
              </div>

              <div className="mt-10 space-y-5">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Key Features:
                </h3>
                <ul className="text-base list-disc pl-6 text-[#484848] space-y-5">
                  {product.keyFeatures.map((feature, i) => (
                    <li className="" key={i}>
                      <span className="font-medium">{feature.title}:</span>{" "}
                      {feature.description}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5 mt-10">
                <h3 className="text-xl md:text-2xl font-semibold ">
                  Additional Features:
                </h3>
                <ul className="text-base list-disc pl-6 text-[#484848] space-y-5">
                  {product.additionalFeatures.map((feature, i) => (
                    <li key={i}>
                      <span className="font-medium">{feature.title}:</span>{" "}
                      {feature.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-3 space-y-4 h-fit border border-[#B3B3B3] shadow-sm">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Customization Option
                </h3>
                <ul className="text-base md:text-lg text-[#484848] space-y-2">
                  <li>
                    Logo/graphic design: +$0.20/piece (Min. order: 1000 pieces)
                  </li>
                  <li>Package: (Min. order: 1000 pieces)</li>
                  <li>Color: (Min. order: 2000 pieces)</li>
                </ul>
                <button className="w-fit flex justify-start p-3 text-white  rounded-xl bg-[#192D4E] items-center gap-2 text-sm font-medium">
                  <MessageCircleMore /> Message
                </button>
              </Card>
            </div>
          </div>

        <div className="mt-32 max-[767px]:mt-16 ">
            <h3 className="text-xl md:text-2xl font-semibold ">
              Key Attributes
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-1 rounded-[12px] border-[#B3B3B3]  ">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 text-left font-semibold text-gray-900 border-b border-r border-[#B3B3B3]">
                      Attribute
                    </th>
                    <th className="py-3  px-4 text-left font-semibold text-gray-900 border-b border-[#B3B3B3]">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-x divide-[#B3B3B3]">
                  {product.keyAttributes.map(({ title, description }, i) => (
                    <tr key={i} className="  ">
                      <td className="py-3 border-r border-1  hover:bg-gray-50 border-[#B3B3B3] px-4 font-medium text-gray-900">
                        {title}
                      </td>
                      <td className="py-3 px-4 text-[#484848]">
                        {description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="review">
          <Reviews />
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-28 max-[767px]:mt-18 gap-4 lg:gap-6">
        {earbuds.map((src, idx) => (
          <div
            key={idx}
            className="aspect-square overflow-hidden rounded-lg border border-[#B3B3B3]"
          >
            <img
              src={src.img}
              alt={`Product image ${idx + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
