import main from "../../assets/About/core.png";     // main image
import consultationImg1 from "../../assets/About/coreBag.png";              // image 1 (top on mobile)
import consultationImg2 from "../../assets/About/coreShow.png"; // image 2 (left-bottom on mobile)
import SellerHeader from "../Seller/SellerHeader";

const Core = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center gap-10 px-4">
      {/* Images Section */}
      <div className="w-full md:w-2/3">
        {/* Mobile: stacked layout | Desktop: absolute float layout */}
        <div className="block md:relative">
          {/* Only show on mobile */}
          <div className="flex flex-col items-center gap-4 md:hidden">
            {/* Top image (image 1) */}
            <img
              src={main}
              alt="Top Mobile"
              className="w-full h-[175px] rounded-xl shadow-lg"
            />

            {/* Row of image 2 and main image */}
            <div className="flex flex-row gap-4 w-full justify-center items-center">
              <img
                src={consultationImg1}
                alt="Bottom Left Mobile"
                className="w-1/2 h-[150px] rounded-xl shadow-lg"
              />
              <img
                src={consultationImg2}
                alt="Main Image"
                className="rounded-xl w-1/2 h-[150px] object-cover shadow-md"
              />
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:block relative w-[620px] mx-auto">
            {/* Main Image */}
            <img
              src={main}
              alt="Main Desktop"
              className="rounded-xl h-[520px] w-full object-cover shadow-md"
            />

            {/* Floating Left Image */}
            <img
              src={consultationImg1}
              alt="Left Float"
              className="absolute top-12 left-0 -translate-x-1/2 w-[260px] h-[175px] rounded-xl shadow-lg"
            />

            {/* Floating Right Image */}
            <img
              src={consultationImg2}
              alt="Right Float"
              className="absolute bottom-12 right-0 translate-x-1/2 w-[260px] h-[175px] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/3 pt-10 md:pt-0">
        <SellerHeader className="!text-2xl !capitalize !font-[600]">
          Our Core Values
        </SellerHeader>
        <p className="text-[#484848] font-[400] pb-8 text-[18px] leading-relaxed">
          To create a global marketplace where businesses and buyers can connect,
          purchase, and build relationships with trust and confidence
        </p>

        <div className="flex-col flex gap-6 text-base text-[#484848]">
          <p>
            <span className="text-goldenrod text-[20px] font-semibold">Integrity:</span> We do business with honesty and transparency.
          </p>
          <p>
            <span className="text-goldenrod text-[20px] font-semibold">Innovation:</span> We constantly seek new ways to improve and offer better products.
          </p>
          <p>
            <span className="text-goldenrod text-[20px] font-semibold">Customer Focus:</span> We put our customers’ needs at the center of everything we do.
          </p>
          <p>
            <span className="text-goldenrod text-[20px] font-semibold">Sustainability:</span> We commit to supporting eco-friendly and sustainable practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Core;
