import CommonCalendar from "@/common/CommonCalender";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import React, { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { toast } from "react-toastify";

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RFQFormData {
  leadTitle: string;
  productCategory: string;
  minPrice: string;
  maxPrice: string;
  productDescription: string;
  expectedDeliveryDate: string;
  requirements: string;
  photos: File[];
}

const RFQModal: React.FC<RFQModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<RFQFormData>({
    leadTitle: "",
    productCategory: "",
    minPrice: "",
    maxPrice: "",
    productDescription: "",
    expectedDeliveryDate: "",
    requirements: "",
    photos: [],
  });

  const [dragActive, setDragActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      handleInputChange("expectedDeliveryDate", date.toISOString());
    }
  };
  const productCategories = [
    "Electronics",
    "Clothing & Apparel",
    "Home & Garden",
    "Sports & Outdoors",
    "Health & Beauty",
    "Automotive",
    "Books & Media",
    "Toys & Games",
    "Industrial & Scientific",
    "Food & Beverages",
  ];

  const handleInputChange = (field: keyof RFQFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files).filter(
        (file) =>
          file.type.startsWith("image/") && file.size <= 10 * 1024 * 1024 // 5MB limit
      );
      setFormData((prev) => ({
        ...prev,
        photos: [...prev.photos, ...newFiles].slice(0, 5), // Max 5 photos
      }));
    }
  };

  const removePhoto = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const handleSubmit = () => {
    // TODO: Implement form submission logic
    toast.success("RFQ created successfully!");
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleCancel = () => {
    setFormData({
      leadTitle: "",
      productCategory: "",
      minPrice: "",
      maxPrice: "",
      productDescription: "",
      expectedDeliveryDate: "",
      requirements: "",
      photos: [],
    });
    onClose();
  };

  const handleDivClick = () => {
    const fileInput = document.getElementById(
      "photo-upload"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[1031px] max-h-[90vh] overflow-y-auto bg-white p-6 sm:rounded-xl border-none">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-900">
            Create New RFQ
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">
          {/* Left Column - Form Fields */}
          <div className="space-y-6">
            {/* Lead Title */}
            <div className="">
              <label
                htmlFor="leadTitle"
                className="text-lg font-medium text-[#484848]"
              >
                Lead Title
              </label>
              <Input
                id="leadTitle"
                type="text"
                placeholder="Enter lead title"
                value={formData.leadTitle}
                onChange={(e) => handleInputChange("leadTitle", e.target.value)}
                className="w-full bg-[#E5E5E5] border border-[#B3B3B3] text-base rounded-xl placeholder:text-[#969696] h-auto p-3 mt-2"
              />
            </div>

            {/* Product Category */}
            <div className="">
              <label
                htmlFor="productCategory"
                className="text-lg font-medium text-[#484848]"
              >
                Product Category
              </label>
              <Select
                value={formData.productCategory}
                onValueChange={(value) =>
                  handleInputChange("productCategory", value)
                }
              >
                <SelectTrigger className="w-full bg-[#E5E5E5] border border-[#B3B3B3] text-base rounded-xl placeholder:text-[#969696] h-auto p-3 mt-2">
                  <SelectValue placeholder="Select product category" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {productCategories.map((category) => (
                    <SelectItem
                      className="hover:bg-gray-200 hover:text-sunset-orange cursor-pointer01"
                      key={category}
                      value={category}
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div className="">
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="">
                  <label
                    htmlFor="minPrice"
                    className="text-lg font-medium text-[#484848]"
                  >
                    Min Price
                  </label>
                  <Input
                    id="minPrice"
                    type="number"
                    placeholder="0"
                    value={formData.minPrice}
                    onChange={(e) =>
                      handleInputChange("minPrice", e.target.value)
                    }
                    min="0"
                    step="0.01"
                    className="w-full bg-[#E5E5E5] border border-[#B3B3B3] text-base rounded-xl placeholder:text-[#969696] h-auto p-3 mt-1"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="maxPrice"
                    className="text-lg font-medium text-[#484848]"
                  >
                    Max Price
                  </label>
                  <Input
                    id="maxPrice"
                    type="number"
                    placeholder="0"
                    value={formData.maxPrice}
                    onChange={(e) =>
                      handleInputChange("maxPrice", e.target.value)
                    }
                    min="0"
                    step="0.01"
                    className="w-full bg-[#E5E5E5] border border-[#B3B3B3] text-base rounded-xl placeholder:text-[#969696] h-auto p-3 mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="">
              <label
                htmlFor="productDescription"
                className="text-lg font-medium text-[#484848]"
              >
                Product Description
              </label>
              <Textarea
                id="productDescription"
                placeholder="Describe your product requirements in detail..."
                value={formData.productDescription}
                onChange={(e) =>
                  handleInputChange("productDescription", e.target.value)
                }
                className="min-h-[120px] resize-none w-full bg-[#E5E5E5] border border-[#B3B3B3] text-base rounded-xl placeholder:text-[#969696] p-3 mt-2"
              />
            </div>

            <div className="">
              <label
                htmlFor="expectedDeliveryDate"
                className="text-lg font-medium text-[#484848]"
              >
                Expected Delivery Date
              </label>
              <div className="mt-2">
                {" "}
                <CommonCalendar
                  label="Expected Delivery Date"
                  selectedDate={selectedDate}
                  onSelectDate={handleDateChange}
                />
              </div>
            </div>

            {/* Requirements */}
            <div className="">
              <label
                htmlFor="requirements"
                className="text-lg font-medium text-[#484848]"
              >
                Additional Requirements
              </label>
              <Textarea
                id="requirements"
                placeholder="Any specific requirements, certifications, or preferences..."
                value={formData.requirements}
                onChange={(e) =>
                  handleInputChange("requirements", e.target.value)
                }
                className="min-h-[80px] resize-none w-full bg-[#E5E5E5] border border-[#B3B3B3] text-base rounded-xl placeholder:text-[#969696] p-3 mt-2"
              />
            </div>
          </div>

          {/* Right Column - Photo Upload & Buttons */}
          <div className="space-y-6">
            {/* Photo Upload */}
            <div
              className={`border-1 border-dashed rounded-[20px] p-4 text-center transition-colors mt-2 cursor-pointer ${
                dragActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={handleDivClick}
            >
              <div className="max-h-[300px] bg-[#EFEFEF] rounded-[16px] p-4 py-10 pointer-events-none">
                <MdOutlineCloudUpload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="px-10">
                  <span className="text-[#F04436]">Upload an image</span> or
                  drag and drop PNG, JPG,PDF up to 10 mb
                </p>
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleFileUpload(e.target.files)}
                  className="hidden"
                />
              </div>

              {/* Uploaded Photos Preview */}
              {formData.photos.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mt-4 pointer-events-auto">
                  {formData.photos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-16 object-cover rounded-md border"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removePhoto(index);
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleCancel}
                className="w-full hover:scale-103 transition-all  rounded-2xl py-4 h-fit border border-[#F04436]  cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="w-full bg-[#F04436] hover:bg-[#AA3026] text-white flex justify-center text-sm md:text-base hover:scale-103 transition-all  itews-center gap-2 px-4  py-4  rounded-xl cursor-pointer"
              >
                Post Lead
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RFQModal;
