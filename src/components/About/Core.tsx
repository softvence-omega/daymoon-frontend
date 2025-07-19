import main from "../../assets/About/core.png"; // main image
import consultationImg1 from "../../assets/About/coreBag.png"; // image 1 (top on mobile)
import consultationImg2 from "../../assets/About/coreShow.png"; // image 2 (left-bottom on mobile)
import SellerHeader from "../Seller/SellerHeader";

const Core = () => {
  return (
    <div className="flex flex-col xl:flex-row w-full items-center gap-10">
      <div className="w-full xl:w-2/3">
        <div className="block lg:relative">
          {/* Only show on mobile */}
          <div className="flex flex-col items-center gap-4 lg:hidden">
            {/* Top image (image 1) */}
            <img
              src={main}
              alt="Top Mobile"
              className="w-full h-[240px] rounded-xl shadow-lg"
            />

            {/* Row of image 2 and main image */}
            <div className="flex flex-row gap-4 w-full justify-center items-center">
              <img
                src={consultationImg1}
                alt="Bottom Left Mobile"
                className="w-1/2 h-[180px] rounded-xl shadow-lg"
              />
              <img
                src={consultationImg2}
                alt="Main Image"
                className="rounded-xl w-1/2 h-[180px] object-cover shadow-md"
              />
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:mt-10 md:block relative xl:w-[620px] mx-auto">
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
              className="absolute hidden xl:block top-12 left-0 -translate-x-1/2 w-[220px] h-[175px] rounded-xl shadow-lg"
            />

            {/* Floating Right Image */}
            <img
              src={consultationImg2}
              alt="Right Float"
              className="absolute  hidden xl:block bottom-12 right-0 translate-x-1/2 w-[200px] h-[175px] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full xl:w-1/3 max-[767px]:pt-6 pt-10 md:pt-0">
        <SellerHeader className="!text-3xl !capitalize !font-[600]">
          Our Core Values
        </SellerHeader>
        <p className="text-[#484848] font-[400] pb-8 mt-2 md:text-[18px] leading-relaxed">
          To create a global marketplace where businesses and buyers can
          connect, purchase, and build relationships with trust and confidence
        </p>

        <div className="flex-col flex gap-6 text-base text-[#484848]">
          <p className=" text-goldenrod md:text-[20px] font-semibold">
            Integrity:{" "}
            <span className="text-sm font-normal text-[#484848]">
              We do business with honesty and transparency.
            </span>{" "}
          </p>
          <p className=" text-goldenrod md:text-[20px] font-semibold">
            Innovation:{" "}
            <span className="text-sm md:text-base font-normal text-[#484848]">
              We constantly seek new ways to improve and offer better products.
            </span>{" "}
          </p>
          <p className=" text-goldenrod md:text-[20px] font-semibold">
            Innovation:{" "}
            <span className="text-sm md:text-base font-normal text-[#484848]">
              We constantly seek new ways to improve and offer better products.
            </span>{" "}
          </p>
          <p className=" text-goldenrod md:text-[20px] font-semibold">
            Customer Focus:{" "}
            <span className="text-sm md:text-base font-normal text-[#484848]">
              We put our customers’ needs at the center of everything we do.
            </span>{" "}
          </p>
          <p className=" text-goldenrod md:text-[20px] font-semibold">
            Sustainability:{" "}
            <span className="text-sm md:text-base font-normal text-[#484848]">
              We commit to supporting eco-friendly and sustainable practices.
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Core;
