import Title from "../Shared/Title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import Card from "./Card";

const PromotionCard = () => {
  return (
    <div className="w-full ">
      {/* Top Section: Title + Action Buttons */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center mb-10 w-full">
        {/* Title */}
        <div className="w-full lg:flex-1">
          <Title
            title="Promotions!"
            subTitle="Create promotional offers to increase visibility and drive more sales.."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto">
          {/* Add New Product Button */}
          <Button
            asChild
            className="h-[60px] w-full sm:w-auto px-6 md:px-10 py-[10px] gap-2 rounded-[20px] bg-[var(--color-sunset-orange)] text-white flex items-center justify-center text-[16px] md:text-[18px] font-medium font-poppins leading-[130%] shadow-md hover:shadow-lg transition"
          >
            <Link to="" className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Create Promotion
            </Link>
          </Button>
        </div>
      </div>

      {/* Card Component */}
      <Card />
    </div>
  );
};

export default PromotionCard;
