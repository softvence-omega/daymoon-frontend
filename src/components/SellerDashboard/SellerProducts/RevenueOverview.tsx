import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

type RevenueData = {
  month: string;
  week?: string;
  revenue: number;
  inquiries: number;
  views: number;
};

// Yearly data (by month)
const yearlyData: RevenueData[] = [
  { month: "Jan", revenue: 5000, inquiries: 120, views: 450 },
  { month: "Feb", revenue: 8000, inquiries: 150, views: 600 },
  { month: "Mar", revenue: 12000, inquiries: 200, views: 800 },
  { month: "Apr", revenue: 18000, inquiries: 250, views: 950 },
  { month: "May", revenue: 22000, inquiries: 300, views: 1100 },
  { month: "June", revenue: 28000, inquiries: 350, views: 1300 },
  { month: "July", revenue: 32000, inquiries: 400, views: 1500 },
  { month: "Aug", revenue: 30000, inquiries: 380, views: 1400 },
  { month: "Sep", revenue: 25000, inquiries: 320, views: 1200 },
  { month: "Oct", revenue: 20000, inquiries: 280, views: 1000 },
  { month: "Nov", revenue: 15000, inquiries: 220, views: 800 },
  { month: "Dec", revenue: 10000, inquiries: 180, views: 600 },
];

// Monthly data (by week)
const monthlyData: RevenueData[] = [
  { month: "Jan", week: "Week 1", revenue: 1200, inquiries: 30, views: 110 },
  { month: "Jan", week: "Week 2", revenue: 1500, inquiries: 40, views: 130 },
  { month: "Jan", week: "Week 3", revenue: 1300, inquiries: 35, views: 120 },
  { month: "Jan", week: "Week 4", revenue: 1000, inquiries: 25, views: 90 },
];

// Weekly data (by day)
const weeklyData: RevenueData[] = [
  { month: "Jan", week: "Mon", revenue: 300, inquiries: 8, views: 35 },
  { month: "Jan", week: "Tue", revenue: 450, inquiries: 12, views: 50 },
  { month: "Jan", week: "Wed", revenue: 600, inquiries: 15, views: 65 },
  { month: "Jan", week: "Thu", revenue: 550, inquiries: 14, views: 60 },
  { month: "Jan", week: "Fri", revenue: 700, inquiries: 18, views: 75 },
  { month: "Jan", week: "Sat", revenue: 500, inquiries: 13, views: 55 },
  { month: "Jan", week: "Sun", revenue: 400, inquiries: 10, views: 45 },
];

const RevenueOverview = () => {
  const [timeRange, setTimeRange] = React.useState<"week" | "month" | "year">(
    "year"
  );

  const getData = () => {
    switch (timeRange) {
      case "week":
        return weeklyData;
      case "month":
        return monthlyData;
      case "year":
        return yearlyData;
      default:
        return yearlyData;
    }
  };

  const getXAxisKey = () => {
    switch (timeRange) {
      case "week":
      case "month":
        return "week";
      case "year":
        return "month";
      default:
        return "month";
    }
  };

  const formatTooltip = (value: number, name: string) => {
    if (name === "revenue") return [`$${value.toLocaleString()}`, "Revenue"];
    return [
      value.toLocaleString(),
      name.charAt(0).toUpperCase() + name.slice(1),
    ];
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-[#484848]">
          Revenue Overview
        </h1>

        <div className="flex gap-6 text-[#484848] text-base">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-[#9747FF]"></div>
            <p>Product View</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-[#62B2FD]"></div>
            <p>Inquiries</p>
          </div>
        </div>

        <div className="flex space-x-2 bg-[#FCFCFC] border border-[#B3B3B3] rounded-xl text-[#484848] overflow-hidden text-lg">
          {["week", "month", "year"].map((item) => (
            <button
              key={item}
              className={`px-4 py-2.5 text-sm capitalize cursor-pointer ${
                timeRange === item ? "bg-catalien-blue text-white" : ""
              }`}
              onClick={() => setTimeRange(item as "week" | "month" | "year")}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={getData()}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorInquiries" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey={getXAxisKey()}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#969696" }}
              padding={{ left: 20 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#969696" }}
              tickFormatter={(value) =>
                timeRange === "year" ? `$${value / 1000}k` : value
              }
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                border: "none",
              }}
              formatter={formatTooltip}
              labelFormatter={(label) =>
                `${
                  timeRange === "year"
                    ? "Month"
                    : timeRange === "month"
                    ? "Week"
                    : "Day"
                }: ${label}`
              }
            />

            {/* Actual Data Series */}
            <Area
              type="monotone"
              dataKey="views"
              stroke="#9747FF"
              fill="url(#colorViews)"
              strokeWidth={2}
              name="Product View"
            />
            <Area
              type="monotone"
              dataKey="inquiries"
              stroke="#62B2FD"
              fill="url(#colorInquiries)"
              strokeWidth={2}
              name="Inquiries"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3B82F6"
              fill="url(#colorRevenue)"
              strokeWidth={2}
              name="Revenue"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueOverview;
