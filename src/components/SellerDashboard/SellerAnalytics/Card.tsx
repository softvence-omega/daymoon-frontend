import { FaArrowUp } from "react-icons/fa";

const Card = () => {
  const statusData = [
    {
      title: "Total Revenue",
      amount: "12,000",
      change: "↓ 12%",
    },
    {
      title: "Total Orders",
      amount: "154",
      change: "↓ 12%",
    },
    {
      title: "Conversion Rate",
      amount: "2.5%",
      change: "↓ 12%",
    },
    {
      title: "Avg. Order Value",
      amount: "19.34",
      change: "↓ 12%",
    },
    {
      title: "Products Sold",
      amount: "12,352",
      change: "↓ 12%",
    },
  ];

  const getUnitByTitle = (title: string) => {
    if (title === "Total Revenue") return " /USD";
    if (title === "Total Orders") return " Orders";
    if (title === "Avg. Order Value") return " /USD";
    if (title === "Products Sold") return " Units";
    return "";
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full">
      {statusData.map((item) => {
        const cleanChange = item.change.replace(/[↓↑]/g, "").trim();
        const unit = getUnitByTitle(item.title);

        return (
          <div
            key={item.title}
            className="p-5 bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between min-h-[120px] transition hover:shadow-md"
          >
            {/* Title & Change */}
            <div className="flex items-start justify-between">
              <h2 className="text-[16px] md:text-[18px] font-medium text-[#333] font-poppins">
                {item.title}
              </h2>
              <div
                className="flex items-center gap-1 text-sm font-sans"
                style={{ color: "#08AD36" }}
              >
                <FaArrowUp />
                <span>{cleanChange}</span>
              </div>
            </div>

            {/* Amount & Unit */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-[20px] font-semibold text-[#111] font-roboto">
                {item.amount}
                <span className="ml-1 text-sm text-gray-500">{unit}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
