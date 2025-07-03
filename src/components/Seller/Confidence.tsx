import SellerHeader from "./SellerHeader";
import image1 from "../../assets/landing/image7.jpg";
import image2 from "../../assets/landing/image6.jpg";
import image3 from "../../assets/landing/image3.jpg";
import CommonWrapper from "@/common/CommonWrapper";

const imageLists = [
  { img: image3, label: "Showcase Your Products" },
  { img: image1, label: "Connect with Buyers" },
  { img: image2, label: "Deliver with Ease" },
];

const Confidence = () => {
  return (
    <div className=" bg-jet-black">
      <CommonWrapper>
        <div className="py-10">
          <SellerHeader className="text-white !text-lg md:!text-3xl   pb-10 tracking-normal">
            Start Selling With <br /> Confidence
          </SellerHeader>

          <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {imageLists.map((image, idx) => (
              <div
                key={idx}
                className="relative w-full sm:max-w-[485px] h-[650px] overflow-hidden rounded-2xl"
              >
                <img
                  src={image.img}
                  alt={image.label}
                  className="w-full h-full object-cover bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#1A1A1A_100%)]"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#1A1A1A]" />
                <p className="absolute bottom-5 left-5 text-sunset-orange font-medium text-xl z-10">
                  {image.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Confidence;
