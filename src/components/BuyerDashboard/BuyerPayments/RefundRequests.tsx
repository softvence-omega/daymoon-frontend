import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import card from "@/assets/dashboard/buyer-dashboard/card.svg";
import mastercard from "@/assets/dashboard/buyer-dashboard/mastercard.svg";
import paypal from "@/assets/dashboard/buyer-dashboard/paypal.svg";
import visa from "@/assets/dashboard/buyer-dashboard/visa.svg";
import { Link } from "react-router-dom";

// Status configuration for refund statuses
const statusConfig = {
  approved: {
    label: "Approved",
    bgColor: "bg-[#10B98133]",
    textColor: "text-[#10B981]",
  },
  pending: {
    label: "Pending",
    bgColor: "bg-[#F59E4233]",
    textColor: "text-[#F59E42]",
  },
  processing: {
    label: "Processing",
    bgColor: "bg-[#1565D833]",
    textColor: "text-[#1565D8]",
  },
  rejected: {
    label: "Rejected",
    bgColor: "bg-[#DC262633]",
    textColor: "text-[#DC2626]",
  },
};

// Refund request data
const refundData = [
  {
    id: "10001",
    orderId: "ORD-2025-347",
    paymentDate: "17/06/2025",
    amount: "$2,345.00",
    refundMethod: {
      name: "Visa ending 1234",
      image: visa,
    },
    status: "approved",
    reason: "Product not as described",
  },
  {
    id: "10002",
    orderId: "ORD-2025-482",
    paymentDate: "15/06/2025",
    amount: "$1,250.00",
    refundMethod: {
      name: "Mastercard ending 5678",
      image: mastercard,
    },
    status: "pending",
    reason: "Damaged during shipping",
  },
  {
    id: "10003",
    orderId: "ORD-2025-763",
    paymentDate: "12/06/2025",
    amount: "$3,500.00",
    refundMethod: {
      name: "PayPal Account",
      image: paypal,
    },
    status: "processing",
    reason: "Order cancelled by customer",
  },
  {
    id: "10004",
    orderId: "ORD-2025-764",
    paymentDate: "08/06/2025",
    amount: "$4,750.00",
    refundMethod: {
      name: "Card ending 9012",
      image: card,
    },
    status: "rejected",
    reason: "Return policy expired",
  },
  {
    id: "10005",
    orderId: "ORD-2025-765",
    paymentDate: "05/06/2025",
    amount: "$1,850.00",
    refundMethod: {
      name: "Visa ending 3456",
      image: visa,
    },
    status: "approved",
    reason: "Wrong item delivered",
  },
];

const RefundRequestsTable = () => {
  // Render status badge with appropriate colors
  const renderStatus = (status: string) => {
    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <span
        className={`px-3 py-1 rounded-xl text-sm font-medium ${config.bgColor} ${config.textColor}`}
      >
        {config.label}
      </span>
    );
  };

  return (
    <div className="border border-[#E5E5E5] rounded-2xl shadow-sm p-4 overflow-x-auto space-y-6 bg-[#FFFFFF]">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="text-[#666666]">
            <TableHead className="w-[120px] px-4 py-2">Order ID</TableHead>
            <TableHead className="px-4 py-2">Payment Date</TableHead>
            <TableHead className="text-right px-4 py-2">Amount</TableHead>
            <TableHead className="px-4 py-2">Refund Method</TableHead>
            <TableHead className="px-4 py-2">Status</TableHead>
            <TableHead className="px-4 py-2">Reason</TableHead>
            <TableHead className="text-center px-4 py-2">Invoice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[#1A1A1A] text-base font-normal">
          {refundData.map((refund) => (
            <TableRow key={refund.id}>
              <TableCell className="px-4 py-4 font-medium">
                {refund.orderId}
              </TableCell>
              <TableCell className="px-4 py-4">{refund.paymentDate}</TableCell>
              <TableCell className="text-right px-4 py-4 font-medium">
                {refund.amount}
              </TableCell>
              <TableCell className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img
                      src={refund.refundMethod.image}
                      alt={refund.refundMethod.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {refund.refundMethod.name}
                  </span>
                </div>
              </TableCell>
              <TableCell className="px-4 py-4">
                {renderStatus(refund.status)}
              </TableCell>
              <TableCell className="px-4 py-4">
                <span
                  className="text-sm text-gray-600 max-w-[200px] truncate"
                  title={refund.reason}
                >
                  {refund.reason}
                </span>
              </TableCell>
              <TableCell className="text-center px-4 py-4 text-[#F04436]">
                <Link to="/buyer/dashboard/orders/refund">View Details</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

const RefundRequests = () => {
  return (
    <div className="mt-8 md:mt-10 lg:mt-20">
      <h2 className="text-[#1A1A1A] font-medium text-2xl mb-6">
        Refund Requests
      </h2>
      <RefundRequestsTable />
    </div>
  );
};

export default RefundRequests;
