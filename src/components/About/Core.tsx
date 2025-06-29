import coreImg from "../../assets/About/core.png";
import bagImg from "../../assets/About/coreBag.png";
import shoeImg from "../../assets/About/coreShow.png";

const Core = () => {
  return (
    <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-[160px]">
      {/* Images Container - First on mobile */}
      <div className="lg:relative flex-shrink-0 w-full lg:w-[615px]">
        {/* Main Image */}
        <img
          className="w-full h-[300px] lg:h-[529px] rounded-lg lg:rounded-[12px] object-cover"
          src={coreImg}
          alt="Core"
        />

        {/* Desktop Overlay Images */}
        <img
          className="hidden lg:block absolute top-[60px] left-[-130px] w-[220px] h-[150px] rounded-[12px] object-cover shadow-lg"
          src={bagImg}
          alt="Bag"
        />
        <img
          className="hidden lg:block absolute bottom-[48px] right-[-130px] w-[220px] h-[180px] rounded-[12px] object-cover shadow-lg"
          src={shoeImg}
          alt="Shoe"
        />

        {/* Mobile Bottom Images */}
        <div className="flex lg:hidden gap-4 mt-4">
          <img
            className="w-1/2 h-[150px] rounded-lg object-cover shadow"
            src={bagImg}
            alt="Bag"
          />
          <img
            className="w-1/2 h-[150px] rounded-lg object-cover shadow"
            src={shoeImg}
            alt="Shoe"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:max-w-[600px]">
        <h6 className="text-[24px] font-semibold leading-[28.8px] text-[#1A1A1A] mb-4">
          Our Core Values
        </h6>
        <p className="text-[18px] font-normal leading-[28.8px] text-[#1A1A1A] mb-8">
          To create a global marketplace where businesses and buyers can
          connect, purchase, and build relationships with trust and confidence
        </p>

        <div className="space-y-2">
          <h6 className="text-[20px] font-semibold leading-[24px] text-goldenrod">
            Integrity:{" "}
            <span className="text-[16px] font-normal leading-[25.6px] text-jet-black">
              We do business with honesty and transparency.
            </span>
          </h6>
          <h6 className="text-[20px] font-semibold leading-[24px] text-goldenrod">
            Innovation:{" "}
            <span className="text-[16px] font-normal leading-[25.6px] text-jet-black">
              We constantly seek new ways to improve and offer better products.
            </span>
          </h6>
          <h6 className="text-[20px] font-semibold leading-[24px] text-goldenrod">
            Customer Focus:{" "}
            <span className="text-[16px] font-normal leading-[25.6px] text-jet-black">
              We put our customers' needs at the center of everything we do.
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
    </div>
  );
};

export default Core;
