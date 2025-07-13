import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TfiImport } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Title from "../Shared/Title";
import Card from "./Card";

const SellerCard = () => {
  return (
    <div className="w-full ">
      {/* Top Section: Title + Action Buttons */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center mb-10 w-full">
        {/* Title */}
        <div className="w-full lg:flex-1">
          <Title
            title="Welcome back, Savannah!"
            subTitle="Lorem ipsum dolor sit amet consectetur. Urna tempor morbi egestas cras arcu pellentesque."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto">
          <Button
            asChild
            className="h-[50px] w-full sm:w-auto px-6 text-black  rounded-[20px] flex items-center justify-center text-[16px] md:text-[18px] font-medium font-poppins leading-[130%] transition shadow-none"
          >
            <Link to="" className="flex items-center gap-2 text-lg">
              Export Data <TfiImport className="w-[24px] h-[24px] font-bold" />
            </Link>
          </Button>

          {/* Add New Product Button */}
          <Button
            asChild
            className="h-[50px] w-full sm:w-[237px] px-6 md:px-10 py-[10px] gap-2 rounded-[20px] bg-[var(--color-sunset-orange)] text-white flex items-center justify-center text-[16px] md:text-[18px] font-medium font-poppins leading-[130%] shadow-md hover:shadow-lg transition"
          >
            <Link
              to="/seller-dashboard/add-product"
              className="flex items-center gap-2 text-lg"
            >
              Add New Product
              <Plus className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Card Component */}
      <Card />
    </div>
  );
};

export default SellerCard;
