import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface AnimatedChartData {
  category: string;
  value: number;
  color?: string;
}

interface AnimatedChartProps {
  data: AnimatedChartData[];
  title?: string;
  maxValue?: number;
  animated?: boolean;
}

export default function AnimatedChart({
  data,
  title = "Chart Title",
  maxValue = 350,
  animated = true,
}: AnimatedChartProps) {
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    animated ? new Array(data.length).fill(0) : data.map((d) => d.value)
  );

  useEffect(() => {
    if (!animated) return;

    const timer = setTimeout(() => {
      setAnimatedValues(data.map((d) => d.value));
    }, 100);

    return () => clearTimeout(timer);
  }, [data, animated]);

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
    <Card className="w-full max-w-2xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-medium text-gray-700">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
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
              <div key={index} className="flex items-center group">
                {/* Category Label */}
                <div className="w-24 text-sm text-gray-500 text-right pr-4">
                  {item.category}
                </div>

                {/* Bar Container */}
                <div className="flex-1 relative">
                  <div
                    className={`h-6 rounded-sm transition-all duration-1000 ease-out ${
                      item.color || "bg-orange-500"
                    } group-hover:opacity-80`}
                    style={{ width: `${getBarWidth(animatedValues[index])}%` }}
                  />

                  {/* Value Label on Hover */}
                  <div className="absolute right-2 top-0 h-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-white font-medium">
                      {animatedValues[index]}
                    </span>
                  </div>
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
