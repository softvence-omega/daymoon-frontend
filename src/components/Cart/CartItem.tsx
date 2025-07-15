import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartData, PriceRange } from "@/types";
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
    const price = getPriceBasedOnQuantity(variant?.priceRange, quantity);
    return price * quantity;
  };

  return (
    <div className="space-y-6">
      {/* Vendor Header */}
      <div className="bg-white p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm">
            <img
              src={cardData?.cart?.[vendorIndex]?.vendorInfo?.vendorLogo}
              alt={cardData?.cart?.[vendorIndex]?.vendorInfo?.vendorName}
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
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
      </div>

      {/* Product and Variants */}
      <div className="divide-y divide-gray-100">
        {cardData?.cart?.[vendorIndex]?.products?.map((product, productIndex) =>
          product?.variants?.map((variant, variantIndex) => {
            return (
              <div key={variant?.variantId} className="p-4">
                <div className="flex items-center gap-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={variant?.image || "/placeholder.svg"}
                      alt={product?.productName}
                      className="w-16 h-16 rounded-lg object-cover bg-gray-100"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">
                      {product?.productName}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-orange-500 font-medium text-sm">
                        $
                        {getPriceBasedOnQuantity(
                          variant?.priceRange,
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

                  {/* Quantity Controller */}
                  <div className="flex items-center gap-3">
                    {/* Quantity Controller */}
                    <div className="flex items-center shadow-[0_0_0_1px_#E5E5E5] rounded-xl p-1">
                      <Button
                        size="sm"
                        onClick={() => handleQuantityChange("decrease")}
                        className="text-[#F04436] bg-[#FEECEB] hover:bg-[#FDD8D3] rounded-full w-8 h-8 p-0"
                        disabled={quantity <= 0}
                      >
                        -
                      </Button>
                      <Input
                        value={quantity}
                        onChange={handleQuantityInput}
                        className="text-center text-gray-700 bg-[#EAEAEA] rounded-full border-none w-12 h-8"
                        min="0"
                      />
                      <Button
                        size="sm"
                        onClick={() => handleQuantityChange("increase")}
                        className="text-[#F04436] bg-[#FEECEB] hover:bg-[#FDD8D3] rounded-full w-8 h-8 p-0"
                      >
                        +
                      </Button>
                    </div>

                    {/* Total Price */}
                    <div className="text-right min-w-[60px]">
                      <span className="font-semibold text-[#F04436] text-lg">
                        ${calculateVariantTotal().toFixed(2)}
                      </span>
                    </div>

                    {/* Remove Item Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        onRemoveItem?.(vendorIndex, productIndex, variantIndex)
                      }
                      className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
