import Title from "../Shared/Title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import invoice from "@/assets/Icon/invoice.png";

const InquiryDetails = () => {
  return (
    <div>
      {/* Top Section: Title + Action Buttons */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center mb-10 w-full">
        {/* Title */}
        <div className="w-full lg:flex-1">
          <Title title="Inquiry Details" subTitle="" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto">
          <Button
            asChild
            className=" [60px] w-full md:w-auto h-12 px-6 py-[10px] items-center justify-center gap-2 rounded-[16px] border border-[var(--color-sunset-orange)] text-[var(--color-sunset-orange)] text-lg bg-transparent hover:bg-[#e7edf6] transition cursor-pointer"
          >
            <Link to="" className="flex items-center gap-2">
              Mark As Resolved
            </Link>
          </Button>

          {/* Add New Product Button */}
          <Button
            asChild
            className="flex items-center justify-center gap-2 h-[48px] px-6 py-[10px] rounded-[16px] bg-[#F04436] text-white text-[16px] md:text-[18px] font-sans leading-[130%] shadow-md hover:shadow-lg transition w-full sm:w-auto"
          >
            <Link to="" className="flex items-center gap-2">
              <img src={invoice} alt="" className="w-5 h-5" />
              Generate Invoice
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InquiryDetails;
