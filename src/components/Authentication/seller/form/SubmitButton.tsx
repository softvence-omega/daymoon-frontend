import { useNavigate } from "react-router-dom";

const SubmitButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="submit"
        className={`mt-8 cursor-pointer w-full bg-sunset-orange text-white py-3 rounded-[20px] hover:bg-[#e73333] transition`}
      >
        Continue
      </button>
      <p className="text-sm text-center text-gray-500 mt-2">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-sunset-orange font-medium cursor-pointer"
        >
          Sign In
        </span>
      </p>
    </>
  );
};

export default SubmitButton;
