import Title from "../Shared/Title";
import { Plus } from "lucide-react";
import ButtonWithIcon from "@/common/ButtonWithIcon";
import { useNavigate } from "react-router-dom";
const ReviewNavbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/seller-dashboard/reviews");
  };
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center mb-10 w-full">
        {/* Title */}
        <div className="w-full lg:flex-1">
          <Title
            title="Promotions"
            subTitle="Create promotional offers to increase visibility and drive more sales."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto">
          <ButtonWithIcon
            onClick={handleClick}
            className=" flex  text-white border-transparent !bg-sunset-orange f"
          >
            <Plus />
            Create Promotion
          </ButtonWithIcon>
        </div>
      </div>
    </div>
  );
};

export default ReviewNavbar;
