import { useState } from "react";
import PersonalInfo from "./form/PersonalInfo";
import StoreBranding from "./form/StoreBranding";
import ProductShippingForm from "./form/ProductShippingForm";
import PaymentSetupForm from "./form/PaymentSetupForm";
import ReviewConfirm from "./form/ReviewConfirm";

const SellerRegistration = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 && <PersonalInfo step={step} setStep={setStep} />}
      {step === 2 && <StoreBranding step={step} setStep={setStep} />}
      {step === 3 && <ProductShippingForm step={step} setStep={setStep} />}
      {step === 4 && <PaymentSetupForm step={step} setStep={setStep} />}
      {step === 5 && <ReviewConfirm step={step} setStep={setStep} />}
    </div>
  );
};

export default SellerRegistration;
