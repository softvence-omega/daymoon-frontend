import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartData, PriceRange } from "@/types";
import { motion } from "framer-motion";
import { MapPin, Trash2 } from "lucide-react";
import { useState } from "react";

// Helper to find price based on quantity
const getPriceBasedOnQuantity = (
  priceRange: PriceRange[],
  quantity: number
) => {
  if (!priceRange || priceRange.length === 0) {
    return 0; // Return 0 if priceRange is not provided or is empty
  }

  for (const range of priceRange) {
    if (!range?.range) {
      continue; // Skip if range is undefined or empty
    }

    const [min, max] = range.range.split("-").map(Number);
    if (quantity >= min && quantity <= max) {
      return range.price; // Found matching range, return the price
    }
  }

  // Default to the last price in the range if no match is found
  return priceRange[priceRange.length - 1]?.price ?? 0;
};

interface CartItemComponentProps {
  cardData: CartData;
  vendorIndex: number;
  productIndex: number;
  variantIndex: number;
  onQuantityChange?: (
    vendorIndex: number,
    productIndex: number,
    variantIndex: number,
    newQuantity: number
  ) => void;
  onRemoveItem?: (
    vendorIndex: number,
    productIndex: number,
    variantIndex: number
  ) => void;
}

export default function CartItemComponent({
  cardData,
  vendorIndex,
  productIndex,
  variantIndex,
  onQuantityChange,
  onRemoveItem,
}: CartItemComponentProps) {
  const variant =
    cardData?.cart?.[vendorIndex]?.products?.[productIndex]?.variants?.[
      variantIndex
    ];

  const [quantity, setQuantity] = useState(variant?.quantity || 0);

  const handleQuantityChange = (action: "increase" | "decrease") => {
    const newQuantity =
      action === "increase" ? quantity + 1 : Math.max(0, quantity - 1);
    setQuantity(newQuantity);
    onQuantityChange?.(vendorIndex, productIndex, variantIndex, newQuantity); // Updating only the specific variant
  };

  const handleQuantityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value, 10);
    const newQuantity = isNaN(value) || value < 0 ? 0 : value;
    setQuantity(newQuantity);
    onQuantityChange?.(vendorIndex, productIndex, variantIndex, newQuantity); // Updating only the specific variant
  };

  const calculateVariantTotal = () => {
    const price = getPriceBasedOnQuantity(variant.priceRange!, quantity);

    const result = price * quantity;
    return result.toFixed(2);
  };

  // Handle the removal of this variant from the cart
  const handleRemoveVariant = () => {
    onRemoveItem?.(vendorIndex, productIndex, variantIndex);
  };

  return (
    <div className="bg-white p-4  border-b-1 border-[#E5E5E5] ">
      <div className="flex items-center gap-4 mb-8 ">
        <div className="w-12 h-12 rounded-lg overflow-hidden">
          <img
            src={cardData?.cart?.[vendorIndex]?.vendorInfo?.vendorLogo}
            alt={cardData?.cart?.[vendorIndex]?.vendorInfo?.vendorName}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            {cardData?.cart?.[vendorIndex]?.vendorInfo?.vendorName}
          </h3>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <MapPin className="w-3 h-3" />
            <span>
              {cardData?.cart?.[vendorIndex]?.vendorInfo?.vendorLocation}
            </span>
          </div>
        </div>
      </div>

      <div className="md:mx-8  ">
        {cardData?.cart?.[vendorIndex]?.products?.map((product) =>
          product?.variants?.map((variant) => {
            return (
              <div
                key={variant?.variantId}
                className="flex border-t border-[#E5E5E5] pt-4 flex-col sm:flex-row items-center gap-4  mb-4"
              >
                <div className="flex-shrink-0">
                  <img
                    src={variant?.image}
                    alt={product?.productName}
                    className="w-16 h-16 rounded-lg object-cover bg-gray-100"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 ">
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base">
                    {product?.productName}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[#FCAB3F] font-medium text-sm">
                      $$
                      {getPriceBasedOnQuantity(
                        variant.priceRange!,
                        quantity
                      ).toFixed(2)}{" "}
                      /piece
                    </span>
                    {variant?.color && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {variant?.color}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 mt-4 sm:mt-0">
                  <div className="flex items-center shadow-sm rounded-xl p-2 border-gray-300 gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleQuantityChange("decrease")}
                      className="text-[#F04436] bg-[#FEECEB] rounded-full cursor-pointer"
                    >
                      -
                    </Button>
                    <Input
                      value={quantity}
                      onChange={handleQuantityInput}
                      className="text-center text-gray-700 bg-[#EAEAEA] max-w-20 rounded-full border-none focus:ring-[#F04436] focus:ring-1 "
                    />
                    <Button
                      size="sm"
                      onClick={() => handleQuantityChange("increase")}
                      className="text-[#F04436] bg-[#FEECEB] rounded-full cursor-pointer"
                    >
                      +
                    </Button>
                  </div>

                  <div className="text-right min-w-[80px]  tabular-nums">
                    <span className="font-semibold text-[#F04436] text-lg">
                      ${calculateVariantTotal()}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={handleRemoveVariant}
                    className="text-[#FCAB3F] hover:text-orange-600 cursor-pointer bg-orange-50 p-2 mt-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
