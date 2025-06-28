import coreImg from "../../assets/About/core.png";
import bagImg from "../../assets/About/coreBag.png";
import shoeImg from "../../assets/About/coreShow.png";

const Core = () => {
  return (
    <div className="w-full mx-auto flex items-center gap-[160px]">
      {/* Left Images Container */}
      <div className="relative flex-shrink-0">
        <img
          className="w-[615px] h-[529px] rounded-[12px] object-cover"
          src={coreImg}
          alt="Core"
        />
        <img
          className="absolute top-[60px] left-[-130px] w-[259px] h-[175px] rounded-[12px] object-cover shadow-lg"
          src={bagImg}
          alt="Bag"
        />
        <img
          className="absolute bottom-[48px] right-[-130px] w-[259px] h-[215px] rounded-[12px] object-cover shadow-lg"
          src={shoeImg}
          alt="Shoe"
        />
      </div>

      {/* Right Text Content */}
      <div className="max-w-full">
        <h6 className="text-[24px] font-semibold leading-[28.8px] text-[#1A1A1A] mb-4">
          Our Core Values
        </h6>
        <p className="text-[18px] font-normal leading-[28.8px] text-[#1A1A1A] mb-8">
          To create a global marketplace where businesses and buyers can
          connect, purchase, and build relationships with trust and confidence
        </p>

        <h6 className="text-[20px] font-semibold leading-[24px] text-goldenrod mb-2">
          Integrity:{" "}
          <span className="text-[16px] font-normal leading-[25.6px] text-jet-black">
            We do business with honesty and transparency.
          </span>
        </h6>
        <h6 className="text-[20px] font-semibold leading-[24px] text-goldenrod mb-2">
          Innovation:{" "}
          <span className="text-[16px] font-normal leading-[25.6px] text-jet-black">
            We constantly seek new ways to improve and offer better products.
          </span>
        </h6>
        <h6 className="text-[20px] font-semibold leading-[24px] text-goldenrod mb-2">
          Customer Focus:{" "}
          <span className="text-[16px] font-normal leading-[25.6px] text-jet-black">
            We put our customers’ needs at the center of everything we do.
          </span>
        </h6>
        <h6 className="text-[20px] font-semibold leading-[24px] text-goldenrod">
          Sustainability:{" "}
          <span className="text-[16px] font-normal leading-[25.6px] text-jet-black">
            We commit to supporting eco-friendly and sustainable practices.
          </span>
        </h6>
      </div>
    </div>
  );
};

export default Core;
