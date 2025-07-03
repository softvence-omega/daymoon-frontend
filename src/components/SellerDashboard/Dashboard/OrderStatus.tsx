import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const OrderStatus: React.FC = () => {
  const [series, setSeries] = useState<number[]>([44, 55, 13, 33]);

  const options: ApexOptions = {
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
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
  };

  const appendData = () => {
    const newSeries = [...series, Math.floor(Math.random() * 100) + 1];
    setSeries(newSeries);
  };

  const removeData = () => {
    if (series.length === 1) return;
    const newSeries = series.slice(0, -1);
    setSeries(newSeries);
  };

  const randomize = () => {
    const newSeries = series.map(() => Math.floor(Math.random() * 100) + 1);
    setSeries(newSeries);
  };

  const reset = () => {
    setSeries([44, 55, 13, 33]);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 lg:gap-12 mb-8 w-full">
        {/* Title Section */}
        <div className="w-full md:flex-1">
          <h1 className="w-[152px] h-[31px] text-[24px] leading-[130%] font-sans font-medium text-[#484848] mb-4">
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

      <div className="mb-6">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={380}
        />
      </div>

      <div className="flex gap-3 flex-wrap">
        <button
          onClick={appendData}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          + ADD
        </button>
        <button
          onClick={removeData}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          - REMOVE
        </button>
        <button
          onClick={randomize}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          RANDOMIZE
        </button>
        <button
          onClick={reset}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default OrderStatus;
