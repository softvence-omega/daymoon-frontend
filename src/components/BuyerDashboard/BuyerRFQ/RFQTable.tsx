import { MdEdit, MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useState, useMemo, useEffect } from "react";
import { FilterState } from "./RFQFilter";

interface RFQTableProps {
  filters?: FilterState;
}

type RFQLead = {
  id: number;
  title: string;
  category: string;
  quantity: string;
  status: "Open" | "In Progress" | "Closed";
  datePosted: string;
  responses: number;
};

const rfqLeads: RFQLead[] = [
  {
    id: 1,
    title: "Need 200 office chairs",
    category: "Electronics",
    quantity: "200 units",
    status: "Open",
    datePosted: "17/06/2025",
    responses: 12,
  },
  {
    id: 2,
    title: "Need 200 office chairs",
    category: "Industrial",
    quantity: "200 units",
    status: "In Progress",
    datePosted: "15/06/2025",
    responses: 8,
  },
  {
    id: 3,
    title: "Organic Cotton T-Shirts",
    category: "Fashion",
    quantity: "200 units",
    status: "Open",
    datePosted: "14/06/2025",
    responses: 15,
  },
  {
    id: 4,
    title: "High-Quality Kitchen Appliances",
    category: "Home & Living",
    quantity: "50 units",
    status: "Closed",
    datePosted: "10/06/2025",
    responses: 3,
  },
  {
    id: 5,
    title: "Automotive Spare Parts",
    category: "Automotive",
    quantity: "100 units",
    status: "Closed",
    datePosted: "08/06/2025",
    responses: 25,
  },
  {
    id: 6,
    title: "Medical Equipment Supplies",
    category: "Healthcare",
    quantity: "100 units",
    status: "Open",
    datePosted: "12/06/2025",
    responses: 18,
  },
  {
    id: 7,
    title: "Custom Packaging Materials",
    category: "Industrial",
    quantity: "5000 units",
    status: "In Progress",
    datePosted: "11/06/2025",
    responses: 7,
  },
  {
    id: 8,
    title: "Smart Home Security Systems",
    category: "Electronics",
    quantity: "30 units",
    status: "Open",
    datePosted: "09/06/2025",
    responses: 22,
  },
];

const statusColor = {
  Open: "bg-[#10B98133] text-[#10B981]",
  "In Progress": "bg-[#F59E4233] text-[#F59E42]",
  Closed: "bg-[#E5E5E5] text-[#1A1A1A]",
};

export const RFQTable = ({
  filters = { status: "all", category: "all", time: "all", sortBy: "newest" },
}: RFQTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
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
            // Convert DD/MM/YYYY to YYYY-MM-DD for proper date parsing
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

  // Calculate pagination based on filtered data
  const totalItems = filteredAndSortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get current page items from filtered data
  const currentItems = useMemo(() => {
    return filteredAndSortedData.slice(startIndex, endIndex);
  }, [filteredAndSortedData, startIndex, endIndex]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 4;
    let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleEdit = (id: number) => {
    console.log("Edit RFQ:", id);
    // Add edit functionality here
  };

  const handleDelete = (id: number) => {
    console.log("Delete RFQ:", id);
    // Add delete functionality here
  };

  return (
    <div>
      <div className="p-2 overflow-hidden border border-[#E0E0E1] rounded-xl bg-white mt-10">
        <table className="min-w-full">
          <thead className="bg-foundation-white">
            <tr>
              <th className="p-3 rounded-tl-xl">
                <input type="checkbox" />
              </th>
              {[
                "Lead Title",
                "Category",
                "Quantity",
                "Status",
                "Date Posted",
                "Response",
                "Action",
              ].map((header, index, array) => (
                <th
                  key={header}
                  className={`p-3 text-sm font-medium text-gray-600 ${
                    index === 4 || index === 5 || index === 6
                      ? "text-center"
                      : "text-left"
                  } ${index === array.length - 1 ? "rounded-tr-2xl" : ""}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((lead) => (
              <tr
                key={lead.id}
                className="border-t border-[#E0E0E1] first:border-none hover:bg-gray-50"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3">
                  <div className="font-medium text-gray-800">{lead.title}</div>
                  <div className="text-xs text-gray-500">
                    RFQ ID: #{lead.id.toString().padStart(4, "0")}
                  </div>
                </td>
                <td className="p-3 text-gray-700">{lead.category}</td>
                <td className="p-3 text-gray-700">{lead.quantity}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1.5 text-sm font-medium rounded-xl ${
                      statusColor[lead.status]
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="p-3 text-center text-gray-700">
                  {lead.datePosted}
                </td>
                <td className="p-3 text-center">
                  <span className="text-jet-black font-medium">
                    {lead.responses}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(lead.id)}
                      className="p-2 text-[#F04436] rounded-full transition-colors"
                      title="Edit"
                    >
                      <MdEdit size={16} />
                    </Button>
                    <button
                      onClick={() => handleDelete(lead.id)}
                      className="p-2 text-[#F04436] rounded-full transition-colors"
                      title="Delete"
                    >
                      <MdDelete size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-5 pb-10 text-jet-black text-base gap-4">
        <div>
          <p>
            Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
            {totalItems} RFQ leads
          </p>
        </div>
        <div>
          <ul className="flex items-center border border-foundation-white rounded-xl">
            <li
              className={`border-r border-foundation-white p-4 text-2xl cursor-pointer ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-sunset-orange hover:bg-gray-50"
              }`}
              onClick={handlePrevious}
            >
              <IoIosArrowBack />
            </li>
            {getPageNumbers().map((page) => (
              <li
                key={page}
                className={`border-r border-foundation-white p-4 cursor-pointer hover:bg-gray-50 ${
                  currentPage === page
                    ? "bg-sunset-orange text-white"
                    : "text-gray-700"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </li>
            ))}
            <li
              className={`p-4 text-2xl cursor-pointer ${
                currentPage === totalPages
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
    </div>
  );
};
