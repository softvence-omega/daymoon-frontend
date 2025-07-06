import verify from "../../assets/Icon/verified.svg";

const plans = [
  {
    title: "Basic Verified",
    price: "$119.99",
    description:
      "Track and prepare your job search using our free version. It’s always free, no credit card needed.",
    features: [
      "Verified supplier badge",
      "List up to 50 products",
      "Response to buyers RFQ’s",
    ],
    note: "/month",
  },
  {
    title: "Standard Verified",
    price: "$299.99",
    description:
      "Get full access to Inprep.ai App and web version. Track and prepare for any job using the AI by your side.",
    features: [
      "Unlimited Product Listing",
      "High RFQ priority",
      "Basic analytics tools",
      "Eligible for Trade Assurance program",
    ],
    note: "/month",
  },
  {
    title: "Premium Verified",
    price: "$599.99",
    description:
      "Ran out of interview slots? No need to worry, buy interview when you need it.",
    features: [
      "Homepage and top search exposure",
      "Dedicated account manager",
      "Priority support and full analytics Dashboard",
      "Featured suppliers badge",
    ],
    note: "/month",
  },
];

const ChoosePlan = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="text-center mb-10 md:mb-12 px-4">
        <h2 className="text-[28px] md:text-[40px] font-semibold leading-[36px] md:leading-[48px] uppercase text-[#1A1A1A]">
          Choose Your Plan
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 bg-white">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-[24px] border-[#1A1A1A] p-6 md:p-8 flex flex-col justify-between h-auto"
          >
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold leading-[28.8px] text-[#002E70] mb-2">
                {plan.title}
              </h3>
              <p className="text-sm md:text-base text-[#666] font-normal leading-6">
                {plan.description}
              </p>
              <div className="text-[30px] md:text-[36px] font-bold leading-[38px] md:leading-[43.2px] bg-gradient-to-l from-[#F7813B] to-[#F46A39] bg-clip-text text-transparent my-4">
                {plan.price}
                <span className="text-sm md:text-base font-semibold leading-[19.2px] text-[#969696] ml-1">
                  {plan.note}
                </span>
              </div>
              <h4 className="text-[18px] md:text-[20px] font-semibold leading-[24px] text-[#002E70] mb-3">
                What’s included
              </h4>
              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm md:text-base font-medium leading-[20.8px] tracking-[-0.32px] text-[#484848]"
                  >
                    <span className="flex items-center gap-2">
                      <img className="w-5 h-5 md:w-6 md:h-6" src={verify} alt="" />
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-6 bg-[#F46A39] hover:bg-red-600 text-white py-2.5 px-6 md:py-[10px] md:px-[40px] rounded-[20px] text-sm md:text-[18px] font-medium w-full transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoosePlan;
