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
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

// Type definitions
type FilterOption = {
  value: string;
  label: string;
};

type FilterSelectProps = {
  placeholder: string;
  options: FilterOption[];
  defaultValue: string;
  onValueChange?: (value: string) => void;
};

type FilterState = {
  status: string;
  products: string;
  time: string;
  sortBy: string;
  search: string;
};

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
        className="cursor-pointer"
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
        className="cursor-pointer"
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
          className="w-10 h-10 rounded object-cover cursor-pointer"
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
          className={`flex w-[99px] h-8 px-5 justify-center items-center gap-1 rounded-full font-semibold text-sm capitalize ${statusClassNames[status]}`}
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

/**
 * Reusable select component for filters
 */
const FilterSelect = ({
  placeholder,
  options,
  defaultValue,
  onValueChange,
}: FilterSelectProps) => {
  return (
    <Select defaultValue={defaultValue} onValueChange={onValueChange}>
      <SelectTrigger className="w-full rounded-full border border-[#E5E5E5] bg-white text-[#1A1A1A] placeholder:text-[#1A1A1A] px-5 py-3 data-[size=default]:h-auto text-base [&>svg]:text-[#F04436] [&>svg]:opacity-100 cursor-pointer">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white cursor-pointer border-none">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="cursor-pointer hover:bg-gray-50"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

// Table Component
export function InquirieTable() {
  // Data
  const initialData: Inquiry[] = [
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
      productName: " Headphones",
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
      productName: " Keyboard",
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

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [filters, setFilters] = useState<FilterState>({
    status: "all",
    products: "all",
    time: "all",
    sortBy: "newest",
    search: "",
  });
  const [filteredData, setFilteredData] = useState<Inquiry[]>(initialData);

  // Filter configuration
  const filterConfigs = [
    {
      label: "Status",
      placeholder: "All Status",
      defaultValue: "all",
      filterKey: "status",
      options: [
        { value: "all", label: "All Status" },
        { value: "new", label: "New" },
        { value: "resolved", label: "Resolved" },
        { value: "closed", label: "Closed" },
      ],
    },
    {
      label: "Products",
      placeholder: "All Products",
      defaultValue: "all",
      filterKey: "products",
      options: [
        { value: "all", label: "All Products" },
        { value: "Ultra HD Display", label: "Ultra HD Display" },
        { value: "Smart Watch 5", label: "Smart Watch 5" },
        { value: "Webcam", label: "Webcam" },
      ],
    },
    {
      label: "Time",
      placeholder: "Last 30 Days",
      defaultValue: "all",
      filterKey: "time",
      options: [
        { value: "all", label: "Last 30 Days" },
        { value: "today", label: "Today" },
        { value: "week", label: "This Week" },
        { value: "month", label: "This Month" },
        { value: "quarter", label: "This Quarter" },
        { value: "year", label: "This Year" },
      ],
    },
  ];

  // Apply filters whenever they change
  useEffect(() => {
    let result = [...initialData];

    // Apply status filter
    if (filters.status !== "all") {
      result = result.filter((item) => item.status === filters.status);
    }

    // Apply product filter
    if (filters.products !== "all") {
      result = result.filter((item) => item.productName === filters.products);
    }

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        (item) =>
          item.inquiryId.toLowerCase().includes(searchTerm) ||
          item.productName.toLowerCase().includes(searchTerm) ||
          item.buyerName.toLowerCase().includes(searchTerm) ||
          item.buyerCompany.toLowerCase().includes(searchTerm)
      );
    }

    // Apply time filter (simplified example)
    if (filters.time !== "all") {
      // In a real app, you would filter by actual dates
      // This is just a placeholder for the logic
      result = result.slice(0, 5); // Just show fewer items as an example
    }

    setFilteredData(result);
  }, [filters]);

  const handleFilterChange = (filterKey: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: value,
    }));
    // Reset to first page when filters change
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      search: e.target.value,
    }));
    // Reset to first page when search changes
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  };

  const table = useReactTable({
    data: filteredData,
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
      {/* Filter Section */}
      <div className="p-4 xl:border xl:border-[#E5E5E5] rounded-full max-w-7xl mx-auto bg-transparent mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 items-center">
          {/* Search Bar */}
          <div className="relative md:col-span-2 lg:col-span-1">
            <div className="relative">
              <Search
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white w-6 p-1 rounded-full h-auto cursor-pointer"
                style={{
                  background:
                    "linear-gradient(270deg, #F7813B 0%, #F46A39 100%)",
                }}
              />
              <Input
                type="text"
                placeholder="Search orders by number, product and suppliers..."
                value={filters.search}
                onChange={handleSearchChange}
                className="w-full rounded-full border border-[#E5E5E5] bg-white text-[#1A1A1A] placeholder:text-[#666666] pl-6 pr-12 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#F04436] focus:border-transparent h-auto"
              />
            </div>
          </div>

          {/* Filter Selects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:col-span-2 lg:col-span-1">
            {filterConfigs.map((config) => (
              <FilterSelect
                key={config.label}
                placeholder={config.placeholder}
                options={config.options}
                defaultValue={config.defaultValue}
                onValueChange={(value) =>
                  handleFilterChange(
                    config.filterKey as keyof FilterState,
                    value
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row md:justify-end gap-3 mb-4 w-full">
        <Link to="/seller-dashboard/inquiries-details">
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
      <div className="flex items-center justify-between pt-4 px-4 text-sm text-[#666] mt-4">
        {/* Data Count */}
        <p className="text-base text-gray-600">
          Showing {pagination.pageIndex * pagination.pageSize + 1} to{" "}
          {Math.min(
            (pagination.pageIndex + 1) * pagination.pageSize,
            filteredData.length
          )}{" "}
          of {filteredData.length} orders
        </p>

        {/* Styled Pagination Buttons */}
        <ul className="flex items-center border border-foundation-white rounded-xl overflow-hidden text-base cursor-pointer">
          {/* Previous Button */}
          <li>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label="Previous Page"
              className={`text-xl p-2 sm:p-4 border-r border-foundation-white text-[#FCAB3F] cursor-pointer ${
                !table.getCanPreviousPage()
                  ? "cursor-not-allowed text-gray-300"
                  : "hover:bg-[#E5E7EB] hover:text-black"
              }`}
            >
              <FaAngleLeft />
            </button>
          </li>

          {/* Page Number Buttons */}
          {Array.from({ length: table.getPageCount() }).map((_, index) => {
            const isActive = table.getState().pagination.pageIndex === index;
            return (
              <li key={index}>
                <button
                  onClick={() => table.setPageIndex(index)}
                  className={`p-3 sm:p-4 w-12 border-r border-foundation-white transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#E5E7EB] text-black"
                      : "text-black hover:bg-[#E5E7EB] hover:text-black"
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
              className={`text-xl p-2 sm:p-4 text-[#FCAB3F] cursor-pointer ${
                !table.getCanNextPage()
                  ? "cursor-not-allowed text-gray-300"
                  : "hover:bg-[#E5E7EB] hover:text-black"
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

// import * as React from "react";
// import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// import { MdDeleteOutline } from "react-icons/md";
// import {
//   ColumnDef,
//   SortingState,
//   VisibilityState,
//   PaginationState,
//   flexRender,
//   getCoreRowModel,
//   getSortedRowModel,
//   getPaginationRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import samplePhoto from "@/assets/image/product.png";
// import { Link } from "react-router-dom";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// // Type
// type Inquiry = {
//   id: string;
//   inquiryId: string;
//   productName: string;
//   sku: string;
//   photo: string;
//   buyerName: string;
//   buyerCompany: string;
//   date: string;
//   status: "new" | "resolved" | "closed";
// };

// // Data
// const data: Inquiry[] = [
//   // Add more if needed for multiple pages
//   {
//     id: "1",
//     inquiryId: "INQ-235345",
//     productName: "Ultra HD Display",
//     sku: "SP-X2023-BLK",
//     photo: samplePhoto,
//     buyerName: "Jane Smith",
//     buyerCompany: "XYZ Company",
//     date: "17/06/2025",
//     status: "new",
//   },
//   {
//     id: "2",
//     inquiryId: "INQ-987654",
//     productName: "Smart Watch 5",
//     sku: "WT-5020-GRN",
//     photo: samplePhoto,
//     buyerName: "Michael Johnson",
//     buyerCompany: "ABC Corp",
//     date: "15/06/2025",
//     status: "resolved",
//   },
//   {
//     id: "3",
//     inquiryId: "INQ-123789",
//     productName: " Headphones",
//     sku: "HD-X300-BLU",
//     photo: samplePhoto,
//     buyerName: "Emily Davis",
//     buyerCompany: "Digital House",
//     date: "14/06/2025",
//     status: "closed",
//   },
//   {
//     id: "4",
//     inquiryId: "INQ-564738",
//     productName: "Wireless Mouse",
//     sku: "WM-4010-BLK",
//     photo: samplePhoto,
//     buyerName: "Robert Wilson",
//     buyerCompany: "Tech Solutions",
//     date: "18/06/2025",
//     status: "new",
//   },
//   {
//     id: "5",
//     inquiryId: "INQ-847362",
//     productName: " Keyboard",
//     sku: "MK-9000-RED",
//     photo: samplePhoto,
//     buyerName: "Linda Martinez",
//     buyerCompany: "Keyboard Co.",
//     date: "19/06/2025",
//     status: "resolved",
//   },
//   {
//     id: "6",
//     inquiryId: "INQ-293847",
//     productName: "Gaming Monitor",
//     sku: "GM-144HZ-BLK",
//     photo: samplePhoto,
//     buyerName: "David Lee",
//     buyerCompany: "Gaming World",
//     date: "20/06/2025",
//     status: "closed",
//   },
//   {
//     id: "7",
//     inquiryId: "INQ-982374",
//     productName: "External Hard Drive",
//     sku: "EHD-2TB-SLV",
//     photo: samplePhoto,
//     buyerName: "Sarah Thompson",
//     buyerCompany: "Data Store",
//     date: "21/06/2025",
//     status: "new",
//   },
//   {
//     id: "8",
//     inquiryId: "INQ-746291",
//     productName: "USB-C Hub",
//     sku: "USBCH-7PORT-BLK",
//     photo: samplePhoto,
//     buyerName: "James Brown",
//     buyerCompany: "Accessory Hub",
//     date: "22/06/2025",
//     status: "resolved",
//   },
//   {
//     id: "9",
//     inquiryId: "INQ-839201",
//     productName: "Smartphone Case",
//     sku: "SC-IPH12-BLU",
//     photo: samplePhoto,
//     buyerName: "Patricia Garcia",
//     buyerCompany: "Mobile Gear",
//     date: "23/06/2025",
//     status: "closed",
//   },
//   {
//     id: "10",
//     inquiryId: "INQ-192837",
//     productName: "Bluetooth Speaker",
//     sku: "BS-XL500-BLK",
//     photo: samplePhoto,
//     buyerName: "Mark Robinson",
//     buyerCompany: "Sound Experts",
//     date: "24/06/2025",
//     status: "new",
//   },
//   {
//     id: "11",
//     inquiryId: "INQ-999999",
//     productName: "Webcam",
//     sku: "WC-HD1080P",
//     photo: samplePhoto,
//     buyerName: "Anna Smith",
//     buyerCompany: "ZoomTech",
//     date: "25/06/2025",
//     status: "new",
//   },
// ];

// // Configs
// const statusLabels = {
//   new: "New",
//   resolved: "Resolved",
//   closed: "Closed",
// };

// const statusClassNames = {
//   new: "bg-[#F7D3D4] text-[#D9222A]",
//   resolved: "bg-[#CFF1E6] text-[#0FB981]",
//   closed: "bg-[#B3B3B3] text-[#666666]",
// };

// // Columns
// const columns: ColumnDef<Inquiry>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         className="cursor-pointer"
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all rows"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         className="cursor-pointer"
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "inquiryId",
//     header: "Inquiry ID",
//     cell: ({ row }) => (
//       <span className="font-medium">{row.original.inquiryId}</span>
//     ),
//   },
//   {
//     accessorKey: "productName",
//     header: "Product",
//     cell: ({ row }) => (
//       <div className="flex items-center gap-3">
//         <img
//           src={row.original.photo}
//           alt={row.original.productName}
//           className="w-10 h-10 rounded object-cover cursor-pointer"
//         />
//         <div>
//           <div className="font-medium text-sm">{row.original.productName}</div>
//           <div className="text-xs text-gray-500">SKU: {row.original.sku}</div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     accessorKey: "buyerName",
//     header: "Buyer",
//     cell: ({ row }) => (
//       <div className="text-sm">
//         <div className="font-medium">{row.original.buyerName}</div>
//         <div className="text-gray-500 text-xs">{row.original.buyerCompany}</div>
//       </div>
//     ),
//   },
//   {
//     accessorKey: "date",
//     header: "Date",
//     cell: ({ row }) => <div className="text-sm">{row.original.date}</div>,
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => {
//       const status = row.original.status;
//       return (
//         <span
//           className={`flex w-[99px] h-8 px-5 justify-center items-center gap-1 rounded-full font-semibold text-sm capitalize ${statusClassNames[status]}`}
//         >
//           {statusLabels[status]}
//         </span>
//       );
//     },
//   },
//   {
//     id: "actions",
//     header: "Action",
//     cell: ({ row }) => {
//       const status = row.original.status;
//       const isRespond = status === "new" || status === "resolved";
//       return (
//         <div className="flex items-center justify-center">
//           <button
//             className={`text-sm px-3 py-1 rounded-md transition ${
//               isRespond
//                 ? "text-red-500 hover:text-[#14325f]"
//                 : "text-red-500 hover:text-[#14325f] hover:bg-[#f3f6fa]"
//             }`}
//           >
//             {isRespond ? "Respond" : "View"}
//           </button>
//         </div>
//       );
//     },
//   },
// ];

// // Table Component
// export function InquirieTable() {
//   const [sorting, setSorting] = React.useState<SortingState>([]);
//   const [columnVisibility, setColumnVisibility] =
//     React.useState<VisibilityState>({});
//   const [rowSelection, setRowSelection] = React.useState({});
//   const [pagination, setPagination] = React.useState<PaginationState>({
//     pageIndex: 0,
//     pageSize: 5,
//   });

//   const table = useReactTable({
//     data,
//     columns,
//     state: {
//       sorting,
//       columnVisibility,
//       rowSelection,
//       pagination,
//     },
//     onSortingChange: setSorting,
//     onPaginationChange: setPagination,
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     manualPagination: false,
//   });

//   return (
//     <div>
//       {/* Action Buttons */}
//       <div className="flex flex-col md:flex-row md:justify-end gap-3 mb-4 w-full">
//         <Link to="/seller-dashboard/inquiries-details">
//           <button className="w-full md:w-auto flex h-12 px-6 py-[10px] items-center justify-center gap-2 rounded-[16px] bg-[#192D4E] text-white text-lg font-medium hover:bg-[#14325f] transition cursor-pointer">
//             <IoIosCheckmarkCircleOutline />
//             Mark As Resolved
//           </button>
//         </Link>
//         <button className="w-full md:w-auto flex h-12 px-6 py-[10px] items-center justify-center gap-2 rounded-[16px] border border-[#192D4E] text-[#192D4E] text-lg bg-transparent hover:bg-[#e7edf6] transition cursor-pointer">
//           <MdDeleteOutline />
//           Delete
//         </button>
//       </div>

//       {/* Table */}
//       <div className="w-full bg-white rounded-xl shadow-md p-2">
//         <Table>
//           <TableHeader className="h-[56px]">
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow
//                 key={headerGroup.id}
//                 className="bg-[#E5E5E5] text-[#666666] text-sm"
//               >
//                 {headerGroup.headers.map((header) => (
//                   <TableHead key={header.id}>
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                   </TableHead>
//                 ))}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow key={row.id}>
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell className="p-3" key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   No inquiries found.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       {/* Pagination Footer */}
//       {/* Pagination Footer - Styled Version */}
//       <div className="flex items-center justify-between pt-4 px-4 text-sm text-[#666] mt-4">
//         {/* Data Count */}
//         <p className="text-base text-gray-600">
//           Showing {pagination.pageIndex * pagination.pageSize + 1} to{" "}
//           {Math.min(
//             (pagination.pageIndex + 1) * pagination.pageSize,
//             data.length
//           )}{" "}
//           of {data.length} orders
//         </p>

//         {/* Styled Pagination Buttons */}
//         <ul className="flex items-center border border-foundation-white rounded-xl overflow-hidden text-base cursor-pointer">
//           {/* Previous Button */}
//           <li>
//             <button
//               onClick={() => table.previousPage()}
//               disabled={!table.getCanPreviousPage()}
//               aria-label="Previous Page"
//               className={`text-xl p-2 sm:p-4 border-r border-foundation-white text-[#FCAB3F] cursor-pointer ${
//                 !table.getCanPreviousPage()
//                   ? "cursor-not-allowed text-gray-300"
//                   : "hover:bg-[#E5E7EB] hover:text-black"
//               }`}
//             >
//               <FaAngleLeft />
//             </button>
//           </li>

//           {/* Page Number Buttons */}
//           {Array.from({ length: table.getPageCount() }).map((_, index) => {
//             const isActive = table.getState().pagination.pageIndex === index;
//             return (
//               <li key={index}>
//                 <button
//                   onClick={() => table.setPageIndex(index)}
//                   className={`p-3 sm:p-4 w-12 border-r border-foundation-white transition-colors duration-150 cursor-pointer ${
//                     isActive
//                       ? "bg-[#E5E7EB] text-black"
//                       : "text-black hover:bg-[#E5E7EB] hover:text-black"
//                   }`}
//                 >
//                   {index + 1}
//                 </button>
//               </li>
//             );
//           })}

//           {/* Next Button */}
//           <li>
//             <button
//               onClick={() => table.nextPage()}
//               disabled={!table.getCanNextPage()}
//               aria-label="Next Page"
//               className={`text-xl p-2 sm:p-4 text-[#FCAB3F] cursor-pointer ${
//                 !table.getCanNextPage()
//                   ? "cursor-not-allowed text-gray-300"
//                   : "hover:bg-[#E5E7EB] hover:text-black"
//               }`}
//             >
//               <FaAngleRight />
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
