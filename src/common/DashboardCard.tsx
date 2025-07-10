"use client";

import { FC, ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CommonHeader from "./CommonHeader";

interface Trend {
  percentage: number;
  isPositive: boolean;
}

interface CardData {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend: Trend;
  iconBgColor?: string;
  titleColor?: string;
  unit?: string;
}

interface CardProps {
  data: CardData;
}

const DashboardCard: FC<CardProps> = ({ data }) => {
  const { title, value, icon, trend, iconBgColor, titleColor, unit } = data;

  return (
    <Card className="w-full max-h-[187px]  bg-white rounded-[16px] border border-[#E0E0E0]  ">
      <CardContent className="">
        <div className="flex items-center gap-4 ">
          {icon && (
            <div className={`p-3 rounded-lg ${iconBgColor}`}>{icon}</div>
          )}
          <CommonHeader className={`!text-base md:!text-lg font-medium   `}>
            {title}
          </CommonHeader>
        </div>

        <div className="">
          <p
            className={`text-[32px] font-bold  text-center py-2  ${titleColor}`}
          >
            {value}
            <span className="text-[#969696] text-[12px]">{unit}</span>
          </p>

          <div className="flex items-center gap-1">
            {trend.isPositive ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
            <span
              className={`text-sm font-medium ${
                trend.isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {trend.isPositive ? "+" : ""}
              {trend.percentage}% from last month
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
