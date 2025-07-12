import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import * as React from "react";
import { useMemo } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { FilterState } from "./RFQFilter";

interface RFQTableProps {
  filters?: FilterState;
}

type RFQLead = {
  id: string;
  title: string;
  category: string;
  quantity: string;
  status: "Open" | "In Progress" | "Closed";
  datePosted: string;
  responses: number;
};

const rfqLeads: RFQLead[] = [
  {
    id: "1",
    title: "Need 200 office chairs",
    category: "Electronics",
    quantity: "200 units",
    status: "Open",
    datePosted: "17/06/2025",
    responses: 12,
  },
  {
    id: "2",
    title: "Need 200 office chairs",
    category: "Industrial",
    quantity: "200 units",
    status: "In Progress",
    datePosted: "15/06/2025",
    responses: 8,
  },
  {
    id: "3",
    title: "Organic Cotton T-Shirts",
    category: "Fashion",
    quantity: "200 units",
    status: "Open",
    datePosted: "14/06/2025",
    responses: 15,
  },
  {
    id: "4",
    title: "High-Quality Kitchen Appliances",
    category: "Home & Living",
    quantity: "50 units",
    status: "Closed",
    datePosted: "10/06/2025",
    responses: 3,
  },
  {
    id: "5",
    title: "Automotive Spare Parts",
    category: "Automotive",
    quantity: "100 units",
    status: "Closed",
    datePosted: "08/06/2025",
    responses: 25,
  },
  {
    id: "6",
    title: "Medical Equipment Supplies",
    category: "Healthcare",
    quantity: "100 units",
    status: "Open",
    datePosted: "12/06/2025",
    responses: 18,
  },
  {
    id: "7",
    title: "Custom Packaging Materials",
    category: "Industrial",
    quantity: "5000 units",
    status: "In Progress",
    datePosted: "11/06/2025",
    responses: 7,
  },
  {
    id: "8",
    title: "Smart Home Security Systems",
    category: "Electronics",
    quantity: "30 units",
    status: "Open",
    datePosted: "09/06/2025",
    responses: 22,
  },
  {
    id: "9",
    title: "Wireless Headphones",
    category: "Electronics",
    quantity: "150 units",
    status: "In Progress",
    datePosted: "06/06/2025",
    responses: 14,
  },
  {
    id: "10",
    title: "Laptop Computers",
    category: "Electronics",
    quantity: "25 units",
    status: "Closed",
    datePosted: "05/06/2025",
    responses: 9,
  },
  {
    id: "11",
    title: "Office Supplies",
    category: "Business",
    quantity: "500 units",
    status: "Open",
    datePosted: "04/06/2025",
    responses: 31,
  },
];

// Status configuration for styling
const statusConfig = {
  Open: {
    label: "Open",
    bgColor: "bg-[#10B98133]",
    textColor: "text-[#10B981]",
  },
  "In Progress": {
    label: "In Progress",
    bgColor: "bg-[#F59E4233]",
    textColor: "text-[#F59E42]",
  },
  Closed: {
    label: "Closed",
    bgColor: "bg-[#E5E5E5]",
    textColor: "text-[#1A1A1A]",
  },
};

export const RFQTable = ({
  filters = { status: "all", category: "all", time: "all", sortBy: "newest" },
}: RFQTableProps) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 5;

  // Filter and sort data based on filters
  const filteredAndSortedData = useMemo(() => {
    let filtered = [...rfqLeads];

    if (filters) {
      // Filter by status
      if (filters.status !== "all") {
        const statusMap: { [key: string]: string } = {
          open: "Open",
          "in-progress": "In Progress",
          closed: "Closed",
        };
        filtered = filtered.filter(
          (item) => item.status === statusMap[filters.status]
        );
      }

      // Filter by category
      if (filters.category !== "all") {
        filtered = filtered.filter((item) => {
          const categoryMatch = item.category
            .toLowerCase()
            .replace(/\s+/g, "-");
          return (
            categoryMatch.includes(filters.category.toLowerCase()) ||
            item.category.toLowerCase().includes(filters.category.toLowerCase())
          );
        });
      }

      // Sort data
      switch (filters.sortBy) {
        case "newest":
          filtered.sort((a, b) => {
            const dateA = a.datePosted.split("/").reverse().join("-");
            const dateB = b.datePosted.split("/").reverse().join("-");
            return new Date(dateB).getTime() - new Date(dateA).getTime();
          });
          break;
        case "oldest":
          filtered.sort((a, b) => {
            const dateA = a.datePosted.split("/").reverse().join("-");
            const dateB = b.datePosted.split("/").reverse().join("-");
            return new Date(dateA).getTime() - new Date(dateB).getTime();
          });
          break;
        case "responses-high":
          filtered.sort((a, b) => b.responses - a.responses);
          break;
        case "responses-low":
          filtered.sort((a, b) => a.responses - b.responses);
          break;
        case "title":
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        default:
          break;
      }
    }

    return filtered;
  }, [filters]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredAndSortedData.slice(startIndex, endIndex);

  // Render status badge with appropriate colors
  const renderStatus = (status: "Open" | "In Progress" | "Closed") => {
    const config = statusConfig[status];
    return (
      <span
        className={`px-3 py-1 rounded-xl text-sm font-medium ${config.bgColor} ${config.textColor}`}
      >
        {config.label}
      </span>
    );
  };

  const handleEdit = (id: string) => {
    console.log("Edit RFQ:", id);
    // Add edit functionality here
  };

  const handleDelete = (id: string) => {
    console.log("Delete RFQ:", id);
    // Add delete functionality here
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {/* Table */}
      <div className="border border-[#E5E5E5] rounded-2xl shadow-sm p-4 overflow-x-auto space-y-6">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="text-[#666666]">
              <TableHead className="px-4 py-2">Lead Title</TableHead>
              <TableHead className="px-4 py-2">Category</TableHead>
              <TableHead className="px-4 py-2">Quantity</TableHead>
              <TableHead className="px-4 py-2">Status</TableHead>
              <TableHead className="px-4 py-2">Date Posted</TableHead>
              <TableHead className="px-4 py-2">Response</TableHead>
              <TableHead className="text-center px-4 py-2">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-[#1A1A1A] text-base font-normal">
            {paginatedData.length > 0 ? (
              paginatedData.map((rfq) => (
                <TableRow key={rfq.id}>
                  <TableCell className="px-4 py-4 ">{rfq.title}</TableCell>
                  <TableCell className="px-4 py-4">{rfq.category}</TableCell>
                  <TableCell className="px-4 py-4">{rfq.quantity}</TableCell>
                  <TableCell className="px-4 py-4">
                    {renderStatus(rfq.status)}
                  </TableCell>
                  <TableCell className="px-4 py-4">{rfq.datePosted}</TableCell>
                  <TableCell className="px-4 py-4">{rfq.responses}</TableCell>
                  <TableCell className="text-center px-4 py-4">
                    <div className="flex items-center justify-center gap-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(rfq.id)}
                        className="p-2 text-[#F04436] rounded-full transition-colors"
                        title="Edit"
                      >
                        <MdEdit size={16} />
                      </Button>
                      <button
                        onClick={() => handleDelete(rfq.id)}
                        className="p-2 text-[#F04436] rounded-full transition-colors"
                        title="Delete"
                      >
                        <MdDelete size={16} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No RFQ leads found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={7}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 px-2">
        <div className="text-sm md:text-lg text-gray-600 mb-2 sm:mb-0">
          Showing {startIndex + 1} to{" "}
          {Math.min(endIndex, filteredAndSortedData.length)} of{" "}
          {filteredAndSortedData.length} RFQ leads
        </div>
        <ul className="flex items-center border border-foundation-white rounded-xl overflow-hidden">
          <li
            className={`border-r border-foundation-white p-2 md:p-4 text-sm md:text-lg cursor-pointer ${
              currentPage === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-sunset-orange hover:bg-gray-50"
            }`}
            onClick={handlePrevious}
          >
            <IoIosArrowBack />
          </li>

          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={`border-r border-foundation-white p-2 md:p-4 text-sm md:text-lg cursor-pointer hover:bg-gray-50 ${
                currentPage === index
                  ? "bg-sunset-orange text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </li>
          ))}

          <li
            className={`p-2 md:p-4 text-sm md:text-lg cursor-pointer ${
              currentPage === totalPages - 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-sunset-orange hover:bg-gray-50"
            }`}
            onClick={handleNext}
          >
            <IoIosArrowForward />
          </li>
        </ul>
      </div>
    </div>
  );
};
