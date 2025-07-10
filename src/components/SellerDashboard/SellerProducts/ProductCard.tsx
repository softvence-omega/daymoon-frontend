import DashboardCard from "@/common/DashboardCard";
import DashboardCommonSpace from "@/common/DashboardCommonSpace";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";

import { FaCheckCircle } from "react-icons/fa";
import { IoAlertOutline } from "react-icons/io5";

const cardData = [
  {
    title: "Total Products",
    value: "150",
    unit: "/Units",
    icon: <BsFillBoxSeamFill className="h-6 w-6 text-[#9747FF]" />,
    trend: { percentage: 12, isPositive: true },
    iconBgColor: "bg-purple-100",
    titleColor: " text-[#9747FF]",
  },
  {
    title: "Total Variations",
    value: "23",
    unit: "",
    icon: <IoMdEye className="h-6 w-6 text-black" />,
    trend: { percentage: 12, isPositive: true },
    iconBgColor: "bg-[#2F7EEF1A]",
    titleColor: "text-[#08AD36]",
  },
  {
    title: "Active Products",
    value: "20",
    unit: "/variations",
    icon: <FaCheckCircle className="h-6 w-6 text-[#F2BC3C]" />,
    trend: { percentage: 12, isPositive: true },
    iconBgColor: "bg-[#F2BC3C1A]",
    titleColor: "text-[#F2BC3C]",
  },
  {
    title: "Out of Stock",
    value: "23",
    unit: "/Variations",
    icon: <IoAlertOutline className="h-6 w-6 text-[#D9222A]" />,
    trend: { percentage: -8, isPositive: false },
    iconBgColor: "bg-[#D9222A]/10",
    titleColor: "text-[#D9222A]",
  },
];

const ProductCard = () => {
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

export default ProductCard;
