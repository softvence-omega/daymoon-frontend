import CommonHeader from "@/common/CommonHeader";
import SubHeader from "@/common/SubHeader";
import React from "react";

interface ShippingDetail {
  label: string;
  value: string;
  sub?: string;
}

interface ShippingCardProps {
  details: ShippingDetail[];
  notice: string;
}

const ShippingCard: React.FC<ShippingCardProps> = ({ details, notice }) => (
  <section className="rounded-2xl border border-foundation-white">
    <CommonHeader className="!text-header p-6  border-b border-foundation-white">
      Shipping Details
    </CommonHeader>

    <div className="px-6 py-4 space-y-4">
      {details.map((d, idx) => (
        <div
          key={idx}
          className="flex justify-between nth-[3]:border-b border-foundation-white nth-[3]:pb-3"
        >
          <div>
            <SubHeader className="text-jet-black font-medium !text-base">
              {d.label}
            </SubHeader>
            <SubHeader className="">{d.sub}</SubHeader>
          </div>

          {d.sub && (
            <SubHeader className=" text-jet-black ">{d.value}</SubHeader>
          )}
        </div>
      ))}
    </div>
    <hr className="my-4 text-foundation-white mx-6 " />
    <div className="p-6">
      <div className=" p-6 border border-[#B3B3B3] rounded-xl bg-[#E8E8E8]">
        <SubHeader className=" text-header">{notice}</SubHeader>
      </div>
    </div>
  </section>
);

export default ShippingCard;
