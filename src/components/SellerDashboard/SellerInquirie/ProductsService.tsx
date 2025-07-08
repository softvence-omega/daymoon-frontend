import SubTitle from "../Shared/SubTitle";
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
import samplePhoto from "@/assets/image/product.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { FaAngleDown } from "react-icons/fa";

// Type
type Inquiry = {
  id: string;
  productName: string;
  sku: string;
  photo: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
  status: "new" | "resolved" | "closed";
};

// Sample Data
const data: Inquiry[] = [
  {
    id: "1",
    productName: "Ultra HD Display",
    sku: "SP-X2023-BLK",
    photo: samplePhoto,
    quantity: 100,
    unitPrice: 25.99,
    totalAmount: 3453,
    status: "new",
  },
  {
    id: "2",
    productName: "4K Gaming Monitor",
    sku: "SKU : SP-X2023-BLK",
    photo: samplePhoto,
    quantity: 100,
    unitPrice: 25.99,
    totalAmount: 3453,
    status: "resolved",
  },
];

// Columns
const columns: ColumnDef<Inquiry>[] = [
  {
    accessorKey: "productName",
    header: "Product",
    cell: ({ row }) => (
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="flex items-center gap-3">
          <img
            src={row.original.photo}
            alt={row.original.productName}
            className="w-10 h-10 rounded object-cover"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-medium text-sm text-gray-900">
              {row.original.productName}
            </span>
            <span className="text-xs text-gray-600">
              SKU: {row.original.sku}
            </span>
          </div>
        </div>
        <span className="text-[#000000] text-sm">
          <FaAngleDown />
        </span>{" "}
        {/* ▼ down arrow */}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-center pr-6">Quantity</div>,
    cell: ({ row }) => (
      <div className="flex justify-center text-center text-sm font-medium text-gray-800">
        <div className=" w-[73px] h-[40px] text-center px-6 py-[9px]   border border-gray-300 rounded-md text-sm font-medium bg-gray-50">
          {row.original.quantity}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "unitPrice",

    header: () => <div className="text-center pr-6">Unit Price</div>,
    cell: ({ row }) => (
      <div className="flex justify-center text-center text-sm font-medium text-gray-800">
        <div className="w-[73px] h-[40px] text-center px-3 py-[9px]   border border-gray-300 rounded-md text-sm font-medium bg-gray-50">
          ${row.original.unitPrice.toFixed(2)}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "totalAmount",
    header: () => <div className="text-center pr-6">Total</div>,
    cell: ({ row }) => (
      <div className="text-center text-sm font-semibold text-gray-900">
        ${row.original.totalAmount.toFixed(2)}
      </div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right mr-10">Action</div>,
    cell: () => (
      <div className="flex justify-end">
        <button className="text-sm px-3 py-1 rounded-md transition text-red-500 hover:text-[#14325f] hover:bg-[#f3f6fa]">
          Respond
        </button>
      </div>
    ),
  },
];

const ProductsService = () => {
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
    <div className="space-y-5">
      <SubTitle miniTitle="Products & Service" />
      <div className="w-full bg-white rounded-xl shadow-md border border-[#D8D8D8] p-2 ">
        <Table className="w-full">
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
              table.getRowModel().rows.map((row, rowIndex, rowArray) => (
                <TableRow
                  key={row.id}
                  className={`${
                    rowIndex !== rowArray.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  }`}
                >
                  {row.getVisibleCells().map((cell, cellIndex, cellArray) => (
                    <TableCell
                      key={cell.id}
                      className={`p-3 border-t border-gray-300 ${
                        cellIndex !== cellArray.length - 1
                          ? "border-r border-gray-300"
                          : ""
                      }`}
                    >
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
                  className="h-24 text-center border-t border-gray-300"
                >
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div>
        <Button
          asChild
          className="h-[48px] w-full sm:w-[204px] lg:w-[204px]  px-6 md:px-10 py-[10px] gap-2 rounded-[12px] border border-[#E7E7E7] text-black flex items-center justify-center text-[14px] md:text-[16px] font-medium font-sans transition"
        >
          <Link to="" className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add Product
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductsService;
