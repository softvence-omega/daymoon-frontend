import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import photo from "@/assets/image/product.png";

const productData = [
  {
    id: "10001",
    orderId: "ORD-2025-347",
    name: "Emily Carter",
    price: "$250.00",
    sold: "34",
    revenue: "$350.00",
    image: photo,
  },
  {
    id: "10002",
    orderId: "ORD-2025-482",
    name: "Michael Smith",
    price: "$150.00",
    sold: "34",
    revenue: "$350.00",
    image: photo,
  },
  {
    id: "10003",
    orderId: "ORD-2025-763",
    name: "Sarah Brown",
    price: "$350.00",
    sold: "34",
    revenue: "$350.00",
    image: photo,
  },
  {
    id: "10004",
    orderId: "ORD-2025-764",
    name: "Alex Johnson",
    price: "$450.00",
    sold: "34",
    revenue: "$350.00",
    image: photo,
  },
  {
    id: "10005",
    orderId: "ORD-2025-765",
    name: "Alex Johnson",
    price: "$550.00",
    sold: "348",
    revenue: "$350.00",
    image: photo,
  },
];

export function TopSellingProducts() {
  return (
    <div className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-2xl shadow-sm p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg md:text-2xl font-medium text-[#484848]">
            Top Selling Products
          </h1>
        </div>
        <div>
          <button className="underline text-sm md:text-base text-[#F04436] font-medium">
            View All
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table className="w-full min-w-[600px] md:min-w-full">
          <TableHeader>
            <TableRow className="text-[#666666]">
              <TableHead className="w-[160px] md:w-[200px] px-2 md:px-4 py-2">
                Product
              </TableHead>
              <TableHead className="text-center px-2 md:px-4 py-2">
                Price
              </TableHead>
              <TableHead className="text-center px-2 md:px-4 py-2">
                Sold
              </TableHead>
              <TableHead className="text-right pr-4 md:pr-8 py-2">
                Revenue
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-[#1A1A1A]">
            {productData.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="px-2 md:px-4 py-3 flex items-center gap-2 md:gap-3">
                  <img
                    src={product.image}
                    alt=""
                    className="h-5 w-5 md:h-7 md:w-7"
                  />
                  <span className="truncate max-w-[100px] md:max-w-none">
                    {product.name}
                  </span>
                </TableCell>
                <TableCell className="text-center px-2 md:px-4 py-3">
                  {product.price}
                </TableCell>
                <TableCell className="text-center px-2 md:px-4 py-3">
                  {product.sold.length > 5
                    ? `${product.sold.substring(0, 5)}...`
                    : product.sold}
                </TableCell>
                <TableCell className="text-right pr-4 md:pr-8 py-3">
                  {product.revenue}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import photo from "@/assets/image/product.png";

// const productData = [
//   {
//     id: "10001",
//     orderId: "ORD-2025-347",
//     name: "Emily Carter",
//     price: "$250.00",
//     sold: "34",
//     revenue: "$350.00",
//     image: photo, // Sample placeholder
//   },
//   {
//     id: "10002",
//     orderId: "ORD-2025-482",
//     name: "Michael Smith",
//     price: "$150.00",
//     sold: "34",
//     revenue: "$350.00",
//     image: photo,
//   },
//   {
//     id: "10003",
//     orderId: "ORD-2025-763",
//     name: "Sarah Brown",
//     price: "$350.00",
//     sold: "34",
//     revenue: "$350.00",
//     image: photo,
//   },
//   {
//     id: "10004",
//     orderId: "ORD-2025-764",
//     name: "Alex Johnson",
//     price: "$450.00",
//     sold: "34",
//     revenue: "$350.00",
//     image: photo,
//   },
//   {
//     id: "10005",
//     orderId: "ORD-2025-765",
//     name: "Alex Johnson",
//     price: "$550.00",
//     sold: "34896754",
//     revenue: "$350.00",
//     image: photo,
//   },
// ];

// export function TopSellingProducts() {
//   return (
//     <div className="border border-[#E5E5E5] rounded-2xl shadow-sm p-4 overflow-x-auto space-y-6">
//       <div className="flex justify-between items-center ">
//         <div>
//           <h1 className="text-[24px] leading-[130%] font-medium text-[#484848] ">
//             Top Selling Products
//           </h1>
//         </div>

//         <div>
//           <button className="underline text-[#F04436] text-base font-sans font-medium cursor-pointer">
//             View All
//           </button>
//         </div>
//       </div>

//       <Table className="w-full">
//         <TableHeader>
//           <TableRow className="text-[#666666]">
//             <TableHead className="w-[100px] px-4 py-2">Product</TableHead>
//             <TableHead className="text-center px-4 py-2">Price</TableHead>
//             <TableHead className="text-center px-4 py-2">Sold</TableHead>
//             <TableHead className="text-right pr-8 py-4">Revenue</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody className="text-[#1A1A1A] text-base font-normal">
//           {productData.map((product) => (
//             <TableRow key={product.id}>
//               <TableCell className=" px-4 py-3 flex justify-start items-center gap-3">
//                 <img src={product.image} alt="" height={25} width={24} />
//                 {product.name}
//               </TableCell>
//               <TableCell className="text-center px-4 py-4">
//                 {product.price}
//               </TableCell>
//               <TableCell className="text-center px-4 py-4">
//                 {product.sold}
//               </TableCell>
//               {/* hidden xl:block */}
//               <TableCell className="text-right pr-8 py-4">
//                 {product.revenue}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TableCell colSpan={4}></TableCell>
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </div>
//   );
// }
