import { FaPlus } from "react-icons/fa";
import badge1 from "../.././assets/landing/bradge1.png";
import badge2 from "../.././assets/landing/car1.png";

const businessList = [
  {
    id: 1,
    title: "Global sales reach",
    label:
      "Easily showcase your products to verified buyers in over 190 countries and unlock new business opportunities across international markets.",
    img: badge1,
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
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {businessList.map((counter) => (
        <div className="shadow rounded-2xl">
          <div className="  flex items-center justify-center flex-col  gap-3  py-10 ">
            <div className="text-sunset-orange flex items-center ">
              <h2 className="text-5xl text-sunset-orange font-medium leading-12 tracking-tight ">
                {counter.title}
              </h2>
              <span className="text-3xl">
                <FaPlus />
              </span>
            </div>

            <p>{counter.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessCard;
