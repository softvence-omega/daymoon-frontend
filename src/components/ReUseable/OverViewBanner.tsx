import CommonWrapper from "@/common/CommonWrapper";
import banner from "../../assets/Reuseable/overview.png";
import icon from "../../assets/Reuseable/techIcon.svg";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const OverViewBanner = () => {
  return (
    <div className="relative w-full bg-white min-h-screen">
      {/* Banner Background */}
      <img
        src={banner}
        alt="Banner"
        className="w-full h-[600px] object-cover"
      />

      {/* Overlapping Card */}
      <div className="absolute top-[400px] left-0 w-full z-10">
        <CommonWrapper>
          <div className="bg-white rounded-2xl shadow-xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 h-[450px]">
            {/* Left: Company Info */}
            <div className="flex items-center gap-6 flex-1 min-w-[280px]">
              {/* Logo */}
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src={icon} alt="Logo" className="w-16 h-16 object-contain" />
              </div>

              {/* Text Info */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  TechCraft Industries
                </h2>
                <p className="text-sm text-gray-500 mb-1">Manufacturer</p>
                <div className="mb-2">
                  <span className="bg-[#E6F7EC] text-[#1BA97C] text-xs font-medium px-3 py-[3px] rounded-md">
                    Verified Supplier
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm mb-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#FFD600] text-base" />
                  ))}
                  <span className="text-gray-700 font-medium ml-2">4.5</span>
                  <span className="text-gray-400 ml-1">(234)</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 gap-1">
                  <MdLocationOn className="text-gray-400 text-lg" />
                  Sunnyvale, California, USA
                </div>
              </div>
            </div>

            {/* Middle: Stats */}
            <div className="flex flex-1 justify-center gap-8 border-x border-gray-200 px-6 min-w-[340px]">
              {[
                { value: "12", label: "Years" },
                { value: "1,250", label: "Orders" },
                { value: "42", label: "Countries" },
                { value: "2H", label: "Responses" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#1A2746]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col gap-3 min-w-[180px] mt-2 md:mt-0">
              <button className="bg-[#1A2746] text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-[#11192f] transition">
                Contact Supplier
              </button>
              <button className="border border-[#1A2746] text-[#1A2746] rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-gray-50 transition">
                Send Inquiry
              </button>
            </div>
          </div>
        </CommonWrapper>
      </div>
    </div>
  );
};

export default OverViewBanner;
