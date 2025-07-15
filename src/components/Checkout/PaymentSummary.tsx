import React, { useState } from "react";
import { Check } from "lucide-react";
import CommonHeader from "@/common/CommonHeader";
import CommonWrapper from "@/common/CommonWrapper";
import stripe from "../../assets/landing/stripe.png";
import CommonButton from "@/common/CommonButton";
import SubHeader from "@/common/SubHeader";

const PaymentSummary: React.FC = () => {
  const [agree, setAgree] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("stripe");

  const total = 248.66;

  return (
    <CommonWrapper>
      <div className="flex items-center justify-center py-8">
        <CommonHeader className="!text-2xl sm:!text-6xl font-semibold">
          Payment
        </CommonHeader>
      </div>

      <div className="flex flex-col gap-6 pb-10">
        <div className="rounded-lg border border-foundation-white px-4 py-3 shadow-sm">
          <CommonHeader className=" mb-3">Order Summary</CommonHeader>
          <div className="flex justify-between mb-1">
            <SubHeader>2 Items</SubHeader>
            <SubHeader className="text-[#48484848]">$219.97</SubHeader>
          </div>
          <div className="flex justify-between mb-1">
            <SubHeader>Shipping (standard)</SubHeader>
            <SubHeader className="text-[#48484848]">$9.99</SubHeader>
          </div>
          <div className="flex justify-between mb-3">
            <SubHeader>TAX</SubHeader>
            <SubHeader className="text-[#48484848]">$18.70</SubHeader>
          </div>
          <hr className="my-2 text-foundation-white" />
          <div className="flex justify-between font-semibold text-base">
            <SubHeader>Total</SubHeader>
            <SubHeader className="text-[#48484848]">
              ${total.toFixed(2)}
            </SubHeader>
          </div>
        </div>

        <div className="rounded-lg border border-foundation-white px-4 py-3 space-y-2 shadow-sm">
          <CommonHeader>Payment Methods</CommonHeader>
          <div
            onClick={() => setSelectedMethod("stripe")}
            className="flex items-center justify-between  rounded-md px-3 py-2 cursor-pointer "
          >
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full border-2 border-sunset-orange flex items-center justify-center">
                {selectedMethod === "stripe" && (
                  <div className="h-2.5 w-2.5 bg-sunset-orange rounded-full" />
                )}
              </div>
              <span>Stripe</span>
            </div>
            <img
              src={stripe}
              alt="Stripe"
              className=" w-[61px] h-[30px] object-cover   rounded-md "
            />
          </div>
        </div>

        <div className="flex items-start gap-2">
          <div
            onClick={() => setAgree(!agree)}
            className={`h-5 w-5 border rounded flex items-center justify-center cursor-pointer ${
              agree ? " bg-catalien-blue" : "border-gray-300"
            }`}
          >
            {agree && <Check className="text-white w-4 h-4" />}
          </div>
          <label htmlFor="agree" className="text-xs sm:text-sm">
            I agree to the{" "}
            <span className="text-orange-500 font-medium cursor-pointer">
              Terms and Conditions
            </span>{" "}
            &{" "}
            <span className="text-orange-500 font-medium cursor-pointer">
              Privacy Policy
            </span>
          </label>
        </div>

        <div className=" flex flex-col sm:flex-row gap-6 ">
          <CommonButton
            disabled={!agree}
            className={`  ${
              agree
                ? "!bg-sunset-orange hover:bg-red-600"
                : "!bg-red-300 !cursor-not-allowed"
            }`}
          >
            Pay ${total.toFixed(2)}
          </CommonButton>

          <CommonButton className="  border border-sunset-orange !text-sunset-orange bg-transparent">
            Back To Shipping
          </CommonButton>
        </div>
      </div>
    </CommonWrapper>
  );
};
export default PaymentSummary;
