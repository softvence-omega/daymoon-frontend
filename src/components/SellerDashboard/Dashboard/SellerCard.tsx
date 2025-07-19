import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TfiImport } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import Title from "../Shared/Title";
import Card from "./Card";
import ButtonWithIcon from "@/common/ButtonWithIcon";

const SellerCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/seller-dashboard/add-product");
  };

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

        <div className="flex flex-col sm:flex-col lg:flex-row gap-4 sm:gap-6 w-full lg:w-auto">
          {/* Export Data Button */}
          <Button
            asChild
            className="h-[48px] sm:h-[50px] w-full sm:w-auto px-4 sm:px-6 text-black rounded-[16px] sm:rounded-[20px] flex items-center justify-center text-sm sm:text-base md:text-[18px] font-medium font-poppins leading-[130%] transition shadow-none"
          >
            <Link
              to=""
              className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg"
            >
              Export Data
              <TfiImport className="w-4 h-4 sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]" />
            </Link>
          </Button>

          {/* Add New Product Button */}
          <ButtonWithIcon
            onClick={handleClick}
            className="flex flex-row-reverse justify-center text-white border-transparent !bg-sunset-orange"
          >
            <Plus />
            Add New Product
          </ButtonWithIcon>

          {/* <Button
            asChild
            // className="h-[48px] sm:h-[50px] w-full sm:w-[200px] md:w-[237px] px-4 sm:px-6 md:px-10 py-2 sm:py-[10px] gap-1 sm:gap-2 rounded-[16px] sm:rounded-[20px] bg-[var(--color-sunset-orange)] text-white flex items-center justify-center text-sm sm:text-base md:text-[18px] font-medium font-poppins leading-[130%] shadow-md hover:shadow-lg transition "
            className="h-[48px] sm:h-[50px] w-full sm:w-auto px-4 sm:px-6 bg-[var(--color-sunset-orange)] text-white rounded-[16px] sm:rounded-[20px] flex items-center justify-center text-sm sm:text-base md:text-[18px] font-medium font-poppins leading-[130%] transition shadow-none"
          >
            <Link
              to="/seller-dashboard/add-product"
              className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg"
            >
              Add New Product
              <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </Link>
          </Button> */}
        </div>
      </div>

      {/* Card Component */}
      <Card />
    </div>
  );
};

export default SellerCard;
