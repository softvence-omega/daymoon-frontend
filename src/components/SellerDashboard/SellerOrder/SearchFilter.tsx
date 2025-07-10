import { useState } from "react";

import { ChevronDown } from "lucide-react";

import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("30days");
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 items-center max-w-6xl w-full mx-auto mb-6 border border-foundation-white rounded-full p-4">
        <div className="relative  flex-1 ">
          <span className="bg-sunset-orange rounded-full p-2.5 absolute right-3 top-1/2 transform -translate-y-1/2">
            <FaSearch className=" text-white h-3 w-3  " />
          </span>

          <Input
            placeholder="Search orders by number, product and suppliers"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-5 border border-foundation-white rounded-full outline-none"
          />
        </div>

        <div className="flex gap-3">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[228px]  py-5  border border-foundation-white rounded-full">
              <SelectValue placeholder="All Status" />
              <ChevronDown className="w-4 h-4 text-sunset-orange" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>

          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="w-[228px] border py-5 border-foundation-white rounded-full">
              <SelectValue placeholder="Last 30 Days" />{" "}
              <ChevronDown className="w-4 h-4 text-sunset-orange" />
            </SelectTrigger>
            <SelectContent className="bg-white">
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

export default SearchFilter;
