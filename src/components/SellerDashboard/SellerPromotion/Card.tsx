import Promotions1 from "@/assets/Icon/promotion1.png";
import Promotions2 from "@/assets/Icon/promotion2.png";
import Promotions3 from "@/assets/Icon/promotion3.png";
import Promotions4 from "@/assets/Icon/promotion4.png";

const Card = () => {
  const statusData = [
    {
      title: "Total Promotions",
      amount: "24",
      change: "↓ 12%",
      unit: "for this month",
      icon: Promotions1,
    },
    {
      title: "Active Promotions",
      amount: "8",
      change: "↓ 12%",
      unit: "for this month",
      icon: Promotions2,
    },
    {
      title: "Clicks from Promotions",
      amount: "1447",
      change: "↓ 12%",
      unit: "for this month",
      icon: Promotions3,
    },
    {
      title: "Sales from Promotion",
      amount: "23",
      change: "↓ -8%",
      unit: "for this month",
      icon: Promotions4,
    },
  ];

  const colors = ["#9747FF", "#2F7EEF", "#F2BC3C", "#D9222A"];
  const bgColors = ["#F5EDFF", "#EBF3FE", "#FEF9EC", "#FCE9EA"];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-start w-full">
      {statusData.map((single, index) => {
        const isNegative = single.change.includes("-");
        const changeColor = isNegative ? "#E35A5F" : "#12CC1E";
        const cleanChangeText = single.change.replace(/[↓↑]/g, "").trim();

        return (
          <div
            key={single.title}
            className="w-full h-[187px] p-5 sm:p-6 bg-white rounded-[16px] border border-[#E0E0E0] flex flex-col justify-between"
          >
            {/* Top Row */}
            <div className="flex items-center justify-start gap-5">
              <div
                className="w-[48px] h-[48px] rounded-[12px] p-[8px] flex items-center justify-center"
                style={{ backgroundColor: bgColors[index] }}
              >
                <img
                  src={single.icon}
                  alt={single.title}
                  width={28}
                  height={28}
                />
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
              <svg
                width={12}
                height={12}
                style={{
                  transform: isNegative ? "rotate(180deg)" : "none",
                  fill: changeColor,
                }}
                viewBox="0 0 24 24"
              >
                <path d="M12 2l-10 18h20l-10-18z" />
              </svg>
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
