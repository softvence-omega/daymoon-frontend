import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Pencil } from "lucide-react";
import MultiStepTracker from "../../MultiStepTracker";
import Nav from "../../Nav";
import { HandleStep } from "./step";

const ReviewConfirm = ({ step }: HandleStep) => {
  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <Card className="border border-[#E5E5E5] py-0">
      <div className="flex justify-between items-center  border-b border-[#E5E5E5] p-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <Pencil className="w-4 h-4 text-sunset-orange cursor-pointer" />
      </div>
      <CardContent>{children}</CardContent>
    </Card>
  );

  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between py-1">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-6xl mb-4">
        <Nav />
      </div>

      <div className="pb-10">
        <MultiStepTracker
          totalSteps={5}
          currentStep={step}
          title="Review & Confirm"
        />
      </div>
      <div className="w-full max-w-xl mx-auto  flex flex-col gap-6">
        <h1 className="text-lg font-semibold ">Review & Confirm</h1>

        <Section title="Business Information">
          <InfoRow label="Business Name" value="ABC Business" />
          <InfoRow label="Business Type" value="Craft" />
          <InfoRow label="Country" value="USA" />
        </Section>

        <Section title="Store Branding">
          <div className="flex items-center space-x-4">
            <img
              src="/path/to/image.jpg"
              alt="Shop Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-medium">Shop Name</div>
              <div className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
          </div>
        </Section>

        <Section title="Business Information">
          <InfoRow label="Product Category" value="Electronics" />
          <InfoRow label="Shipping Regions" value="International" />
          <InfoRow label="Return Policy" value="7 Days" />
        </Section>

        <Section title="Payment Setup">
          <InfoRow label="Payment Method" value="Stripe" />
          <InfoRow label="Account Holder Name" value="Marvin McKinney" />
          <InfoRow label="Account Number" value="************1234" />
        </Section>

        <button className="my-8 cursor-pointer w-full bg-sunset-orange text-white py-3 rounded-[20px] hover:bg-[#e73333] transition">
          Confirm & Become a Seller
        </button>
      </div>
    </div>
  );
};

export default ReviewConfirm;
