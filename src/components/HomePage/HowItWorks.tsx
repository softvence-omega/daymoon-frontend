import { CardContent } from "@/components/ui/card";
import {
  ArrowDown,
  ArrowRight,
  Network,
  Search,
  ShoppingCart,
  Star,
  Target,
  User,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: User,
    title: "Sign Up & Create Your Profile",
    description: "Quickly create your account and share your details.",
    color: "bg-blue-500",
    position: "top",
  },
  {
    id: 2,
    icon: Search,
    title: "Browse & Discover",
    description: "Find products and services that suit your needs.",
    color: "bg-green-500",
    position: "top",
  },
  {
    id: 3,
    icon: Network,
    title: "Connect with Suppliers",
    description: "Reach out directly to suppliers for details.",
    color: "bg-yellow-500",
    position: "top",
  },
  {
    id: 4,
    icon: ShoppingCart,
    title: "Place Your Order",
    description: "Securely place your order and enjoy protected payments.",
    color: "bg-orange-500",
    position: "bottom",
  },
  {
    id: 5,
    icon: Target,
    title: "Track & Receive",
    description: "Follow your order from our warehouse to your door.",
    color: "bg-red-500",
    position: "bottom",
  },
  {
    id: 6,
    icon: Star,
    title: "Rate & Review",
    description: "Leave your feedback and help others make better choices.",
    color: "bg-purple-500",
    position: "bottom",
  },
];

const StepCard = ({
  step,
  showArrow = false,
  arrowDirection = "right",
}: {
  step: (typeof steps)[0];
  showArrow?: boolean;
  arrowDirection?: "right" | "down" | "left";
}) => {
  const IconComponent = step.icon;

  return (
    <div className="flex items-center">
      <div className=" border-none  ">
        <CardContent className="py-6 text-center max-w-xs">
          <div className="flex justify-center mb-4">
            <div
              className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg`}
            >
              <IconComponent className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 leading-tight">
            {step.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {step.description}
          </p>
        </CardContent>
      </div>

      {showArrow && (
        <div className="flex items-center justify-center mx-4">
          {arrowDirection === "right" && (
            <div className="hidden lg:flex items-center">
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <ArrowRight className="w-5 h-5 text-gray-400 ml-1" />
            </div>
          )}

          {arrowDirection === "down" && (
            <div className="hidden  lg:flex flex-col items-center my-4">
              <div className="w-0.5 h-12 bg-gray-300"></div>
              <ArrowDown className="w-5 h-5 text-gray-400 mt-1" />
            </div>
          )}

          {arrowDirection === "left" && (
            <div className="hidden lg:flex items-center">
              <ArrowRight className="w-5 h-5 text-gray-400 rotate-180 mr-1" />
              <div className="w-12 h-0.5 bg-gray-300"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function HowItWorks() {
  const topSteps = steps.filter((step) => step.position === "top");
  const bottomSteps = steps
    .filter((step) => step.position === "bottom")
    .reverse();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to get started with our platform
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="flex justify-center items-center mb-8">
            {topSteps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                showArrow={index < topSteps.length - 1}
                arrowDirection="right"
              />
            ))}
          </div>

          <div className="flex xl:mr-44 lg:mr-28 justify-end mb-8">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-12 bg-gray-300"></div>
              <ArrowDown className="w-5 h-5 text-gray-400 mt-1" />
            </div>
          </div>

          <div className="flex justify-center items-center">
            {bottomSteps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                showArrow={index < bottomSteps.length - 1}
                arrowDirection="left"
              />
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <StepCard step={step} />
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowDown className=" w-5 h-5 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
