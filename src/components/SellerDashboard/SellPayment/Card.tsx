import { AiFillDollarCircle } from "react-icons/ai";
import { FaBorderAll, FaArrowUp } from "react-icons/fa";
import { MdOutlineOutbox } from "react-icons/md";

const Card = () => {
  const statusData = [
    {
      title: "Total Earnings",
      amount: "5,000",
      change: "↓ 12%",
      unit: "Lifetime Earnings",
      icon: <AiFillDollarCircle />,
    },
    {
      title: "Pending Earnings",
      amount: "1,000",
      change: "↓ 12%",
      unit: "Processing period 2-3 days",
      icon: <FaBorderAll />,
    },
    {
      title: "Available Balance",
      amount: "4,000",
      change: "↓ 12%",
      unit: "Withdraw Fund",
      icon: <MdOutlineOutbox />,
    },
  ];

  const colors = ["#FFA600", "#9747FF", "#12CC1E", "#009CDE"];
  const bgColors = ["#FFA6001A", "#9747FF1A", "#12CC1E1A", "#009CDE1A"]; // 10% opacity in hex

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {statusData.map((single, index) => {
        const isNegative = single.change.includes("-");
        const changeColor = isNegative ? "#E35A5F" : "#12CC1E";
        const cleanChangeText = single.change.replace(/[↓↑]/g, "").trim();

        return (
          <div
            key={single.title}
            className="w-full max-w-[510px] h-[187px] p-5 sm:p-6 bg-white rounded-[16px] border border-[#E0E0E0] flex flex-col justify-between mx-auto"
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
