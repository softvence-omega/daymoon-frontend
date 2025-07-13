import { AiFillDollarCircle } from "react-icons/ai";
import { FaBorderAll } from "react-icons/fa";
import { MdOutlineOutbox } from "react-icons/md";

const Card = () => {
  const statusData = [
    {
      title: "Total Earnings",
      amount: "5,000",
      change: "↓ 12%",
      note: "Lifetime Earnings",
      icon: <AiFillDollarCircle />,
    },
    {
      title: "Pending Earnings",
      amount: "1,000",
      change: "↓ 12%",
      note: "Processing period 2-3 days",
      icon: <FaBorderAll />,
    },
    {
      title: "Available Balance",
      amount: "4,000",
      note: "Withdraw Fund",
      icon: <MdOutlineOutbox />,
    },
  ];

  const colors = ["#FFA600", "#9747FF", "#12CC1E"];
  const bgColors = ["#FFA6001A", "#9747FF1A", "#12CC1E1A"];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {statusData.map((item, index) => {
        const isLast = index === statusData.length - 1;
        const isNegative = item.change?.includes("-");
        const changeColor = isNegative ? "#E35A5F" : "#12CC1E";
        const cleanChange = item.change?.replace(/[↓↑]/g, "").trim();

        return (
          <div
            key={item.title}
            className="w-full h-[187px] p-5 bg-white rounded-xl border border-gray-200 flex flex-col justify-between"
          >
            {/* Top Row */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-lg"
                style={{ backgroundColor: bgColors[index] }}
              >
                <span className="text-2xl" style={{ color: colors[index] }}>
                  {item.icon}
                </span>
              </div>
              <h2 className="text-lg text-gray-800 font-medium">
                {item.title}
              </h2>
            </div>

            {/* Amount */}
            <div className="text-center">
              <h1
                className="text-3xl font-semibold"
                style={{ color: colors[index] }}
              >
                {item.amount}
              </h1>
            </div>

            {/* Bottom Row */}
            {isLast ? (
              <div className="flex justify-start">
                <button className="px-4 py-1  bg-[#F04436] hover:bg-[#F04436] h-10 text-lg text-white rounded-md transition cursor-pointer">
                  Withdraw Fund
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm">
                <span
                  style={{
                    color: changeColor,
                    transform: isNegative ? "rotate(180deg)" : "none",
                  }}
                >
                  ▲
                </span>
                <span style={{ color: changeColor }}>{cleanChange}</span>
                <span className="text-gray-600">{item.note}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
