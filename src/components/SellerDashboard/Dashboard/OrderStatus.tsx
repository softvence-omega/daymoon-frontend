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
      width: 380,
      type: "donut",
    },
    labels: ["Delivered", "Shipped", "Processing", "Cancelled"],
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 280,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
    colors: ["#9BDFC4", "#62B2FD", "#FFB450", "#FF676E"],
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 lg:gap-12 mb-8 w-full">
        {/* Title */}
        <div className="w-full md:flex-1">
          <h1 className="text-[24px] leading-[130%] font-medium text-[#484848] mb-4">
            Order Status
          </h1>
        </div>

        {/* Filter Dropdown */}
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

      {/* Chart */}
      <div className="flex justify-center">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={380}
        />
      </div>
    </div>
  );
};

export default OrderStatus;
