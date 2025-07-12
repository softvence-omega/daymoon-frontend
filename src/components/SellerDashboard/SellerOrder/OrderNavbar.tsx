import Title from "../Shared/Title";

import CommonSelect from "@/common/CommonSelect";
import { useState } from "react";

const listItem2 = [
  { label: "Last 30 Days", value: "30days" },
  { label: "Last 7 Days", value: "7days" },
  { label: "Last 90 Days", value: "90days" },
  { label: "Last Year", value: "1year" },
] as const;

type RangeValue = (typeof listItem2)[number]["value"];
const OrderNavbar = () => {
  const [dateFilter, setDateFilter] = useState<RangeValue>("30days");
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center w-full">
        <div className="w-full lg:flex-1">
          <Title
            title="Manage your Orders"
            subTitle="View and manage your incoming orders. Track status, process returns, and update order details."
          />
        </div>

        <div className="">
          <CommonSelect
            value={dateFilter}
            onValueChange={setDateFilter}
            item={listItem2}
            w={228}
            className=""
            arrow="text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderNavbar;
