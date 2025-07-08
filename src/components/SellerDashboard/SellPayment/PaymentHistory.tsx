import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orderData = [
  {
    id: "10001",
    orderId: "ORD-2025-347",
    totalAmount: "$250.00",
    orderDate: "17/06/2025",
    status: "Completed",
  },
  {
    id: "10002",
    orderId: "ORD-2025-482",
    totalAmount: "$150.00",
    orderDate: "15/08/2023",
    status: "Pending",
  },
  {
    id: "10003",
    orderId: "ORD-2025-763",
    totalAmount: "$350.00",
    orderDate: "22/11/2024",
    status: "Completed",
  },
  {
    id: "10004",
    orderId: "ORD-2025-764",
    totalAmount: "$450.00",
    orderDate: "03/05/2025",
    status: "Completed",
  },
  {
    id: "10005",
    orderId: "ORD-2025-765",
    totalAmount: "$550.00",
    orderDate: "03/05/2025",
    status: "Pending",
  },
];

export function PaymentHistory() {
  return (
    <div className="space-y-6">
      {/* Page Title */}

      <div className="flex justify-between items-center ">
        {/* Title */}
        <div>
          <h1 className="text-[24px] leading-[130%] font-medium text-[#484848] ">
            Payment History
          </h1>
        </div>
      </div>

      {/* Table */}
      <div className="border border-[#E5E5E5] rounded-2xl shadow-sm p-4 overflow-x-auto">
        <Table className="w-full">
          {/* Table Header with custom background */}
          <TableHeader>
            <TableRow className="bg-[#E5E5E5] text-[#1A1A1A] text-sm font-medium">
              <TableHead className="px-4 py-3">Payout ID</TableHead>
              <TableHead className="px-4 py-3">Date</TableHead>
              <TableHead className="text-right px-4 py-3">Amount</TableHead>
              <TableHead className="text-right px-4 py-3">Status</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="text-[#1A1A1A] text-sm">
            {orderData.map((order) => {
              const isCompleted = order.status === "Completed";
              const badgeClass = isCompleted
                ? "bg-[rgba(16,185,129,0.20)] text-[#10B981]"
                : "bg-[#FFF7EC] text-[#FCAB3F]";

              return (
                <TableRow key={order.id} className="border-t border-[#E5E5E5]">
                  <TableCell className="px-4 py-4 font-medium">
                    {order.orderId}
                  </TableCell>
                  <TableCell className="px-4 py-4">{order.orderDate}</TableCell>
                  <TableCell className="text-right px-4 py-4">
                    {order.totalAmount}
                  </TableCell>
                  <TableCell className="text-right px-4 py-4">
                    <span
                      className={`inline-flex items-center justify-center h-[32px] px-5 py-[4.5px] gap-[4.5px] rounded-[13.5px] font-medium ${badgeClass}`}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>

          {/* Optional Footer (empty row for spacing) */}
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
