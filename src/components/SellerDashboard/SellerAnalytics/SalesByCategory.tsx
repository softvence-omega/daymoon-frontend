import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const SalesByCategory: React.FC = () => {
  const series = [44, 55, 13, 33];

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Clothing", "Electronics", "Home Goods", "Home Goods"],
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
    <div className="w-full h-full max-h-[555px] p-6 bg-[#FFFFFF] rounded-xl shadow-md">
      {/* Top Section: Title & Dropdown */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-0 lg:mb-8">
        <h1 className="text-[24px] leading-[130%] text-[#484848]">
          Sales By Category
        </h1>
      </div>

      {/* Donut Chart */}
      <div className="flex justify-center items-center">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={400}
          height={393}
        />
      </div>
    </div>
  );
};

export default SalesByCategory;
