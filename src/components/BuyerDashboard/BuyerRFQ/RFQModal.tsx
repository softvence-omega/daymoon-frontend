import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, X } from "lucide-react";

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
        (file) => file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024 // 5MB limit
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

  const isFormValid = () => {
    return (
      formData.leadTitle.trim() !== "" &&
      formData.productCategory !== "" &&
      formData.productDescription.trim() !== "" &&
      formData.expectedDeliveryDate !== ""
    );
  };

  return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className=" w-full max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-gray-900">
              Create New RFQ
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">
            {/* Left Column - Form Fields */}
            <div className="space-y-6">
              {/* Lead Title */}
              <div className="space-y-2">
                <label
                  htmlFor="leadTitle"
                  className="text-sm font-medium text-gray-700"
                >
                  Lead Title <span className="text-red-500">*</span>
                </label>
                <Input
                  id="leadTitle"
                  type="text"
                  placeholder="Enter lead title"
                  value={formData.leadTitle}
                  onChange={(e) =>
                    handleInputChange("leadTitle", e.target.value)
                  }
                  className="w-full"
                />
              </div>

              {/* Product Category */}
              <div className="space-y-2">
                <label
                  htmlFor="productCategory"
                  className="text-sm font-medium text-gray-700"
                >
                  Product Category <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.productCategory}
                  onValueChange={(value) =>
                    handleInputChange("productCategory", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select product category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Price Range (USD)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="minPrice" className="text-xs text-gray-500">
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
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="maxPrice" className="text-xs text-gray-500">
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
                    />
                  </div>
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-2">
                <label
                  htmlFor="productDescription"
                  className="text-sm font-medium text-gray-700"
                >
                  Product Description <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="productDescription"
                  placeholder="Describe your product requirements in detail..."
                  value={formData.productDescription}
                  onChange={(e) =>
                    handleInputChange("productDescription", e.target.value)
                  }
                  className="min-h-[120px] resize-none"
                />
              </div>

              {/* Expected Delivery Date */}
              <div className="space-y-2">
                <label
                  htmlFor="expectedDeliveryDate"
                  className="text-sm font-medium text-gray-700"
                >
                  Expected Delivery Date <span className="text-red-500">*</span>
                </label>
                <Input
                  id="expectedDeliveryDate"
                  type="date"
                  value={formData.expectedDeliveryDate}
                  onChange={(e) =>
                    handleInputChange("expectedDeliveryDate", e.target.value)
                  }
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <label
                  htmlFor="requirements"
                  className="text-sm font-medium text-gray-700"
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
                  className="min-h-[80px] resize-none"
                />
              </div>
            </div>

            {/* Right Column - Photo Upload & Buttons */}
            <div className="space-y-6">
              {/* Photo Upload */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Product Photos (Optional)
                </label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                    dragActive
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-2">
                    Drag and drop photos here, or{" "}
                    <label
                      htmlFor="photo-upload"
                      className="text-blue-600 hover:text-blue-700 cursor-pointer"
                    >
                      click to browse
                    </label>
                  </p>
                  <p className="text-xs text-gray-400">
                    PNG, JPG up to 5MB each (max 5 photos)
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
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {formData.photos.map((photo, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(photo)}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-16 object-cover rounded-md border"
                        />
                        <button
                          onClick={() => removePhoto(index)}
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
              <div className="space-y-3">
                <Button
                  onClick={handleSubmit}
                  disabled={!isFormValid()}
                  className="w-full bg-[var(--color-sunset-orange)] hover:bg-[var(--color-sunset-orange)]/90"
                >
                  Post Lead
                </Button>
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  className="w-full"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

  );
};

export default RFQModal;
