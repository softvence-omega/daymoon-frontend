import consultationImg1 from "../../assets/landing/5.png";
import main from "../../assets/landing/image2.png";
import consultationImg2 from "../../assets/landing/image1.png";
import CommonSpace from "@/common/CommonSpace";
import SellerHeader from "./SellerHeader";

const ConsultationSection = () => {
  return (
    <CommonSpace>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-2/3">
          <div className="relative w-fit mx-auto">
            {/* Main Image */}
            <img
              src={main}
              alt="Consultation"
              className="rounded-xl max-w-[600px] w-full h-auto object-cover shadow-md"
            />

            {/* Left Floating Image */}
            <img
              src={consultationImg1}
              alt="Consultation Detail"
              className="absolute top-12 left-0 -translate-x-1/2 w-[260px] h-[175px] rounded-xl shadow-lg border border-white"
            />

            {/* Right Floating Image */}
            <img
              src={consultationImg2}
              alt="Consultation Detail"
              className="absolute bottom-12 right-0 translate-x-1/2 w-[260px] h-[175px] rounded-xl shadow-lg border border-white"
            />
          </div>
        </div>

        <div className=" w-1/3">
          <SellerHeader className=" !text-2xl !capitalize">
            Our Core Values For Seller
          </SellerHeader>
          <p className="text-[#484848] pb-8 text-[20px] leading-relaxed">
            To build a trusted platform that empowers sellers to grow, succeed,
            and connect with buyers around the globe.
          </p>

          <div className="flex-col flex gap-6 text-base text-[#484848]">
            <p>
              <span className="text-[#FCAB3F]">Integrity:</span> We support
              sellers who operate with honesty, fairness, and transparency.
            </p>
            <p>
              <span className="text-[#FCAB3F]">Innovation:</span> We equip you
              with modern tools to scale your business and stay ahead.
            </p>
            <p>
              <span className="text-[#FCAB3F]">Seller Success:</span> Your
              growth is our mission we prioritize your goals at every stage.
            </p>
            <p>
              <span className="text-[#FCAB3F]">Sustainability:</span> We
              encourage responsible selling through eco-conscious packaging and
              practices.
            </p>
          </div>
        </div>
      </div>
    </CommonSpace>
  );
};

export default ConsultationSection;
