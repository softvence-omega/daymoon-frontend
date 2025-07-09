"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartData {
  category: string;
  value: number;
}

interface PurchaseBehaviorChartProps {
  data?: ChartData[];
  title?: string;
  maxValue?: number;
}

const defaultData: ChartData[] = [
  { category: "Home Goods", value: 120 },
  { category: "Home Goods", value: 180 },
  { category: "Electronics", value: 160 },
  { category: "Clothing", value: 200 },
];

export default function AnimatedPurchaseBehaviorChart({
  data = defaultData,
  title = "Purchase Behaviour",
  maxValue = 350,
}: PurchaseBehaviorChartProps) {
  const getBarWidth = (value: number) => {
    return (value / maxValue) * 100;
  };

  const generateXAxisLabels = () => {
    const labels = [];
    for (let i = 0; i <= maxValue; i += 50) {
      labels.push(i);
    }
    return labels;
  };

  return (
    <Card className="w-full max-w-2xl border-[#E5E5E5] border">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-medium text-gray-700">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Chart Area */}
        <div className="relative">
          {/* Grid Lines */}
          <div className="absolute inset-0 flex">
            {generateXAxisLabels().map((label, index) => (
              <div
                key={index}
                className="border-l border-gray-200 flex-1"
                style={{ left: `${(label / maxValue) * 100}%` }}
              />
            ))}
          </div>

          {/* Data Bars */}
          <div className="relative space-y-8 py-4">
            {data.map((item, index) => (
              <div key={index} className="flex items-center">
                {/* Category Label */}
                <div className="w-24 text-sm text-gray-500 text-right pr-4">
                  {item.category}
                </div>

                {/* Bar Container */}
                <div className="flex-1 relative">
                  <div
                    className="h-6 bg-orange-500 rounded-sm transition-all duration-300 ease-in-out"
                    style={{ width: `${getBarWidth(item.value)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* X-Axis Labels */}
        <div className="flex justify-between text-xs text-gray-400 mt-4 ml-28">
          {generateXAxisLabels().map((label, index) => (
            <span key={index} className="flex-1 text-center">
              {label}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
