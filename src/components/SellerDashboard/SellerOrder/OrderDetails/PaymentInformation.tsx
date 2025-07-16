import CommonHeader from "@/common/CommonHeader";
import SubHeader from "@/common/SubHeader";
import React from "react";

export interface PaymentInfo {
  method: string;
  last4: string;
  brand?: string;
  status: string;
  transactionId: string;
  paymentDate: string;
  totalAmount: number;
  currency?: string;
}

interface Props {
  payment: PaymentInfo;
}

const PaymentInformation: React.FC<Props> = ({ payment }) => {
  const {
    method,
    last4,
    brand = "VISA",
    status,
    transactionId,
    paymentDate,
    totalAmount,
    currency = "$",
  } = payment;

  return (
    <div className="w-full bg-white p-4 sm:p-10 rounded-2xl border border-foundation-white mb-10 ">
      <CommonHeader className="sm:!text-2xl font-semibold mb-4 sm:mb-6 text-[#484848]">
        Payment Information
      </CommonHeader>

      {/* Credit Card Section */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-12 border border-gray-200 rounded-lg flex items-center justify-center bg-gray-50">
          <SubHeader className="text-blue-600 font-bold text-sm">
            {brand}
          </SubHeader>
        </div>
        <div>
          <SubHeader className="text-lg font-medium text-jet-black">
            {method}
          </SubHeader>
          <SubHeader className="!line-clamp-1">
            **** **** **** {last4}
          </SubHeader>
        </div>
      </div>

      {/* Payment Details */}
      <div className="space-y-6">
        <div className="flex justify-between items-center gap-6 ">
          <SubHeader>Payment Status</SubHeader>
          <SubHeader className="text-green-600 font-medium">{status}</SubHeader>
        </div>

        <div className="flex justify-between items-center gap-6 ">
          <SubHeader>Transaction ID</SubHeader>
          <SubHeader className="text-jet-black font-medium">
            {transactionId}
          </SubHeader>
        </div>

        <div className="flex justify-between items-center gap-6 ">
          <SubHeader>Payment Date</SubHeader>
          <SubHeader className="text-jet-black font-medium">
            {paymentDate}
          </SubHeader>
        </div>

        <hr className="border-gray-200" />

        <div className="flex justify-between items-center gap-6 ">
          <SubHeader>Total Payment</SubHeader>
          <SubHeader className="text-jet-black font-semibold text-lg">
            {currency ? currency : "$"}
            {totalAmount.toFixed(2)}
          </SubHeader>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
