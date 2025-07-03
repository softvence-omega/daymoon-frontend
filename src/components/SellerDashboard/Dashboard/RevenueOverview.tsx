import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const RevenueOverview = () => {
  const series = [
    {
      data: [5, 12, 20, 25, 30, 35], // data in thousands
    },
  ];

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
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: {
      min: 5,
      max: 35,
      tickAmount: 6, // creates ticks at 5,10,15,...35
      forceNiceScale: false,
      labels: {
        formatter: (val) => {
          const rounded = Math.round(val);
          return `$${rounded}K`;
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    colors: ["#A5DBF3"], // changed base color here
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4, // start opacity (semi-transparent)
        opacityTo: 0, // end opacity (fully transparent)
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: "#A5DBF3",
            opacity: 0.4,
          },
          {
            offset: 90,
            color: "#A5DBF3",
            opacity: 0.1,
          },
          {
            offset: 100,
            color: "#A5DBF3",
            opacity: 0,
          },
        ],
      },
    },
  };

  return (
    <div className="w-full max:w-[748px] h-full max:h-[555px] bg-white p-4 rounded-xl shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 lg:gap-12 mb-8 w-full">
        {/* Title */}
        <div className="w-full md:flex-1">
          <h1 className="text-[24px] leading-[130%] font-medium text-[#484848] mb-4">
            Revenue Overview
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
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default RevenueOverview;
