import CommonHeader from "@/common/CommonHeader";
import SubHeader from "@/common/SubHeader";
import React from "react";
import { FaRegCircleDot } from "react-icons/fa6";

interface ProductVariant {
  imageUrl: string;
  customization: string;
}

interface Product {
  name: string;
  sku: string;
  quantity: number;
  unitPrice: number;
  variant: ProductVariant;
}

interface SummaryProps {
  product: Product;
  shipping: number;
  tax: number;
}

const OrderSummary: React.FC<SummaryProps> = ({ product, shipping, tax }) => {
  const subtotal = product.quantity * product.unitPrice;
  const total = subtotal + shipping + tax;

  return (
    <div className="w-full bg-white md:p-10 p-4 rounded-2xl border border-foundation-white">
      <CommonHeader className="sm:*:!text-2xl font-semibold sm:pb-6">
        Products
      </CommonHeader>

      <div className="md:border border-foundation-white rounded-2xl overflow-hidden md:bg-ghost md:px-10 md:py-6">
        <div className="grid grid-cols-4 py-4 font-medium border-foundation-white border-b">
          <SubHeader>Product</SubHeader>
          <SubHeader className="text-center">Qty</SubHeader>
          <SubHeader className="text-center">Unit Price</SubHeader>
          <SubHeader className="text-end">Total</SubHeader>
        </div>

        <div className="grid grid-cols-4 py-6 text-sm place-items-start justify-items-center w-full ">
          <div className="w-full">
            <div className="md:border border-foundation-white rounded-xl md:p-4 w-full">
              <CommonHeader className="font-semibold  mb-1 hidden md:block">
                {product.name}
              </CommonHeader>
              <SubHeader className="mb-2 hidden md:block">
                SKU : {product.sku}
              </SubHeader>

              <SubHeader className="mb-1 hidden md:block ">Variants</SubHeader>
              <div className=" flex items-center justify-start w-full h-full">
                <img
                  src={product.variant.imageUrl}
                  alt="Variant"
                  className=" w-10 h-10 md:w-20 md:h-20 border border-sunset-orange rounded-md mb-3 object-cover"
                />
              </div>

              <SubHeader className=" mb-1 hidden md:block">
                Customization
              </SubHeader>
              <div className=" items-start gap-2 text-gray-700 hidden md:flex">
                <span className="text-sunset-orange mt-1 text-2xl  ">
                  <FaRegCircleDot />
                </span>
                <SubHeader className="text-sm">
                  {product.variant.customization}
                </SubHeader>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center text-lg font-semibold">
            {product.quantity}
          </div>

          <div className="flex items-center justify-center text-lg font-semibold">
            ${product.unitPrice.toFixed(2)}
          </div>

          <div className="flex items-center justify-end text-lg font-semibold w-full ">
            ${subtotal.toFixed(2)}
          </div>
        </div>

        <div className=" grid md:grid-cols-4">
          <div className="md:col-start-2 col-span-3 md:pl-20  ">
            <div className="flex justify-between">
              <SubHeader>Subtotal</SubHeader>
              <CommonHeader className="font-medium">
                ${subtotal.toFixed(2)}
              </CommonHeader>
            </div>
            <div className="flex justify-between">
              <SubHeader>Shipping (Express)</SubHeader>
              <CommonHeader className="font-medium">
                ${shipping.toFixed(2)}
              </CommonHeader>
            </div>
            <div className="flex justify-between">
              <SubHeader>Tax</SubHeader>
              <CommonHeader className="font-medium">
                ${tax.toFixed(2)}
              </CommonHeader>
            </div>
            <hr className=" w-full border-t border-foundation-white my-2" />
            <div className="flex justify-between font-semibold">
              <SubHeader>Total</SubHeader>
              <CommonHeader>${total.toFixed(2)}</CommonHeader>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
