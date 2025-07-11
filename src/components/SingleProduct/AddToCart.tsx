/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { IProduct } from "@/types";
import { motion } from "motion/react";
import { useState } from "react";

function AddToCart({ productData }: { productData: IProduct }) {
  // Track selected customizations and variant quantities
  const [selectedCustomizations, setSelectedCustomizations] = useState<
    string[]
  >([]);

  const [variantQuantities, setVariantQuantities] = useState(
    productData.variants.reduce((acc, variant) => {
      acc[variant.color] = 0;
      return acc;
    }, {} as Record<string, number>)
  );

  const handleCustomizationChange = (option: string) => {
    setSelectedCustomizations((prev) => {
      const updated = prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option];
      console.log("Selected Customizations: ", updated);
      return updated;
    });
  };

  // Handle the change in quantity for each variant (via input or buttons)
  const handleQuantityChange = (action: string, variant: string) => {
    setVariantQuantities((prev) => {
      let newQuantity = prev[variant] + (action === "increase" ? 1 : -1);
      if (newQuantity < 0) newQuantity = 0;
      console.log("Updated quantity: ", { ...prev, [variant]: newQuantity });
      return { ...prev, [variant]: newQuantity };
    });
  };
  // Handle manual quantity input
  const handleQuantityInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    variant: string
  ) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) value = 0;
    setVariantQuantities((prev) => {
      console.log(`Updated quantity for ${variant}: ${value}`);
      return { ...prev, [variant]: value };
    });
  };

  // Calculate total quantity of all variants selected
  const calculateTotalQuantity = () => {
    return Object.values(variantQuantities).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };
  //  customization and product quantities will be multiplied by the price per unit

  const calculateVariantPrice = (variant: any) => {
    const selectedQuantity = variantQuantities[variant.color];

    const priceTier = productData.moq.find((tier) => {
      const [minQty, maxQty] = tier.range.split("-").map(Number);
      return selectedQuantity >= minQty && selectedQuantity <= maxQty;
    });

    // Get the price from the corresponding MOQ range, if available
    const variantPrice = priceTier ? parseFloat(priceTier.price.slice(1)) : 0;

    return variantPrice;
  };

  const calculateCustomizationPrice = () => {
    const customizationTotal = selectedCustomizations.reduce(
      (total, option) => {
        const customization = productData.customizations.find(
          (item) => item.option === option
        );
        return (
          total + (customization ? parseFloat(customization.price.slice(1)) : 0)
        );
      },
      0
    );

    return customizationTotal;
  };

  // Final price calculation
  const calculateTotalPrice = () => {
    return productData.variants.reduce((total, variant) => {
      const variantPrice = calculateVariantPrice(variant);

      //
      const customizationPrice = calculateCustomizationPrice();

      const variantTotalPrice =
        variantPrice * variantQuantities[variant.color] +
        customizationPrice * variantQuantities[variant.color];

      return total + variantTotalPrice; // Add variant total to the overall total
    }, 0);
  };

  // Check if the total quantity meets the minimum order quantity
  const isQuantityValid =
    calculateTotalQuantity() >= productData.minOrderQuantity;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          className="px-10 py-3 rounded-3xl border-[#F04436] border-1 hover:bg-[#F04436] hover:text-white text-[#F04436] transition-colors duration-200 font-semibold"
        >
          Add to Cart
        </motion.button>
      </DialogTrigger>

      <DialogContent className="max-w-[800px] border-none bg-white rounded-lg shadow-xl overflow-y-auto max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold text-gray-800">
            My Cart
          </DialogTitle>
          <hr className="border-gray-200 mt-4" />
        </DialogHeader>

        <div className="grid gap-6 mt-4">
          {/* Display MOQ Range and Prices */}
          <div>
            <div className="flex justify-between flex-wrap items-center gap-5">
              {productData.moq.map((tier, i) => (
                <div key={i} className="border-none rounded-md p-2 text-start">
                  <p className="text-sm text-[#666]">{tier.range}</p>
                  <p className="text-lg md:font-semibold mt-2 md:text-xl text-gray-800">
                    {tier.price}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[#666] text-sm mt-8 font-medium mb-2">
              Minimum Order Quantity
            </p>
            <p className="mb-2 text-gray-900 text-lg font-semibold">
              {productData.minOrderQuantity} pcs
            </p>
          </div>

          {/* Variant Selection and Quantity Input */}
          {productData.variants.map((variant, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-start gap-4 mb-16 md:mb-0 md:mt-6"
            >
              <div className="flex flex-col md:flex-row items-center gap-4">
                <img
                  src={variant.image}
                  alt={variant.color}
                  className="md:w-20 w-full h-[40dvh] md:h-20 object-cover rounded-md"
                />
                <div className="flex flex-col">
                  <span className="text-base font-medium text-gray-800">
                    {productData.productName}
                  </span>
                  <span className="text-sm text-gray-600">{variant.color}</span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex items-center shadow-[0_0_0_1px_#E5E5E5] rounded-xl p-2 border-gray-300 gap-2">
                  <Button
                    size="sm"
                    onClick={() =>
                      handleQuantityChange("decrease", variant.color)
                    }
                    className="text-[#F04436] bg-[#FEECEB] rounded-full"
                  >
                    -
                  </Button>
                  <Input
                    id={`quantity-${variant.color}`}
                    value={variantQuantities[variant.color]}
                    onChange={(e) => handleQuantityInput(e, variant.color)}
                    className="text-center text-gray-700 bg-[#EAEAEA] rounded-full border-none focus:ring-[#F04436] focus:ring-1 "
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleQuantityChange("increase", variant.color)
                    }
                    className="text-[#F04436] bg-[#FEECEB] rounded-full border-none"
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Customization Options */}
          <div className="mt-6">
            <h4 className="font-semibold text-lg md:text-2xl">
              Customization Options
            </h4>
            <div className="space-y-4 mt-4">
              {productData.customizations.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 text-gray-600 p-4 rounded-lg cursor-pointer transition-all duration-200 bg-[#E5E5E5] text-lg"
                >
                  <Checkbox
                    id={item.option}
                    checked={selectedCustomizations.includes(item.option)}
                    onCheckedChange={() =>
                      handleCustomizationChange(item.option)
                    }
                    className="h-5 w-5 cursor-pointer transition-colors duration-200 ease-in-out border 
                      data-[state=checked]:bg-[#f04436] 
                      data-[state=checked]:border-[#f04436] 
                      data-[state=checked]:text-white 
                      data-[state=unchecked]:bg-transparent 
                      data-[state=unchecked]:border-[#f04436] 
                      data-[state=unchecked]:border-2"
                  />
                  <span>{item.option}</span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subtotal */}
          <div className="mt-6 flex justify-between text-sm font-semibold">
            <span>Subtotal</span>
            <span className="font-semibold text-2xl text-[#D1512D]">
              ${calculateTotalPrice().toFixed(2)}
            </span>
          </div>
        </div>

        {/* Dialog Footer */}
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className={`px-10 py-3 rounded-lg border-1`}
            >
              Cancel
            </motion.button>
          </DialogClose>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className={`px-10 py-3 rounded-lg bg-[#F04436] text-white hover:bg-[#D7362F] ${
              !isQuantityValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Continue to Checkout
          </motion.button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddToCart;
