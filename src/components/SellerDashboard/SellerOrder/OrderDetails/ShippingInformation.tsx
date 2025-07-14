import CommonHeader from "@/common/CommonHeader";
import SubHeader from "@/common/SubHeader";
import { ExternalLink } from "lucide-react";

const ShippingInformation = () => {
  return (
    <div className=" w-full bg-white p-10 rounded-2xl border border-foundation-white">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">
        Shipping Information
      </h1>

      <div className="space-y-6">
        <div className="flex justify-between items-center gap-6 ">
          <SubHeader>Shipping Method</SubHeader>
          <CommonHeader className=" font-medium">Express Shipping</CommonHeader>
        </div>

        <div className="flex justify-between items-center gap-6 ">
          <SubHeader>Tracking Information</SubHeader>
          <CommonHeader className="font-medium">
            Tracking : <span className="text-blue-600 "> #LX123456789</span>
          </CommonHeader>
        </div>

        <div className="flex justify-between items-center gap-6 ">
          <SubHeader>Shipping Method</SubHeader>
          <CommonHeader className=" font-medium">Express Shipping</CommonHeader>
        </div>

        <div className="flex justify-between items-center gap-6 ">
          <SubHeader>Estimated Delivery</SubHeader>
          <CommonHeader className="font-medium">21 june, 2025</CommonHeader>
        </div>

        <div className="flex justify-between items-center gap-6 ">
          <SubHeader>Carrier</SubHeader>
          <CommonHeader className="font-medium">UPS</CommonHeader>
        </div>

        <div className="pt-4 border-t border-foundation-white">
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
            <CommonHeader>Track Package</CommonHeader>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShippingInformation;
