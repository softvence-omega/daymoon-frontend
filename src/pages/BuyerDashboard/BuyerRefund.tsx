import BuyerRefundPage from "@/components/BuyerDashboard/BuyerOrders/BuyerRefundPage";
import StyledSelect from "@/components/ReUseable/StyledSelect";
import Breadcrumbs from "@/components/SellerDashboard/SellerProducts/Breadcrumbs";
import { Search } from "lucide-react";
import { useState } from "react";

const BuyerRefund = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [dateFilter, setDateFilter] = useState("Last 30 Days");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
    }
  };

  return (
    <div>
      <Breadcrumbs title="Orders" subtitle="Refund Requests" />
      <div className="p-4 pl-8 xl:border my-10 xl:border-[#E5E5E5] rounded-full max-w-7xl mx-auto bg-transparent">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="relative flex-1 w-full">
            <input
              type="text"
              placeholder="Search orders by number, product and suppliers"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="w-full rounded-full border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-1.5 rounded-full hover:from-orange-600 hover:to-orange-700 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Status Filter */}
            <div className="relative w-full md:w-40">
              <StyledSelect
                placeholder={statusFilter}
                defaultValue={statusFilter}
                onValueChange={(value) => setStatusFilter(value)}
                options={[
                  { label: "All Status", value: "All Status" },
                  { label: "Delivered", value: "Delivered" },
                  { label: "Pending", value: "Pending" },
                  { label: "Shipped", value: "Shipped" },
                ]}
              />
            </div>

            {/* Date Filter */}
            <div className="relative w-full md:w-48">
              <StyledSelect
                placeholder={dateFilter}
                defaultValue={dateFilter}
                onValueChange={(value) => setDateFilter(value)}
                options={[
                  { label: "Last 30 Days", value: "Last 30 Days" },
                  { label: "Last 7 Days", value: "Last 7 Days" },
                  { label: "Last 90 Days", value: "Last 90 Days" },
                  { label: "Last Year", value: "Last Year" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <BuyerRefundPage />
    </div>
  );
};

export default BuyerRefund;
