import hero from "../../assets/landing/hero.png";
import { IoIosPlayCircle } from "react-icons/io";
import SellerHeader from "./SellerHeader";
import CommonWrapper from "@/common/CommonWrapper";
import CommonButton from "@/common/CommonButton";
import ButtonWithIcon from "@/common/ButtonWithIcon";
const Hero = () => {
  return (
    <CommonWrapper>
      <div className="flex flex-col-reverse w-full lg:flex-row ">
        <div className="w-full lg:w-1/2 pt-12 pb-6  text-[#12141D] text-center md:text-left ">
          <SellerHeader className="lg:leading-[67px] lg:tracking-[-1.21px]">
            Scale up your business and go global with one membership
          </SellerHeader>
          <p className="max-w-xl mx-auto mt-4 text-lg opacity-80 md:mx-0">
            Connect with global buyers, grow your brand, and sell smarter with
            powerful tools on our trusted B2B marketplace platform.
          </p>
          <div className="flex flex-col items-center justify-center md:justify-start gap-4 mt-6 sm:flex-row ">
            <CommonButton className="bg-sunset-orange text-white py-3 px-10 rounded-full hover:bg-[#e73333] transition cursor-pointer max-sm:w-full">
              Start selling now
            </CommonButton>
            <ButtonWithIcon className="flex justify-center items-center gap-2 border-2 border-[#12141D] text-[#12141D]  py-3 px-10 rounded-full hover:bg-gray-100 transition cursor-pointer  max-sm:w-full">
              <IoIosPlayCircle size={20} />
              Watch A Demo
            </ButtonWithIcon>
          </div>
        </div>
        {/* Hero Image */}
        <div className="w-full lg:w-1/2 ">
          <img
            src={hero}
            alt="Hero graphic"
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Hero;
