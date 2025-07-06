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
        <div className="absolute top-[120px] md:top-[350px] lg:top-[400px] left-0 w-full">
          <CommonWrapper>
            <div className="bg-white rounded-[20px] lg:shadow-xl md:shadow-md shadow p-6 md:p-[40px] flex flex-col md:flex-row items-center justify-between gap-6 h-auto md:h-[450px]">
              {/* Left: Company Info */}
              <div className="flex flex-col items-center md:items-start w-full md:w-auto">
                {/* Logo */}
                <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[164px] lg:h-[164px] rounded-full flex items-center justify-center overflow-hidden">
                  <img src={icon} alt="Logo" className="object-contain" />
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
                </div>))}
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
            </div>
            </div>
          </CommonWrapper>
        </div>
      </div>
    <OverView/>
    </div>
  );
};

export default OverViewBanner;
