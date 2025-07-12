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
  ColumnFiltersState,
  getFilteredRowModel,
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

// Type definitions
type Payment = {
  id: string;
  transactionId: string;
  date: string;
  amount: string;
  type: "Sale" | "Free";
  status: "view" | "resolved";
};

type FilterOption = {
  value: string;
  label: string;
};

type FilterState = {
  status: string;
  type: string;
  time: string;
  search: string;
};

// Dummy data
const data: Payment[] = [
  {
    id: "1",
    transactionId: "TRX-100001",
    date: "17/06/2025",
    amount: "$120",
    type: "Sale",
    status: "view",
  },
  {
    id: "2",
    transactionId: "TRX-100002",
    date: "15/06/2025",
    amount: "$0",
    type: "Free",
    status: "resolved",
  },
  {
    id: "3",
    transactionId: "TRX-100003",
    date: "14/06/2025",
    amount: "$89",
    type: "Sale",
    status: "resolved",
  },
  {
    id: "4",
    transactionId: "TRX-100004",
    date: "18/06/2025",
    amount: "$60",
    type: "Sale",
    status: "view",
  },
  {
    id: "5",
    transactionId: "TRX-100005",
    date: "19/06/2025",
    amount: "$0",
    type: "Free",
    status: "resolved",
  },
  {
    id: "6",
    transactionId: "TRX-100006",
    date: "20/06/2025",
    amount: "$300",
    type: "Sale",
    status: "resolved",
  },
  {
    id: "7",
    transactionId: "TRX-100007",
    date: "21/06/2025",
    amount: "$45",
    type: "Sale",
    status: "view",
  },
  {
    id: "8",
    transactionId: "TRX-100008",
    date: "22/06/2025",
    amount: "$0",
    type: "Free",
    status: "resolved",
  },
  {
    id: "9",
    transactionId: "TRX-100009",
    date: "23/06/2025",
    amount: "$29",
    type: "Sale",
    status: "resolved",
  },
  {
    id: "10",
    transactionId: "TRX-100010",
    date: "24/06/2025",
    amount: "$75",
    type: "Sale",
    status: "view",
  },
  {
    id: "11",
    transactionId: "TRX-100011",
    date: "25/06/2025",
    amount: "$0",
    type: "Free",
    status: "view",
  },
];

// Status Config
const statusLabels = {
  view: "Sale",
  resolved: "Free",
};

const statusClassNames = {
  view: "bg-[#F7D3D4] text-[#D9222A]",
  resolved: "bg-[#CFF1E6] text-[#0FB981]",
};

// Columns
const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "transactionId",
    header: "Transaction ID",
    cell: ({ row }) => (
      <span className="font-medium">{row.original.transactionId}</span>
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
        className={`px-2 py-1 rounded-full text-sm font-medium ${row.original.type}`}
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
          className={`flex h-8 w-[64px] px-5 justify-center items-center gap-1 rounded-full font-semibold text-sm capitalize ${statusClassNames[status]}`}
        >
          {statusLabels[status]}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center w-full">Action</div>,
    cell: ({ row }) => {
      const status = row.original.status;
      const isRespond = status === "view" || status === "resolved";
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

// Filter Select Component
const FilterSelect = ({
  placeholder,
  options,
  defaultValue,
  onValueChange,
}: {
  placeholder: string;
  options: FilterOption[];
  defaultValue: string;
  onValueChange?: (value: string) => void;
}) => {
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

// Main Table Component
export function PaymentTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [filters, setFilters] = React.useState<FilterState>({
    status: "all",
    type: "all",
    time: "all",
    search: "",
  });

  // Filter configurations
  const filterConfigs = [
    {
      label: "Status",
      placeholder: "All Status",
      defaultValue: "all",
      filterKey: "status",
      options: [
        { value: "all", label: "All Status" },
        { value: "view", label: "Sale" },
        { value: "resolved", label: "Free" },
      ],
    },
    {
      label: "Type",
      placeholder: "All Types",
      defaultValue: "all",
      filterKey: "type",
      options: [
        { value: "all", label: "All Types" },
        { value: "Sale", label: "Sale" },
        { value: "Free", label: "Free" },
      ],
    },
    {
      label: "Time",
      placeholder: "All Time",
      defaultValue: "all",
      filterKey: "time",
      options: [
        { value: "all", label: "All Time" },
        { value: "today", label: "Today" },
        { value: "week", label: "This Week" },
        { value: "month", label: "This Month" },
      ],
    },
  ];

  // Handle filter changes
  const handleFilterChange = (filterKey: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: value,
    }));
  };

  // Handle search changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      search: e.target.value,
    }));
  };

  // Apply filters to the table data
  const filteredData = React.useMemo(() => {
    return data.filter((item) => {
      // Status filter
      if (filters.status !== "all" && item.status !== filters.status) {
        return false;
      }

      // Type filter
      if (filters.type !== "all" && item.type !== filters.type) {
        return false;
      }

      // Search filter
      if (
        filters.search &&
        !item.transactionId.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      // Time filter (simplified example)
      if (filters.time !== "all") {
        // In a real app, you would implement actual date filtering logic here
        // This is just a placeholder
        return true;
      }

      return true;
    });
  }, [filters]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
      columnVisibility,
      pagination,
      columnFilters,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: false,
  });

  return (
    <div className="space-y-4">
      {/* Filter and Search Section */}
      <div className="p-4 xl:border xl:border-[#E5E5E5] rounded-full max-w-7xl mx-auto bg-transparent">
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
                placeholder="Search transactions by ID..."
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

      {/* Table Section */}
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
                  No transactions found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-4 px-4 text-sm text-[#666] mt-4">
        {/* Data Count */}
        <p className="text-base text-gray-600 mb-2 sm:mb-0">
          Showing{" "}
          {table.getRowModel().rows.length > 0
            ? pagination.pageIndex * pagination.pageSize + 1
            : 0}{" "}
          to{" "}
          {Math.min(
            (pagination.pageIndex + 1) * pagination.pageSize,
            filteredData.length
          )}{" "}
          of {filteredData.length} transactions
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
                  className={`p-3 sm:p-4 w-12 border-r border-foundation-white transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? " text-[#FCAB3F]"
                      : "text-black hover:bg-[#E5E5E5] hover:text-black"
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

// import * as React from "react";
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
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// // Updated type
// type Payment = {
//   id: string;
//   transactionId: string;
//   date: string;
//   amount: string;
//   type: "Sale" | "Free";
//   status: "view" | "resolved";
// };

// // Dummy data (updated)
// const data: Payment[] = [
//   {
//     id: "1",
//     transactionId: "INQ-235345",
//     date: "17/06/2025",
//     amount: "$120",
//     type: "Sale",
//     status: "view",
//   },
//   {
//     id: "2",
//     transactionId: "INQ-987654",
//     date: "15/06/2025",
//     amount: "$0",
//     type: "Free",
//     status: "resolved",
//   },
//   {
//     id: "3",
//     transactionId: "INQ-123789",
//     date: "14/06/2025",
//     amount: "$89",
//     type: "Sale",
//     status: "resolved",
//   },
//   {
//     id: "4",
//     transactionId: "INQ-564738",
//     date: "18/06/2025",
//     amount: "$60",
//     type: "Sale",
//     status: "view",
//   },
//   {
//     id: "5",
//     transactionId: "INQ-847362",
//     date: "19/06/2025",
//     amount: "$0",
//     type: "Free",
//     status: "resolved",
//   },
//   {
//     id: "6",
//     transactionId: "INQ-293847",
//     date: "20/06/2025",
//     amount: "$300",
//     type: "Sale",
//     status: "resolved",
//   },
//   {
//     id: "7",
//     transactionId: "INQ-982374",
//     date: "21/06/2025",
//     amount: "$45",
//     type: "Sale",
//     status: "view",
//   },
//   {
//     id: "8",
//     transactionId: "INQ-746291",
//     date: "22/06/2025",
//     amount: "$0",
//     type: "Free",
//     status: "resolved",
//   },
//   {
//     id: "9",
//     transactionId: "INQ-839201",
//     date: "23/06/2025",
//     amount: "$29",
//     type: "Sale",
//     status: "resolved",
//   },
//   {
//     id: "10",
//     transactionId: "INQ-192837",
//     date: "24/06/2025",
//     amount: "$75",
//     type: "Sale",
//     status: "view",
//   },
//   {
//     id: "11",
//     transactionId: "INQ-999999",
//     date: "25/06/2025",
//     amount: "$0",
//     type: "Free",
//     status: "view",
//   },
// ];

// // Status Config
// const statusLabels = {
//   view: "Sale",
//   resolved: "Free",
// };

// const statusClassNames = {
//   view: "bg-[#F7D3D4] text-[#D9222A]",
//   resolved: "bg-[#CFF1E6] text-[#0FB981]",
// };

// // Columns
// const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "transactionId",
//     header: "Transaction ID",
//     cell: ({ row }) => (
//       <span className="font-medium">{row.original.transactionId}</span>
//     ),
//   },
//   {
//     accessorKey: "date",
//     header: "Date",
//     cell: ({ row }) => <div className="text-sm">{row.original.date}</div>,
//   },
//   {
//     accessorKey: "amount",
//     header: "Amount",
//     cell: ({ row }) => <div className="text-sm">{row.original.amount}</div>,
//   },
//   {
//     accessorKey: "type",
//     header: "Type",
//     cell: ({ row }) => (
//       <span
//         className={`px-2 py-1 rounded-full text-sm font-medium ${
//           row.original.type === "Sale"
//             ? "bg-green-100 text-green-600"
//             : "bg-blue-100 text-blue-600"
//         }`}
//       >
//         {row.original.type}
//       </span>
//     ),
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => {
//       const status = row.original.status;
//       return (
//         <span
//           className={`flex h-8  w-[64px] px-5 justify-center items-center gap-1 rounded-full font-semibold text-sm capitalize ${statusClassNames[status]}`}
//         >
//           {statusLabels[status]}
//         </span>
//       );
//     },
//   },
//   {
//     id: "actions",
//     header: () => <div className="text-center w-full">Action</div>,
//     cell: ({ row }) => {
//       const status = row.original.status;
//       const isRespond = status === "view" || status === "resolved";
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
// export function PaymentTable() {
//   const [sorting, setSorting] = React.useState<SortingState>([]);
//   const [columnVisibility, setColumnVisibility] =
//     React.useState<VisibilityState>({});
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
//       pagination,
//     },
//     onSortingChange: setSorting,
//     onPaginationChange: setPagination,
//     onColumnVisibilityChange: setColumnVisibility,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     manualPagination: false,
//   });

//   return (
//     <div>
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

//       {/* Pagination */}
//       <div className="flex items-center justify-between pt-4 px-4 text-sm text-[#666] mt-4">
//         {/* Data Count */}
//         <p className="text-base text-gray-600 mb-2 sm:mb-0">
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
//               className={`text-xl p-2 sm:p-4 border-r border-foundation-white text-[#FCAB3F] ${
//                 !table.getCanPreviousPage()
//                   ? "cursor-not-allowed text-gray-300"
//                   : "hover:bg-[#FCAB3F] hover:text-white"
//               }`}
//             >
//               <FaAngleLeft />
//             </button>
//           </li>

//           {/* Page Buttons */}
//           {Array.from({ length: table.getPageCount() }).map((_, index) => {
//             const isActive = table.getState().pagination.pageIndex === index;
//             return (
//               <li key={index}>
//                 <button
//                   onClick={() => table.setPageIndex(index)}
//                   className={`p-3 sm:p-4 w-12 border-r border-foundation-white transition-colors duration-150 cursor-pointer ${
//                     isActive
//                       ? " text-[#FCAB3F]"
//                       : "text-black hover:bg-[#E5E5E5] hover:text-black"
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
//               className={`text-xl p-2 sm:p-4 text-[#FCAB3F] ${
//                 !table.getCanNextPage()
//                   ? "cursor-not-allowed text-gray-300"
//                   : "hover:bg-[#FCAB3F] hover:text-white"
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
