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
import { Link, useLocation } from "react-router-dom";
import image from "../../../assets/image/product.png";
import image1 from "../../../assets/landing/image1.png";
import { slugify } from "../SellerOrder/OrderTable";


type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  status: "Active" | "Low Stock" | "Out Of Stock";
  stock: number;
  views: number;
  inquiries: number;
  date: string;
  img: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Ultra HD Display",
    category: "Gadgets & Electronics",
    price: "$89.99",
    status: "Active",
    stock: 80,
    views: 3473,
    inquiries: 67,
    date: "17/06/2025",
    img: image,
  },
  {
    id: 2,
    name: "4K Gaming Monitor",
    category: "Fashion & Accessories",
    price: "$79.99",
    status: "Active",
    stock: 80,
    views: 3473,
    inquiries: 67,
    date: "15/08/2023",
    img: image1,
  },
  {
    id: 3,
    name: "High‑Resolution Screen",
    category: "Home & Living",
    price: "$59.99",
    status: "Low Stock",
    stock: 40,
    views: 3473,
    inquiries: 67,
    date: "22/11/2024",
    img: image,
  },
  {
    id: 4,
    name: "Crystal Clear Monitor",
    category: "Toys & Games",
    price: "$69.99",
    status: "Out Of Stock",
    stock: 0,
    views: 3473,
    inquiries: 67,
    date: "03/05/2025",
    img: image1,
  },
  {
    id: 5,
    name: "Smart Fitness Tracker",
    category: "Gadgets & Electronics",
    price: "$49.99",
    status: "Active",
    stock: 150,
    views: 2810,
    inquiries: 42,
    date: "10/06/2025",
    img: image,
  },
  {
    id: 6,
    name: "Wireless Noise-Canceling Headphones",
    category: "Fashion & Accessories",
    price: "$119.99",
    status: "Low Stock",
    stock: 25,
    views: 3962,
    inquiries: 89,
    date: "25/07/2025",
    img: image1,
  },
  {
    id: 7,
    name: "Ergonomic Office Chair",
    category: "Home & Living",
    price: "$199.99",
    status: "Active",
    stock: 60,
    views: 1789,
    inquiries: 34,
    date: "02/03/2024",
    img: image,
  },
  {
    id: 8,
    name: "Virtual Reality Headset",
    category: "Gadgets & Electronics",
    price: "$149.99",
    status: "Active",
    stock: 70,
    views: 4521,
    inquiries: 102,
    date: "19/09/2023",
    img: image1,
  },
  {
    id: 9,
    name: "Adjustable Standing Desk",
    category: "Home & Living",
    price: "$229.99",
    status: "Out Of Stock",
    stock: 0,
    views: 1354,
    inquiries: 21,
    date: "11/12/2024",
    img: image,
  },
  {
    id: 10,
    name: "LED Ring Light Set",
    category: "Toys & Games",
    price: "$39.99",
    status: "Active",
    stock: 95,
    views: 3120,
    inquiries: 58,
    date: "07/01/2025",
    img: image1,
  },
  {
    id: 11,
    name: "Bluetooth Smart Glasses",
    category: "Gadgets & Electronics",
    price: "$99.99",
    status: "Low Stock",
    stock: 18,
    views: 2740,
    inquiries: 46,
    date: "29/04/2025",
    img: image,
  },
  {
    id: 12,
    name: "Portable Projector",
    category: "Gadgets & Electronics",
    price: "$129.99",
    status: "Active",
    stock: 110,
    views: 2987,
    inquiries: 64,
    date: "13/06/2025",
    img: image1,
  },
  {
    id: 13,
    name: "Noise-Isolation Gaming Headset",
    category: "Toys & Games",
    price: "$89.00",
    status: "Active",
    stock: 55,
    views: 3881,
    inquiries: 73,
    date: "16/02/2025",
    img: image,
  },
  {
    id: 14,
    name: "Rechargeable Mini Fan",
    category: "Home & Living",
    price: "$24.99",
    status: "Out Of Stock",
    stock: 0,
    views: 2105,
    inquiries: 39,
    date: "04/08/2024",
    img: image1,
  },
  {
    id: 15,
    name: "Rechargeable Mini Fan",
    category: "Home & Living",
    price: "$24.99",
    status: "Out Of Stock",
    stock: 0,
    views: 2105,
    inquiries: 39,
    date: "04/08/2024",
    img: image,
  },
];

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

export const ProductTable = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full">
      <div className="p-2  border border-[#E0E0E1] rounded-xl bg-white mb-5">
        <Table>
          <TableHeader className="pb-5">
            <TableRow className="first:border-none">
              {/* Checkbox Column */}
              <TableHead className="rounded-l-xl bg-foundation-white">
                <input type="checkbox" />
              </TableHead>

              {/* Dynamic Table Headers */}
              {tableHead.map((header, index) => (
                <TableHead
                  key={header}
                  className={`
        font-medium text-sm text-center last:pr-2
        ${index === 0 || index === 1 ? "text-start" : ""}
        ${index === 1 || index === 6 ? "hidden xl:table-cell" : ""}
        ${index === 3 || index === 5 ? "hidden md:table-cell" : ""}
        ${index === tableHead.length - 1 ? "rounded-r-xl" : ""}
        py-4 h-full bg-foundation-white text-foundation-gray
      `}
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((p) => (
              <TableRow key={p.id} className="hover:bg-gray-50">
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell className="flex items-center py-4">
                  <img src={p.img} alt="" className="w-10 h-10 rounded mr-3" />
                  <div className="hidden xl:block">
                    <div className="font-medium text-gray-800  ">{p.name}</div>
                    <div className="text-xs text-gray-500 ">
                      SKU: SP‑X2023‑BLK
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-700 hidden  xl:table-cell ">
                  {p.category}
                </TableCell>
                <TableCell className="text-gray-700 text-center">
                  {p.price}
                </TableCell>
                <TableCell className="font-medium text-center hidden  md:table-cell">
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
                  <div className="flex items-center  justify-center">
                    <span className="text-gray-700 mr-2">
                      {p.stock.toString().padStart(2, "0")}
                    </span>
                    <div className="w-24 h-2 bg-gray-200 rounded overflow-hidden">
                      <div
                        className="h-full bg-green-500"
                        style={{ width: `${p.stock}%` }}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden  md:table-cell">
                  <div className="flex space-x-4 items-center  justify-center">
                    <div>
                      <div className="flex items-center gap-1 text-[#666] pb-1">
                        <MdOutlineRemoveRedEye className="text-2xl" />
                        <span>View</span>
                      </div>
                      <span className="text-jet-black font-medium">
                        {p.views}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-[#666] pb-1">
                        <LuFileText className="text-2xl" />
                        <span>Inquiries</span>
                      </div>
                      <span className="text-jet-black font-medium">
                        {p.inquiries}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-700 text-center hidden xl:table-cell">
                  {p.date}
                </TableCell>

                <TableCell className="text-center">
                  <Link
                    to={`/seller-dashboard/all-products/${slugify(p.name)}`}
                    className="text-sunset-orange cursor-pointer"
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {pathname !== "/seller-dashboard/all-products" && (
        <Pagination
          title="All Products"
          showText="Showing 1 to 10 of 24 orders"
          path="/seller-dashboard/all-products"
        />
      )}
    </div>
  );
};
