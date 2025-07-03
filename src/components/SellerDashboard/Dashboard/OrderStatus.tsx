import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const OrderStatus: React.FC = () => {
  const series = [44, 55, 13, 33]; // Delivered, Shipped, Processing, Cancelled

  const options: ApexOptions = {
    chart: {
      width: 393,
      height: 393,
      type: "donut",
    },
    labels: ["Delivered", "Shipped", "Processing", "Cancelled"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        startAngle: 90,
        endAngle: 450,
        donut: {
          size: "64%", // ~70.74px ring thickness for 393px circle
        },
      },
    },
    legend: {
      position: "right",
      offsetY: 50, // Push the legend down
      offsetX: -90, // Slightly to the right if needed
      fontSize: "16px",
      labels: {
        colors: ["#484848"],
        useSeriesColors: false,
      },
      height: 330,
    },

    colors: ["#9BDFC4", "#62B2FD", "#FFB450", "#FF676E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 320,
            height: 320,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-[748px] h-full max-h-[555px] p-6 bg-white rounded-xl shadow-md">
      {/* Top Section: Title & Dropdown */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        {/* Title */}
        <h1 className="text-[24px] leading-[130%] font-medium text-[#484848]">
          Order Status
        </h1>

        {/* Dropdown */}
        <div className="w-full sm:w-[250px] md:w-[221px]">
          <Select>
            <SelectTrigger className="w-full h-[48px] border border-[#B3B3B3] rounded-[12px] px-[20px] py-[10px] flex items-center justify-between text-[#484848]">
              <SelectValue placeholder="Last 6 Months" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Months</SelectLabel>
                <SelectItem value="1">Last 1 Month</SelectItem>
                <SelectItem value="2">Last 2 Months</SelectItem>
                <SelectItem value="3">Last 3 Months</SelectItem>
                <SelectItem value="4">Last 4 Months</SelectItem>
                <SelectItem value="5">Last 5 Months</SelectItem>
                <SelectItem value="6">Last 6 Months</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="flex justify-center mt-20">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={393}
          height={393}
        />
      </div>
    </div>
  );
};

export default OrderStatus;
