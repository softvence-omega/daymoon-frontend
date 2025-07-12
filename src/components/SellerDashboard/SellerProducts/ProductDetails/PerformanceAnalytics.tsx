import CommonHeader from "@/common/CommonHeader";
import SubHeader from "@/common/SubHeader";
import ProgressBar from "./ProgressBar";
import MonthlyRevenue from "./MonthlyRevenue";

const analytic = [
  { title: "Total Enquiries", quantity: "300" },
  { title: "Responded", quantity: "285 (95%)" },
  { title: "Average Respond time", quantity: "1.5 h" },
  { title: "Pending", quantity: "5" },
];

const PerformanceAnalytics = () => {
  return (
    <div className=" border border-foundation-white rounded-2xl p-6 bg-white">
      <MonthlyRevenue
        title="Performance Analytics"
        subtitle1="Product View"
        subtitle2="Revenue"
      />

      <div className=" flex flex-col md:flex-row justify-between gap-10 pt-10 ">
        <div className=" flex-1   ">
          <CommonHeader className="pb-4">Enquiries</CommonHeader>
          <div className="bg-ghost rounded-xl border p-3 border-foundation-white flex flex-col gap-4">
            {analytic.map((item) => (
              <div className="flex items-center  justify-between ">
                <SubHeader>{item.title}</SubHeader>
                <SubHeader className=" ">{item.quantity}</SubHeader>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
