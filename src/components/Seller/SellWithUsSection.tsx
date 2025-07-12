import image1 from "../../assets/landing/car2.svg";
import card1 from "../../assets/landing/3.svg";
import card2 from "../../assets/landing/4.svg";
import card3 from "../../assets/landing/5.svg";
import CommonButton from "@/common/CommonButton";

const features = [
  {
    id: 1,
    title: "Global Reach",
    description: "Reach buyers in 190+ countries.",
    icon: card2,
  },
  {
    id: 2,
    title: "Secure Payments",
    description: "Safe and fast transactions.",
    icon: card1,
  },
  {
    id: 3,
    title: "Hassle-Free Shipping",
    description: "Easy global delivery support.",
    icon: image1,
  },
  {
    id: 4,
    title: "Dedicated Seller Support",
    description: "24/7 expert assistance.",
    icon: card3,
  },
];

const SellWithUsSection = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
        {features.map(({ id, title, description, icon }) => (
          <div
            key={id}
            className="flex flex-col items-start gap-4 p-6 bg-white rounded-lg shadow-md  border border-catalien-blue"
          >
            <div>
              <img src={icon} alt={title} />
            </div>
            <div className="text-[#1A1A1A] ">
              <h3 className="font-semibold  text-xl">{title}</h3>
              <p className="mt-1  text-base">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center flex-1 max-w-md">
        <h2 className="flex items-center gap-2 text-goldenrod font-semibold text-xl mb-4">
          <span className="w-8 h-1 bg-goldenrod inline-block rounded" />
          Why Sell With Us
        </h2>
        <p className="text-[#6A481A] mb-8 leading-relaxed">
          Take your business to the next level with our trusted global platform.
          From secure payments and shipping support to expert guidance and
          global exposure — we empower you to sell smarter, faster, and bigger.
        </p>
        <CommonButton className=" sm:!w-fit">Get Started</CommonButton>
      </div>
    </section>
  );
};

export default SellWithUsSection;
