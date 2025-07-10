import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const InquiriesTrend = () => {
  const series = [
    {
      data: [5, 12, 20, 25, 30, 35],
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
      tickAmount: 6,
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
    colors: ["#A5DBF3"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
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
          <h1 className="text-[24px] leading-[130%]  text-[#484848] mt-4 ">
            Inquiries Trend
          </h1>
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

export default InquiriesTrend;
