"use client";

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
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="inline-block px-3 py-1 border border-gray-300 rounded-md text-sm font-medium bg-gray-50">
        {row.original.quantity}
      </div>
    ),
  },
  {
    accessorKey: "unitPrice",
    header: "Unit Price",
    cell: ({ row }) => (
      <div className="inline-block px-3 py-1 border border-gray-300 rounded-md text-sm font-medium bg-gray-50">
        ${row.original.unitPrice.toFixed(2)}
      </div>
    ),
  },
  {
    accessorKey: "totalAmount",
    header: "Total",
    cell: ({ row }) => (
      <div className="text-sm font-semibold">
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
      <div className="w-full bg-white rounded-xl shadow-md p-2 ">
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
