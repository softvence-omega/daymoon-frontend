import Title from "../Shared/Title";
import { Plus } from "lucide-react";
import { TfiImport } from "react-icons/tfi";
import ButtonWithIcon from "@/common/ButtonWithIcon";
import { useNavigate } from "react-router-dom";
const ProductNavbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/seller-dashboard/add-product");
  };
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center mb-10 w-full">
        {/* Title */}
        <div className="w-full lg:flex-1">
          <Title
            title="Manage your Products!"
            subTitle="View, Edit, Add, and Delete your product listings.."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto">
          <ButtonWithIcon className=" !bg-gray-100 border-none  justify-center flex flex-row-reverse ">
            <TfiImport />
            Export Data
          </ButtonWithIcon>

          <ButtonWithIcon
            onClick={handleClick}
            className=" flex flex-row-reverse justify-center text-white border-transparent !bg-sunset-orange f"
          >
            <Plus />
            Add New Product
          </ButtonWithIcon>
        </div>
      </div>
    </div>
  );
};

export default ProductNavbar;
