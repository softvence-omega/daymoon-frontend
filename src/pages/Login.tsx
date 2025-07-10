import Nav from "@/components/Authentication/Nav";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import img from "../assets/SignUp/signup.png"; // Adjust the path as necessary

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login Data:", data);
    navigate("/");
  };

  const styles = {
    input:
      "w-full px-4 py-3 rounded-[20px] border border-[#B3B3B3] bg-white text-gray-900 " +
      "focus:outline-none focus:ring-1 focus:ring-blue-400 " +
      "focus:shadow-[0_4px_10px_3px_rgba(21,101,216,0.25)]",

    button:
      "w-full bg-[#EF3F3F] text-white py-3 rounded-[20px] hover:bg-[#e73333] transition",

    label: "block text-sm font-medium text-gray-700 mb-[14px]",
    error: "text-sm text-red-500",
    rememberText: "text-sm text-gray-700",
    forgot: "text-sm text-[#FCAB3F] text-right block cursor-pointer",
  };

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side - Image */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-[#651D17]">
          <img src={img} alt="Login visual" className="w-3/4 object-contain" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-white flex flex-col px-4 py-12">
          {/* Nav at top */}
          <div className="w-full max-w-full pb-8 ">
            <Nav />
          </div>

          <div className="w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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

              {/* Remember Me + Forget Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className={styles.rememberText}>Remember Me</span>
                </label>
                <span className={styles.forgot}>Forget Password?</span>
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.button}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
