
import { useState } from "react";
import PersonalInfo from "./form/PersonalInfo";
import StoreBranding from "./form/StoreBranding";
import ProductShippingForm from "./form/ProductShippingForm";
import PaymentSetupForm from "./form/PaymentSetupForm";
import ReviewConfirm from "./form/ReviewConfirm";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import Nav from "@/components/Authentication/Nav";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { cn } from "@/lib/utils";

const signupSchema = z
  .object({
    name: z.string().min(2, "Full Name is required"),
    phone: z.string().min(5, "Phone number is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    companyName: z.string().min(1, "Company name is required"),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type SignupFormInputs = z.infer<typeof signupSchema>;

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
