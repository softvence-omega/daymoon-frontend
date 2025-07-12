import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

const EnquiriesByStatus: React.FC = () => {
  const dataByFilter: Record<string, number[]> = {
    "This Month": [44, 55, 13, 33],
    "Last Month": [30, 40, 10, 20],
    "This Year": [300, 320, 100, 110],
  };

  const [selectedFilter, setSelectedFilter] = useState("This Month");
  const [series, setSeries] = useState(dataByFilter[selectedFilter]);

  const handleFilterChange = (value: string) => {
    let label = "";

    if (value === "this-month") label = "This Month";
    else if (value === "last-month") label = "Last Month";
    else if (value === "this-year") label = "This Year";

    setSelectedFilter(label);
    setSeries(dataByFilter[label]);
  };

  const options: ApexOptions = {
    chart: {
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
          size: "64%",
        },
      },
    },
    legend: {
      position: "right",
      offsetY: 50,
      offsetX: -60,
      fontSize: "16px",
      labels: {
        colors: ["#484848"],
        useSeriesColors: false,
      },
      height: 230,
    },
    colors: ["#9BDFC4", "#62B2FD", "#FFB450", "#FF676E"],
    responsive: [
      {
        breakpoint: 1200,
        options: {
          legend: {
            offsetX: -10,
          },
        },
      },
      {
        breakpoint: 1024,
        options: {
          legend: {
            offsetX: -40,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          legend: {
            offsetX: 0,
            position: "bottom",
            offsetY: 20,
            height: undefined,
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
            height: 300,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <div className="w-full h-full max-h-[555px] p-6 bg-white rounded-xl shadow-md">
      {/* Top Section: Title & Dropdown */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="w-full md:flex-1">
          <h1 className="text-[24px] leading-[130%] font-medium text-[#484848] mb-4">
            Order Status
          </h1>
        </div>

        <Select onValueChange={handleFilterChange} defaultValue="this-month">
          <SelectTrigger className="w-[221px] h-[48px] border border-[#B3B3B3] rounded-[12px] px-[20px] py-[10px] flex items-center justify-between text-sm text-[#484848] bg-[#FCFCFC]">
            <SelectValue placeholder="Select Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filter</SelectLabel>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="this-year">This Year</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Donut Chart */}
      <div className="flex justify-center items-center">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default EnquiriesByStatus;
