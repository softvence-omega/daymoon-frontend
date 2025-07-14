import ButtonWithIcon from "@/common/ButtonWithIcon";
import CommonHeader from "@/common/CommonHeader";
import SubHeader from "@/common/SubHeader";
import { Button } from "@/components/ui/button";
import { EyeOff, Pencil, Trash2 } from "lucide-react";

interface ProductData {
  id: string;
  name: string;
  sku: string;
  status: "Active" | "Draft" | "Archived";
  createdOn: string;
  lastUpdated: string;
  category: string[];
  visibility: "Public" | "Private";
  price: number;
  stock: number;
  rating: number;
  reviews: number;
  sales: number;
}
const productData: ProductData = {
  id: "1",
  name: "Bluetooth Wireless Earbuds",
  sku: "SP-X2023-BLK",
  status: "Active",
  createdOn: "20 June, 2025",
  lastUpdated: "20 June, 2025",
  category: ["Electronics", "Audio", "Earbuds"],
  visibility: "Public",
  price: 89.99,
  stock: 247,
  rating: 4.8,
  reviews: 1247,
  sales: 3420,
};
const ProductBar = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200";
      case "Draft":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Archived":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  return (
    <div>
      <div className="bg-white rounded-xl border border-foundation-white p-8 mb-8">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-6 gap-6">
          <div className="flex-1 ">
            <div className="flex items-center space-x-3 mb-2">
              <CommonHeader className="!text-black">
                {productData.name}
              </CommonHeader>
              <Button
                className={`${getStatusColor(
                  productData.status
                )} font-medium rounded-lg`}
              >
                {productData.status}
              </Button>
            </div>
            <SubHeader>SKU: {productData.sku}</SubHeader>

            <div className=" flex flex-col lg:flex-row gap-8 pt-6 ">
              <div>
                <SubHeader className="">Created On</SubHeader>
                <SubHeader className=" !text-black">
                  {productData.createdOn}
                </SubHeader>
              </div>
              <div>
                <SubHeader className="">Last Updated</SubHeader>
                <SubHeader className=" !text-black">
                  {productData.lastUpdated}
                </SubHeader>
              </div>
              <div>
                <SubHeader className="">Category</SubHeader>
                <SubHeader className=" !text-black">
                  {productData.category.join(" > ")}
                </SubHeader>
              </div>
              <div>
                <SubHeader className="">Visibility</SubHeader>
                <SubHeader className=" !text-black">
                  {productData.visibility}
                </SubHeader>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ButtonWithIcon
              className="flex justify-center hover:text-white hover:bg-catalien-blue  not-md:w-full    "
              icon={EyeOff}
            >
              Unpublish
            </ButtonWithIcon>
            <ButtonWithIcon
              className="flex justify-center hover:text-white hover:bg-catalien-blue  not-md:w-full"
              icon={Trash2}
            >
              Delete
            </ButtonWithIcon>
            <ButtonWithIcon
              className="hover:text-white hover:bg-catalien-blue   flex justify-center not-md:w-full"
              icon={Pencil}
            >
              Edit
            </ButtonWithIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBar;
