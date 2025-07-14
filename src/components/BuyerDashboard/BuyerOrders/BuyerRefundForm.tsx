"use client";

import StyledSelect from "@/components/ReUseable/StyledSelect"; // Your reusable StyledSelect
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type React from "react";
import { useState } from "react";

export interface RefundOrder {
  id: string;
  productName: string;
  orderNumber: string;
  orderDate: string;
  price: number;
  image: string;
  status: "delivered" | "processing" | "shipped";
  description?: string;
  quantity: number;
}

interface RefundFormProps {
  order: RefundOrder;
}

export function RefundForm({ order }: RefundFormProps) {
  const [selectedReason, setSelectedReason] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [selectedCustomizations, setSelectedCustomizations] = useState<
    string[]
  >([]);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const reasonOptions = [
    { label: "Product is defective", value: "defective" },
    { label: "Not as described", value: "not-as-described" },
    { label: "Wrong item received", value: "wrong-item" },
    { label: "Damaged during shipping", value: "damaged" },
    { label: "Changed my mind", value: "changed-mind" },
    { label: "Other", value: "other" },
  ];
  const resolution = [
    {
      label: "Full Refund (100%)",
      value: "full-refund",
    },
    {
      label: "Partial Refund (20%)",
      value: "partial-refund",
    },
    {
      label: "Replacement  ",
      value: "replacement",
    },
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setUploadedImages((prev) => [...prev, ...newImages]);
    }
  };

  const getStatusColor = (status: RefundOrder["status"]) => {
    switch (status) {
      case "delivered":
        return "bg-[#10b98133] text-[#10B981]";
      case "processing":
        return "bg-[#f59e4233] text-[#F59E42]";
      case "shipped":
        return "bg-[#1565d833] text-[#1565D8]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  function handleCustomizationChange(value: string): void {
    setSelectedCustomizations((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border-1 border-[#E5E5E5] bg-[#FFF7EC]">
        <CardContent className="mx-4 bg-white p-4 rounded-2xl border-1 border-[#E5E5E5]">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
            <img
              src={order.image || "/placeholder.svg"}
              alt={order.productName}
              className="w-full h-24 lg:w-20 lg:h-20 rounded-lg object-cover bg-gray-100"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm lg:text-xl">
                {order.productName}
              </h3>
              <p className="text-xs text-[#666] mt-1">
                Order {order.orderNumber}
              </p>
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 mt-2">
                {/* Badge for Status */}
                <Badge
                  className={`text-xs lg:text-sm font-medium px-4 py-1 ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </Badge>

                {/* Order Date */}
                <span className="text-xs text-[#666]">{order.orderDate}</span>
              </div>
            </div>
            {/* Price and Quantity */}
            <div className="text-right mt-4 lg:mt-0">
              <p className="lg:text-2xl font-semibold text-[#F04436]">
                ${order.price.toLocaleString()}
              </p>
              <p className="text-xs text-[#666] mt-1">Qty: {order.quantity}</p>
            </div>
          </div>
        </CardContent>

        <CardContent className="p-6 space-y-4">
          <div>
            <Label className="text-sm lg:text-lg font-medium">
              Reason for refund
            </Label>
            <StyledSelect
              className="mt-2"
              placeholder="Choose a reason for refund"
              options={reasonOptions}
              defaultValue={selectedReason}
              onValueChange={setSelectedReason}
            />
          </div>

          <div className="mt-6">
            <Label
              htmlFor="issue-description"
              className="text-base font-medium"
            >
              Describe the issue
            </Label>
            <Textarea
              id="issue-description"
              placeholder="Please provide details about the issue..."
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
              className="mt-2 min-h-[200px] bg-white border-none focus:outline-none focus:ring-0 ring-[#B3B3B3]"
            />
          </div>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-lg font-medium">Upload Image</CardTitle>
          <p className="text-sm text-gray-600">
            Please upload clear images showing the product's condition. Maximum
            5 images. (Not required)
          </p>
        </CardHeader>

        <CardContent className="">
          <div className="grid grid-cols-3 gap-3">
            {uploadedImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden bg-white"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Upload ${index + 1}`}
                  className="w-full bg-white h-full object-cover"
                />
              </div>
            ))}

            <label className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 bg-white transition-colors py-4 px-4">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Plus className="w-6 h-6 text-gray-400 mb-2" />
              <span className="text-xs text-gray-500">Add photo</span>
            </label>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-medium">Customization Options</h4>
            <div className="space-y-4 mt-4">
              {resolution.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 text-gray-600 p-4 rounded-lg cursor-pointer transition-all duration-200 bg-[#E5E5E5] text-sm lg:text-lg"
                >
                  <Checkbox
                    id={item.label}
                    checked={selectedCustomizations.includes(item.value)}
                    onCheckedChange={() =>
                      handleCustomizationChange(item.value)
                    }
                    className="h-5 w-5 cursor-pointer transition-colors duration-200 ease-in-out border 
                      data-[state=checked]:bg-[#f04436] 
                      data-[state=checked]:border-[#f04436] 
                      data-[state=checked]:text-white 
                      data-[state=unchecked]:bg-transparent 
                      data-[state=unchecked]:border-[#f04436] 
                      data-[state=unchecked]:border-2"
                  />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>

        <div className="mx-6">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.8 }}
            className="w-full bg-[#F04436] hover:bg-red-600 text-white py-3 px-10 cursor-pointer rounded-2xl"
          >
            Request refund
          </motion.button>
        </div>
      </Card>
    </div>
  );
}
