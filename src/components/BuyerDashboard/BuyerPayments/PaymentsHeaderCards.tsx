import { MdAccessTime } from "react-icons/md";
import { VscRefresh } from "react-icons/vsc";
import PaymentHeaderCard from "./PaymentHeaderCard";
import { FaDollarSign } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const cardData = [
  {
    title: "Total Spent",
    value: "29,553",
    unit: "This Month",
    icon: <FaDollarSign className="h-6 w-6 text-[#F46A39]" />,
    trend: { percentage: 12, isPositive: true },
    iconBgColor: "bg-[#FEECEB]",
    bottomSection:{
      color: "text-[#08AD36]",
      text: "12% more than last month",
      icon: <FaLongArrowAltUp className="h-5 w-5" />
    }
  },
  {
    title: "Pending Payments",
    value: "12500",
    unit: "3 Transactions",
    icon: <MdAccessTime className="h-6 w-6 text-[#F28B31]" />,
    trend: { percentage: 12, isPositive: true },
    iconBgColor: "bg-[#F28B311A]",
    bottomSection:{
      color: "text-[#F28B31]",
      text: "1 Payment requires action",
      icon: <IoMdInformationCircleOutline className="h-6 w-6" />
    }
  },
  {
    title: "Refund Requests",
    value: "253",
    unit: "2 Pending",
    icon: <VscRefresh className="h-6 w-6 text-[#E8292C]" />,
    trend: { percentage: 12, isPositive: true },
    iconBgColor: "bg-[#E8292C1A]",
    bottomSection:{
      color: "text-[#F04436]",
      text: "Last processed june 18, 2025",
      icon: <IoMdInformationCircleOutline className="h-6 w-6" />
    }
  },
];
const PaymentsHeaderCards = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {cardData.map((data, index) => (
          <PaymentHeaderCard key={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default PaymentsHeaderCards;
