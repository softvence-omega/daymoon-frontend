import coupon from "@/assets/coupon 1.svg";
import refund from "@/assets/refund 1.svg";
import reviews from "@/assets/reviews.svg";
import StyledSelect from "@/components/ReUseable/StyledSelect";
import { BuyerOrderTableData } from "@/lib/Buyer/BuyerOrderTable";
import { BuyerOrder } from "@/types/Buyer/BuyerOrderTypes";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface BuyerOrdersTableProps {
  orders: BuyerOrder[];
}
const BuyerOrdersTable: React.FC<BuyerOrdersTableProps> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [dateFilter, setDateFilter] = useState("Last 30 Days");
  const [filteredOrders, setFilteredOrders] = useState(BuyerOrderTableData);

  // Debounced search term
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  // Helper function to filter orders based on date
  const filterByDate = useCallback(
    (orderDate: string) => {
      const orderDateObj = new Date(orderDate);
      const currentDate = new Date();

      orderDateObj.setHours(0, 0, 0, 0);
      currentDate.setHours(0, 0, 0, 0);

      const diffTime = currentDate.getTime() - orderDateObj.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));

      switch (dateFilter) {
        case "Last 7 Days":
          return diffDays <= 7;
        case "Last 30 Days":
          return diffDays <= 30;
        case "Last 90 Days":
          return diffDays <= 90;
        case "Last Year":
          return diffDays <= 365;
        default:
          return true;
      }
    },
    [dateFilter]
  );

  // Apply filters with debouncing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    const filtered = BuyerOrderTableData.filter((order) => {
      const matchesSearch =
        debouncedSearchTerm === "" ||
        order.id.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        order.product.name
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase()) ||
        order.supplier
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All Status" || order.status === statusFilter;

      const matchesDate = filterByDate(order.date);

      return matchesSearch && matchesStatus && matchesDate;
    });

    setFilteredOrders(filtered);
  }, [debouncedSearchTerm, statusFilter, dateFilter, filterByDate]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-[#10b98133] text-[#10B981]";
      case "pending":
        return "bg-[#f59e4233] text-[#F59E42]";
      case "shipped":
        return "bg-[#1565d833] text-[#1565D8]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
    }
  };

  return (
    <div className="mx-auto  ">
      <div className="flex justify-between items-center mb-6 flex-wrap md:flex-nowrap">
        <div>
          <h1 className="text-xl lg:text-3xl font-medium text-[#484848]">
            My Orders
          </h1>
          <p className="text-base text-[#666] mt-1">
            Manage and track your order history
          </p>
        </div>
        <div className="flex items-center mt-4 md:mt-0 flex-wrap md:flex-nowrap gap-6">
          <Link
            to="reviews"
            className="flex text-catalien-blue items-center cursor-pointer gap-2 md:px-4 md:py-2 text-sm font-medium  hover:bg-gray-50 transition-colors"
          >
            <span className="border-b border-catalien-blue text-lg">
              Reviews
            </span>
            <img src={reviews} alt="" className="w-5 h-5" />
          </Link>
          <Link to="refund">
            <button className="flex cursor-pointer items-center gap-2 md:px-4 py-2 text-sm font-medium text-catalien-blue text-nowrap transition-colors">
              <span className="border-b border-catalien-blue text-lg">
                Refund Requests
              </span>
              <img src={refund} alt="" className="w-5 h-5" />
            </button>
          </Link>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.02 }}
            className={`w-full bg-[#F04436] hover:bg-[#AA3026] text-white flex justify-center text-sm md:text-base itews-center gap-2 p-4   rounded-xl cursor-pointer`}
          >
            <img src={coupon} alt="" className="w-5 h-5" />
            Coupons
          </motion.button>
          {/* </Link> */}
        </div>
      </div>

      {/* Search and Filters */}

      <div className="md:p-4 md:pl-8 xl:border my-10 xl:border-[#E5E5E5] rounded-full max-w-7xl mx-auto bg-transparent">
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

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
        {filteredOrders.length > 0 ? (
          <table className="w-full">
            <thead className="bg-[#E5E5E5]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Supplier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500  uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider ">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.supplier}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center mr-3">
                        <img
                          src={order.product.image}
                          alt={order.product.name}
                          className="h-8 w-8 rounded object-cover"
                        />
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        {order.product.name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    {order.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.date}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`block px-2 py-2 text-sm font-medium rounded-full text-center ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status === "delivered"
                        ? "Delivered"
                        : order.status === "pending"
                        ? "Pending"
                        : order.status === "shipped"
                        ? "Shipped"
                        : ""}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link to="oderDetails/:id">
                      <button className="text-[#F04436] cursor-pointer hover:text-red-600 transition-colors">
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-lg font-semibold text-gray-500 py-10">
            No orders found matching your filters.
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-700">
          Showing 1 to 10 of {filteredOrders.length} orders
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
            «
          </button>
          <button className="px-3 py-1 text-sm bg-red-500 text-white rounded">
            1
          </button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
            2
          </button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
            3
          </button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyerOrdersTable;
