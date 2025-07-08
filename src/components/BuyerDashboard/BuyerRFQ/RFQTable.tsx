import * as React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { FilterState } from "./RFQFilter";

import {
  ColumnDef,
  SortingState,
  VisibilityState,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

const statusColor = {
  Open: "bg-[#10B98133] text-[#10B981]",
  "In Progress": "bg-[#F59E4233] text-[#F59E42]",
  Closed: "bg-[#E5E5E5] text-[#1A1A1A]",
};

// Columns
const columns: ColumnDef<RFQLead>[] = [
  {
    accessorKey: "title",
    header: "Lead Title",
    cell: ({ row }) => (
      <div className="font-normal text-base text-[#1A1A1A]">
        {row.original.title}
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="font-normal text-base text-[#1A1A1A]">
        {row.original.category}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="font-normal text-base text-[#1A1A1A]">
        {row.original.quantity}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={`px-3 py-1.5 text-sm font-medium rounded-xl ${statusColor[status]}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "datePosted",
    header: "Date Posted",
    cell: ({ row }) => (
      <div className="font-normal text-base text-[#1A1A1A]">
        {row.original.datePosted}
      </div>
    ),
  },
  {
    accessorKey: "responses",
    header: "Response",
    cell: ({ row }) => (
      <div>
        <span className="font-normal text-base text-[#1A1A1A]">
          {row.original.responses}
        </span>
      </div>
    ),
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const handleEdit = (id: string) => {
        console.log("Edit RFQ:", id);
        // Add edit functionality here
      };

      const handleDelete = (id: string) => {
        console.log("Delete RFQ:", id);
        // Add delete functionality here
      };

      return (
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleEdit(row.original.id)}
            className="p-2 text-[#F04436] rounded-full transition-colors"
            title="Edit"
          >
            <MdEdit size={16} />
          </Button>
          <button
            onClick={() => handleDelete(row.original.id)}
            className="p-2 text-[#F04436] rounded-full transition-colors"
            title="Delete"
          >
            <MdDelete size={16} />
          </button>
        </div>
      );
    },
  },
];

export const RFQTable = ({
  filters = { status: "all", category: "all", time: "all", sortBy: "newest" },
}: RFQTableProps) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

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

  const table = useReactTable({
    data: filteredAndSortedData,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: false,
  });

  return (
    <div >
      {/* Table */}
      <div className="w-full bg-white rounded-xl shadow-md p-2">
        <Table className=" overflow-x-auto w-full">
          <TableHeader className="h-[56px] rounded-2xl">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-[#E5E5E5] text-[#666666] text-sm font-normal"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="p-3" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No RFQ leads found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 px-2">
        <div className=" text-sm md:text-lg text-gray-600 mb-2 sm:mb-0">
          Showing {pagination.pageIndex * pagination.pageSize + 1} to{" "}
          {Math.min(
            (pagination.pageIndex + 1) * pagination.pageSize,
            filteredAndSortedData.length
          )}{" "}
          of {filteredAndSortedData.length} RFQ leads
        </div>
        <ul className="flex items-center border border-foundation-white rounded-xl overflow-hidden">
          <li
            className={`border-r border-foundation-white p-2 md:p-4 text-sm md:text-lg cursor-pointer ${
              !table.getCanPreviousPage()
                ? "text-gray-400 cursor-not-allowed"
                : "text-sunset-orange hover:bg-gray-50"
            }`}
            onClick={() => {
              if (table.getCanPreviousPage()) {
                table.previousPage();
              }
            }}
          >
            <IoIosArrowBack />
          </li>

          {Array.from({ length: table.getPageCount() }).map((_, index) => (
            <li
              key={index}
              className={`border-r border-foundation-white p-2 md:p-4 text-sm md:text-lg cursor-pointer hover:bg-gray-50 ${
                table.getState().pagination.pageIndex === index
                  ? "bg-sunset-orange text-white"
                  : "text-gray-700"
              }`}
              onClick={() => table.setPageIndex(index)}
            >
              {index + 1}
            </li>
          ))}

          <li
            className={`p-2 md:p-4 text-sm md:text-lg cursor-pointer ${
              !table.getCanNextPage()
                ? "text-gray-400 cursor-not-allowed"
                : "text-sunset-orange hover:bg-gray-50"
            }`}
            onClick={() => {
              if (table.getCanNextPage()) {
                table.nextPage();
              }
            }}
          >
            <IoIosArrowForward />
          </li>
        </ul>
      </div>
    </div>
  );
};
