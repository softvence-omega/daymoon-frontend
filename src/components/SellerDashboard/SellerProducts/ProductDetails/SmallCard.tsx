import CommonHeader from "@/common/CommonHeader";
import SubHeader from "@/common/SubHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const SmallCard = () => {
  const metrics = [
    {
      title: "Total Sales",
      value: "1,250",
      change: "12% from last month",
      trend: "up",
    },
    {
      title: "Revenue",
      value: "12,500",
      change: "12% from last month",
      trend: "up",
    },
    {
      title: "Views",
      value: "15,000",
      change: "12% from last month",
      trend: "up",
    },
    {
      title: "Conversion Rate",
      value: "8%",
      change: "12% from last month",
      trend: "up",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  pt-6 pb-10">
      {metrics.map((metric, index) => (
        <Card
          key={index}
          className="bg-ghost !gap-2  !py-3  border border-foundation-white"
        >
          <CardHeader className="">
            <CardTitle>
              <SubHeader>{metric.title}</SubHeader>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 !px-3">
            <div>
              <CommonHeader className=" text-catalien-blue font-bold !text-2xl">
                {metric.value}
              </CommonHeader>
              <div className="flex items-center  text-xs text-green-600 pt-2">
                <TrendingUp className="w-4 h-4 pr-1" />
                {metric.change}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default SmallCard;
