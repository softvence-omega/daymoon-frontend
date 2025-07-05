import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Nav from "@/components/Authentication/Nav";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import countries from "@/lib/countries";
import MultiStepTracker from "../../MultiStepTracker";
import SubmitButton from "./SubmitButton";
import { HandleStep } from "./step";

export const signupSchema = z.object({
  name: z.string().min(2, "Full Name is required"),
  phone: z.string().min(5, "Phone number is required"),
  companyName: z.string().min(1, "Company name is required"),
  businessType: z.string().min(1, "Business type is required"),
  businessDescription: z.string().min(1, "Business description is required"),
  country: z.string().min(1, "Country is required"),
  terms: z.literal(true, {
    errorMap: () => ({
      message: "You must accept the terms and conditions",
    }),
  }),
});

export type SignupFormInputs = z.infer<typeof signupSchema>;

const PersonalInfo = ({ step, setStep }: HandleStep) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "John Doe",
      phone: "12025550173",
      companyName: "Doe Enterprises",
      businessType: "Retail",
      businessDescription: "We sell quality products.",
      country: "us",
      terms: true,
    },
  });

  const styles = {
    input:
      "w-full px-4 py-3 rounded-[20px] border border-[#B3B3B3] bg-white focus:outline-none focus:border-blue-400 focus:shadow-2xl",
    phoneContainer:
      "w-full border border-[#B3B3B3] rounded-[20px] bg-white px-1 py-1.5 focus-within:border-blue-400 focus-within:shadow-2xl",
    phoneInput:
      "!w-full !border-none !bg-transparent !shadow-none !text-gray-900 focus:!outline-none",
    phoneButton: "!bg-transparent !border-none !px-2",
    checkbox:
      "mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:border-transparent focus:shadow-[0_0_0_4px_rgba(59,130,246,0.2)]",
    button:
      "w-full bg-[#EF3F3F] text-white py-3 rounded-[20px] hover:bg-[#e73333] transition",
    label: "block text-sm font-medium text-gray-700 mb-[14px]",
    error: "text-sm text-red-500",
    termsLabel: "text-sm text-gray-600",
  };

  const onSubmit = (data: SignupFormInputs) => {
    console.log("Signup data:", data);
    setStep(2);
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
          title="Personal information"
        />
      </div>

      {/* Form Container */}
      <div className="w-full max-w-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className={styles.label}>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name")}
              className={styles.input}
            />
            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label className={styles.label}>Business Name</label>
            <input
              type="text"
              placeholder="Enter your business name"
              {...register("companyName")}
              className={styles.input}
            />
            {errors.companyName && (
              <p className={styles.error}>{errors.companyName.message}</p>
            )}
          </div>

          {/* Business Type */}
          <div>
            <label className={styles.label}>Business Type</label>
            <input
              type="text"
              placeholder="Enter your business type"
              {...register("businessType")}
              className={styles.input}
            />
            {errors.businessType && (
              <p className={styles.error}>{errors.businessType.message}</p>
            )}
          </div>

          {/* Business Description */}
          <div>
            <label className={styles.label}>Business Description</label>
            <textarea
              placeholder="Business description"
              {...register("businessDescription")}
              className={`${styles.input} h-24 resize-none`}
            />
            {errors.businessDescription && (
              <p className={styles.error}>
                {errors.businessDescription.message}
              </p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className={styles.label}>Country</label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={`!py-6 ${styles.input} outline-none`}
                  >
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px] overflow-y-auto bg-white">
                    {countries.map((c) => (
                      <SelectItem key={c.code} value={c.code}>
                        <span className="inline-flex items-center gap-2">
                          {c.emoji} {c.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.country && (
              <p className={styles.error}>{errors.country.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className={styles.label}>Phone Number</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  country="us"
                  enableSearch
                  containerClass={styles.phoneContainer}
                  inputClass={styles.phoneInput}
                  buttonClass={styles.phoneButton}
                  inputProps={{ name: "phone", required: true }}
                />
              )}
            />
            {errors.phone && (
              <p className={`${styles.error} mt-1`}>{errors.phone.message}</p>
            )}
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
