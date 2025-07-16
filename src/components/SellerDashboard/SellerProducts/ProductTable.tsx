import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Pagination from "@/common/Pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LuFileText } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "@/pages/SellerDashboard/SellerOrder/SellerData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import {
  selectTableShow,
  showAll as showAllAction,
} from "@/store/Slices/TableSlice/tableSlice";
import { slugify } from "../Help/help";

const statusColor = {
  Active: "bg-green-100 text-green-800",
  "Low Stock": "bg-yellow-100 text-yellow-800",
  "Out Of Stock": "bg-red-100 text-red-800",
};

const tableHead = [
  "Product",
  "Category",
  "Price",
  "Status",
  "Stock",
  "Analytics",
  "Date",
  "Action",
];

type Props = {
  searchText: string;
  selectedIds: number[];
  productsList: Product[];
  setSelectedIds: Dispatch<SetStateAction<number[]>>;
};

export const ProductTable: React.FC<Props> = ({
  searchText,
  selectedIds,
  setSelectedIds,
  productsList,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const showAll = useSelector(selectTableShow);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 5;
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const totalPages = Math.ceil(productsList.length / ITEMS_PER_PAGE);

  const filtered = productsList.filter((p) =>
    [p.name, p.category].some((field) =>
      field?.toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const displayList = showAll
    ? filtered
    : filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  const toggleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((x) => x !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === displayList.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(displayList.map((p) => p.id));
    }
  };

  const handleShow = () => {
    dispatch(showAllAction());
    setCurrentPage(1);
    navigate("/seller-dashboard/all-products");
  };
  return (
    <div className="w-full">
      {displayList.length > 0 && (
        <div
          className={`p-2 border border-[#E0E0E1] rounded-xl bg-white mb-5 w-full ${
            showAll && "mb-10"
          }`}
        >
          <div className="overflow-x-auto ">
            <Table className="w-full table-auto ">
              <TableHeader>
                <TableRow className="first:border-none">
                  <TableHead className="h-full py-4 bg-foundation-white text-foundation-gray rounded-l-xl ">
                    <input
                      type="checkbox"
                      className="accent-[#F14141] focus:ring-[#F14141] w-fit"
                      checked={
                        displayList.length > 0 &&
                        selectedIds.length === displayList.length
                      }
                      onChange={toggleSelectAll}
                    />
                  </TableHead>
                  {tableHead.map((header, idx) => (
                    <TableHead
                      key={header}
                      className={`
                    font-medium text-sm text-center last:pr-2
                    ${idx === 0 || idx === 1 ? "text-start" : ""}
                    ${idx === 1 || idx === 6 ? "hidden xl:table-cell" : ""}
                    ${idx === 3 || idx === 5 ? "hidden md:table-cell" : ""}
                    ${idx === tableHead.length - 1 ? "rounded-r-xl" : ""}
                    py-4 h-full bg-foundation-white text-foundation-gray 
                  `}
                    >
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {displayList.map((p) => (
                  <TableRow key={p.id} className="hover:bg-gray-50">
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(p.id)}
                        onChange={() => toggleSelect(p.id)}
                        className="accent-[#F14141] focus:ring-[#F14141]"
                      />
                    </TableCell>

                    <TableCell className="w-fit !px-0 py-4">
                      <div className="flex items-center">
                        <img
                          src={p.img}
                          alt={p.name}
                          className="w-8 h-8 rounded sm:w-10 sm:h-10 xl:mr-3"
                        />
                        <div className="hidden  xl:table-cell ">
                          <div className="font-medium text-gray-800 ">
                            {p.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            SKU: SP‑X2023‑BLK
                          </div>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="hidden text-gray-700 xl:table-cell">
                      {p.category}
                    </TableCell>
                    <TableCell className="text-center text-gray-700">
                      {p.price}
                    </TableCell>
                    <TableCell className="hidden font-medium text-center md:table-cell">
                      <Button
                        size="sm"
                        className={`p-5 text-sm font-semibold rounded-xl ${
                          statusColor[p.status]
                        }`}
                      >
                        {p.status}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center">
                        <span className="text-gray-700 sm:mr-2 ">
                          {p.stock.toString().padStart(2, "0")}
                        </span>
                        <div className="w-24 h-1.5 overflow-hidden bg-gray-200 rounded hidden sm:table-cell">
                          <div
                            className="h-full bg-green-500"
                            style={{ width: `${p.stock}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center justify-center sm:gap-2 ">
                        <div>
                          <div className="flex items-center gap-1 text-[#666] pb-1">
                            <MdOutlineRemoveRedEye className="text-2xl" />
                            <span>View</span>
                          </div>
                          <span className="font-medium text-jet-black">
                            {p.views}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-1 text-[#666] pb-1">
                            <LuFileText className="text-2xl" />
                            <span>Inquiries</span>
                          </div>
                          <span className="font-medium text-jet-black">
                            {p.inquiries}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden text-center text-gray-700 xl:table-cell">
                      {p.date}
                    </TableCell>
                    <TableCell className="text-center">
                      <Link
                        to={`/seller-dashboard/all-products/${slugify(p.name)}`}
                        className="cursor-pointer text-sunset-orange"
                      >
                        View
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {displayList.length > 0 ? (
        !showAll ? (
          <Pagination
            title="All Products"
            showText={`Showing ${startIdx + 1} to ${Math.min(
              startIdx + ITEMS_PER_PAGE,
              filtered.length
            )} of ${filtered.length} products`}
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            showAll={showAll}
            onToggleShowAll={handleShow}
          />
        ) : null
      ) : (
        <div className="text-gray-500 text-center">
          No products available at the moment.
        </div>
      )}
    </div>
  );
};
