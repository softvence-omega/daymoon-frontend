import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/SignUp/signup.png";
import { FaGlobe } from "react-icons/fa";
import buyer from "../../assets/Icon/cart.png";
import supplier from "../../assets/Icon/truck.png";

const SignupJoin = () => {
  const [role, setRole] = useState<"buyer" | "supplier" | "">("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (role) {
      navigate(`/signup/${role}`);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full font-sans">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-[#651D17] flex items-center justify-center min-h-[300px] lg:min-h-screen py-8">
        <img
          src={img}
          alt="Signup"
          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[626px] h-auto object-contain"
        />
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col min-h-[300px] lg:min-h-screen items-center">
        <div className="w-full max-w-[616px] mx-auto flex flex-col flex-1 h-full px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Language + Sign In */}
          <div className="flex justify-end pt-10">
            <div className="text-sm text-right">
              <div className="flex justify-end">
                <FaGlobe className="text-gray-800 w-[20px] h-[20px]" />
              </div>
              <p className="text-gray-500 mt-4 text-xs sm:text-sm">
                Already have an account?{" "}
                <span className="text-[#F14141] font-medium cursor-pointer">
                  Sign In
                </span>
              </p>
            </div>
          </div>
          {/* Centered Form Content */}
          <div className="flex flex-1 items-center justify-center w-full">
            <div className="w-full py-8">
              <h1 className="text-[18px] sm:text-[22px] font-bold text-black mb-2">
                JOIN US!
              </h1>
              <p className="text-gray-600 text-[12px] sm:text-[14px] mb-6 leading-[1.4]">
                To begin this journey, tell us what type of account you'd be
                opening.
              </p>

              {/* Cards */}
              <div className="space-y-3 sm:space-y-4">
                {/* Buyer Card */}
                <div
                  onClick={() => setRole("buyer")}
                  className={`flex items-start gap-3 p-3 sm:px-4 sm:py-6 rounded-lg cursor-pointer transition-all ${
                    role === "buyer"
                      ? "bg-[#FFF7EE] border border-goldenrod"
                      : "bg-[#EDEDED] border border-transparent"
                  }`}
                >
                  <div>
                    <img
                      className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] flex-shrink-0 aspect-square"
                      src={buyer}
                      alt="Buyer"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-xs sm:text-sm mb-1">
                      Buyer
                    </h3>
                    <p className="text-[11px] sm:text-[13px] text-gray-600 leading-tight">
                      Lorem ipsum dolor sit amet consectetur. Aliquet ac arcu
                      nullam nunc aliquet.
                    </p>
                  </div>
                </div>
                {/* Supplier Card */}
                <div
                  onClick={() => setRole("supplier")}
                  className={`flex items-start gap-3 p-3 sm:px-4 sm:py-6 rounded-lg cursor-pointer transition-all ${
                    role === "supplier"
                      ? "bg-[#FFF7EE] border border-goldenrod"
                      : "bg-[#EDEDED] border border-transparent"
                  }`}
                >
                  <div>
                    <img
                      className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] flex-shrink-0 aspect-square"
                      src={supplier}
                      alt="Supplier"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-xs sm:text-sm mb-1">
                      Supplier
                    </h3>
                    <p className="text-[11px] sm:text-[13px] text-gray-600 leading-tight">
                      Lorem ipsum dolor sit amet consectetur. Aliquet ac arcu
                      nullam nunc aliquet.
                    </p>
                  </div>
                </div>
              </div>
              {/* Button */}
              <button
                onClick={handleSubmit}
                disabled={!role}
                className={`mt-4 sm:mt-6 px-4 sm:px-6 py-2 rounded-[20px] font-medium transition w-full sm:w-auto ${
                  role
                    ? "bg-[#F14141] text-white hover:bg-red-600"
                    : "bg-gray-300 text-white cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupJoin;