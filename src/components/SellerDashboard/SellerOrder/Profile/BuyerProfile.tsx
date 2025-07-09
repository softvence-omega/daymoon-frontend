import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import Breadcrumbs from "../../SellerProducts/Breadcrumbs";
import { useParams } from "react-router-dom";
import profile from "../../../../assets/landing/profile.png";
import CommonHeader from "@/common/CommonHeader";
import SubHeader from "@/common/SubHeader";

import { BsFillTagFill } from "react-icons/bs";
import ButtonWithIcon from "@/common/ButtonWithIcon";
import DashboardCommonSpace from "@/common/DashboardCommonSpace";

const purchaseData = [
  { month: "Jan", amount: 200 },
  { month: "Feb", amount: 130 },
  { month: "Mar", amount: 250 },
  { month: "Apr", amount: 180 },
  { month: "May", amount: 150 },
  { month: "June", amount: 220 },
];
export default function BuyerProfile() {
  const { id } = useParams<{ id: string }>();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium !text-jet-black ">{`${label}`}</p>
          <p className="text-sm text-orange-600">{`Amount: $${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="pb-6 md:pb-10">
        <Breadcrumbs title="Orders" subtitle={`#${id} > Buyer Profile`} />
      </div>

      <div className=" bg-white p-10 rounded-2xl border border-foundation-white h-[400px]">
        <div className="flex items-start justify-between h-full ">
          <div className="flex  gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src={profile}
                alt="Marvin McKinney"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-lg">
              <div>
                <CommonHeader className="!text-2xl font-semibold ">
                  Marvin McKinney
                </CommonHeader>
                <SubHeader className=" !text-base mt-1">
                  Customer since 2024
                </SubHeader>
              </div>

              <div className=" w-full justify-between flex pt-6">
                <div className=" space-y-4">
                  <div>
                    <SubHeader className=" mb-1">Full Name</SubHeader>
                    <SubHeader className="font-medium !text-jet-black !text-base">
                      Marvin McKinney
                    </SubHeader>
                  </div>
                  <div>
                    <SubHeader className=" mb-1">Email</SubHeader>
                    <SubHeader className="font-medium !text-jet-black !text-base">
                      egjerigo@gmail.com
                    </SubHeader>
                  </div>
                  <div>
                    <SubHeader className=" mb-1">Location</SubHeader>
                    <SubHeader className="font-medium  !text-jet-black !text-base">
                      123 Innovation Drive,
                      <br />
                      Suite 400, Tech City,
                      <br />
                      CA 90210, USA
                    </SubHeader>
                  </div>
                </div>

                <div />

                <div className=" space-y-4">
                  <div>
                    <SubHeader className=" mb-1">Company</SubHeader>
                    <SubHeader className="font-medium !text-jet-black !text-base">
                      Marvin McKinney
                    </SubHeader>
                  </div>
                  <div>
                    <SubHeader className=" mb-1">Phone</SubHeader>
                    <SubHeader className="font-medium !text-jet-black !text-base">
                      3647569447
                    </SubHeader>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-10  flex-1  h-full  relative">
            <ButtonWithIcon
              icon={BsFillTagFill}
              className="text-sunset-orange border-sunset-orange hover:bg-orange-50  !px-10    absolute top-0 right-0 "
            >
              Offer Discount
            </ButtonWithIcon>
            <div>
              <div className="flex items-center justify-center gap-10  ">
                <div className="text-center">
                  <CommonHeader className="font-bold !text-catalien-blue !text-5xl mb-1">
                    2
                  </CommonHeader>
                  <SubHeader>Years</SubHeader>
                </div>

                <div className="w-px h-18 bg-[#6A6A6A] mx-8" />

                <div className="text-center">
                  <CommonHeader className="font-bold !text-catalien-blue !text-5xl mb-1">
                    5
                  </CommonHeader>
                  <SubHeader>Orders</SubHeader>
                </div>

                <div className="w-px h-18 bg-[#6A6A6A] mx-8" />

                <div className="text-center">
                  <CommonHeader className="!text-5xl font-bold !text-catalien-blue mb-1">
                    $1000
                  </CommonHeader>
                  <SubHeader>Average Order</SubHeader>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashboardCommonSpace>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-2xl border border-foundation-white ">
            <CommonHeader className=" font-semibold !text-jet-black !text-xl mb-6">
              Product Preference
            </CommonHeader>

            <div className="mb-6">
              <SubHeader className=" mb-3 font-medium">
                Color Preference
              </SubHeader>
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg bg-jet-black border-2 border-gray-200"></div>
                <div className="w-7 h-7 rounded-full bg-goldenrod border-2 border-gray-200"></div>
                <div className="w-7 h-7 rounded-full  bg-sunset-orange  border-2 border-gray-200"></div>
                <div className="w-7 h-7 rounded-full  bg-catalien-blue  border-2 border-gray-200"></div>
              </div>
            </div>

            <div className="mb-6">
              <SubHeader className=" mb-3 font-medium">Categories</SubHeader>
              <div className="flex flex-wrap gap-2 text-goldenrod">
                <Badge
                  variant="outline"
                  className="bg-[#FFF7EC]   border border-[#FCAB3F]  cursor-pointer px-3 py-1"
                >
                  Wireless audio
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-[#FFF7EC]   border border-[#FCAB3F]  cursor-pointer"
                >
                  Headphones
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-[#FFF7EC]   border border-[#FCAB3F]  cursor-pointer"
                >
                  Speakers
                </Badge>
              </div>
            </div>

            <div>
              <SubHeader className=" mb-1 font-medium">Price Range</SubHeader>
              <SubHeader className="font-semibold !text-jet-black ">
                $100-$200
              </SubHeader>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-foundation-white ">
            <CommonHeader className=" font-semibold !text-jet-black !text-xl mb-6">
              Engagement with Promotions
            </CommonHeader>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-[#08AD36]  bg-[#08AD36]/10 flex items-center justify-center mt-0.5 text-xl rounded">
                  <BsFillTagFill className="p-1" />
                </div>
                <div className="flex-1">
                  <p className="font-medium !text-jet-black !text-base">
                    Used 10% OFF Couple
                  </p>
                  <SubHeader>10 total purchases</SubHeader>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-[#08AD36]  bg-[#08AD36]/10 flex items-center justify-center mt-0.5 text-xl rounded">
                  <BsFillTagFill className="p-1" />
                </div>
                <div className="flex-1">
                  <SubHeader className="font-medium !text-jet-black !text-base">
                    Holiday Sale
                  </SubHeader>
                  <SubHeader>Purchased 2 Items</SubHeader>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-[#08AD36]  bg-[#08AD36]/10 flex items-center justify-center mt-0.5 text-xl rounded">
                  <BsFillTagFill className="p-1" />
                </div>
                <div className="flex-1">
                  <SubHeader className="font-medium !text-jet-black !text-base">
                    Welcome Offer
                  </SubHeader>
                  <SubHeader>Redeemed on first order</SubHeader>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-[#08AD36]  bg-[#08AD36]/10 flex items-center justify-center mt-0.5 text-xl rounded">
                  <BsFillTagFill className="p-1" />
                </div>
                <div className="flex-1">
                  <SubHeader className="font-medium !text-jet-black !text-base">
                    Loyalty Bonus
                  </SubHeader>
                  <SubHeader>Applied after 5 purchases</SubHeader>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-foundation-white ">
            <CommonHeader className=" font-semibold !text-jet-black !text-xl mb-6">
              Purchase Behaviour
            </CommonHeader>

            <div className="flex items-center justify-end mb-6">
              <Select defaultValue="last-6-months">
                <SelectTrigger className="w-40 border-foundation-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                  <SelectItem value="last-year">Last Year</SelectItem>
                  <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={purchaseData}
                  margin={{ top: 20, right: 10, bottom: 20, left: 0 }}
                  barCategoryGap="20%"
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    domain={[0, 300]}
                    ticks={[0, 50, 100, 150, 200, 250, 300]}
                    width={30} // ensure Y-axis starts close to edge
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: "rgba(249, 115, 22, 0.1)" }}
                  />
                  <Bar
                    dataKey="amount"
                    fill="#F97316"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </DashboardCommonSpace>
    </div>
  );
}
