import hero from "../../assets/landing/hero.png";
import { IoIosPlayCircle } from "react-icons/io";
import SellerHeader from "./SellerHeader";
const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center">
      <div className="w-full md:w-1/2 pt-12 pb-6 px-4 text-[#12141D] text-center md:text-left">
        <SellerHeader>
          Scale up your business and go global with one membership
        </SellerHeader>
        <p className="opacity-80 text-lg max-w-xl mx-auto md:mx-0 mt-4">
          Connect with global buyers, grow your brand, and sell smarter with
          powerful tools on our trusted B2B marketplace platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mt-6">
          <button className="bg-sunset-orange text-white py-3 px-10 rounded-full hover:bg-[#e73333] transition">
            Start selling now
          </button>
          <div className="flex items-center gap-2 border-2 border-[#12141D] text-[#12141D] py-3 px-8 rounded-full hover:bg-gray-100 transition">
            <IoIosPlayCircle size={20} />
            <button className="transition">Watch A Demo</button>
          </div>
        </div>
      </div>
      {/* Hero Image */}
      <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
        <img src={hero} alt="Hero graphic" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
