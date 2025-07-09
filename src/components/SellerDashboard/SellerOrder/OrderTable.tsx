import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import image1 from "../../../assets/landing/product2.png";
import image2 from "../../../assets/landing/product3.png";
import image3 from "../../../assets/landing/image1.png";
import image4 from "../../../assets/landing/products.png";
import { FaSearch } from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Pagination from "../../../common/Pagination";
import { Link } from "react-router-dom";

interface Order {
  id: string;
  orderNo: string;
  product: {
    name: string;
    sku: string;
    image: string;
  };
  buyer: {
    name: string;
    company: string;
  };
  date: string;
  status: "Shipped" | "Delivered" | "Pending";
  price: number;
}

const mockOrders: Order[] = [
  {
    id: "1",
    orderNo: "001-GADGETS",
    product: {
      name: "Ultra HD Display",
      sku: "SP-X2023-BLK",
      image: image1,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "17/06/2025",
    status: "Shipped",
    price: 89.99,
  },
  {
    id: "2",
    orderNo: "002-FASHION",
    product: {
      name: "4K Gaming Monitor",
      sku: "SP-X2023-BLK",
      image: image2,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "15/08/23",
    status: "Delivered",
    price: 79.99,
  },
  {
    id: "3",
    orderNo: "003-HOME",
    product: {
      name: "High-Resolution Screen",
      sku: "SP-X2023-BLK",
      image: image3,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "22/11/24",
    status: "Delivered",
    price: 59.99,
  },
  {
    id: "4",
    orderNo: "004-TOYS",
    product: {
      name: "Crystal Clear Monitor",
      sku: "SP-X2023-BLK",
      image: image4,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "03/05/25",
    status: "Pending",
    price: 69.99,
  },
  {
    id: "5",
    orderNo: "005-SUSTAINABLE",
    product: {
      name: "Vivid Color Display",
      sku: "SP-X2023-BLK",
      image: image1,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "09/12/22",
    status: "Delivered",
    price: 49.99,
  },
  {
    id: "6",
    orderNo: "006-BEAUTY",
    product: {
      name: "Premium Visual Monitor",
      sku: "SP-X2023-BLK",
      image: image2,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "09/12/22",
    status: "Shipped",
    price: 99.99,
  },
  {
    id: "7",
    orderNo: "007-TRENDY",
    product: {
      name: "Next-Gen 4K Screen",
      sku: "SP-X2023-BLK",
      image: image4,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "09/12/22",
    status: "Delivered",
    price: 89.99,
  },
  {
    id: "8",
    orderNo: "008-OUTDOOR",
    product: {
      name: "Stunning Clarity Monitor",
      sku: "SP-X2023-BLK",
      image: image1,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "09/12/22",
    status: "Delivered",
    price: 79.99,
  },
  {
    id: "9",
    orderNo: "009-TECH",
    product: {
      name: "Dynamic Display",
      sku: "SP-X2023-BLK",
      image: image3,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "09/12/22",
    status: "Shipped",
    price: 69.99,
  },
  {
    id: "10",
    orderNo: "010-LIFESTYLE",
    product: {
      name: "Elite 4K Monitor",
      sku: "SP-X2023-BLK",
      image: image1,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "09/12/22",
    status: "Delivered",
    price: 89.99,
  },
];

const getStatusColor = (status: Order["status"]) => {
  switch (status) {
    case "Delivered":
      return "bg-[#10B981]/20 text-[#10B981] hover:bg-green-100";
    case "Shipped":
      return "bg-[#1565D8]/20 text-[#1565D8] hover:bg-blue-100";
    case "Pending":
      return "text-[#FCAB3F] bg-[#FDECD9]  hover:bg-orange-100";
    default:
      return "";
  }
};

const OrderTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("30days");

  const handleMarkAsDelivered = (orderId: string) => {
    console.log("Mark as delivered:", orderId);
  };

  const handleMarkAsShipped = (orderId: string) => {
    console.log("Mark as shipped:", orderId);
  };

  const headList = [
    "Order No",
    "Product",
    "Buyer",
    "Date",
    "Status",
    "Price",
    "Date",
    "Action",
  ];

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };
  return (
    <div className="w-full ">
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

      <div className="p-2 overflow-hidden border border-[#E0E0E1] rounded-xl bg-white">
        <Table>
          <TableHeader className=" pb-5">
            <TableRow className="first:border-none ">
              {headList.map((item, i) => (
                <TableHead
                  key={i}
                  className="font-medium text-sm first:text-start nth-[2]:text-start  text-center text-foundation-gray bg-foundation-white  first:rounded-l-xl last:rounded-r-xl py-4 "
                >
                  {item}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockOrders.map((order) => (
              <TableRow key={order.id} className=" hover:bg-gray-50  ">
                <TableCell className="font-medium py-6 ">
                  {order.orderNo}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={order.product.image || "/placeholder.svg"}
                      alt={order.product.name}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div>
                      <div className="font-medium">{order.product.name}</div>
                      <div className="text-sm text-gray-500">
                        SKU: {order.product.sku}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium text-center">
                  <div>
                    <div className="font-medium">{order.buyer.name}</div>
                    <div className="text-sm text-gray-500">
                      {order.buyer.company}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium text-center">
                  {order.date}
                </TableCell>
                <TableCell className="font-medium text-center">
                  <Button
                    className={`${getStatusColor(
                      order.status
                    )} transition cursor-pointer py-5 rounded-2xl`}
                  >
                    {order.status}
                  </Button>
                </TableCell>
                <TableCell className="font-medium text-center">
                  ${order.price}
                </TableCell>
                <TableCell className="font-medium text-center">
                  ${order.date}
                </TableCell>

                <TableCell>
                  <div className="flex items-center justify-center gap-2">
                    {order.status === "Shipped" && (
                      <Button
                        size="sm"
                        className="bg-[#10B981] hover:bg-green-700 text-white transition  cursor-pointer py-5 rounded-2xl"
                        onClick={() => handleMarkAsDelivered(order.id)}
                      >
                        Mark As Delivered
                      </Button>
                    )}
                    {order.status === "Pending" ? (
                      <>
                        <Button
                          size="sm"
                          className="bg-[#10B981] hover:bg-green-700 text-white transition  cursor-pointer    py-5 rounded-2xl"
                          onClick={() => handleMarkAsShipped(order.id)}
                        >
                          Mark As Shipped
                        </Button>
                        <Button
                          size="sm"
                          className="bg-[#D9222A] hover:bg-red-700 transition  cursor-pointer text-white  py-5 rounded-2xl"
                        >
                          Cancel Order
                        </Button>
                      </>
                    ) : (
                      <Link
                        className="text-sunset-orange hover:text-red-700 transition  cursor-pointer   py-5 rounded-2xl"
                        to={`/seller-dashboard/orders/${slugify(
                          order.orderNo
                        )}`}
                      >
                        View
                      </Link>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="py-6">
        <Pagination
          title="All Orders"
          showText="Showing 1 to 10 of 24 orders "
        />
      </div>
    </div>
  );
};
export default OrderTable;
