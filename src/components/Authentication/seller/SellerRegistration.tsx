import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import Nav from "@/components/Authentication/Nav";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

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
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupFormInputs>({ resolver: zodResolver(signupSchema) });

  const navigate = useNavigate();

  const onSubmit = (data: SignupFormInputs) => {
    console.log("Signup data:", data);
    navigate("/login");
  };

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

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-6">
      {/* Top Navigation */}
      <div className="w-full max-w-4xl mb-4">
        <Nav />
      </div>

      {/* Step Progress (like pagination) */}
      <div className="w-full max-w-md flex justify-center mb-6">
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((step, i) => (
            <div
              key={step}
              className={cn(
                "h-2 w-10 rounded-full",
                i === 0 ? "bg-[#F14141]" : "bg-[#FCDDDC]"
              )}
            />
          ))}
        </div>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md">
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
              className={styles.input}
              // Add a new field to the schema if needed
            />
          </div>

          {/* Business Description */}
          <div>
            <label className={styles.label}>Business Description</label>
            <textarea
              placeholder="Business description"
              className={`${styles.input} h-24 resize-none`}
            />
          </div>

          {/* Country (Dropdown stub) */}
          <div>
            <label className={styles.label}>Country</label>
            <select className={styles.input}>
              <option value="us">🇺🇸 United States</option>
              <option value="bd">🇧🇩 Bangladesh</option>
              <option value="in">🇮🇳 India</option>
            </select>
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
              <p className={`${styles.error} mt-1`}>
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.button}>
            Continue
          </button>

          {/* Already have an account */}
          <p className="text-sm text-center text-gray-500 mt-2">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#F14141] font-medium cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SellerRegistration;
