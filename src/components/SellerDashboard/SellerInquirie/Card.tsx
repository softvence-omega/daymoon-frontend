import { FaArrowUp } from "react-icons/fa";
import icon1 from "@/assets/Icon/enquiries.svg";
import icon2 from "@/assets/Icon/ResponseTime.png";
import icon3 from "@/assets/Icon/rate.png";

const Card = () => {
  const statusData = [
    {
      title: "Total Enquiries",
      amount: "48",
      change: "↓ 12%",
      unit: "for this month",
      icon: icon1,
    },
    {
      title: "Avr. Response Time",
      amount: "2.5 H",
      change: "↓ 12%",
      unit: "for this month",
      icon: icon2,
    },
    {
      title: "Conversion Rate ",
      amount: "18.5%",
      change: "↓ 12%",
      unit: "for this month",
      icon: icon3,
    },
  ];

  const colors = ["#9747FF", "#2F7EEF", "#F2BC3C"];
  const bgColors = ["#9747FF1A", "#EAF2FD", "#F2BC3C1A"]; // 10% opacity hex

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
      {statusData.map((single, index) => {
        const isNegative = single.change.includes("-");
        const changeColor = isNegative ? "#E35A5F" : "#12CC1E";
        const cleanChangeText = single.change.replace(/[↓↑]/g, "").trim();

        return (
          <div
            key={single.title}
            className="w-full  lg:max-w-none lg:w-full h-[187px] p-5 sm:p-6 bg-white rounded-[16px] border border-[#E0E0E0] flex flex-col justify-between mx-auto"
          >
            {/* Top Row */}
            <div className="flex items-center justify-start gap-5">
              <div
                className="relative w-[48px] h-[48px] rounded-[12px] p-[12px] flex items-center justify-center"
                style={{ backgroundColor: bgColors[index] }}
              >
                <img
                  src={single.icon}
                  alt=""
                  className="w-6 h-6 object-contain"
                />
              </div>

              <h1 className="text-[#484848] text-[18px] leading-[160%] font-[400] font-poppins">
                {single.title}
              </h1>
            </div>

            {/* Centered Amount */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <h2
                className="text-3xl sm:text-3xl md:text-3xl font-semibold font-Robot tracking-[-0.68px]"
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
