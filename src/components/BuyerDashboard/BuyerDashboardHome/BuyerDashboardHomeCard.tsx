import { BsFillBoxSeamFill } from "react-icons/bs";
import { MdOutlineCreditCard } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const BuyerDashboardHomeCard = () => {
  const statusData = [
    {
      title: "Pending Orders",
      amount: "07",
      text: "View All Orders",
      link:"/buyer/dashboard/orders",
      icon: <BsFillBoxSeamFill />,
    },
    {
      title: "Shipped Orders",
      amount: "03",
      text: "Track Shipment",
      link:"/buyer/dashboard/orders",
      icon: <FaTruck />,
    },
    {
      title: "Completed Orders",
      amount: "28",
      text: "View History",
      link:"/buyer/dashboard/orders",
      icon: <FaCircleCheck />,
    },
    {
      title: "Total Spend",
      amount: "$2344",
      text: "Financial Details",
      link:"/buyer/dashboard/orders",
      icon: <MdOutlineCreditCard />,
    },
  ];

  const colors = ["#FFA600", "#CC12C9", "#12CC1E", "#FB2B2B"];
  const bgColors = ["#FFA6001A", "#CC12C91A", "#12CC1E1A", "#FB2B2B1A"]; // 10% opacity in hex

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-start w-full ">
      {statusData.map((single, index) => {
        return (
          <div
            key={single.title}
            className="w-full max-w-[358px] h-[187px]  p-5 sm:p-6 bg-white rounded-[16px] border border-[#E0E0E0] flex flex-col justify-between mx-auto"
          >
            {/* Top Row */}
            <div className="flex items-center justify-start gap-5">
              <div
                className="w-[48px] h-[48px] rounded-[12px] p-[12px] flex items-center justify-center"
                style={{ backgroundColor: bgColors[index] }}
              >
                <span
                  className="w-6 h-6 text-[24px] flex items-center justify-center"
                  style={{ color: colors[index] }}
                >
                  {single.icon}
                </span>
              </div>

              <h1 className="text-[#484848] text-[18px] leading-[160%] font-[400] font-poppins">
                {single.title}
              </h1>
            </div>

            {/* Centered Amount */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-semibold font-Robot tracking-[-0.68px]"
                style={{ color: colors[index] }}
              >
                {single.amount}
              </h2>
            </div>

            {/* Bottom Row: Change & Unit */}
            <Link to={single.link} className="w-full">
              <p className="text-base underline font-medium text-[#192D4E]">
                {single.text}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BuyerDashboardHomeCard;
