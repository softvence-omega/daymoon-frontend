import consultationImg1 from "../../assets/About/core.png";
import main from "../../assets/About/coreBag.png";
import consultationImg2 from "../../assets/About/coreShow.png";
import SellerHeader from "../Seller/SellerHeader";

const Core = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center gap-10">
        <div className="w-2/3">
          <div className="relative w-[620px] mx-auto">
            {/* Main Image */}
            <img
              src={consultationImg1}
              alt="Consultation"
              className="rounded-xl h-[520px] w-full object-cover shadow-md"
            />

            {/* Left Floating Image */}
            <img
              src={main}
              alt="Consultation Detail"
              className="absolute top-12 left-0 -translate-x-1/2 w-[260px] h-[175px] rounded-xl shadow-lg"
            />

            {/* Right Floating Image */}
            <img
              src={consultationImg2}
              alt="Consultation Detail"
              className="absolute bottom-12 right-0 translate-x-1/2 w-[260px] h-[175px] rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className=" w-1/3">
          <SellerHeader className=" !text-2xl !capitalize !font-[600]">
            Our Core Values
          </SellerHeader>
          <p className="text-[#484848] font-[400] pb-8 text-[18px] leading-relaxed">
            To create a global marketplace where businesses and buyers can connect, purchase, and build relationships with trust and confidence
          </p>

          <div className="flex-col flex gap-6 text-base text-[#484848]">
            <p>
              <span className="text-goldenrod text-[20px] font-semibold">Integrity:</span> We do business with honesty and transparency.
            </p>
            <p>
              <span className="text-goldenrod text-[20px] font-semibold">Innovation:</span> We constantly seek new ways to improve and offer better products.
            </p>
            <p>
              <span className="text-goldenrod text-[20px] font-semibold">Customer Focus: </span> We put our customers’ needs at the center of everything we do.
            </p>
            <p>
              <span className="text-goldenrod text-[20px] font-semibold">Sustainability:</span>  We commit to supporting eco-friendly and sustainable practices.
            </p>
          </div>
        </div>
      </div>
  );
};

export default Core;
