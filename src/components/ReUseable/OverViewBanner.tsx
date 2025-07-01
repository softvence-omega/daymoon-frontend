import CommonWrapper from "@/common/CommonWrapper";
import banner from "../../assets/Reuseable/overview.png";
import icon from "../../assets/Reuseable/techIcon.svg";

const OverViewBanner = () => {
  return (
    <div className="relative w-full bg-white min-h-screen">
      {/* Banner Background */}
      <img
        src={banner}
        alt="Banner"
        className="w-full h-[600px] object-cover"
      />

      {/* Overlapping Card based on CommonWrapper width */}
      <div className="absolute top-[500px] left-0 w-full z-10">
        <CommonWrapper>
          <div className="h-[450px] bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between px-6 py-8">
            {/* Left: Logo & Info */}
            <div className="flex items-center gap-6 flex-1 min-w-[280px]">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src={icon} alt="Logo" className="w-16 h-16 object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  TechCraft Industries
                </h2>
                <div className="text-gray-500 text-sm mb-1">Manufacturer</div>
                <div className="mb-2">
                  <span className="inline-block bg-[#E6F7EC] text-[#1BA97C] text-xs font-medium px-3 py-1 rounded-md mb-1">
                    Verified Supplier
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm mb-1">
                  <span className="text-[#FFD600] text-lg">★ ★ ★ ★ ★</span>
                  <span className="text-gray-700 font-medium">4.5</span>
                  <span className="text-gray-400">(234)</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 6a2.5 2.5 0 0 1 0 5.5z" />
                  </svg>
                  Sunnyvale, California, USA
                </div>
              </div>
            </div>

            {/* Middle: Stats */}
            <div className="flex flex-1 justify-center gap-8 border-l border-r border-gray-200 px-8 min-w-[340px]">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1A2746]">12</div>
                <div className="text-xs text-gray-500">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1A2746]">1,250</div>
                <div className="text-xs text-gray-500">Orders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1A2746]">42</div>
                <div className="text-xs text-gray-500">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1A2746]">2H</div>
                <div className="text-xs text-gray-500">Responses</div>
              </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col gap-3 min-w-[180px] mt-6 md:mt-0">
              <button className="bg-[#1A2746] text-white rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2">
                Contact Supplier
              </button>
              <button className="border border-[#1A2746] text-[#1A2746] rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2">
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
