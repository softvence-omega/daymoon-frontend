import { AiFillDollarCircle } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { FaBorderAll, FaArrowUp } from "react-icons/fa";
import { MdOutlineOutbox } from "react-icons/md";

const Card = () => {
  const statusData = [
    {
      title: "Total Revenue",
      amount: "23,8543",
      change: "↓ 12%",
      unit: "for this month",
      icon: <AiFillDollarCircle />,
    },
    {
      title: "Total Orders",
      amount: "154",
      change: "↓ 12%",
      unit: "for this month",
      icon: <FaBorderAll />,
    },
    {
      title: "Active Listing",
      amount: "42",
      change: "↓ 12%",
      unit: "for this month",
      icon: <MdOutlineOutbox />,
    },
    {
      title: "Inquiries",
      amount: "23",
      change: "↓ -8%",
      unit: "for this month",
      icon: <BiMessageDetail />,
    },
  ];

  const colors = ["#FFA600", "#9747FF", "#12CC1E", "#009CDE"];
  const bgColors = ["#FFA6001A", "#9747FF1A", "#12CC1E1A", "#009CDE1A"]; // 10% opacity in hex

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-start w-full ">
      {statusData.map((single, index) => {
        const isNegative = single.change.includes("-");
        const changeColor = isNegative ? "#E35A5F" : "#12CC1E";
        const cleanChangeText = single.change.replace(/[↓↑]/g, "").trim();

        return (
          <div
            key={single.title}
            className="w-full h-[187px]  p-5 sm:p-6 bg-white rounded-[16px] border border-[#E0E0E0] flex flex-col justify-between mx-auto"
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
            <div className="flex items-center justify-start gap-1 text-sm font-Robot">
              <FaArrowUp
                style={{
                  color: changeColor,
                  transform: isNegative ? "rotate(180deg)" : "none",
                }}
              />
              <span style={{ color: changeColor }}>{cleanChangeText}</span>
              <span className="text-[#666666]">{single.unit}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
