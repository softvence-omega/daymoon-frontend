import CommonHeader from "@/common/CommonHeader";
import SubHeader from "@/common/SubHeader";
import { Tag } from "lucide-react";

const PriceMoqCard = () => {
  return (
    <div className="rounded-2xl border border-foundation-white">
      <CommonHeader className="!text-header p-6  border-b border-foundation-white">
        Price & MOQ
      </CommonHeader>

      <div className=" flex flex-col gap-4 p-6">
        <div className="flex justify-between">
          <SubHeader>Unit Price</SubHeader>
          <SubHeader className="font-medium text-jet-black">$50.00</SubHeader>
        </div>
        <div className="flex justify-between">
          <SubHeader>Cost per unit</SubHeader>
          <SubHeader className="font-medium text-jet-black">$30.00</SubHeader>
        </div>
        <div className="flex justify-between">
          <SubHeader>Profit Margin</SubHeader>
          <SubHeader className="font-semibold text-orange-500">40%</SubHeader>
        </div>

        <hr className="my-4 text-foundation-white" />

        <div className="flex justify-between ">
          <SubHeader>10–49 Units</SubHeader>
          <SubHeader className="text-jet-black font-medium  ">
            $50/Unit
          </SubHeader>
        </div>
        <div className="flex justify-between">
          <SubHeader>50–99 Units</SubHeader>
          <div className="flex gap-0.5">
            <SubHeader className="text-jet-black font-medium">
              $47.50/Unit
            </SubHeader>
            <SubHeader className="">(5% Off)</SubHeader>
          </div>
        </div>
        <div className="flex justify-between">
          <SubHeader>100+ Units</SubHeader>

          <div className="flex gap-0.5">
            <SubHeader className="text-jet-black font-medium">
              $45.50/Unit{" "}
            </SubHeader>
            <SubHeader className="">(5% Off)</SubHeader>
          </div>
        </div>

        <hr className="my-4 text-foundation-white" />

        <div className="flex justify-between">
          <SubHeader>Minimum Order Quantity</SubHeader>
          <SubHeader className="font-medium text-jet-black">10 Units</SubHeader>
        </div>
        <div className="flex justify-between">
          <SubHeader>Maximum Order Quantity</SubHeader>
          <SubHeader className="font-medium text-jet-black">
            500 Units
          </SubHeader>
        </div>
      </div>
      <div className="p-6">
        <div className=" border border-goldenrod text-sm rounded-lg p-4 flex gap-3 items-start  bg-[#FFF7EC]">
          <Tag className="text-goldenrod mt-1 w-5 h-5" />
          <div>
            <SubHeader className="font-semibold text-jet-black pb-2">
              Active Promotion
            </SubHeader>
            <SubHeader className="text-jet-black ">
              10% off for orders over 100 units Ends on <br /> July 15, 2023
            </SubHeader>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceMoqCard;
