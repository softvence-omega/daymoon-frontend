import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import CommonSelect from "@/common/CommonSelect";
import { useLocation } from "react-router-dom";

const listItem = [
  { label: "All Status", value: "all" },
  { label: "Delivered", value: "delivered" },
  { label: "Shipped", value: "shipped" },
  { label: "Pending", value: "pending" },
] as const;

const listItem1 = [
  { label: "All Rating", value: "all" },
  { label: "Delivered", value: "delivered" },
  { label: "Shipped", value: "shipped" },
  { label: "Pending", value: "pending" },
] as const;

const listItem2 = [
  { label: "All Time", value: "all" },
  { label: "Last 30 Days", value: "30days" },
  { label: "Last 7 Days", value: "7days" },
  { label: "Last 90 Days", value: "90days" },
  { label: "Last Year", value: "1year" },
] as const;

type StatusValue = (typeof listItem)[number]["value"];
type RangeValue = (typeof listItem2)[number]["value"];

interface Props {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  statusFilter: StatusValue;
  setStatusFilter: (val: StatusValue) => void;
  dateFilter: RangeValue;
  setDateFilter: (val: RangeValue) => void;
}

const SearchFilter = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  dateFilter,
  setDateFilter,
}: Props) => {
  const { pathname } = useLocation();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="flex flex-col w-full gap-4 p-4 mx-auto mb-6 border rounded-full lg:flex-row lg:items-center lg:justify-between lg:max-w-6xl border-foundation-white">
      {/* Search Input */}
      <div className="relative w-full lg:flex-1">
        <span className="absolute right-3 top-1/2 -translate-y-1/2 transform rounded-full bg-sunset-orange p-2.5">
          <FaSearch className="w-3 h-3 text-white" />
        </span>
        <Input
          placeholder={
            isLargeScreen
              ? "Search orders by number, product and suppliers"
              : "Search..."
          }
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-5 text-sm placeholder-gray-500 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Filter Selects */}
      <div className="flex flex-col w-full gap-3 sm:flex-row sm:items-center lg:w-auto lg:flex-row lg:gap-3">
        <CommonSelect
          value={statusFilter}
          onValueChange={setStatusFilter}
          item={listItem}
          w={228}
          className="!rounded-full w-full sm:w-[228px]"
          arrow="text-sunset-orange"
        />

        {pathname === "/seller-dashboard/reviews" && (
          <CommonSelect
            value={statusFilter}
            onValueChange={setStatusFilter}
            item={listItem1}
            w={228}
            className="!rounded-full w-full sm:w-[228px]"
            arrow="text-sunset-orange"
          />
        )}

        <CommonSelect
          value={dateFilter}
          onValueChange={setDateFilter}
          item={listItem2}
          w={228}
          className="!rounded-full w-full sm:w-[228px]"
          arrow="text-sunset-orange"
        />
      </div>
    </div>
  );
};

export default SearchFilter;
