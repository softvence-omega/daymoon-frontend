import { useState, useMemo, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PaymentsFilters, { FilterState } from "./PaymentsFilters";

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
  {
    id: "10006",
    transactionId: "TNX-001239",
    orderId: "ORD-2025-766",
    product: {
      name: "Mastercard ending 7890",
      image: mastercard,
    },
    supplier: "ElectroHub",
    amount: "$3,200.00",
    status: "completed",
    paymentDate: "03/06/2025",
  },
  {
    id: "10007",
    transactionId: "TNX-001240",
    orderId: "ORD-2025-767",
    product: {
      name: "PayPal Account",
      image: paypal,
    },
    supplier: "ShopSphere",
    amount: "$890.00",
    status: "pending",
    paymentDate: "01/06/2025",
  },
  {
    id: "10008",
    transactionId: "TNX-001241",
    orderId: "ORD-2025-768",
    product: {
      name: "Card ending 2345",
      image: card,
    },
    supplier: "TechGear",
    amount: "$5,670.00",
    status: "processing",
    paymentDate: "30/05/2025",
  },
  {
    id: "10009",
    transactionId: "TNX-001242",
    orderId: "ORD-2025-769",
    product: {
      name: "Visa ending 6789",
      image: visa,
    },
    supplier: "ShopSphere",
    amount: "$1,200.00",
    status: "completed",
    paymentDate: "09/07/2025", // Today's date
  },
  {
    id: "10010",
    transactionId: "TNX-001243",
    orderId: "ORD-2025-770",
    product: {
      name: "PayPal Account",
      image: paypal,
    },
    supplier: "ElectroHub",
    amount: "$750.00",
    status: "failed",
    paymentDate: "08/07/2025", // Yesterday
  },
  {
    id: "10011",
    transactionId: "TNX-001288",
    orderId: "ORD-2025-777",
    product: {
      name: "PayPal Account",
      image: paypal,
    },
    supplier: "ElectroHub",
    amount: "$750.00",
    status: "failed",
    paymentDate: "08/07/2025", // Yesterday
  },
  {
    id: "10013",
    transactionId: "TNX-001223",
    orderId: "ORD-2025-766",
    product: {
      name: "PayPal Account",
      image: paypal,
    },
    supplier: "ElectroHub",
    amount: "$750.00",
    status: "failed",
    paymentDate: "08/07/2025", // Yesterday
  },
  {
    id: "10010",
    transactionId: "TNX-001243",
    orderId: "ORD-2025-770",
    product: {
      name: "PayPal Account",
      image: paypal,
    },
    supplier: "ElectroHub",
    amount: "$750.00",
    status: "failed",
    paymentDate: "08/07/2025", // Yesterday
  },
  {
    id: "10010",
    transactionId: "TNX-001243",
    orderId: "ORD-2025-770",
    product: {
      name: "PayPal Account",
      image: paypal,
    },
    supplier: "ElectroHub",
    amount: "$750.00",
    status: "failed",
    paymentDate: "08/07/2025", // Yesterday
  },
];

const PaymentsTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState<FilterState>({
    status: "all",
    category: "all",
    time: "all",
    sortBy: "newest",
    search: "",
  });
  const itemsPerPage = 10; // Reduced for testing

  // Filter and sort data based on filters
  const filteredAndSortedData = useMemo(() => {
    let filtered = [...paymentData];
  

    // Filter by status
    if (filters.status !== "all") {
      filtered = filtered.filter(
        (payment) => payment.status === filters.status
      );
      console.log("After status filter:", filtered.length);
    }

    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(
        (payment) =>
          payment.transactionId.toLowerCase().includes(searchTerm) ||
          payment.orderId.toLowerCase().includes(searchTerm) ||
          payment.product.name.toLowerCase().includes(searchTerm) ||
          payment.supplier.toLowerCase().includes(searchTerm)
      );
      console.log("After search filter:", filtered.length);
    }

    // Skip time filtering for now to test
    // Filter by time period
    if (filters.time !== "all") {
      const currentDate = new Date();
      filtered = filtered.filter((payment) => {
        const paymentDate = new Date(
          payment.paymentDate.split("/").reverse().join("-")
        );

        switch (filters.time) {
          case "today": {
            return paymentDate.toDateString() === currentDate.toDateString();
          }
          case "week": {
            const weekAgo = new Date(
              currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
            );
            return paymentDate >= weekAgo;
          }
          case "month": {
            const monthAgo = new Date(
              currentDate.getTime() - 30 * 24 * 60 * 60 * 1000
            );
            return paymentDate >= monthAgo;
          }
          case "quarter": {
            const quarterAgo = new Date(
              currentDate.getTime() - 90 * 24 * 60 * 60 * 1000
            );
            return paymentDate >= quarterAgo;
          }
          case "year": {
            const yearAgo = new Date(
              currentDate.getTime() - 365 * 24 * 60 * 60 * 1000
            );
            return paymentDate >= yearAgo;
          }
          default:
            return true;
        }
      });
      console.log("After time filter:", filtered.length);
    }

    // Sort data
    switch (filters.sortBy) {
      case "newest":
        filtered.sort((a, b) => {
          const dateA = new Date(a.paymentDate.split("/").reverse().join("-"));
          const dateB = new Date(b.paymentDate.split("/").reverse().join("-"));
          return dateB.getTime() - dateA.getTime();
        });
        break;
      case "oldest":
        filtered.sort((a, b) => {
          const dateA = new Date(a.paymentDate.split("/").reverse().join("-"));
          const dateB = new Date(b.paymentDate.split("/").reverse().join("-"));
          return dateA.getTime() - dateB.getTime();
        });
        break;
      case "amount-high":
        filtered.sort((a, b) => {
          const amountA = parseFloat(a.amount.replace(/[$,]/g, ""));
          const amountB = parseFloat(b.amount.replace(/[$,]/g, ""));
          return amountB - amountA;
        });
        break;
      case "amount-low":
        filtered.sort((a, b) => {
          const amountA = parseFloat(a.amount.replace(/[$,]/g, ""));
          const amountB = parseFloat(b.amount.replace(/[$,]/g, ""));
          return amountA - amountB;
        });
        break;
      default:
        break;
    }

    console.log("Final filtered data:", filtered.length);
    return filtered;
  }, [filters]);

  // Calculate pagination values
  const totalPages =
    filteredAndSortedData.length > 0
      ? Math.ceil(filteredAndSortedData.length / itemsPerPage)
      : 1;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(
    startIndex + itemsPerPage,
    filteredAndSortedData.length
  );
  const currentData = filteredAndSortedData.slice(startIndex, endIndex);

  // Debug pagination
  console.log("Pagination Debug:", {
    totalItems: filteredAndSortedData.length,
    itemsPerPage,
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    currentDataLength: currentData.length,
    showPagination: filteredAndSortedData.length > itemsPerPage
  });

  // Ensure currentPage is within valid range
  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [currentPage, totalPages]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(0);
  }, [filters]);

  // Filter change handler
  const handleFilterChange = (newFilters: FilterState) => {
    console.log("Filter changed:", newFilters);
    setFilters(newFilters);
    // Don't reset page here as it's handled in useEffect
  };

  // Pagination handlers
  const handlePrevious = () => {
    console.log("Previous clicked - Current page:", currentPage);
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      console.log("Moving to page:", currentPage - 1);
    }
  };

  const handleNext = () => {
    console.log("Next clicked - Current page:", currentPage, "Total pages:", totalPages);
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      console.log("Moving to page:", currentPage + 1);
    }
  };

  // Handle page click
  const handlePageClick = (pageIndex: number) => {
    console.log("Page clicked:", pageIndex, "Current page:", currentPage);
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
      console.log("Setting page to:", pageIndex);
    }
  };

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
    <div>
      {/* Filters */}
      <PaymentsFilters onFilterChange={handleFilterChange} />

      <div className="border border-[#E5E5E5] rounded-2xl shadow-sm p-4 overflow-x-auto space-y-6 bg-[#FFFFFF] mt-6">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="text-[#666666]">
              <TableHead className="w-[140px] px-4 py-2">
                Transaction ID
              </TableHead>
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
            {currentData.map((payment) => (
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
                <TableCell className="px-4 py-4">
                  {payment.paymentDate}
                </TableCell>
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

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 px-2">
        <div className="text-sm md:text-lg text-gray-600 mb-2 sm:mb-0">
          Showing {filteredAndSortedData.length > 0 ? startIndex + 1 : 0} to{" "}
          {Math.min(endIndex, filteredAndSortedData.length)} of{" "}
          {filteredAndSortedData.length} payments
        </div>
        {filteredAndSortedData.length > itemsPerPage && (
          <div className="flex items-center border border-[#E5E5E5] rounded-xl overflow-hidden">
            <button
              className={`border-r border-[#E5E5E5] p-2 md:p-4 text-sm md:text-lg ${
                currentPage === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#F04436] hover:bg-gray-50 cursor-pointer"
              }`}
              onClick={handlePrevious}
              disabled={currentPage === 0}
            >
              <IoIosArrowBack />
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`border-r border-[#E5E5E5] p-2 md:p-4 text-sm md:text-lg cursor-pointer hover:bg-gray-50 ${
                  currentPage === index
                    ? "bg-[#F04436] text-white"
                    : "text-gray-700"
                }`}
                onClick={() => handlePageClick(index)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className={`p-2 md:p-4 text-sm md:text-lg ${
                currentPage === totalPages - 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#F04436] hover:bg-gray-50 cursor-pointer"
              }`}
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
            >
              <IoIosArrowForward />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentsTable;
