import image from "../../../assets/image/product.png";
import image1 from "../../../assets/landing/image1.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuFileText } from "react-icons/lu";
import { Link } from "react-router-dom";

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
    id: 6,
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
    id: 7,
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
    id: 8,
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
];

const statusColor = {
  Active: "bg-green-100 text-green-800",
  "Low Stock": "bg-yellow-100 text-yellow-800",
  "Out Of Stock": "bg-red-100 text-red-800",
};

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};

export const ProductTable = () => {
  return (
    <div className="p-2 overflow-hidden border border-[#E0E0E1] rounded-xl bg-white">
      <table className="min-w-full">
        <thead className="bg-foundation-white">
          <tr>
            <th className="p-3 rounded-tl-2xl">
              <input type="checkbox" />
            </th>
            {[
              "Product",
              "Category",
              "Price",
              "Status",
              "Stock",
              "Analytics",
              "Date",
              "Action",
            ].map((header, index, array) => (
              <th
                key={header}
                className={`p-3 text-sm font-medium text-gray-600 ${
                  index === 4 || index === 5 || index === 6
                    ? "text-center"
                    : "text-left"
                } ${index === array.length - 1 ? "rounded-tr-2xl" : ""}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr
              key={p.id}
              className="border-t border-[#E0E0E1] first:border-none hover:bg-gray-50"
            >
              <td className="p-3">
                <input type="checkbox" />
              </td>
              <td className="p-3 flex items-center">
                <img src={p.img} alt="" className="w-10 h-10 rounded mr-3" />
                <div>
                  <div className="font-medium text-gray-800">{p.name}</div>
                  <div className="text-xs text-gray-500">SKU: SP‑X2023‑BLK</div>
                </div>
              </td>
              <td className="p-3 text-gray-700">{p.category}</td>
              <td className="p-3 text-gray-700">{p.price}</td>
              <td className="p-3">
                <span
                  className={`px-5 py-1.5 text-sm font-semibold  bg-[#10B98133]/20 text rounded-xl ${
                    statusColor[p.status]
                  }`}
                >
                  {p.status}
                </span>
              </td>
              <td className="p-3">
                <div className="flex items-center">
                  <div className="text-gray-700 mr-2">
                    {p.stock.toString().padStart(2, "0")}
                  </div>
                  <div className="w-24 h-2 bg-gray-200 rounded overflow-hidden">
                    <div
                      className="h-full bg-green-500"
                      style={{ width: `${p.stock}%` }}
                    />
                  </div>
                </div>
              </td>
              <td className="p-3   flex space-x-4">
                <div>
                  <div className=" flex items-center gap-1 text-[#666] pb-1">
                    <span className="text-2xl">
                      <MdOutlineRemoveRedEye />
                    </span>
                    <span>View</span>
                  </div>

                  <span className="text-jet-black font-medium">{p.views}</span>
                </div>
                <div>
                  <div className=" flex items-center gap-1 text-[#666] pb-1">
                    <span className="text-2xl">
                      <LuFileText />
                    </span>
                    <span>Inquiries</span>
                  </div>

                  <span className="text-jet-black font-medium">
                    {" "}
                    {p.inquiries}
                  </span>
                </div>
              </td>
              <td className="p-3 text-gray-700">{p.date}</td>
              <td className="p-3">
                <Link
                  to={`/seller-dashboard/all-products/slugify${slugify(
                    p.name
                  )}`}
                  className=" text-sunset-orange cursor-pointer"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
