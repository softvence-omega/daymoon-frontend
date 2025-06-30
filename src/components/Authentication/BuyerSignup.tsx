import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import img from "../../assets/SignUp/signup.png";
import Nav from "./Nav";
import CommonWrapper from "@/common/CommonWrapper";

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
    formState: { errors },
  } = useForm<SignupFormInputs>({ resolver: zodResolver(signupSchema) });

  const navigate = useNavigate();

  const onSubmit = (data: SignupFormInputs) => {
    console.log("Signup data:", data);
    navigate("/login");
  };

  return (
    <CommonWrapper>
      <div className="flex min-h-screen">
        {/* Left Side */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-[#520202]">
          <img src={img} alt="Signup visual" className="w-3/4 object-contain" />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-full">
            {/* Nav at the top, wider than the form */}
            <div className="pb-12">
              <Nav />
            </div>
            {/* Form below Nav, slightly narrower */}
            <div className="w-full max-w-md mx-auto mt-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-[14px]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("name")}
                    className="w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#1565D8] rounded-[20px] bg-white shadow-[0px_4px_10px_3px_rgba(0,0,0,0.11)] self-stretch"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-[14px]">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-[20px] border border-[#B3B3B3] bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-[14px]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-[20px] border border-[#B3B3B3] bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-[14px]">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Set Password"
                    {...register("password")}
                    className="w-full px-4 py-3 rounded-[20px] border border-[#B3B3B3] bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-[14px]">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Retype password"
                    {...register("confirmPassword")}
                    className="w-full px-4 py-3 rounded-[20px] border border-[#B3B3B3] bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-[14px]">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Company name"
                    {...register("companyName")}
                    className="w-full px-4 py-3 rounded-[20px] border border-[#B3B3B3] bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  {errors.companyName && (
                    <p className="text-sm text-red-500">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    {...register("terms")}
                    className="mt-1"
                  />
                  <label className="text-sm text-gray-600">
                    I accept the privacy policy. We value your personal
                    information and outline how we collect, use, and protect
                    your data. By using our services, you agree to these terms.
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-sm text-red-500">{errors.terms.message}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#EF3F3F] text-white py-2 rounded-md hover:bg-[#e73333] transition"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default BuyerSignup;
