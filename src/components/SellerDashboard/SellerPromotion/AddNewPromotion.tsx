import { useState } from "react";
import { Calendar } from "lucide-react";
import upload from "@/assets/Icon/upload.png";
import product from "@/assets/image/product1.png";
import { FiChevronDown } from "react-icons/fi";
import SubTitle from "../Shared/SubTitle";
import { RxCross2, RxCrossCircled } from "react-icons/rx";

export default function AddNewPromotion() {
  const [promotionType, setPromotionType] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const validateFile = (file: File) => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const validTypes = ["image/png", "image/jpeg", "application/pdf"];
    if (!validTypes.includes(file.type)) {
      alert("Only PNG, JPG, or PDF files are allowed.");
      return false;
    }
    if (file.size > maxSize) {
      alert("File size must be under 10MB.");
      return false;
    }
    return true;
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && validateFile(file)) {
      setUploadedFile(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateFile(file)) {
      setUploadedFile(file);
    }
  };

  return (
    <div className="mx-auto space-y-6">
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center mb-5 w-full">
        <div className="w-full lg:flex-1 space-y-3">
          <h1 className="text-[24px] font-semibold leading-[120%] text-[#1A1A1A] font-poppins">
            Add New Promotion
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto">
          <div className="flex justify-center items-center w-12 h-12 p-3 flex-shrink-0 aspect-square rounded-full bg-[#FEECEB] cursor-pointer">
            <RxCross2 className="text-[#F04436] w-6 h-6" />
          </div>
        </div>
      </div>
      <hr className="text-[#E5E5E5] p-1" />

      {/* Upload Image */}
      <div className="p-5 border border-dashed border-gray-300 bg-white rounded-xl">
        <div
          className="border bg-[#EFEFEF] shadow-md border-gray-300 rounded-lg flex flex-col justify-center items-center py-10 text-center cursor-pointer"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          <span className="text-2xl">
            <img src={upload} alt="upload" />
          </span>
          <p className="text-sm text-gray-500 mt-2">
            <span className="text-red-500">Upload an image</span> or drag and
            drop PNG, JPG, PDF up to 10 mb
          </p>
          {uploadedFile && (
            <p className="mt-3 text-sm text-green-600">
              Uploaded: {uploadedFile.name}
            </p>
          )}
        </div>
        <input
          type="file"
          id="fileInput"
          accept=".png,.jpg,.jpeg,.pdf"
          className="hidden"
          onChange={handleChange}
        />
      </div>

      {/* Basic Information */}
      <div className="space-y-5">
        <SubTitle miniTitle="Basic Information" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2.5">
            <label className="text-[#484848] text-base font-sans">
              Promotion Name
            </label>
            <input
              type="text"
              placeholder="E.g., looking for 1000 units of Bluetooth headsets"
              className="w-full h-12 mt-1 border border-gray-300 rounded-xl px-4 py-2"
            />
          </div>
          <div className="space-y-2.5 relative">
            <label className="text-[#484848] text-base font-sans">
              Promotion Type
            </label>
            <div className="relative">
              <select
                className="w-full h-12 mt-1 border border-gray-300 rounded-xl px-4 py-2 pr-10 appearance-none"
                value={promotionType}
                onChange={(e) => setPromotionType(e.target.value)}
              >
                <option>Select Promotion type</option>
                <option>Discount</option>
                <option>Buy One Get One</option>
                <option>Free Shipping</option>
                <option>Bundle Deal</option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500 pointer-events-none" />
            </div>
          </div>
        </div>

        <SubTitle miniTitle="Discount Options" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-[#484848] text-base font-sans">
              Discount Value
            </label>
            <input
              type="number"
              className="w-full h-12 mt-1 border border-gray-300 rounded-xl px-4 py-2"
              placeholder="$ 0.00"
            />
          </div>
          <div>
            <label className="text-[#484848] text-base font-sans">
              Minimum Purchase
            </label>
            <input
              type="number"
              className="w-full h-12 mt-1 border border-gray-300 rounded-xl px-4 py-2"
              placeholder="$ 0.00"
            />
          </div>
        </div>
      </div>

      {/* Applicable Products */}
      <div>
        <label className="text-xl font-medium">Applicable Products</label>
        <div className="space-y-4 mt-5">
          {["All Products", "Specific Products", "Products Categories"].map(
            (label, index) => (
              <label key={index} className="flex items-center gap-2 text-lg">
                <input
                  type="radio"
                  name="productOption"
                  className="accent-red-500 h-[29px]"
                />
                {label}
              </label>
            )
          )}
        </div>

        {/* Select Product  */}
        <div className="border border-[#E5E5E5] p-4 rounded-2xl mt-4">
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

      {/* Promotion Schedule */}
      <div className="space-y-6">
        <SubTitle miniTitle="Promotion Schedule" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Start Date */}
          <div>
            <label className="text-base font-sans text-gray-700 mb-2.5">
              Start Date
            </label>
            <div className="mt-2.5">
              <input
                type="date"
                className="w-full h-[50px] appearance-none border border-[#B3B3B3] text-[#969696] rounded-xl px-4 py-2 bg-[#FCFCFC]"
              />
              <Calendar className="absolute right-3 top-2.5 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
          {/* End Date */}
          <div>
            <label className="block text-sm font-sans text-gray-700 mb-2.5">
              End Date
            </label>
            <div>
              <input
                type="date"
                className="w-full h-[50px] appearance-none border border-[#B3B3B3] text-[#969696] rounded-xl px-4 py-2 bg-[#FCFCFC]"
              />
              <Calendar className="absolute right-3 top-2.5 text-[#969696] w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="space-y-5">
        <SubTitle miniTitle="Terms & Conditions" />
        <div>
          <label className="text-base font-medium text-[#484848]">
            Terms & Conditions (Optionals)
          </label>
          <textarea
            placeholder="Enter any terms, conditions and restrictions apply for this promotion"
            className="w-full h-[181px] border border-gray-300 rounded-lg px-4 py-2 mt-2.5"
          />
        </div>
      </div>
    </div>
  );
}
