import image from "../../../assets/image/product.png";
import image1 from "../../../assets/landing/image1.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuFileText } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import Pagination from "@/common/Pagination";
import { slugify } from "../SellerOrder/OrderTable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
];

const statusColor = {
  Active: "bg-green-100 text-green-800",
  "Low Stock": "bg-yellow-100 text-yellow-800",
  "Out Of Stock": "bg-red-100 text-red-800",
};

export const ProductTable = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="p-2 overflow-hidden border border-[#E0E0E1] rounded-xl bg-white">
        <Table>
          <TableHeader className="bg-foundation-white">
            <TableRow>
              <TableHead>
                <input type="checkbox" />
              </TableHead>
              {[
                "Product",
                "Category",
                "Price",
                "Status",
                "Stock",
                "Analytics",
                "Date",
                "Action",
              ].map((header) => (
                <TableHead key={header} className="text-gray-600 font-medium">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((p) => (
              <TableRow
                key={p.id}
                className="border-t border-[#E0E0E1] hover:bg-gray-50"
              >
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell className="flex items-center">
                  <img src={p.img} alt="" className="w-10 h-10 rounded mr-3" />
                  <div>
                    <div className="font-medium text-gray-800">{p.name}</div>
                    <div className="text-xs text-gray-500">
                      SKU: SP‑X2023‑BLK
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-700">{p.category}</TableCell>
                <TableCell className="text-gray-700">{p.price}</TableCell>
                <TableCell>
                  <span
                    className={`px-5 py-1.5 text-sm font-semibold rounded-xl ${
                      statusColor[p.status]
                    }`}
                  >
                    {p.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
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
                <TableCell className="flex space-x-4">
                  <div>
                    <div className="flex items-center gap-1 text-[#666] pb-1">
                      <MdOutlineRemoveRedEye className="text-2xl" />{" "}
                      <span>View</span>
                    </div>
                    <span className="text-jet-black font-medium">
                      {p.views}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[#666] pb-1">
                      <LuFileText className="text-2xl" /> <span>Inquiries</span>
                    </div>
                    <span className="text-jet-black font-medium">
                      {p.inquiries}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-700">{p.date}</TableCell>
                <TableCell>
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
    </>
  );
};
