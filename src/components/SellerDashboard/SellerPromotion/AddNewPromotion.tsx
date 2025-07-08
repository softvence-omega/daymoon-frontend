import { useState } from "react";
import { Calendar } from "lucide-react"; // or use your preferred date picker icon
import upload from "@/assets/Icon/upload.png";
import SubTitle from "../Shared/SubTitle";
import product from "@/assets/image/product1.png";

export default function AddNewPromotion() {
  const [promotionType, setPromotionType] = useState("");

  return (
    <div className=" mx-auto space-y-6">
      {/* Upload Image */}
      <div className="p-5 border border-dashed border-gray-300 bg-white rounded-xl">
        <div className="border  bg-[#EFEFEF] shadow-md  border-gray-300 rounded-lg flex flex-col justify-center items-center py-10 text-center">
          <span className="text-2xl">
            <img src={upload} alt="" />
          </span>
          <p className="text-sm text-gray-500 mt-2">
            <span className="text-red-500">Upload an image</span> or drag and
            drop PNG, JPG, PDF up to 10 mb
          </p>
        </div>
      </div>

      {/* Basic Information */}
      <div>
        <div>
          <SubTitle miniTitle="Basic Information" />
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Promotion Name</label>
              <input
                type="text"
                placeholder="E.g., looking for 1000 units of Bluetooth headsets"
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Promotion Type</label>
              <select
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2"
                value={promotionType}
                onChange={(e) => setPromotionType(e.target.value)}
              >
                <option>Select Promotion type</option>
                <option>Discount</option>
                <option>Buy One Get One</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Discount Value</label>
              <input
                type="number"
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2"
                placeholder="$ 0.00"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Minimum Purchase</label>
              <input
                type="number"
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2"
                placeholder="$ 0.00"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Applicable Products */}
      <div>
        <label className="text-xl font-medium ">Applicable Products</label>
        <div className="space-y-4 mt-5">
          <label className="flex items-center gap-2 text-lg">
            <input
              type="radio"
              name="productOption"
              className="accent-red-500 h-[29px]"
            />
            All Products
          </label>
          <label className="flex items-center gap-2 text-lg">
            <input
              type="radio"
              name="productOption"
              className="accent-red-500"
            />
            Specific Products
          </label>
          <label className="flex items-center gap-2 text-lg">
            <input
              type="radio"
              name="productOption"
              className="accent-red-500"
            />
            Products Categories
          </label>
        </div>
        {/*Select Product  Product  */}
        <div className=" border border-[#E5E5E5] p-4 rounded-2xl mt-4">
          <div className="flex items-center gap-3 border border-[#E5E5E5] text-gray-400 rounded-lg px-4 py-2">
            Selected Products
          </div>
          <div className="mt-4 space-y-3">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2"
              >
                <input type="checkbox" />
                <img src={product} alt="Product" className="w-8 h-8" />
                <div>
                  <p className="text-sm font-medium">Ultra HD Display</p>
                  <p className="text-xs text-gray-500">SKU: HP-X1239-45K</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Promotion Schedule */}
        <div>
          <SubTitle miniTitle="Promotion Schedule" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Start Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Start Date
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full appearance-none border border-[#B3B3B3] text-[#969696] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-[#FCFCFC]"
              />
              <Calendar className="absolute right-3 top-2.5 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              End Date
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full appearance-none border border-[#B3B3B3] rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-[#FCFCFC]"
              />
              <Calendar className="absolute right-3 top-2.5 text-[#969696] w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
      {/* Terms & Conditions */}
      <div className="space-y-5">
        <div>
          <SubTitle miniTitle="Terms & Conditions" />
        </div>
        <div>
          <label className="text-base font-medium text-[#484848]">
            Terms & Conditions (Optional)
          </label>
          <textarea
            placeholder="Enter any terms, conditions and restrictions apply for this promotion"
            className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 h-24"
          />
        </div>
      </div>
    </div>
  );
}
