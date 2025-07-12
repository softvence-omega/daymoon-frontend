import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import photo from "@/assets/image/product.png";
import { IoSearchSharp } from "react-icons/io5";
import { LuSlidersHorizontal } from "react-icons/lu";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const productData = [
  {
    id: "10001",
    name: "24” Monitor 4K Resolution",
    category: "Gadgets & Electronics",
    sold: "34",
    revenue: "$350.00",
    returnRate: "5%",
    rating: 4.5,
    image: photo,
  },
  {
    id: "10002",
    name: "Earbud Pro",
    category: "Fashion & Accessories",
    sold: "21",
    revenue: "$150.00",
    returnRate: "0.12%",
    rating: 4.2,
    image: photo,
  },
  {
    id: "10003",
    name: "MarketMingle",
    category: "Home & Living",
    sold: "44",
    revenue: "$550.00",
    returnRate: "0.30%",
    rating: 4.8,
    image: photo,
  },
  {
    id: "10004",
    name: "CartCraze",
    category: "Toys & Games",
    sold: "18",
    revenue: "$180.00",
    returnRate: "0.49%",
    rating: 4.0,
    image: photo,
  },
  {
    id: "10005",
    name: "BuyBliss",
    category: "Sustainable Products",
    sold: "38",
    revenue: "$470.00",
    returnRate: "0.15%",
    rating: 4.6,
    image: photo,
  },
  {
    id: "10006",
    name: "TechMate",
    category: "Electronics",
    sold: "57",
    revenue: "$610.00",
    returnRate: "0.25%",
    rating: 4.7,
    image: photo,
  },
  {
    id: "10007",
    name: "GadgetFlow",
    category: "Accessories",
    sold: "29",
    revenue: "$260.00",
    returnRate: "0.10%",
    rating: 4.3,
    image: photo,
  },
  {
    id: "10008",
    name: "SmartLamp Pro",
    category: "Home & Living",
    sold: "26",
    revenue: "$320.00",
    returnRate: "0.35%",
    rating: 4.4,
    image: photo,
  },
  {
    id: "10009",
    name: "EcoBottle",
    category: "Sustainable Products",
    sold: "33",
    revenue: "$210.00",
    returnRate: "0.08%",
    rating: 4.1,
    image: photo,
  },
  {
    id: "10010",
    name: "ToyTrek Car Set",
    category: "Toys & Games",
    sold: "40",
    revenue: "$390.00",
    returnRate: "0.18%",
    rating: 4.6,
    image: photo,
  },
  {
    id: "10011",
    name: "FlexWatch X",
    category: "Fashion & Accessories",
    sold: "45",
    revenue: "$540.00",
    returnRate: "0.28%",
    rating: 4.9,
    image: photo,
  },
  {
    id: "10012",
    name: "SoundBoom Speaker",
    category: "Gadgets & Electronics",
    sold: "62",
    revenue: "$680.00",
    returnRate: "0.22%",
    rating: 4.8,
    image: photo,
  },
  {
    id: "10013",
    name: "YogaMat Pro",
    category: "Home & Living",
    sold: "28",
    revenue: "$130.00",
    returnRate: "0.09%",
    rating: 4.0,
    image: photo,
  },
  {
    id: "10014",
    name: "Kid’s Puzzle Set",
    category: "Toys & Games",
    sold: "31",
    revenue: "$210.00",
    returnRate: "0.12%",
    rating: 4.4,
    image: photo,
  },
  {
    id: "10015",
    name: "SmartWallet",
    category: "Fashion & Accessories",
    sold: "39",
    revenue: "$290.00",
    returnRate: "0.14%",
    rating: 4.3,
    image: photo,
  },
  {
    id: "10016",
    name: "EcoBag Classic",
    category: "Sustainable Products",
    sold: "47",
    revenue: "$400.00",
    returnRate: "0.11%",
    rating: 4.6,
    image: photo,
  },
  {
    id: "10017",
    name: "SmartScale Fit",
    category: "Electronics",
    sold: "51",
    revenue: "$620.00",
    returnRate: "0.27%",
    rating: 4.7,
    image: photo,
  },
  {
    id: "10018",
    name: "LED Strip Light",
    category: "Gadgets & Electronics",
    sold: "66",
    revenue: "$240.00",
    returnRate: "0.05%",
    rating: 4.5,
    image: photo,
  },
  {
    id: "10019",
    name: "ComfySlippers",
    category: "Fashion & Accessories",
    sold: "24",
    revenue: "$160.00",
    returnRate: "0.20%",
    rating: 4.2,
    image: photo,
  },
  {
    id: "10020",
    name: "GameZone Controller",
    category: "Toys & Games",
    sold: "36",
    revenue: "$310.00",
    returnRate: "0.16%",
    rating: 4.4,
    image: photo,
  },
  {
    id: "10021",
    name: "Wireless Charging Pad",
    category: "Electronics",
    sold: "48",
    revenue: "$420.00",
    returnRate: "0.13%",
    rating: 4.6,
    image: photo,
  },
  {
    id: "10022",
    name: "EcoFriendly Lunchbox",
    category: "Sustainable Products",
    sold: "27",
    revenue: "$190.00",
    returnRate: "0.07%",
    rating: 4.3,
    image: photo,
  },
  {
    id: "10023",
    name: "Bluetooth Fitness Tracker",
    category: "Gadgets & Electronics",
    sold: "53",
    revenue: "$560.00",
    returnRate: "0.21%",
    rating: 4.7,
    image: photo,
  },
  {
    id: "10024",
    name: "Reusable Water Bottle",
    category: "Sustainable Products",
    sold: "42",
    revenue: "$250.00",
    returnRate: "0.10%",
    rating: 4.5,
    image: photo,
  },
];

export function ProductCategory() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const rowsPerPage = 10;

  // Filter products based on search term
  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
  const startIdx = (currentPage - 1) * rowsPerPage;
  const currentData = filteredProducts.slice(startIdx, startIdx + rowsPerPage);

  // Reset to first page when search term changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="flex justify-end">
          <div className="w-full max-w-xl flex items-center justify-between border border-foundation-white rounded-xl text-[#ABB7C2] px-2.5 py-3 cursor-pointer">
            <div className="flex items-center gap-2">
              <IoSearchSharp />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-transparent text-sm text-black"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <span>
              <LuSlidersHorizontal />
            </span>
          </div>
        </div>

        {/* Product Table */}
        <div className="border border-[#E5E5E5] rounded-2xl shadow-sm p-4 overflow-x-auto space-y-6">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="bg-[#E5E5E5] text-[#666666] text-sm rounded-2xl border">
                <TableHead className="px-4 h-12">Product</TableHead>
                <TableHead className="px-4 h-12">Category</TableHead>
                <TableHead className="px-4 h-12">Unit Sold</TableHead>
                <TableHead className="px-4 h-12">Revenue</TableHead>
                <TableHead className="px-4 h-12">Return (%)</TableHead>
                <TableHead className="px-4 h-12 text-center">Rating</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="text-[#1A1A1A]">
              {currentData.length > 0 ? (
                currentData.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium px-4 py-3 flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-8 w-8 rounded-sm object-cover"
                      />
                      {product.name}
                    </TableCell>
                    <TableCell className="px-4 py-3">
                      {product.category}
                    </TableCell>
                    <TableCell className="px-4 py-3">{product.sold}</TableCell>
                    <TableCell className="px-4 py-3">
                      {product.revenue}
                    </TableCell>
                    <TableCell className="px-4 py-3">
                      {product.returnRate}
                    </TableCell>
                    <TableCell className="text-center px-4 py-3 text-yellow-500">
                      {product.rating}{" "}
                      <span className="text-yellow-500 h-6 w-6">★</span>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-4 text-gray-500"
                  >
                    No products found matching your search
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      {/* Pagination Controls */}
      {filteredProducts.length > 0 && (
        <div className="flex items-center justify-between pt-4 px-4 text-sm text-[#666] mt-4">
          {/* Data Count */}
          <p className="text-base text-gray-600">
            Showing {startIdx + 1} to{" "}
            {Math.min(startIdx + rowsPerPage, filteredProducts.length)} of{" "}
            {filteredProducts.length} entries
          </p>

          {/* Pagination Buttons Styled Like List */}
          <ul className="flex items-center border border-foundation-white rounded-xl overflow-hidden text-base cursor-pointer">
            {/* Previous Arrow */}
            <li>
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                aria-label="Previous Page"
                className={`text-xl p-2  sm:p-4 border-r border-foundation-white text-[#FCAB3F]  cursor-pointer ${
                  currentPage === 1
                    ? "cursor-not-allowed text-gray-300"
                    : "hover:bg-[#FCAB3F] hover:text-white"
                }`}
              >
                <FaAngleLeft />
              </button>
            </li>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              const isActive = currentPage === page;
              return (
                <li key={page}>
                  <button
                    onClick={() => setCurrentPage(page)}
                    className={`p-3 sm:p-4 w-12 border-r border-foundation-white transition-colors duration-150 ${
                      isActive
                        ? "bg-[#FCAB3F] text-white"
                        : "text-black hover:bg-[#FCAB3F] hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                </li>
              );
            })}

            {/* Next Arrow */}
            <li>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                aria-label="Next Page"
                className={`text-xl p-2  sm:p-4 text-[#FCAB3F] cursor-pointer ${
                  currentPage === totalPages
                    ? "cursor-not-allowed text-gray-300"
                    : "hover:bg-[#FCAB3F] hover:text-white"
                }`}
              >
                <FaAngleRight />
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import photo from "@/assets/image/product.png";
// import { IoSearchSharp } from "react-icons/io5";
// import { LuSlidersHorizontal } from "react-icons/lu";
// import { useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// const productData = [
//   {
//     id: "10001",
//     name: "24” Monitor 4K Resolution",
//     category: "Gadgets & Electronics",
//     sold: "34",
//     revenue: "$350.00",
//     returnRate: "5%",
//     rating: 4.5,
//     image: photo,
//   },
//   {
//     id: "10002",
//     name: "Earbud Pro",
//     category: "Fashion & Accessories",
//     sold: "21",
//     revenue: "$150.00",
//     returnRate: "0.12%",
//     rating: 4.2,
//     image: photo,
//   },
//   {
//     id: "10003",
//     name: "MarketMingle",
//     category: "Home & Living",
//     sold: "44",
//     revenue: "$550.00",
//     returnRate: "0.30%",
//     rating: 4.8,
//     image: photo,
//   },
//   {
//     id: "10004",
//     name: "CartCraze",
//     category: "Toys & Games",
//     sold: "18",
//     revenue: "$180.00",
//     returnRate: "0.49%",
//     rating: 4.0,
//     image: photo,
//   },
//   {
//     id: "10005",
//     name: "BuyBliss",
//     category: "Sustainable Products",
//     sold: "38",
//     revenue: "$470.00",
//     returnRate: "0.15%",
//     rating: 4.6,
//     image: photo,
//   },
//   {
//     id: "10006",
//     name: "TechMate",
//     category: "Electronics",
//     sold: "57",
//     revenue: "$610.00",
//     returnRate: "0.25%",
//     rating: 4.7,
//     image: photo,
//   },
//   {
//     id: "10007",
//     name: "GadgetFlow",
//     category: "Accessories",
//     sold: "29",
//     revenue: "$260.00",
//     returnRate: "0.10%",
//     rating: 4.3,
//     image: photo,
//   },
//   {
//     id: "10008",
//     name: "SmartLamp Pro",
//     category: "Home & Living",
//     sold: "26",
//     revenue: "$320.00",
//     returnRate: "0.35%",
//     rating: 4.4,
//     image: photo,
//   },
//   {
//     id: "10009",
//     name: "EcoBottle",
//     category: "Sustainable Products",
//     sold: "33",
//     revenue: "$210.00",
//     returnRate: "0.08%",
//     rating: 4.1,
//     image: photo,
//   },
//   {
//     id: "10010",
//     name: "ToyTrek Car Set",
//     category: "Toys & Games",
//     sold: "40",
//     revenue: "$390.00",
//     returnRate: "0.18%",
//     rating: 4.6,
//     image: photo,
//   },
//   {
//     id: "10011",
//     name: "FlexWatch X",
//     category: "Fashion & Accessories",
//     sold: "45",
//     revenue: "$540.00",
//     returnRate: "0.28%",
//     rating: 4.9,
//     image: photo,
//   },
//   {
//     id: "10012",
//     name: "SoundBoom Speaker",
//     category: "Gadgets & Electronics",
//     sold: "62",
//     revenue: "$680.00",
//     returnRate: "0.22%",
//     rating: 4.8,
//     image: photo,
//   },
//   {
//     id: "10013",
//     name: "YogaMat Pro",
//     category: "Home & Living",
//     sold: "28",
//     revenue: "$130.00",
//     returnRate: "0.09%",
//     rating: 4.0,
//     image: photo,
//   },
//   {
//     id: "10014",
//     name: "Kid’s Puzzle Set",
//     category: "Toys & Games",
//     sold: "31",
//     revenue: "$210.00",
//     returnRate: "0.12%",
//     rating: 4.4,
//     image: photo,
//   },
//   {
//     id: "10015",
//     name: "SmartWallet",
//     category: "Fashion & Accessories",
//     sold: "39",
//     revenue: "$290.00",
//     returnRate: "0.14%",
//     rating: 4.3,
//     image: photo,
//   },
//   {
//     id: "10016",
//     name: "EcoBag Classic",
//     category: "Sustainable Products",
//     sold: "47",
//     revenue: "$400.00",
//     returnRate: "0.11%",
//     rating: 4.6,
//     image: photo,
//   },
//   {
//     id: "10017",
//     name: "SmartScale Fit",
//     category: "Electronics",
//     sold: "51",
//     revenue: "$620.00",
//     returnRate: "0.27%",
//     rating: 4.7,
//     image: photo,
//   },
//   {
//     id: "10018",
//     name: "LED Strip Light",
//     category: "Gadgets & Electronics",
//     sold: "66",
//     revenue: "$240.00",
//     returnRate: "0.05%",
//     rating: 4.5,
//     image: photo,
//   },
//   {
//     id: "10019",
//     name: "ComfySlippers",
//     category: "Fashion & Accessories",
//     sold: "24",
//     revenue: "$160.00",
//     returnRate: "0.20%",
//     rating: 4.2,
//     image: photo,
//   },
//   {
//     id: "10020",
//     name: "GameZone Controller",
//     category: "Toys & Games",
//     sold: "36",
//     revenue: "$310.00",
//     returnRate: "0.16%",
//     rating: 4.4,
//     image: photo,
//   },
//   {
//     id: "10021",
//     name: "Wireless Charging Pad",
//     category: "Electronics",
//     sold: "48",
//     revenue: "$420.00",
//     returnRate: "0.13%",
//     rating: 4.6,
//     image: photo,
//   },
//   {
//     id: "10022",
//     name: "EcoFriendly Lunchbox",
//     category: "Sustainable Products",
//     sold: "27",
//     revenue: "$190.00",
//     returnRate: "0.07%",
//     rating: 4.3,
//     image: photo,
//   },
//   {
//     id: "10023",
//     name: "Bluetooth Fitness Tracker",
//     category: "Gadgets & Electronics",
//     sold: "53",
//     revenue: "$560.00",
//     returnRate: "0.21%",
//     rating: 4.7,
//     image: photo,
//   },
//   {
//     id: "10024",
//     name: "Reusable Water Bottle",
//     category: "Sustainable Products",
//     sold: "42",
//     revenue: "$250.00",
//     returnRate: "0.10%",
//     rating: 4.5,
//     image: photo,
//   },
// ];

// export function ProductCategory() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 10;

//   const totalPages = Math.ceil(productData.length / rowsPerPage);
//   const startIdx = (currentPage - 1) * rowsPerPage;
//   const currentData = productData.slice(startIdx, startIdx + rowsPerPage);

//   return (
//     <div>
//       <div className="space-y-6">
//         {/* Search Bar */}
//         <div className="flex justify-end">
//           <div className="w-full max-w-xl flex items-center justify-between border border-foundation-white rounded-xl text-[#ABB7C2] px-2.5 py-3 cursor-pointer">
//             <div className="flex items-center gap-2">
//               <IoSearchSharp />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="outline-none bg-transparent text-sm"
//               />
//             </div>
//             <span>
//               <LuSlidersHorizontal />
//             </span>
//           </div>
//         </div>

//         {/* Product Table */}
//         <div className="border border-[#E5E5E5] rounded-2xl shadow-sm p-4 overflow-x-auto space-y-6">
//           <Table className="w-full">
//             <TableHeader>
//               <TableRow className="bg-[#E5E5E5] text-[#666666] text-sm rounded-2xl border">
//                 <TableHead className="px-4 h-12">Product</TableHead>
//                 <TableHead className="px-4 h-12">Category</TableHead>
//                 <TableHead className="px-4 h-12">Unit Sold</TableHead>
//                 <TableHead className="px-4 h-12">Revenue</TableHead>
//                 <TableHead className="px-4 h-12">Return (%)</TableHead>
//                 <TableHead className="px-4 h-12 text-center">Rating</TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody className="text-[#1A1A1A]">
//               {currentData.map((product) => (
//                 <TableRow key={product.id}>
//                   <TableCell className="font-medium px-4 py-3 flex items-center gap-3">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="h-8 w-8 rounded-sm object-cover"
//                     />
//                     {product.name}
//                   </TableCell>
//                   <TableCell className="px-4 py-3">
//                     {product.category}
//                   </TableCell>
//                   <TableCell className="px-4 py-3">{product.sold}</TableCell>
//                   <TableCell className="px-4 py-3">{product.revenue}</TableCell>
//                   <TableCell className="px-4 py-3">
//                     {product.returnRate}
//                   </TableCell>
//                   <TableCell className="text-center px-4 py-3 text-yellow-500">
//                     {product.rating}{" "}
//                     <span className="text-yellow-500 h-6 w-6">★</span>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//       {/* Pagination Controls */}
//       <div className="flex items-center justify-between pt-4 px-4 text-sm text-[#666] mt-4">
//         {/* Data Count */}
//         <p className="text-base text-gray-600">
//           Showing {startIdx + 1} to {startIdx + currentData.length} of{" "}
//           {productData.length} entries
//         </p>

//         {/* Pagination Buttons Styled Like List */}
//         <ul className="flex items-center border border-foundation-white rounded-xl overflow-hidden text-base cursor-pointer">
//           {/* Previous Arrow */}
//           <li>
//             <button
//               onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//               disabled={currentPage === 1}
//               aria-label="Previous Page"
//               className={`text-xl p-2  sm:p-4 border-r border-foundation-white text-[#FCAB3F]  cursor-pointer ${
//                 currentPage === 1
//                   ? "cursor-not-allowed text-gray-300"
//                   : "hover:bg-[#FCAB3F] hover:text-white"
//               }`}
//             >
//               <FaAngleLeft />
//             </button>
//           </li>

//           {/* Page Numbers */}
//           {[...Array(totalPages)].map((_, index) => {
//             const page = index + 1;
//             const isActive = currentPage === page;
//             return (
//               <li key={page}>
//                 <button
//                   onClick={() => setCurrentPage(page)}
//                   className={`p-3 sm:p-4 w-12 border-r border-foundation-white transition-colors duration-150 ${
//                     isActive
//                       ? "bg-[#FCAB3F] text-white"
//                       : "text-black hover:bg-[#FCAB3F] hover:text-white"
//                   }`}
//                 >
//                   {page}
//                 </button>
//               </li>
//             );
//           })}

//           {/* Next Arrow */}
//           <li>
//             <button
//               onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//               disabled={currentPage === totalPages}
//               aria-label="Next Page"
//               className={`text-xl p-2  sm:p-4 text-[#FCAB3F] cursor-pointer ${
//                 currentPage === totalPages
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
