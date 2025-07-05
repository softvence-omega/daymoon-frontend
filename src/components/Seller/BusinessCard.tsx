import CommonSpaceBottom from "@/common/CommonSpaceBottom";
import badge1 from "../.././assets/landing/bradge1.png";
import badge3 from "../.././assets/landing/bradge2.png";
import badge2 from "../.././assets/landing/car1.png";
import SellerHeader from "./SellerHeader";
import CommonWrapper from "@/common/CommonWrapper";

const businessList = [
  {
    id: 1,
    title: "Global sales reach",
    label:
      "Easily showcase your products to verified buyers in over 190 countries and unlock new business opportunities across international markets.",
    img: badge3,
  },
  {
    id: 2,
    title: "Secure Transactions",
    label:
      "We provide safe and reliable payment systems with fraud detection and buyer verification to ensure your transactions are protected at every step.",
    img: badge1,
  },
  {
    id: 3,
    title: "Logistics Support",
    label:
      "Get access to integrated shipping solutions, streamlined order handling, and logistics partners that help you deliver products faster and more efficiently.  ",
    img: badge2,
  },
];
const BusinessCard = () => {
  return (
    <CommonSpaceBottom>
      <CommonWrapper>
        <SellerHeader className="max-w-xl !text-lg md:!text-3xl pb-4">
          One platform, unlimited <br /> business potential
        </SellerHeader>
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {businessList.map((counter) => (
            <div className="shadow rounded-2xl px-4 py-6 border border-catalien-blue">
              <div className="flex items-center justify-center flex-col gap-2">
                <div>
                  <img src={counter.img} alt="" className="w-20 h-20" />
                </div>
                <div className=" flex items-center justify-center flex-col">
                  <h2 className="text-lg text-jet-black font-medium leading-12 tracking-tight ">
                    {counter.title}
                  </h2>
                  <p className=" text-jet-black opacity-80  text-center">
                    {counter.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CommonWrapper>
    </CommonSpaceBottom>
  );
};

export default BusinessCard;
