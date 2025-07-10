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
import { Eye } from "lucide-react"; // You can change this if using a different icon set

// Type
type Inquiry = {
  id: string;
  order: string;
  productName: string;
  photo: string;
  buyerName: string;
  buyerCompany: string;
  date: string;
  revenue: string;
  discount: string;
  status: "active" | "upcoming" | "expired";
};

// Sample Data
const data: Inquiry[] = [
  {
    id: "1",
    order: "345",
    productName: "24” Monitor 4k resulation",
    photo: samplePhoto,
    buyerName: "Jane Smith",
    buyerCompany: "XYZ Company",
    date: "17/06/2025",
    revenue: "$2,300",
    discount: "0.12%",
    status: "active",
  },
  {
    id: "2",
    order: "534",
    productName: "Smart Watch 5",
    photo: samplePhoto,
    buyerName: "Michael Johnson",
    buyerCompany: "ABC Corp",
    date: "15/06/2025",
    revenue: "$1,200",
    discount: "0.30%",
    status: "upcoming",
  },
  {
    id: "3",
    order: "260",
    productName: "Bluetooth Headphones",
    photo: samplePhoto,
    buyerName: "Emily Davis",
    buyerCompany: "Digital House",
    date: "14/06/2025",
    revenue: "$850",
    discount: "0.30%",
    status: "expired",
  },
  {
    id: "4",
    order: "120",
    productName: "Wireless Keyboard",
    photo: samplePhoto,
    buyerName: "Robert Wilson",
    buyerCompany: "Tech Solutions",
    date: "18/06/2025",
    revenue: "$1,450",
    discount: "0.30",
    status: "active",
  },
];

// Status styling
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

// Updated Columns
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={`flex h-8 w-[92px] px-5 justify-center items-center gap-1 rounded-full font-semibold text-sm capitalize ${statusClassNames[status]}`}
        >
          {statusLabels[status]}
        </span>
      );
    },
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
    accessorKey: "order",
    header: "Order",
    cell: ({ row }) => (
      <div className="text-sm text-gray-700">{row.original.order}</div>
    ),
  },
  {
    accessorKey: "conversion",
    header: "Conversion (%)",
    cell: ({ row }) => <div className="text-sm">{row.original.discount}</div>,
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => (
      <button
        className="p-2 rounded hover:bg-gray-100 transition cursor-pointer"
        title="View Details"
      >
        <Eye className="w-5 h-5 text-[#FCAB3F]" />
      </button>
    ),
  },
];

// Main Component
export function CampaignTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-[#484848]">
          Promotions Performance
        </h1>
      </div>

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
