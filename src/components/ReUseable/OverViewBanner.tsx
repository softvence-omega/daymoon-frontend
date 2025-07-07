import CommonWrapper from "@/common/CommonWrapper";
import banner from "../../assets/Reuseable/overview.png";
import icon from "../../assets/Reuseable/techIcon.svg";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import fav from "../../assets/Icon/favorite.svg";
import share from "../../assets/Icon/share.svg";
import mail from "../../assets/Icon/inquiry-mail 1.svg";
import sms from "../../assets/Icon/textsms.svg";
import OverView from "./OverView";

const OverViewBanner = () => {
  return (
    <div>
      <div className="relative w-full bg-white min-h-screen">
        {/* Banner Background */}
        <img
          src={banner}
          alt="Banner"
          className="w-full h-[350px] md:h-[400px] lg:h-[600px] object-cover"
        />

        {/* Overlapping Card */}
        <div className="absolute top-[120px] md:top-[350px] lg:top-[400px] left-0 w-full">
          <CommonWrapper>
            <div className="bg-white rounded-[20px] lg:shadow-xl md:shadow-md shadow p-6 md:p-[40px] flex flex-col md:flex-row items-center justify-between gap-6 h-auto md:h-[450px]">
              {/* Left: Company Info */}
              <div className="flex flex-col items-center md:items-start w-full md:w-auto">
                {/* Logo */}
                <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[164px] lg:h-[164px] rounded-full flex items-center justify-center overflow-hidden">
                  <img src={icon} alt="Logo" className="object-contain" />
                </div>
                {/* Text Info */}
                <div className="mt-4 text-center md:text-left">
                  <h2 className="text-[20px] md:text-[24px] font-semibold leading-[120%]">
                    TechCraft Industries
                  </h2>
                  <p className="text-[14px] font-normal leading-[160%] py-2 md:py-[12px]">
                    Manufacturer
                  </p>
                  <div className="mb-2">
                    <span
                      className="bg-[rgba(8,173,54,0.10)] text-[#08AD36] text-xs font-medium 
                      px-[10px] py-[6px] md:py-[10px] rounded-[12px]"
                    >
                      Verified Supplier
                    </span>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-1 text-sm py-2 md:py-[12px]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-[#FFC633] w-[18px] h-[18px] md:w-[22px] md:h-[22px]"
                        />
                      ))}

                      {/* Group numbers properly aligned */}
                      <div className="flex items-center ml-4 gap-1">
                        <span className="text-jet-black font-medium text-[14px] md:text-[16px] leading-[1] flex items-center">
                          4.5
                        </span>
                        <span className="text-[#666] font-normal text-[14px] md:text-[16px] leading-[1] flex items-center">
                          (234)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-[#484848] gap-1">
                      <MdLocationOn className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
                      <p className="text-sm font-normal leading-[1.6]">
                        Sunnyvale, California, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Middle: Stats */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-0 md:px-6 min-w-0 w-full md:w-auto md:flex-1 md:divide-x divide-[#666] my-6 md:my-0">
                {[
                  { value: "12", label: "Years" },
                  { value: "1,250", label: "Orders" },
                  { value: "42", label: "Countries" },
                  { value: "2H", label: "Responses" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center px-2 md:px-6 flex-1 min-w-[100px] md:flex-none"
                  >
                    <div className="text-[20px] md:text-[24px] lg:text-[32px] xl:text-[48px] text-[#192D4E] font-semibold leading-[120%] tracking-[-0.06em] uppercase">
                      {stat.value}
                    </div>
                    <div className="text-[14px] text-jet-black">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Eight Buttons & Icon Section */}
              <div className="flex flex-col justify-between gap-3 w-full md:w-auto md:min-w-[220px] mt-2 md:mt-0 h-full">
                {/* Eight Buttons */}
                <div className="flex flex-col gap-3 md:gap-4">
                  <button className="bg-[#192D4E] border-[#192D4E] text-white rounded-[20px] px-4 py-2 md:px-[40px] md:py-[10px] text-[16px] md:text-[18px] font-[500] hover:bg-[#192D4E] transition flex items-center gap-2 justify-center cursor-pointer">
                    <img
                      className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                      src={sms}
                      alt=""
                    />
                    <span>Contact Supplier</span>
                  </button>
                  <button
                    className="border border-[#192D4E] text-[#192D4E] rounded-[20px] px-4 py-2 md:px-[40px] 
                    md:py-[10px] text-[16px] md:text-[18px] font-[500] hover:bg-gray-50 transition flex items-center gap-2 justify-center cursor-pointer"
                  >
                    <img
                      className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                      src={mail}
                      alt=""
                    />
                    <span>Send Inquiry</span>
                  </button>
                </div>
                {/* Icon Section */}
                <div className="flex items-center gap-4 md:gap-[20px] justify-center md:justify-end mt-4 md:mt-0">
                  <img
                    src={fav}
                    alt="Favorite"
                    className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] cursor-pointer"
                  />
                  <img
                    src={share}
                    alt="Share"
                    className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </CommonWrapper>
        </div>
      </div>
      <OverView />
    </div>
  );
};

export default OverViewBanner;