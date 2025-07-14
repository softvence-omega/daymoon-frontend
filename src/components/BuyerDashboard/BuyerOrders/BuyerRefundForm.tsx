"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefundOrder } from "@/lib/Buyer/BuyerRefund";
import { Plus } from "lucide-react";

interface RefundFormProps {
  order: RefundOrder;
}

export function RefundForm({ order }: RefundFormProps) {
  const [selectedReason, setSelectedReason] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  // const [preferredResolution, setPreferredResolution] = useState("");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // In a real app, you'd upload these files and get URLs back
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setUploadedImages((prev) => [...prev, ...newImages]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Product Info */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <img
              src={order.image || "/placeholder.svg"}
              alt={order.productName}
              className="w-16 h-16 rounded-lg object-cover bg-gray-100"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {order.productName}
              </h2>
              <p className="text-sm text-gray-500">Order {order.orderNumber}</p>
              <p className="text-lg font-semibold text-red-600 mt-1">
                ${order.price.toLocaleString()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upload Images */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Upload Image</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600">
            Please upload clear images showing the product's condition. Maximum
            5 images. (Not required)
          </p>

          <div className="grid grid-cols-3 gap-3">
            {uploadedImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden bg-gray-100"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            <label className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
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
        </CardContent>
      </Card>

      {/* Select Reason */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <div>
            <Label className="text-base font-medium">Select a reason</Label>
            <Select value={selectedReason} onValueChange={setSelectedReason}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Choose a reason for refund" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="defective">Product is defective</SelectItem>
                <SelectItem value="not-as-described">
                  Not as described
                </SelectItem>
                <SelectItem value="wrong-item">Wrong item received</SelectItem>
                <SelectItem value="damaged">Damaged during shipping</SelectItem>
                <SelectItem value="changed-mind">Changed my mind</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
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
              className="mt-2 min-h-[100px]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Preferred Resolution */}
      {/* <Card>
        <CardContent className="p-6">
          <Label className="text-base font-medium mb-4 block">Preferred resolution</Label>
          <RadioGroup value={preferredResolution} onValueChange={setPreferredResolution}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="full-refund" id="full-refund" />
              <Label htmlFor="full-refund" className="flex-1 cursor-pointer">
                Full Refund <span className="text-gray-500">(33.1%)</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="partial-refund" id="partial-refund" />
              <Label htmlFor="partial-refund" className="flex-1 cursor-pointer">
                Partial Refund <span className="text-gray-500">(50%)</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="replacement" id="replacement" />
              <Label htmlFor="replacement" className="flex-1 cursor-pointer">
                Replacement
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card> */}

      {/* Submit Button */}
      <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
        Request refund
      </Button>
    </div>
  );
}
