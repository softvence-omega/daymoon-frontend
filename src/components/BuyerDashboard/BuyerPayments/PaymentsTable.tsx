import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import visa from "@/assets/dashboard/buyer-dashboard/visa.svg";
import mastercard from "@/assets/dashboard/buyer-dashboard/mastercard.svg";
import paypal from "@/assets/dashboard/buyer-dashboard/paypal.svg";
import card from "@/assets/dashboard/buyer-dashboard/card.svg";

// Status configuration for styling
const statusConfig = {
  completed: {
    label: "Completed",
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
  failed: {
    label: "Failed",
    bgColor: "bg-[#DC262633]",
    textColor: "text-[#DC2626]",
  },
};

// Payment data with transaction ID, payment method, etc.
const paymentData = [
  {
    id: "10001",
    transactionId: "TNX-001234",
    orderId: "ORD-2025-347",
    product: {
      name: "Visa ending 1234",
      image: visa,
    },
    supplier: "ShopSphere",
    amount: "$2,345.00",
    status: "completed",
    paymentDate: "17/06/2025",
  },
  {
    id: "10002",
    transactionId: "TNX-001235",
    orderId: "ORD-2025-482",
    product: {
      name: "Mastercard ending 5678",
      image: mastercard,
    },
    supplier: "TechGear",
    amount: "$1,250.00",
    status: "pending",
    paymentDate: "15/06/2025",
  },
  {
    id: "10003",
    transactionId: "TNX-001236",
    orderId: "ORD-2025-763",
    product: {
      name: "PayPal Account",
      image: paypal,
    },
    supplier: "ElectroHub",
    amount: "$3,500.00",
    status: "completed",
    paymentDate: "12/06/2025",
  },
  {
    id: "10004",
    transactionId: "TNX-001237",
    orderId: "ORD-2025-764",
    product: {
      name: "Card ending 9012",
      image: card,
    },
    supplier: "ShopSphere",
    amount: "$4,750.00",
    status: "failed",
    paymentDate: "08/06/2025",
  },
  {
    id: "10005",
    transactionId: "TNX-001238",
    orderId: "ORD-2025-765",
    product: {
      name: "Visa ending 3456",
      image: visa,
    },
    supplier: "TechGear",
    amount: "$1,850.00",
    status: "processing",
    paymentDate: "05/06/2025",
  },
];

const PaymentsTable = () => {
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
      <Table className="w-full ">
        <TableHeader>
          <TableRow className="text-[#666666]">
            <TableHead className="w-[140px] px-4 py-2">Transaction ID</TableHead>
            <TableHead className="w-[120px] px-4 py-2">Order ID</TableHead>
            <TableHead className="px-4 py-2">Payment Method</TableHead>
            <TableHead className="px-4 py-2">Supplier</TableHead>
            <TableHead className="px-4 py-2">Payment Date</TableHead>
            <TableHead className="px-4 py-2">Status</TableHead>
            <TableHead className="text-right px-4 py-2">Amount</TableHead>
            <TableHead className="text-center px-4 py-2">Invoice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[#1A1A1A] text-base font-normal">
          {paymentData.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell className="px-4 py-4 font-medium">
                {payment.transactionId}
              </TableCell>
              <TableCell className="px-4 py-4">{payment.orderId}</TableCell>
              <TableCell className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img
                      src={payment.product.image}
                      alt={payment.product.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {payment.product.name}
                  </span>
                </div>
              </TableCell>
              <TableCell className="px-4 py-4">{payment.supplier}</TableCell>
              <TableCell className="px-4 py-4">{payment.paymentDate}</TableCell>
              <TableCell className="px-4 py-4">
                {renderStatus(payment.status)}
              </TableCell>
              <TableCell className="text-right px-4 py-4 font-medium">
                {payment.amount}
              </TableCell>
              <TableCell className="text-center px-4 py-4 text-[#F04436]">
                Download
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={8}></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default PaymentsTable;