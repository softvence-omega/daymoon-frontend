import * as React from "react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Updated type
type Inquiry = {
  id: string;
  inquiryId: string;
  date: string;
  amount: string;
  type: "Sale" | "Free";
  status: "new" | "resolved";
};

// Dummy data (updated)
const data: Inquiry[] = [
  {
    id: "1",
    inquiryId: "INQ-235345",
    date: "17/06/2025",
    amount: "$120",
    type: "Sale",
    status: "new",
  },
  {
    id: "2",
    inquiryId: "INQ-987654",
    date: "15/06/2025",
    amount: "$0",
    type: "Free",
    status: "resolved",
  },
  {
    id: "3",
    inquiryId: "INQ-123789",
    date: "14/06/2025",
    amount: "$89",
    type: "Sale",
    status: "resolved",
  },
  {
    id: "4",
    inquiryId: "INQ-564738",
    date: "18/06/2025",
    amount: "$60",
    type: "Sale",
    status: "new",
  },
  {
    id: "5",
    inquiryId: "INQ-847362",
    date: "19/06/2025",
    amount: "$0",
    type: "Free",
    status: "resolved",
  },
  {
    id: "6",
    inquiryId: "INQ-293847",
    date: "20/06/2025",
    amount: "$300",
    type: "Sale",
    status: "resolved",
  },
  {
    id: "7",
    inquiryId: "INQ-982374",
    date: "21/06/2025",
    amount: "$45",
    type: "Sale",
    status: "new",
  },
  {
    id: "8",
    inquiryId: "INQ-746291",
    date: "22/06/2025",
    amount: "$0",
    type: "Free",
    status: "resolved",
  },
  {
    id: "9",
    inquiryId: "INQ-839201",
    date: "23/06/2025",
    amount: "$29",
    type: "Sale",
    status: "resolved",
  },
  {
    id: "10",
    inquiryId: "INQ-192837",
    date: "24/06/2025",
    amount: "$75",
    type: "Sale",
    status: "new",
  },
  {
    id: "11",
    inquiryId: "INQ-999999",
    date: "25/06/2025",
    amount: "$0",
    type: "Free",
    status: "new",
  },
];

// Status Config
const statusLabels = {
  new: "Sale",
  resolved: "Free",
};

const statusClassNames = {
  new: "bg-[#F7D3D4] text-[#D9222A]",
  resolved: "bg-[#CFF1E6] text-[#0FB981]",
};

// Columns
const columns: ColumnDef<Inquiry>[] = [
  {
    accessorKey: "inquiryId",
    header: "Inquiry ID",
    cell: ({ row }) => (
      <span className="font-medium">{row.original.inquiryId}</span>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div className="text-sm">{row.original.date}</div>,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => <div className="text-sm">{row.original.amount}</div>,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded-full text-sm font-medium ${
          row.original.type === "Sale"
            ? "bg-green-100 text-green-600"
            : "bg-blue-100 text-blue-600"
        }`}
      >
        {row.original.type}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={`flex h-8  w-[64px] px-5 justify-center items-center gap-1 rounded-full font-semibold text-sm capitalize ${statusClassNames[status]}`}
        >
          {statusLabels[status]}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const status = row.original.status;
      const isRespond = status === "new" || status === "resolved";
      return (
        <div className="flex items-center justify-center">
          <button
            className={`text-sm px-3 py-1 rounded-md transition ${
              isRespond
                ? "text-red-500 hover:text-[#14325f]"
                : "text-red-500 hover:text-[#14325f] hover:bg-[#f3f6fa]"
            }`}
          >
            {isRespond ? "Respond" : "View"}
          </button>
        </div>
      );
    },
  },
];

// Table Component
export function PaymentTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: false,
  });

  return (
    <div>
      <div className="w-full bg-white rounded-xl shadow-md p-2">
        <Table>
          <TableHeader className="h-[56px]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-[#E5E5E5] text-[#666666] text-sm"
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
                  No inquiries found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {/* Pagination */}
      <div className="flex items-center justify-between pt-4 px-4 text-sm text-[#666] mt-4">
        {/* Data Count */}
        <p className="text-base text-gray-600 mb-2 sm:mb-0">
          Showing {pagination.pageIndex * pagination.pageSize + 1} to{" "}
          {Math.min(
            (pagination.pageIndex + 1) * pagination.pageSize,
            data.length
          )}{" "}
          of {data.length} orders
        </p>

        {/* Styled Pagination Buttons */}
        <ul className="flex items-center border border-foundation-white rounded-xl overflow-hidden text-base cursor-pointer">
          {/* Previous Button */}
          <li>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label="Previous Page"
              className={`text-xl p-2 sm:p-4 border-r border-foundation-white text-[#FCAB3F] ${
                !table.getCanPreviousPage()
                  ? "cursor-not-allowed text-gray-300"
                  : "hover:bg-[#FCAB3F] hover:text-white"
              }`}
            >
              <FaAngleLeft />
            </button>
          </li>

          {/* Page Buttons */}
          {Array.from({ length: table.getPageCount() }).map((_, index) => {
            const isActive = table.getState().pagination.pageIndex === index;
            return (
              <li key={index}>
                <button
                  onClick={() => table.setPageIndex(index)}
                  className={`p-3 sm:p-4 w-12 border-r border-foundation-white transition-colors duration-150 ${
                    isActive
                      ? "bg-[#FCAB3F] text-white"
                      : "text-black hover:bg-[#FCAB3F] hover:text-white"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            );
          })}

          {/* Next Button */}
          <li>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label="Next Page"
              className={`text-xl p-2 sm:p-4 text-[#FCAB3F] ${
                !table.getCanNextPage()
                  ? "cursor-not-allowed text-gray-300"
                  : "hover:bg-[#FCAB3F] hover:text-white"
              }`}
            >
              <FaAngleRight />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
