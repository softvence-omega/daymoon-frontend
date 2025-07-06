import CommonHeader from "@/common/CommonHeader";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaCheck } from "react-icons/fa6";

import product from "../../../assets/landing/products.png";
import p1 from "../../../assets/landing/product2.png";
import p2 from "../../../assets/landing/product3.png";
import add from "../../../assets/landing/add.svg";

const imageList = [{ img: p1 }, { img: p2 }, { img: product }, { img: add }];
type ProductFormData = {
  productName: string;
  productCategory: string;
  skuNo: string;
  brandName: string;
  weight: string;
  gender: string;
  sizes: string[];
  colors: string[];
  moq: {
    range: string;
    price: string;
  }[];
  description: string;
  aboutProduct: string;
  quantity: string;
  pricePerUnit: string;
  samplePrice: string;
  customizations: {
    option: string;
    price: string;
  }[];
  images: File[];
};

import { MdOutlineCloudUpload } from "react-icons/md";
import Variants from "./Variants";
import CommonButton from "@/common/CommonButton";

const ProductInformation = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    productName:
      "Bluetooth Wireless Torbuds with Deep Boss, 40H Playtime, LED Display, IP7 Rating, Mic for iPhone and Android, Black",
    productCategory: "",
    skuNo: "",
    brandName: "",
    weight: "",
    gender: "",
    sizes: [],
    colors: [],
    moq: [{ range: "10-99 pieces", price: "$5.34" }],
    description: "",
    aboutProduct: "",
    quantity: "",
    pricePerUnit: "",
    samplePrice: "$1.50",
    customizations: [],
    images: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        images: Array.from(e.target.files as FileList),
      }));
    }
  };

  const addMoq = () => {
    setFormData((prev) => ({
      ...prev,
      moq: [...prev.moq, { range: "", price: "" }],
    }));
  };

  const addCustomization = () => {
    setFormData((prev) => ({
      ...prev,
      customizations: [...prev.customizations, { option: "", price: "" }],
    }));
  };

  const handleMoqChange = (
    index: number,
    field: "range" | "price",
    value: string
  ) => {
    const updatedMoq = [...formData.moq];
    updatedMoq[index][field] = value;
    setFormData((prev) => ({ ...prev, moq: updatedMoq }));
  };

  const handleCustomizationChange = (
    index: number,
    field: "option" | "price",
    value: string
  ) => {
    const updatedCustomizations = [...formData.customizations];
    updatedCustomizations[index][field] = value;
    setFormData((prev) => ({ ...prev, customizations: updatedCustomizations }));
  };

  const toggleSize = (size: string) => {
    setFormData((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const toggleColor = (index: number) => {
    setFormData((prev) => {
      const newColors = [...prev.colors];
      if (newColors.includes(index.toString())) {
        return {
          ...prev,
          colors: newColors.filter((c) => c !== index.toString()),
        };
      } else {
        return { ...prev, colors: [...newColors, index.toString()] };
      }
    });
  };

  const colorOptions = [
    { name: "Black", hex: "#4F4631" },
    { name: "Teal Gray", hex: "#314F4A" },
    { name: "Red", hex: "#FF3333" },
    { name: "Gray", hex: "#777777" },
    { name: "Deep Blue", hex: "#31344F" },
    { name: "Olive", hex: "#889900" },
    { name: "Muted Green", hex: "#559966" },
    { name: "Steel Blue", hex: "#456896" },
    { name: "Light Teal", hex: "#066699" },
    { name: "Slate Blue", hex: "#445577" },
    { name: "Cool Gray", hex: "#556688" },
    { name: "Off White", hex: "#EEEEEE" },
    { name: "Forest Teal", hex: "#346457" },
  ];

  return (
    <div className="  flex-1  flex flex-col gap-10">
      <div className=" p-6 border border-dashed border-[#B3B3B3] rounded-lg ">
        <div className=" rounded-lg text-center p-20 ">
          <input
            type="file"
            id="product-images"
            className="hidden"
            onChange={handleFileUpload}
            multiple
            accept="image/png, image/jpeg, application/pdf"
          />
          <label htmlFor="product-images" className="cursor-pointer">
            <div className="flex flex-col items-center justify-center gap-6">
              <span className="text-5xl text-[#6A6A6A]">
                <MdOutlineCloudUpload />
              </span>
              <p className="text-base text-[#6A6A6A]">
                <span className="font-medium text-sunset-orange pr-1">
                  Upload an image
                </span>
                or drag and drop PNG, JPG, PDF up to 10MB (800 x 1200
                recommended)
              </p>
            </div>
          </label>
        </div>
      </div>

      <div className=" text-foundation-gray">
        <CommonHeader className="text-[#484848] border-b border-[#E5E5E5] pb-6">
          Product Information
        </CommonHeader>
        <div className=" flex flex-col gap-5 pt-5">
          <div>
            <label className="block text-sm  text-[#969696] mb-2.5">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              className="w-full px-3 py-2 bg-[#FCFCFC] border border-[#B3B3B3] rounded-md outline-none "
              placeholder="Your product name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#969696] mb-2.5">
                Product Category
              </label>
              <Select>
                <SelectTrigger className="w-full bg-[#FCFCFC] border border-[#B3B3B3] px-3 py-2 rounded-md outline-none focus:ring-0">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm  text-[#969696] mb-2.5">
                SKU No
              </label>
              <input
                type="text"
                name="skuNo"
                className="w-full px-3 py-2 bg-[#FCFCFC] border border-[#B3B3B3] rounded-md outline-none "
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm  text-[#969696] mb-2.5">
                Brand
              </label>
              <input
                type="text"
                name="brandName"
                className="w-full px-3 py-2 bg-[#FCFCFC] border border-[#B3B3B3] rounded-md outline-none "
              />
            </div>
            <div>
              <label className="block text-sm  text-[#969696] mb-2.5">
                Weight
              </label>
              <input
                type="text"
                name="weight"
                className="w-full px-3 py-2 bg-[#FCFCFC] border border-[#B3B3B3] rounded-md outline-none "
              />
            </div>
            <div>
              <label className="block text-sm text-[#969696] mb-2.5">
                Gender
              </label>
              <Select>
                <SelectTrigger className="w-full bg-[#FCFCFC] border border-[#B3B3B3] px-3 py-2 rounded-md outline-none focus:ring-0">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm  text-[#969696] mb-4">
          Select Available Size (if available)
        </label>
        <div className="flex flex-wrap gap-2 text-base  ">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => toggleSize(size)}
              className={`px-6 py-3 cursor-pointer  block rounded-full ${
                formData.sizes.includes(size)
                  ? "bg-[#F0F0F0] text-black/60"
                  : "bg-black text-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm  text-[#969696] mb-4">
          Select Colors (if available)
        </label>
        <div className=" flex items-center gap-4">
          {colorOptions.map((color, index) => {
            const isSelected = formData.colors.includes(index.toString());

            return (
              <div
                key={`${color.name}-${index}`}
                className="flex flex-col items-center"
              >
                <button
                  type="button"
                  onClick={() => toggleColor(index)}
                  className={`w-10 h-10 rounded-full cursor-pointer flex items-center justify-center
               `}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  {isSelected && <FaCheck className="text-white text-xs" />}
                </button>
                <span className="text-xs mt-1 text-[#666]">{color.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <Variants imageList={imageList} />

      <div>
        <label className="block text-sm  text-[#969696] mb-2.5">
          Product Description
        </label>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-3 py-2 bg-[#FCFCFC] border border-[#B3B3B3] rounded-md outline-none "
        />
      </div>

      <div className="">
        <CommonHeader className="text-[#484848] border-b border-[#E5E5E5] pb-6">
          Quantity & Pricing
        </CommonHeader>

        <div className="grid grid-cols-2 gap-6 pt-5">
          <div>
            <label className="block text-sm  text-[#969696] mb-2.5">
              Minimum Order Quantity (MOQ)
            </label>
            <input
              type="text"
              name="quantity"
              className="w-full px-3 py-2 bg-[#FCFCFC] border border-[#B3B3B3] rounded-md outline-none "
              placeholder="Enter MOQ"
            />
          </div>
          <div>
            <label className="block text-sm  text-[#969696] mb-2.5">
              Total Product Quantity
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-[#FCFCFC] border border-[#B3B3B3] rounded-md outline-none "
              placeholder="Input the total quantity of the product"
            />
          </div>
          <div>
            <label className="block text-sm  text-[#969696] mb-2.5">
              Price Per Unit (If available)
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-[#FCFCFC] border border-[#B3B3B3] rounded-md outline-none "
              placeholder="Input single Product Price"
            />
          </div>
          <div>
            <label className="block text-sm  text-[#969696] mb-2.5">
              Sample Price
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-[#FCFCFC] border border-[#B3B3B3] rounded-md outline-none "
              placeholder="Input the total quantity of the product"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
        <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition">
          Cancel
        </button>
        <CommonButton className="transition">Save Changes</CommonButton>
      </div>
    </div>
  );
};

export default ProductInformation;
