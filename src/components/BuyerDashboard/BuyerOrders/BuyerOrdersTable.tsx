import coupon from "@/assets/coupon 1.svg";
import refund from "@/assets/refund 1.svg";
import reviews from "@/assets/reviews.svg";
import StyledSelect from "@/components/ReUseable/StyledSelect";
import { BuyerOrderTableData } from "@/lib/Buyer/BuyerOrderTable";
import { OrdersTableProps } from "@/types/Buyer/BuyerOrderTypes";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BuyerOrdersTable: React.FC<OrdersTableProps> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [dateFilter, setDateFilter] = useState("Last 30 Days");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-orange-100 text-orange-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
    }
  };
  const filteredOrders = BuyerOrderTableData.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.supplier.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All Status" || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-76xl mx-auto p-6 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl lg:text-3xl font-medium text-[#484848]">
            My Orders
          </h1>
          <p className="text-base text-[#666] mt-1">
            Manage and track your order history
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            to="reviews"
            className="flex items-center cursor-pointer gap-2 px-4 py-2 text-sm font-medium text-gray-700   hover:bg-gray-50 transition-colors"
          >
            <span className="border-b border-catalien-blue text-lg">
              Reviews
            </span>
            {/* <MessageSquare className="w-4 h-4 " /> */}
            <img src={reviews} alt="" />
          </Link>
          <Link to="refund">
            <button className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700  transition-colors">
              <span className="border-b border-catalien-blue text-lg">
                Refund
              </span>
              <img src={refund} alt="" />
            </button>
          </Link>
          <Link to="refund">
            <button className="flex items-center gap-2 px-4 cursor-pointer py-2 text-sm font-medium text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors">
              <img src={coupon} alt="" />
              Coupons
            </button>
          </Link>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="p-4 xl:border my-10 xl:border-[#E5E5E5] rounded-full max-w-7xl mx-auto bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 items-center">
          {/* Search Bar - Takes full width on smaller screens */}
          <div className="relative md:col-span-2 lg:col-span-1">
            <div className="relative">
              <Search
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white w-6 p-1 rounded-full h-auto"
                style={{
                  background:
                    "linear-gradient(270deg, #F7813B 0%, #F46A39 100%)",
                }}
              />
              <input
                type="text"
                placeholder="Search orders by number, product, and suppliers"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                className="w-full rounded-full border border-[#E5E5E5] bg-white text-[#1A1A1A] placeholder:text-[#666666] pl-6 pr-12 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#F04436] focus:border-transparent h-auto"
              />
            </div>
          </div>

          {/* Filter Selects - Takes other half on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:col-span-2 lg:col-span-1">
            {/* Status Filter */}
            <div className="relative">
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
            <div className="relative">
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-red-600 hover:text-red-900 transition-colors">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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
