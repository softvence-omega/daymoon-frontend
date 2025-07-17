import RedButton from "@/components/ReUseable/RedButton";
import Title from "@/components/SellerDashboard/Shared/Title.tsx";
import { motion } from "motion/react";
import { IoIosHeart } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import BuyerDashboardHomeCard from "./BuyerDashboardHomeCard";

const BuyerCard = () => {
  return (
    <div className="w-full ">
      {/* Top Section: Title + Action Buttons */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center mb-10 w-full">
        {/* Title */}
        <div className="w-full lg:flex-1">
          <Title
            title="Welcome back, Marvin!"
            subTitle="Lorem ipsum dolor sit amet consectetur. Urna tempor morbi egestas cras arcu pellentesque. "
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            className="h-[60px] w-full sm:w-auto px-6 bg-white text-black  rounded-[20px] flex items-center justify-center text-[16px] md:text-[18px] font-medium font-poppins leading-[130%] transition shadow-none cursor-pointer"
          >
            <Link to="" className="flex items-center gap-2">
              Online Support{" "}
              <MdOutlineSupportAgent className="w-[24px]  h-[24px]" />
            </Link>
          </motion.button>

          {/* Add New Product Button */}

          <Link
            to="/buyer/dashboard/favorites"
            className="flex  items-center gap-2"
          >
            <RedButton title="Favorites" Icon={IoIosHeart} />
          </Link>
        </div>
      </div>

      {/* Card Component */}
      <BuyerDashboardHomeCard />
    </div>
  );
};

export default BuyerCard;
