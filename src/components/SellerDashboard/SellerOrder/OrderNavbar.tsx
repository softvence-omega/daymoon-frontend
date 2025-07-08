import { ChevronDown } from "lucide-react";
import Title from "../Shared/Title";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const OrderNavbar = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center w-full">
        <div className="w-full lg:flex-1">
          <Title
            title="Manage your Orders"
            subTitle="View and manage your incoming orders. Track status, process returns, and update order details."
          />
        </div>

        <div>
          <Select>
            <SelectTrigger className="min-w-[220px] outline bg-[#FCFCFC] border border-[#B3B3B3] px-3 py-5 rounded-xl outline-none flex justify-between items-center cursor-pointer ">
              <SelectValue placeholder="Select a category" />
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </SelectTrigger>
            <SelectContent className="bg-white text-lg">
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default OrderNavbar;
