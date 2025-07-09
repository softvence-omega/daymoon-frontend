import upload from "@/assets/Icon/upload.png";
import SubTitle from "../Shared/SubTitle";
import { useState } from "react";

const SellerStorePreferences = () => {
  const [promotionType, setPromotionType] = useState("");
  return (
    <div>
      <div>
        <h1 className="text-[#484848] font-poppins font-medium text-2xl leading-[38px]">
          Store Preferences
        </h1>
        <p className="text-[#484848] font-poppins font-normal text-[16px] leading-[26px] max-w-[618px] mt-2">
          Customize your store settings and appearance.
        </p>
        <div>
          <h1 className="mt-3 mb-3">Store Banner</h1>
          <div className=" mx-auto space-y-6">
            {/* Upload Image */}
            <div className="p-5 border border-dashed border-gray-300 bg-white rounded-xl">
              <div className="border  bg-[#EFEFEF] shadow-md  border-gray-300 rounded-lg flex flex-col justify-center items-center py-10 text-center">
                <span className="text-2xl">
                  <img src={upload} alt="" />
                </span>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="text-red-500">Upload an image</span> or drag
                  and drop PNG, JPG, PDF up to 10 mb
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
                    <label className="text-sm font-medium">Currency</label>
                    <select
                      className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2"
                      value={promotionType}
                      onChange={(e) => setPromotionType(e.target.value)}
                    >
                      <option>USD-US Doller</option>
                      <option>Discount</option>
                      <option>Buy One Get One</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      Shipping Regions
                    </label>
                    <select
                      className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2"
                      value={promotionType}
                      onChange={(e) => setPromotionType(e.target.value)}
                    >
                      <option>United States</option>
                      <option>Discount</option>
                      <option>Buy One Get One</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Applicable Products */}
            <div className="flex justify-between items-center">
              <div>
                <label className="text-xl font-medium ">
                  Applicable Products
                </label>
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
              </div>

              <div>
                <label className="text-sm font-medium">Currency</label>
                <select
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2"
                  value={promotionType}
                  onChange={(e) => setPromotionType(e.target.value)}
                >
                  <option>USD-US Doller</option>
                  <option>Discount</option>
                  <option>Buy One Get One</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerStorePreferences;
