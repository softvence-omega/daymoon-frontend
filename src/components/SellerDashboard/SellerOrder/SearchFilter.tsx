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
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center lg:max-w-6xl w-full mx-auto mb-6 lg:border lg:border-foundation-white lg:rounded-full p-4">
      <div className="relative w-full flex-1">
        <span className="bg-sunset-orange rounded-full p-2.5 absolute right-3 top-1/2 transform -translate-y-1/2">
          <FaSearch className="text-white h-3 w-3" />
        </span>
        <Input
          placeholder={
            isLargeScreen
              ? "Search orders by number, product and suppliers"
              : "Search..."
          }
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-5 border border-gray-300 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex gap-3">
        <CommonSelect
          value={statusFilter}
          onValueChange={setStatusFilter}
          item={listItem}
          w={228}
          className="!rounded-full"
          arrow="text-sunset-orange"
        />
        {pathname === "/seller-dashboard/reviews" && (
          <CommonSelect
            value={statusFilter}
            onValueChange={setStatusFilter}
            item={listItem1}
            w={228}
            className="!rounded-full"
            arrow="text-sunset-orange"
          />
        )}

        <CommonSelect
          value={dateFilter}
          onValueChange={setDateFilter}
          item={listItem2}
          w={228}
          className="!rounded-full"
          arrow="text-sunset-orange"
        />
      </div>
    </div>
  );
};

export default SearchFilter;
