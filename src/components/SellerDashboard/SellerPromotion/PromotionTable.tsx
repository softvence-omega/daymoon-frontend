import * as React from "react";
import samplePhoto from "@/assets/image/product1.png";
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

// Type
type Inquiry = {
  id: string;
  inquiryId: string;
  productName: string;
  photo: string;
  buyerName: string;
  buyerCompany: string;
  date: string; // format: "DD/MM/YYYY"
  revenue: string;
  startDate1: string;
  startDate2: string;
  discount: string;
  status: "active" | "upcoming" | "expired";
};

// Sample Data
const data: Inquiry[] = [
  {
    id: "1",
    inquiryId: "INQ-235345",
    productName: "24” Monitor 4k resulation",
    photo: samplePhoto,
    buyerName: "Jane Smith",
    buyerCompany: "XYZ Company",
    date: "17/06/2025",
    revenue: "$2,300",
    startDate1: "15/06/2025",
    startDate2: "16/06/2025",
    discount: "20% Off",
    status: "active",
  },
  {
    id: "2",
    inquiryId: "INQ-987654",
    productName: "Smart Watch 5",
    photo: samplePhoto,
    buyerName: "Michael Johnson",
    buyerCompany: "ABC Corp",
    date: "15/06/2025",
    revenue: "$1,200",
    startDate1: "12/06/2025",
    startDate2: "13/06/2025",
    discount: "$10 Off",
    status: "upcoming",
  },
  {
    id: "3",
    inquiryId: "INQ-123789",
    productName: "Brand Bluetooth Headphone",
    photo: samplePhoto,
    buyerName: "Emily Davis",
    buyerCompany: "Digital House",
    date: "14/06/2025",
    revenue: "$850",
    startDate1: "10/06/2025",
    startDate2: "11/06/2025",
    discount: "Free Shipping",
    status: "expired",
  },
  {
    id: "4",
    inquiryId: "INQ-456123",
    productName: "Wireless Keyboard",
    photo: samplePhoto,
    buyerName: "Robert Wilson",
    buyerCompany: "Tech Solutions",
    date: "18/06/2025",
    revenue: "$1,450",
    startDate1: "16/06/2025",
    startDate2: "17/06/2025",
    discount: "30% Off",
    status: "active",
  },
];

// Status labels and styles
const statusLabels = {
  active: "Active",
  upcoming: "Upcoming",
  expired: "Expired",
};

const statusClassNames = {
  active: "bg-[#CFF1E6] text-[#0FB981]",
  upcoming: "bg-[#F7E3B5] text-[#D99100]",
  expired: "bg-[#E5E5E5] text-[#666666]",
};

// Helper to parse "DD/MM/YYYY" string into Date object
function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
}

// Columns
const columns: ColumnDef<Inquiry>[] = [
  {
    accessorKey: "promotionCampaign",
    header: "Campaign",
    cell: ({ row }) => (
      <div className="text-sm">
        <div className="font-medium">{row.original.buyerName}</div>
        <div className="text-gray-500 text-xs">{row.original.buyerCompany}</div>
      </div>
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
          className="w-8 h-8 rounded object-cover"
        />
        <div className="text-sm font-medium">{row.original.productName}</div>
      </div>
    ),
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
    cell: ({ row }) => (
      <div className="text-sm font-medium text-gray-800">
        {row.original.revenue}
      </div>
    ),
  },
  {
    accessorKey: "startDate1",
    header: "Start Date 1",
    cell: ({ row }) => <div className="text-sm">{row.original.startDate1}</div>,
  },
  {
    accessorKey: "startDate2",
    header: "Start Date 2",
    cell: ({ row }) => <div className="text-sm">{row.original.startDate2}</div>,
  },
  {
    accessorKey: "discount",
    header: "Discount",
    cell: ({ row }) => <div className="text-sm">{row.original.discount}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={`flex w-24 h-8 px-5 justify-center items-center gap-1 rounded-full font-semibold text-sm capitalize ${statusClassNames[status]}`}
        >
          {statusLabels[status]}
        </span>
      );
    },
  },
];

// Main Component
export function PromotionTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [filterValue, setFilterValue] = React.useState<string | undefined>(
    undefined
  );

  // Filtering logic based on filterValue
  const filteredData = React.useMemo(() => {
    if (!filterValue) return data;

    const now = new Date();

    return data.filter((item) => {
      const itemDate = parseDate(item.date);

      switch (filterValue) {
        case "week": {
          // This week: last 7 days including today
          const sevenDaysAgo = new Date(now);
          sevenDaysAgo.setDate(now.getDate() - 7);
          return itemDate >= sevenDaysAgo && itemDate <= now;
        }
        case "month": {
          // This month: current month and year
          return (
            itemDate.getMonth() === now.getMonth() &&
            itemDate.getFullYear() === now.getFullYear()
          );
        }
        case "year": {
          // Last 6 months: between now and 6 months ago
          const sixMonthsAgo = new Date(now);
          sixMonthsAgo.setMonth(now.getMonth() - 6);
          return itemDate >= sixMonthsAgo && itemDate <= now;
        }
        default:
          return true;
      }
    });
  }, [filterValue]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div>
      {/* Header and Filter */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-medium text-[#484848]">Promotions</h1>
        <Select
          value={filterValue}
          onValueChange={(value) => setFilterValue(value)}
        >
          <SelectTrigger className="w-[180px] h-[48px] border border-[#B3B3B3] bg-[#FCFCFC] text-[#484848] text-sm rounded-[12px] px-4 py-[10px] flex items-center justify-between hover:border-gray-400 transition-all duration-200 cursor-pointer">
            <SelectValue placeholder="All Promotions" />
            <ChevronDown className="w-4 h-4 ml-auto text-gray-500" />
          </SelectTrigger>

          <SelectContent className="bg-white border border-[#B3B3B3] rounded-md shadow-md">
            <SelectGroup>
              <SelectLabel className="px-4 pt-2 text-gray-500 text-sm">
                All Promotions
              </SelectLabel>
              <SelectItem
                value="week"
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 transition-colors rounded"
              >
                This Week
              </SelectItem>
              <SelectItem
                value="month"
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 transition-colors rounded"
              >
                This Month
              </SelectItem>
              <SelectItem
                value="year"
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 transition-colors rounded"
              >
                Last 6 Months
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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
                  No promotions found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
