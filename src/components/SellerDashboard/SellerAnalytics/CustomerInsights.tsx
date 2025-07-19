"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { customer: "new", visitors: 70, fill: "#4F46E5" },
  { customer: "returning", visitors: 30, fill: "#F97316" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  new: {
    label: "New Customer",
    color: "#4F46E5",
  },
  returning: {
    label: "Returning Customer",
    color: "#F97316",
  },
} satisfies ChartConfig;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const percentText = `${(percent * 100).toFixed(0)}%`;

  return (
    <g>
      <circle cx={x} cy={y} r={16} fill="white" />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={12}
        fontWeight="bold"
        fill="#333"
      >
        {percentText}
      </text>
    </g>
  );
};

export default function CustomerInsights() {
  return (
    <div className="w-full mx-auto h-[420px] bg-[#FFFFFF]">
      <Card className="border-0 shadow-sm h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-700">
            Customer Insights
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col justify-between">
          {/* Chart + Legend Section */}
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full"></div>
              </div>

              <ChartContainer
                config={chartConfig}
                className="relative z-10 w-full h-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      innerRadius={45}
                      dataKey="visitors"
                      strokeWidth={0}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                <span className="text-sm text-gray-600 font-medium">
                  New Customer
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                <span className="text-sm text-gray-600 font-medium">
                  Returning Customer
                </span>
              </div>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="w-full mt-6">
            <p className="text-sm text-gray-500">Average Customer Spend</p>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-2xl font-semibold text-gray-800">
                $42.65
              </span>
              <div className="flex items-center text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium ml-1">12%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
