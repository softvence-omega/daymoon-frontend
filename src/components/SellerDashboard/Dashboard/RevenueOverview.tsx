import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const RevenueOverview = () => {
  const [selectedFilter, setSelectedFilter] = useState("6");

  const chartData: Record<string, { data: number[]; categories: string[] }> = {
    "1": { data: [35], categories: ["Jun"] },
    "2": { data: [30, 35], categories: ["May", "Jun"] },
    "3": { data: [25, 30, 35], categories: ["Apr", "May", "Jun"] },
    "6": {
      data: [5, 12, 20, 25, 30, 35],
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
  };

  const currentData = chartData[selectedFilter];

  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: currentData.categories,
      axisBorder: { show: true },
      axisTicks: { show: true },
    },
    yaxis: {
      min: 5,
      max: 35,
      tickAmount: 6,
      forceNiceScale: false,
      labels: {
        formatter: (val) => {
          const rounded = Math.round(val);
          return `$${rounded}K`;
        },
      },
    },
    tooltip: { enabled: false },
    legend: { show: false },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    colors: ["#A5DBF3"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
        colorStops: [
          { offset: 0, color: "#A5DBF3", opacity: 0.4 },
          { offset: 90, color: "#A5DBF3", opacity: 0.1 },
          { offset: 100, color: "#A5DBF3", opacity: 0 },
        ],
      },
    },
  };

  return (
    <div className="w-full max:w-[748px] h-full max:h-[555px] bg-white p-6 rounded-xl shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 lg:gap-12 mb-8 w-full">
        <div className="w-full md:flex-1">
          <h1 className="text-[24px] leading-[130%] font-medium text-[#484848] mb-4">
            Revenue Overview
          </h1>
        </div>

        <div className="w-full sm:w-[250px] md:w-[221px]">
          <Select
            onValueChange={(value) => setSelectedFilter(value)}
            defaultValue="6"
          >
            <SelectTrigger className="w-[221px] h-[48px] border border-[#B3B3B3] rounded-[12px] px-[20px] py-[10px] flex items-center justify-between text-[#484848]">
              <SelectValue placeholder="Last 6 Months" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Months</SelectLabel>
                <SelectItem value="1">Last 1 Month</SelectItem>
                <SelectItem value="2">Last 2 Months</SelectItem>
                <SelectItem value="3">Last 3 Months</SelectItem>
                <SelectItem value="6">Last 6 Months</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ReactApexChart
        options={options}
        series={[{ data: currentData.data }]}
        type="area"
        height={350}
      />
    </div>
  );
};

export default RevenueOverview;
