import { BuyerOrderTableData } from "@/lib/Buyer/BuyerOrderTable";
import { OrdersTableProps } from "@/types/Buyer/BuyerOrderTypes";
import { ChevronDown, Search } from "lucide-react";
import reviews from "@/assets/reviews.svg";
import refund from "@/assets/refund 1.svg";
import coupon from "@/assets/coupon 1.svg";
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
          <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage and track your order history
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            to="/reviews"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700   hover:bg-gray-50 transition-colors"
          >
            <span className="border-b border-catalien-blue text-lg">
              Reviews
            </span>
            {/* <MessageSquare className="w-4 h-4 " /> */}
            <img src={reviews} alt="" />
          </Link>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700  transition-colors">
            <span className="border-b border-catalien-blue text-lg">
              Refund
            </span>
            <img src={refund} alt="" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors">
            <img src={coupon} alt="" />
            Coupons
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex justify-center gap-4 mb-6">
        <div className=" relative">
          <div className="absolute bg-sunset-orange p-1 rounded-full right-2 top-1/2 transform -translate-y-1/2">
            <Search className=" text-white" />
          </div>
          <input
            type="text"
            placeholder="Search orders by number, product, and suppliers"
            className="w-full lg:w-[748px] pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative">
          <select
            className="appearance-none bg-white border border-gray-300 rounded-full px-4 py-2 pr-8 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Delivered</option>
            <option>Pending</option>
            <option>Shipped</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>
        <div className="relative">
          <select
            className="appearance-none bg-white border border-gray-300 rounded-full px-4 py-2 pr-8 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 90 Days</option>
            <option>Last Year</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-300">
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
