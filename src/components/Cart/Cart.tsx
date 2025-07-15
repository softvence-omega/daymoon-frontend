import { Button } from "@/components/ui/button";
import { cartData } from "@/lib/Cart";
import { CartData } from "@/types";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import CommonWrapper from "@/common/CommonWrapper";
import CartItemComponent from "./CartItem";
import { CartSummary } from "./CartSummury";

export default function CartPage() {
  const [Data, setData] = useState<CartData>(cartData);

  // Handle quantity change
  const handleQuantityChange = (
    vendorIndex: number,
    productIndex: number,
    variantIndex: number,
    newQuantity: number
  ) => {
    setData((prevData) => {
      const updatedItems = prevData.cart.map((vendor, vIndex) => {
        if (vIndex === vendorIndex) {
          const updatedProducts = vendor.products.map((product, pIndex) => {
            if (pIndex === productIndex) {
              const updatedVariants = product.variants.map(
                (variant, vIndex) => {
                  if (vIndex === variantIndex) {
                    const updatedVariant = {
                      ...variant,
                      quantity: newQuantity,
                    };
                    return updatedVariant;
                  }
                  return variant;
                }
              );
              return { ...product, variants: updatedVariants };
            }
            return product;
          });
          return { ...vendor, products: updatedProducts };
        }
        return vendor;
      });
      return { ...prevData, cart: updatedItems };
    });
  };

  // Handle item removal
  const handleRemoveItem = (
    vendorIndex: number,
    productIndex: number,
    variantIndex: number
  ) => {
    setData((prevData) => {
      const updatedItems = prevData.cart.map((vendor, vIndex) => {
        if (vIndex === vendorIndex) {
          const updatedProducts = vendor.products.map((product, pIndex) => {
            if (pIndex === productIndex) {
              const updatedVariants = product.variants.filter(
                (variant, vIndex) => vIndex !== variantIndex
              );
              return { ...product, variants: updatedVariants };
            }
            return product;
          });
          return { ...vendor, products: updatedProducts };
        }
        return vendor;
      });
      return { ...prevData, cart: updatedItems };
    });
  };

  const totalItems = Data.cart.reduce(
    (sum, vendor) =>
      sum +
      vendor.products.reduce(
        (productSum, product) =>
          productSum +
          product.variants.reduce(
            (variantSum, variant) => variantSum + variant.quantity,
            0
          ),
        0
      ),
    0
  );

  if (Data.cart.length === 0) {
    return (
      <div className="min-h-[50dvh] bg-gray-50">
        <CommonWrapper>
          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Add some products to get started
            </p>
            <Link to="/shop">
              <Button className="bg-[#F04436] hover:bg-[#D7362F] text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </CommonWrapper>
      </div>
    );
  }

  return (
    <CommonWrapper>
      <div className="min-h-screen mt-12">
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold text-[#1A1A1A] mb-2">
            MY CART
          </h1>
          <p className="text-[#666] mt-6">
            Your selected items are ready for checkout
          </p>
        </div>

        <div className="grid grid-cols-1 mt-20 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-lg md:text-xl lg:text-3xl font-semibold text-gray-900">
                ALL PRODUCTS{" "}
                <span className="text-[#FCAB3F]"> ({totalItems})</span>
              </h2>
            </div>

            <div className="space-y-6 mt-10">
              {Data.cart.map((vendor, vendorIndex) =>
                vendor.products.map((product, productIndex) =>
                  product.variants.map((variant, variantIndex) => (
                    <CartItemComponent
                      key={variant.variantId}
                      vendorIndex={vendorIndex}
                      productIndex={productIndex}
                      variantIndex={variantIndex}
                      cardData={Data}
                      onQuantityChange={handleQuantityChange}
                      onRemoveItem={handleRemoveItem}
                    />
                  ))
                )
              )}
            </div>

            <div className="mt-6 lg:hidden">
              <Link to="/shop">
                <Button variant="outline" className="w-full bg-transparent">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <CartSummary cartData={Data} />
          </div>
        </div>

        <div className="hidden lg:block my-8"></div>
      </div>
    </CommonWrapper>
  );
}
