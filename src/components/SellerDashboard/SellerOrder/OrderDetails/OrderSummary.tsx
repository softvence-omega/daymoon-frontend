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
    <div className="w-full bg-white p-10 rounded-2xl border border-foundation-white">
      <CommonHeader className="!text-2xl font-semibold pb-6">
        Products
      </CommonHeader>

      <div className="border border-foundation-white rounded-2xl overflow-hidden bg-ghost px-10 py-6">
        <div className="grid grid-cols-4 py-4 font-medium border-foundation-white border-b">
          <SubHeader>Product</SubHeader>
          <SubHeader className="text-center">Qty</SubHeader>
          <SubHeader className="text-center">Unit Price</SubHeader>
          <SubHeader className="text-end">Total</SubHeader>
        </div>

        <div className="grid grid-cols-4 py-6 text-sm place-items-start justify-items-center ">
          <div>
            <div className="border border-foundation-white rounded-xl p-4">
              <CommonHeader className="font-semibold  mb-1">
                {product.name}
              </CommonHeader>
              <SubHeader className="mb-2">SKU : {product.sku}</SubHeader>

              <SubHeader className="mb-1">Variants</SubHeader>
              <img
                src={product.variant.imageUrl}
                alt="Variant"
                className="w-20 h-20 border border-sunset-orange rounded-md mb-3 object-cover"
              />

              <SubHeader className=" mb-1">Customization</SubHeader>
              <div className="flex items-start gap-2 text-gray-700">
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

        <div className=" grid grid-cols-4">
          <div className="col-start-2 col-span-3 pl-20  ">
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
