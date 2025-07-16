import DashboardCard from "@/common/DashboardCard";
import DashboardCommonSpace from "@/common/DashboardCommonSpace";
import { ShoppingCart, Truck, RotateCcw } from "lucide-react";

import { BiDollarCircle } from "react-icons/bi";

const cardData = [
  {
    title: "Total Orders",
    value: "150",
    icon: <ShoppingCart className="h-6 w-6 text-[#9747FF]" />,
    trend: { percentage: 12, isPositive: true },
    iconBgColor: "bg-purple-100",
    titleColor: " text-[#9747FF]",
  },
  {
    title: "Total Sales",
    value: "$3,45,344",
    icon: <BiDollarCircle className="h-6 w-6 text-black" />,
    trend: { percentage: 12, isPositive: true },
    iconBgColor: "bg-[#2F7EEF1A]",
    titleColor: "text-[#2F7EEF]",
  },
  {
    title: "Pending Shipment",
    value: "42",
    icon: <Truck className="h-6 w-6 text-[#F2BC3C]" />,
    trend: { percentage: 12, isPositive: true },
    iconBgColor: "bg-[#F2BC3C1A]",
    titleColor: "text-[#F2BC3C]",
  },
  {
    title: "Return",
    value: "23",
    icon: <RotateCcw className="h-6 w-6 text-[#D9222A]" />,
    trend: { percentage: -8, isPositive: false },
    iconBgColor: "bg-[#D9222A]/10",
    titleColor: "text-[#D9222A]",
  },
];

const OrderCard = () => {
  return (
    <>
      <DashboardCommonSpace className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
          {cardData.map((data, index) => (
            <DashboardCard key={index} data={data} />
          ))}
        </div>
      </DashboardCommonSpace>
    </>
  );
};

export default OrderCard;
