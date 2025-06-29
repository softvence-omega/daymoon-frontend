import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/SignUp/signup.png";
import { FaShoppingCart, FaTruck } from "react-icons/fa";

const SignupJoin = () => {
  const [role, setRole] = useState<"buyer" | "supplier" | "">("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (role) {
      navigate(`/signup/${role}`);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left: Image */}
      <div className="w-1/2 bg-[#581b1b] flex items-center justify-center">
        <img src={img} alt="Signup" className="max-w-[400px] w-full" />
      </div>

      {/* Right: Form */}
      <div className="w-1/2 bg-white px-[60px] py-[40px] relative">
        {/* Sign In top link */}
        <p className="absolute top-6 right-6 text-sm text-gray-500">
          Already have an account?{" "}
          <span className="text-red-500 font-medium cursor-pointer">Sign In</span>
        </p>

        <div className="mt-[80px]">
          <h1 className="text-[24px] font-semibold text-black mb-3">JOIN US!</h1>
          <p className="text-gray-600 mb-6 text-[14px]">
            To begin this journey, tell us what type of account you’d be opening.
          </p>

          {/* Selectable Cards */}
          <div className="space-y-4">
            {/* Buyer */}
            <div
              onClick={() => setRole("buyer")}
              className={`flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition ${
                role === "buyer"
                  ? "border-orange-400 bg-orange-50"
                  : "border-transparent bg-[#f5f5f5] hover:border-black"
              }`}
            >
              <div className="flex items-start gap-3">
                <FaShoppingCart className="text-[24px] text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Buyer</h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. Aliquet at arcu nullam nunc aliquet.
                  </p>
                </div>
              </div>
            </div>

            {/* Supplier */}
            <div
              onClick={() => setRole("supplier")}
              className={`flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition ${
                role === "supplier"
                  ? "border-orange-400 bg-orange-50"
                  : "border-transparent bg-[#f5f5f5] hover:border-black"
              }`}
            >
              <div className="flex items-start gap-3">
                <FaTruck className="text-[24px] text-orange-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Supplier</h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. Aliquet at arcu nullam nunc aliquet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleSubmit}
            disabled={!role}
            className={`mt-6 px-6 py-2 rounded-full font-medium transition ${
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