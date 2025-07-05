import { FaCircleCheck } from "react-icons/fa6";
import SellerHeader from "../components/Seller/SellerHeader";
import CommonButton from "./CommonButton";

const planLists = [
  {
    title: "Basic Verified",
    label:
      "Track and prepare your job search using our free version. It's always free, no credit card needed.",
    price: "$119.99",
    features: [
      "Verified supplier badge",
      "List up to 50 products",
      "Response to buyers RFQ’s",
    ],
  },
  {
    title: "Slandered Verified",
    label:
      "Get full access to Inprep.ai App and web version. Track and prepare for any job using the AI by your side.",
    price: "$299.99",
    features: [
      "Unlimited Product Listing",
      "High RFQ priority",
      "Basic analytics tools",
      "Eligible for Trade Assurance program",
    ],
  },
  {
    title: "Premium Verified",
    label:
      "Ran out of interview slots? No need to worry, buy interview when you need it.",
    price: "$599.99",
    features: [
      "Homepage and top search exposure",
      "Dedicated account manager",
      "Priority support and full analytics Dashboard",
      "Featured suppliers badge",
    ],
  },
];
const ChoosePlan = () => {
  return (
    <>
      <section className="">
        <SellerHeader className=" !text-3xl pb-12 text-center">
          CHOOSE YOUR PLAN
        </SellerHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {planLists.map((plan, idx) => (
            <div className="flex flex-col justify-between  min-h-[520px] bg-white p-8 rounded-2xl shadow border border-jet-black">
              <div key={idx} className="flex flex-col gap-5  ">
                <div>
                  <h3 className="text-xl text-catalien-blue font-bold pb-2 ">
                    {plan.title}
                  </h3>
                  <p className="text-base text-[#666]">{plan.label}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-sunset-orange">
                    {plan.price}
                    <span className="text-base font-normal text-[#969696]">
                      /month
                    </span>
                  </p>
                </div>

                <div className="">
                  <p className="text-catalien-blue text-lg pb-2">
                    What’s included
                  </p>
                  <div className="flex flex-col gap-2">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-1">
                        <span className="text-green-500 pt-1 ">
                          <FaCircleCheck />
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <CommonButton className=" w-full">Get Started</CommonButton>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ChoosePlan;
