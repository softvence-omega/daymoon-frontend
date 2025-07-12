// import React from "react";
// import ReactApexChart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";

// const EnquiriesByStatus: React.FC = () => {
//   const series = [44, 55, 13, 33];
//   const labels = ["Delivered", "Shipped", "Processing", "Cancelled"];
//   const colors = ["#9BDFC4", "#62B2FD", "#FFB450", "#FF676E"];

//   const options: ApexOptions = {
//     chart: {
//       type: "donut",
//     },
//     labels,
//     dataLabels: {
//       enabled: false,
//     },
//     plotOptions: {
//       pie: {
//         startAngle: 90,
//         endAngle: 450,
//         donut: {
//           size: "64%",
//         },
//       },
//     },
//     legend: {
//       position: "right",
//       offsetY: 90,
//       offsetX: -80,
//       fontSize: "16px",
//       labels: {
//         colors: ["#484848"],
//         useSeriesColors: false,
//       },
//       height: 230,
//     },
//     colors,
//     responsive: [
//       {
//         breakpoint: 1024,
//         options: {
//           chart: {
//             width: 360,
//             height: 360,
//           },
//           legend: {
//             position: "bottom",
//             offsetY: 10,
//             fontSize: "14px",
//           },
//         },
//       },
//       {
//         breakpoint: 640,
//         options: {
//           chart: {
//             width: 280,
//             height: 280,
//           },
//           legend: {
//             show: false,
//           },
//         },
//       },
//     ],
//   };

//   return (
//     <div className="w-full max-w-[748px] p-4 sm:p-6 bg-white rounded-xl shadow-md">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
//         <h1 className="text-[20px] sm:text-[24px] leading-[130%] text-[#484848]">
//           Enquiries By Status
//         </h1>
//       </div>

//       {/* Chart and Mobile Labels */}
//       <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-6 sm:gap-12">
//         {/* Custom labels for mobile */}
//         <ul className="flex flex-col sm:hidden w-full px-4">
//           {labels.map((label, idx) => (
//             <li key={label} className="flex items-center gap-2 mb-2">
//               <span
//                 className="inline-block w-3 h-3 rounded-full"
//                 style={{ backgroundColor: colors[idx] }}
//               />
//               <span className="text-[#484848] text-sm">{label}</span>
//             </li>
//           ))}
//         </ul>

//         {/* Big, Circular Donut Chart */}
//         <div className="w-full max-w-[480px] aspect-square">
//           <ReactApexChart
//             options={options}
//             series={series}
//             type="donut"
//             width="100%"
//             height="100%"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnquiriesByStatus;

import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const EnquiriesByStatus: React.FC = () => {
  const series = [44, 55, 13, 33];

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Resolved", "Resolved", "In progress", "Closed"],
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
    <div className="w-full max-w-[788px] h-full max-h-[555px] p-6 bg-white rounded-xl shadow-md">
      {/* Top Section: Title & Dropdown */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-[24px] leading-[130%] text-[#484848]">
          Enquiries By Status
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

export default EnquiriesByStatus;
