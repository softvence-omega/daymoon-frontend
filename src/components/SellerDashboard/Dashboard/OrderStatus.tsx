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
import { ChevronDown } from "lucide-react";

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
        {/* <div className="flex flex-col sm:flex-row md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 mb-8 w-full"></div> */}
        <div className="w-full md:flex-1">
          <h1 className="text-[24px] leading-[130%] font-medium text-[#484848] mb-4">
            Order Status
          </h1>
        </div>
        <div className="w-full sm:w-[250px] md:w-[221px]">
          <Select onValueChange={handleFilterChange} defaultValue="this-month">
            <SelectTrigger className="w-full h-[48px] border border-[#B3B3B3] rounded-[12px] px-[20px] py-[10px] bg-[#FCFCFC] text-[#484848] text-sm flex items-center justify-between hover:border-gray-400 transition-all duration-200 cursor-pointer">
              <SelectValue placeholder="Select Time" />
              <ChevronDown className="w-4 h-4 ml-auto text-gray-500" />
            </SelectTrigger>

            <SelectContent className="bg-white border border-[#B3B3B3] rounded-md shadow-md">
              <SelectGroup>
                <SelectLabel className="px-4 pt-2 text-gray-500 text-sm">
                  Filter
                </SelectLabel>
                <SelectItem
                  value="this-month"
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 transition-colors rounded"
                >
                  This Month
                </SelectItem>
                <SelectItem
                  value="last-month"
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 transition-colors rounded"
                >
                  Last Month
                </SelectItem>
                <SelectItem
                  value="this-year"
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 transition-colors rounded"
                >
                  This Year
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
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
