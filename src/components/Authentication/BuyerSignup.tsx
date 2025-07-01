import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import img from "../../assets/SignUp/signup.png";
import Nav from "./Nav";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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

const BuyerSignup = () => {
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

  // Custom Tailwind classes with no transition
  const styles = {
    input:
      "w-full px-4 py-3 rounded-[20px] border border-[#B3B3B3] bg-white focus:outline-none focus:border-blue-400 focus:shadow-2xl",
    phoneContainer:
      "w-full border border-[#B3B3B3] rounded-[20px] bg-white px-1 py-1.5 focus-within:border-blue-400 focus-within:shadow-2xl transition",
    phoneInput:
      "!w-full !border-none !bg-transparent !shadow-none !text-gray-900 focus:!outline-none",
    phoneButton: "!bg-transparent !border-none !px-2",
    checkbox:
      "mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:border-transparent focus:shadow-[0_0_0_4px_rgba(59,130,246,0.2)]",
    button: "w-full bg-sunset-orange text-white py-3 rounded-[20px] hover:bg-[#e73333]",
    label: "block text-sm font-medium text-gray-700 mb-[14px]",
    error: "text-sm text-red-500",
    termsLabel: "text-sm text-gray-600",
  };

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-[#651D17]">
          <img src={img} alt="Signup visual" className="w-3/4 object-contain" />
        </div>

        {/* Right Side - Full width on mobile, half width on desktop */}
        <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center px-4 py-12">
          {/* Nav always at the top */}
          <div className="w-full max-w-full pb-8">
            <Nav />
          </div>

          {/* Form */}
          <div className="w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className={styles.label}>Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name")}
                  className={styles.input}
                />
                {errors.name && (
                  <p className={styles.error}>{errors.name.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="w-full">
                <label className={styles.label}>Phone number</label>

                <div className="w-full">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        country="us"
                        value={field.value}
                        onChange={field.onChange}
                        inputProps={{
                          name: "phone",
                          required: true,
                        }}
                        containerClass={styles.phoneContainer}
                        inputClass={styles.phoneInput}
                        buttonClass={styles.phoneButton}
                        enableSearch
                      />
                    )}
                  />
                </div>

                {errors.phone && (
                  <p className={`${styles.error} mt-1`}>
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className={styles.input}
                />
                {errors.email && (
                  <p className={styles.error}>{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className={styles.label}>Password</label>
                <input
                  type="password"
                  placeholder="Set Password"
                  {...register("password")}
                  className={styles.input}
                />
                {errors.password && (
                  <p className={styles.error}>{errors.password.message}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className={styles.label}>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Retype password"
                  {...register("confirmPassword")}
                  className={styles.input}
                />
                {errors.confirmPassword && (
                  <p className={styles.error}>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className={styles.label}>Company Name</label>
                <input
                  type="text"
                  placeholder="Enter your Company name"
                  {...register("companyName")}
                  className={styles.input}
                />
                {errors.companyName && (
                  <p className={styles.error}>{errors.companyName.message}</p>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  {...register("terms")}
                  className={styles.checkbox}
                />
                <label className={styles.termsLabel}>
                  I accept the privacy policy. We value your personal
                  information and outline how we collect, use, and protect your
                  data. By using our services, you agree to these terms.
                </label>
              </div>
              {errors.terms && (
                <p className={styles.error}>{errors.terms.message}</p>
              )}

              {/* Submit Button */}
              <button type="submit" className={styles.button}>
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerSignup;
