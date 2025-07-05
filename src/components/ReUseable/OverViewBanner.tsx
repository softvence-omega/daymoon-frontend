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
        className="w-full h-[600px] object-cover"
      />

      {/* Overlapping Card */}
      <div className="absolute top-[400px] left-0 w-full z-10">
        <CommonWrapper>
          <div className="bg-white rounded-[20px] shadow-xl p-[40px] flex flex-col md:flex-row items-center justify-between gap-6 h-[450px] ">
            {/* Left: Company Info */}
            <div>
              {/* Logo */}
              <div className="w-[164px] h-[164px] rounded-full flex items-center justify-center overflow-hidden">
                <img src={icon} alt="Logo" className=" object-contain" />
              </div>
              {/* Text Info */}
              <div className="mt-[16px]">
                <h2 className="text-[24px] font-semibold leading-[120%]">
                  TechCraft Industries
                </h2>
                <p className="text-[14px] font-normal leading-[160%] py-[12px] ">
                  Manufacturer
                </p>
                <div className="mb-2">
                  <span
                    className="bg-[rgba(8,173,54,0.10)] text-[#08AD36] text-xs font-medium 
                  px-[10px] py-[10px] rounded-[12px]"
                  >
                    Verified Supplier
                  </span>
                </div>
                <div className="flex items-center justify-center gap-[6.50px] text-sm py-[12px]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-[#FFC633] text-base w-[22px] h-[22px] "
                    />
                  ))}
                  <div className="flex items-center justify-center">
                    <span className="text-jet-black font-[500] text-[16px] ml-[24px]">
                      4.5
                    </span>
                    <span className="text-[16px] text-[#666] ml-1 font-[400]">
                      (234)
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-[#484848] gap-1">
                  <MdLocationOn className=" h-[24px] w-[24px] " />
                  <p className="text-sm font-normal leading-[1.6]">
                    Sunnyvale, California, USA
                  </p>
                </div>
                <div className="flex items-center text-sm text-[#484848] gap-1">
                  <MdLocationOn className=" h-[24px] w-[24px] " />
                  <p className="text-sm font-normal leading-[1.6]">
                    Sunnyvale, California, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Middle: Stats */}
            <div className="flex flex-1 justify-center gap-8 px-6 min-w-[340px] divide-x divide-[#666]">
              {[
                { value: "12", label: "Years" },
                { value: "1,250", label: "Orders" },
                { value: "42", label: "Countries" },
                { value: "2H", label: "Responses" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center px-6" // padding for spacing between divided items
                >
                  <div className=" text-[24px] lg:text-[48px] text-[#192D4E] font-semibold lg:leading-[120%] lg:tracking-[-0.06em] uppercase">
                    {stat.value}
                  </div>
                  <div className="text-[14px] text-jet-black">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Right: Eight Buttons & Icon Section */}
            <div className="flex flex-col justify-between gap-3 min-w-[220px] mt-2 md:mt-0 h-full">
              {/* Eight Buttons */}
              <div className="flex flex-col gap-4">
                <button className="bg-[#192D4E] border-[#192D4E] text-white rounded-[20px] px-[40px] py-[10px] text-[18px] font-[500] hover:bg-[#192D4E] transition flex items-center gap-[10px] justify-center ">
                  <img className="w-[24px] h-[24px] " src={sms} alt="" />{" "}
                  Contact Supplier
                </button>
                <button
                  className="border border-[#192D4E] text-[#192D4E] rounded-[20px] px-[40px] 
                py-[10px] text-[18px] font-[500] hover:bg-gray-50 transition flex items-center gap-[10px] justify-center "
                >
                  <img className="w-[24px] h-[24px] " src={mail} alt="" /> Send
                  Inquiry
                </button>
              </div>
              {/* Icon Section */}
              <div className="flex items-center gap-[20px] justify-end">
                <img src={fav} alt="Favorite" className="w-[24px] h-[24px]" />
                <img src={share} alt="Share" className="w-[24px] h-[24px]" />
              </div>
              {/* Icon Section */}
              <div className="flex items-center gap-[20px] justify-end">
                <img src={fav} alt="Favorite" className="w-[24px] h-[24px]" />
                <img src={share} alt="Share" className="w-[24px] h-[24px]" />
              </div>
            </div>
            </div>
          </CommonWrapper>
        </div>
      </div>
      
    </div>
    <OverView/>
    </div>
  );
};

export default OverViewBanner;
