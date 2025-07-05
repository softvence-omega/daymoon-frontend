"use client";

import * as React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import samplePhoto from "@/assets/image/product.png";
import { Link } from "react-router-dom";

// Type
type Inquiry = {
  id: string;
  inquiryId: string;
  productName: string;
  sku: string;
  photo: string;
  buyerName: string;
  buyerCompany: string;
  date: string;
  status: "new" | "resolved" | "closed";
};

// Data
const data: Inquiry[] = [
  // Add more if needed for multiple pages
  {
    id: "1",
    inquiryId: "INQ-235345",
    productName: "Ultra HD Display",
    sku: "SP-X2023-BLK",
    photo: samplePhoto,
    buyerName: "Jane Smith",
    buyerCompany: "XYZ Company",
    date: "17/06/2025",
    status: "new",
  },
  {
    id: "2",
    inquiryId: "INQ-987654",
    productName: "Smart Watch 5",
    sku: "WT-5020-GRN",
    photo: samplePhoto,
    buyerName: "Michael Johnson",
    buyerCompany: "ABC Corp",
    date: "15/06/2025",
    status: "resolved",
  },
  {
    id: "3",
    inquiryId: "INQ-123789",
    productName: "Bluetooth Headphones",
    sku: "HD-X300-BLU",
    photo: samplePhoto,
    buyerName: "Emily Davis",
    buyerCompany: "Digital House",
    date: "14/06/2025",
    status: "closed",
  },
  {
    id: "4",
    inquiryId: "INQ-564738",
    productName: "Wireless Mouse",
    sku: "WM-4010-BLK",
    photo: samplePhoto,
    buyerName: "Robert Wilson",
    buyerCompany: "Tech Solutions",
    date: "18/06/2025",
    status: "new",
  },
  {
    id: "5",
    inquiryId: "INQ-847362",
    productName: "Mechanical Keyboard",
    sku: "MK-9000-RED",
    photo: samplePhoto,
    buyerName: "Linda Martinez",
    buyerCompany: "Keyboard Co.",
    date: "19/06/2025",
    status: "resolved",
  },
  {
    id: "6",
    inquiryId: "INQ-293847",
    productName: "Gaming Monitor",
    sku: "GM-144HZ-BLK",
    photo: samplePhoto,
    buyerName: "David Lee",
    buyerCompany: "Gaming World",
    date: "20/06/2025",
    status: "closed",
  },
  {
    id: "7",
    inquiryId: "INQ-982374",
    productName: "External Hard Drive",
    sku: "EHD-2TB-SLV",
    photo: samplePhoto,
    buyerName: "Sarah Thompson",
    buyerCompany: "Data Store",
    date: "21/06/2025",
    status: "new",
  },
  {
    id: "8",
    inquiryId: "INQ-746291",
    productName: "USB-C Hub",
    sku: "USBCH-7PORT-BLK",
    photo: samplePhoto,
    buyerName: "James Brown",
    buyerCompany: "Accessory Hub",
    date: "22/06/2025",
    status: "resolved",
  },
  {
    id: "9",
    inquiryId: "INQ-839201",
    productName: "Smartphone Case",
    sku: "SC-IPH12-BLU",
    photo: samplePhoto,
    buyerName: "Patricia Garcia",
    buyerCompany: "Mobile Gear",
    date: "23/06/2025",
    status: "closed",
  },
  {
    id: "10",
    inquiryId: "INQ-192837",
    productName: "Bluetooth Speaker",
    sku: "BS-XL500-BLK",
    photo: samplePhoto,
    buyerName: "Mark Robinson",
    buyerCompany: "Sound Experts",
    date: "24/06/2025",
    status: "new",
  },
  {
    id: "11",
    inquiryId: "INQ-999999",
    productName: "Webcam",
    sku: "WC-HD1080P",
    photo: samplePhoto,
    buyerName: "Anna Smith",
    buyerCompany: "ZoomTech",
    date: "25/06/2025",
    status: "new",
  },
];

// Configs
const statusLabels = {
  new: "New",
  resolved: "Resolved",
  closed: "Closed",
};

const statusClassNames = {
  new: "bg-[#F7D3D4] text-[#D9222A]",
  resolved: "bg-[#CFF1E6] text-[#0FB981]",
  closed: "bg-[#B3B3B3] text-[#666666]",
};

// Columns
const columns: ColumnDef<Inquiry>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all rows"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "inquiryId",
    header: "Inquiry ID",
    cell: ({ row }) => (
      <span className="font-medium">{row.original.inquiryId}</span>
    ),
  },
  {
    accessorKey: "productName",
    header: "Product",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <img
          src={row.original.photo}
          alt={row.original.productName}
          className="w-10 h-10 rounded object-cover"
        />
        <div>
          <div className="font-medium text-sm">{row.original.productName}</div>
          <div className="text-xs text-gray-500">SKU: {row.original.sku}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "buyerName",
    header: "Buyer",
    cell: ({ row }) => (
      <div className="text-sm">
        <div className="font-medium">{row.original.buyerName}</div>
        <div className="text-gray-500 text-xs">{row.original.buyerCompany}</div>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div className="text-sm">{row.original.date}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={`flex h-8 px-5 justify-center items-center gap-1 rounded-full font-semibold text-sm capitalize ${statusClassNames[status]}`}
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
export function InquirieTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
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
    <div>
      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row md:justify-end gap-3 mb-4 w-full">
        <Link to="/sellerdashboard/inquiries-details">
          <button className="w-full md:w-auto flex h-12 px-6 py-[10px] items-center justify-center gap-2 rounded-[16px] bg-[#192D4E] text-white text-lg font-medium hover:bg-[#14325f] transition cursor-pointer">
            <IoIosCheckmarkCircleOutline />
            Mark As Resolved
          </button>
        </Link>
        <button className="w-full md:w-auto flex h-12 px-6 py-[10px] items-center justify-center gap-2 rounded-[16px] border border-[#192D4E] text-[#192D4E] text-lg bg-transparent hover:bg-[#e7edf6] transition cursor-pointer">
          <MdDeleteOutline />
          Delete
        </button>
      </div>

      {/* Table */}
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

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 px-2">
        <div className="text-sm text-gray-600 mb-2 sm:mb-0">
          Showing {pagination.pageIndex * pagination.pageSize + 1} to{" "}
          {Math.min(
            (pagination.pageIndex + 1) * pagination.pageSize,
            data.length
          )}{" "}
          of {data.length} orders
        </div>
        <div className="flex gap-1">
          <button
            className="px-3 py-1 rounded border text-sm hover:bg-gray-200 disabled:opacity-40"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>
          {Array.from({ length: table.getPageCount() }).map((_, index) => (
            <button
              key={index}
              onClick={() => table.setPageIndex(index)}
              className={`px-3 py-1 rounded border text-sm ${
                table.getState().pagination.pageIndex === index
                  ? "bg-[#192D4E] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 rounded border text-sm hover:bg-gray-200 disabled:opacity-40"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
