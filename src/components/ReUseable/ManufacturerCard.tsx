import { Card, CardContent } from "@/components/ui/card";
import { Manufacturer } from "@/lib/Manufacturer/manufacturer";
import { Star } from "lucide-react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import image1 from "../../assets/Manufacturer/storefront.svg";

const ManufacturerCard = ({ manufacturer }: { manufacturer: Manufacturer }) => {
  return (
    <Card className="w-full max-w-[640px] mx-auto p-3 md:p-10 lg:p-10 rounded-xl border border-gray-200 bg-gradient-to-r from-gray-50/20 to-gray-100/20 shadow-sm hover:shadow-md transition">
      <CardContent className="flex flex-col gap-6 p-0">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          {/* Left - Logo & Info */}
          <div className="flex gap-4 items-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#E8EAED] p-3 rounded-full flex justify-center items-center">
              <img
                alt="shop-icon"
                src={image1}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </div>
            <div className="flex flex-col gap-1 text-start items-start justify-center">
              <h4 className="text-md lg:text-lg font-semibold text-[#1A1A1A]">
                {manufacturer.shopName}
              </h4>
              <div className="flex text-xs lg:text-sm text-[#666666] gap-1">
                <IoLocationOutline className="w-4 h-5" />
                {manufacturer.location}
              </div>
            </div>
          </div>

          {/* Right - Rating & Link */}
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-1 bg-white shadow px-2 py-1 rounded-md text-sm">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>{manufacturer.rating}</span>
            </div>
            <Link to="/overview">
              <button className="text-sm text-[#F04436] underline cursor-pointer">
                Details
              </button>
            </Link>
          </div>
        </div>

        {/* Image Grid - Show 4 images on desktop, 3 on mobile */}
        <div className="grid max-[767px]:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5">
          {manufacturer.images.slice(0, 4).map((img: string, index: number) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index + 1}`}
              className={`w-full h-[120px] object-cover rounded-[12px] ${
                index === 3 ? "max-md:hidden" : ""
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ManufacturerCard;
