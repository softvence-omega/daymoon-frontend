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
    <div className="flex min-h-screen w-full font-sans">
      {/* Left Side */}
      <div className="w-1/2 bg-[#651D17] flex items-center justify-center">
        <img
          src={img}
          alt="Signup"
          className="w-full max-w-[626px]  h-[626px] object-contain"
        />
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-white relative flex items-center justify-center px-10">
        {/* Language + Sign In */}
        <div className="absolute top-6 right-8 max-w-[616px] text-sm">
          <div className="flex justify-end">
            <FaGlobe className="text-gray-800 w-[20px] h-[20px]" />
          </div>
          <p className="text-gray-500 mt-8 text-right">
            Already have an account?{" "}
            <span className="text-[#F14141] font-medium cursor-pointer">
              Sign In
            </span>
          </p>
        </div>

        {/* Form Content */}
        <div className="w-full max-w-[616px]">
          <h1 className="text-[22px] font-bold text-black mb-2">JOIN US!</h1>
          <p className="text-gray-600 text-[14px] mb-6 leading-[1.4]">
            To begin this journey, tell us what type of <br /> account you’d be
            opening.
          </p>

          {/* Cards */}
          <div className="space-y-4">
            {/* Buyer Card */}
            <div
              onClick={() => setRole("buyer")}
              className={`flex items-start gap-3 px-4 py-6 rounded-lg cursor-pointer transition-all ${
                role === "buyer"
                  ? "bg-[#FFF7EE] border border-goldenrod"
                  : "bg-[#EDEDED] border border-transparent"
              }`}
            >
              <div>
                <img
                  className="w-[30px] h-[30px] flex-shrink-0 aspect-square"
                  src={buyer}
                  alt=""
                />
              </div>

              <div>
                <h3 className="font-semibold text-black text-sm mb-1">Buyer</h3>
                <p className="text-[13px] text-gray-600 leading-tight">
                  Lorem ipsum dolor sit amet consectetur. Aliquet ac arcu nullam
                  nunc aliquet.
                </p>
              </div>
            </div>

            {/* Supplier Card */}
            <div
              onClick={() => setRole("supplier")}
              className={`flex items-start gap-3 px-4 py-6 rounded-lg cursor-pointer transition-all ${
                role === "supplier"
                  ? "bg-[#FFF7EE] border border-goldenrod"
                  : "bg-[#EDEDED] border border-transparent"
              }`}
            >
              <div>
                <img
                  className="w-[30px] h-[30px] flex-shrink-0 aspect-square"
                  src={supplier}
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold text-black text-sm mb-1">
                  Supplier
                </h3>
                <p className="text-[13px] text-gray-600 leading-tight">
                  Lorem ipsum dolor sit amet consectetur. Aliquet ac arcu nullam
                  nunc aliquet.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleSubmit}
            disabled={!role}
            className={`mt-6 px-6 py-2 rounded-[20px] font-medium transition ${
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
  );
};

export default SignupJoin;
