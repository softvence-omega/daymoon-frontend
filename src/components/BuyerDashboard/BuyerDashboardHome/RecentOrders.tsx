import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Status configuration for styling
const statusConfig = {
  delivered: {
    label: "Delivered",
    bgColor: "bg-[#10B98133]",
    textColor: "text-[#10B981]",
  },
  pending: {
    label: "Pending",
    bgColor: "bg-[#F59E4233]",
    textColor: "text-[#F59E42]",
  },
  shipped: {
    label: "Shipped",
    bgColor: "bg-[#1565D833]",
    textColor: "text-[#1565D8]",
  },
};

// Updated order data with supplier and status
const orderData = [
  {
    id: "10001",
    orderId: "ORD-2025-347",
    supplier: "ShopSphere",
    amount: "$2,345.00",
    date: "17/06/2025",
    status: "delivered",
  },
  {
    id: "10002",
    orderId: "ORD-2025-482",
    supplier: "TechGear",
    amount: "$1,250.00",
    date: "15/06/2025",
    status: "pending",
  },
  {
    id: "10003",
    orderId: "ORD-2025-763",
    supplier: "ElectroHub",
    amount: "$3,500.00",
    date: "12/06/2025",
    status: "shipped",
  },
  {
    id: "10004",
    orderId: "ORD-2025-764",
    supplier: "ShopSphere",
    amount: "$4,750.00",
    date: "08/06/2025",
    status: "delivered",
  },
  {
    id: "10005",
    orderId: "ORD-2025-765",
    supplier: "TechGear",
    amount: "$1,850.00",
    date: "05/06/2025",
    status: "pending",
  },
];

export function RecentOrders() {
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
    <div className="border border-[#E5E5E5] rounded-2xl shadow-sm p-4 overflow-x-auto space-y-6">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="text-[#666666]">
            <TableHead className="w-[120px] px-4 py-2">Order ID</TableHead>
            <TableHead className="px-4 py-2">Supplier</TableHead>
            <TableHead className="px-4 py-2">Date</TableHead>
            <TableHead className="px-4 py-2">Status</TableHead>
            <TableHead className="text-right px-4 py-2">Amount</TableHead>
            <TableHead className="text-center px-4 py-2">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[#1A1A1A] text-base font-normal">
          {orderData.map((order) => (
            <TableRow key={order.id}>
              <TableCell className=" px-4 py-4">{order.orderId}</TableCell>
              <TableCell className="px-4 py-4">{order.supplier}</TableCell>
              <TableCell className="px-4 py-4">{order.date}</TableCell>
              <TableCell className="px-4 py-4">
                {renderStatus(order.status)}
              </TableCell>
              <TableCell className="text-right px-4 py-4">
                {order.amount}
              </TableCell>
              <TableCell className="text-center px-4 py-4 text-[#F04436]">
                View
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
}
