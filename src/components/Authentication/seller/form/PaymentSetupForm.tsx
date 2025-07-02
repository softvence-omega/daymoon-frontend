import React, { JSX } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaPaypal, FaCcStripe } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import MultiStepTracker from "../../MultiStepTracker";
import Nav from "../../Nav";
import SubmitButton from "./SubmitButton";
import { HandleStep } from "./step";

// Define allowed payment methods
type PaymentMethod = "bank" | "paypal" | "stripe";

// Zod schema
const schema = z
  .object({
    paymentMethod: z.enum(["bank", "paypal", "stripe"]),
    accountHolder: z.string().optional(),
    accountNumber: z.string().optional(),
    routingNumber: z.string().optional(),
    taxId: z.string().optional(),
    agreePolicy: z.literal(true, {
      errorMap: () => ({ message: "You must accept the privacy policy" }),
    }),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMethod === "bank") {
      if (!data.accountHolder?.trim()) {
        ctx.addIssue({
          path: ["accountHolder"],
          code: z.ZodIssueCode.custom,
          message: "Account holder name is required",
        });
      }
      if (!data.accountNumber?.trim()) {
        ctx.addIssue({
          path: ["accountNumber"],
          code: z.ZodIssueCode.custom,
          message: "Account number is required",
        });
      }
      if (!data.routingNumber?.trim()) {
        ctx.addIssue({
          path: ["routingNumber"],
          code: z.ZodIssueCode.custom,
          message: "Routing number is required",
        });
      }
    }
  });

type FormValues = z.infer<typeof schema>;

const PaymentSetupForm: React.FC<HandleStep> = ({ step, setStep }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      paymentMethod: "bank",
      accountHolder: "Ramjan",
      accountNumber: "1010101010",
      routingNumber: "101010101010",
      taxId: "1164646464641156155",
    },
  });

  const selectedPaymentMethod = watch("paymentMethod");

  const onSubmit = (data: FormValues) => {
    console.log("Submitted payment setup:", data);
    setStep(5);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-6">
      <div className="w-full max-w-6xl mb-4">
        <Nav />
      </div>

      <div className="pb-10">
        <MultiStepTracker
          totalSteps={5}
          currentStep={step}
          title="Payment Setup"
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-xl"
      >
        <div>
          <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
          <div className="space-y-4">
            {(
              [
                {
                  id: "bank",
                  label: "Bank account",
                  icon: <FaRegCreditCard className="text-2xl" />,
                },
                {
                  id: "paypal",
                  label: "Paypal",
                  icon: <FaPaypal className="text-2xl text-blue-500" />,
                },
                {
                  id: "stripe",
                  label: "Stripe",
                  icon: <FaCcStripe className="text-2xl text-purple-500" />,
                },
              ] as { id: PaymentMethod; label: string; icon: JSX.Element }[]
            ).map((method) => (
              <label
                key={method.id}
                className={`flex justify-between items-center p-4 border rounded-xl cursor-pointer transition ${
                  selectedPaymentMethod === method.id
                    ? "border-red-500"
                    : "border-[#B3B3B3]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    value={method.id}
                    {...register("paymentMethod")}
                    checked={selectedPaymentMethod === method.id}
                    className="accent-red-500 w-5 h-5"
                  />
                  <span>{method.label}</span>
                </div>
                {method.icon}
              </label>
            ))}
          </div>
        </div>

        {selectedPaymentMethod === "bank" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Account Holder Name</label>
              <input
                type="text"
                {...register("accountHolder")}
                className="w-full p-3 rounded-xl border text-black"
              />
              {errors.accountHolder && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.accountHolder.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1">Account Number</label>
              <input
                type="text"
                {...register("accountNumber")}
                className="w-full p-3 rounded-xl border text-black"
              />
              {errors.accountNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.accountNumber.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1">Routing Number</label>
              <input
                type="text"
                {...register("routingNumber")}
                className="w-full p-3 rounded-xl border text-black"
              />
              {errors.routingNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.routingNumber.message}
                </p>
              )}
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm mb-1">TAX ID (Optional)</label>
          <input
            type="text"
            {...register("taxId")}
            className="w-full p-3 rounded-xl border text-black"
          />
        </div>

        <label className="flex items-start gap-2 text-sm text-gray-300">
          <input
            type="checkbox"
            {...register("agreePolicy")}
            className="accent-red-500 mt-1"
          />
          <span className="text-jet-black">
            I accept the privacy policy. We value your personal information and
            outline how we collect, use, and protect your data.
          </span>
        </label>
        {errors.agreePolicy && (
          <p className="text-red-500 text-sm mt-1">
            {errors.agreePolicy.message}
          </p>
        )}

        <SubmitButton />
      </form>
    </div>
  );
};

export default PaymentSetupForm;
