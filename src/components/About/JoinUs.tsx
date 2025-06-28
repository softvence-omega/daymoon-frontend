import img from "../../assets/About/joinUs.png";

const JoinUs = () => {
  return (
    <div className="h-[466px] my-[120px] bg-my-gradient rounded-[16px] flex items-center justify-between overflow-hidden">
      {/* Left Content */}
      <div className="text-[#FCFCFC] pl-[60px] pr-[20px] w-1/2">
        <h2 className="text-[67.36px] font-semibold leading-[80.832px] tracking-[-0.084em] uppercase mb-4">
          Why Wait? Join Us Today!
        </h2>
        <p className="text-[16px] font-normal leading-[25.6px] mb-6">
          Start your journey with Us and experience a platform designed for
          trust, quality, and convenience.
        </p>
        <button className="px-[40px] py-[10px] rounded-[20px] bg-catalien-blue text-white font-medium hover:opacity-90 transition">
          Sign Up Now
        </button>
      </div>

      {/* Right Image */}
      <div className="w-1/2 flex justify-end pr-[60px]">
        <img
          className="h-[401px] w-auto flex-shrink-0 aspect-[715.89/401]"
          src={img}
          alt="Join Us"
        />
      </div>
    </div>
  );
};

export default JoinUs;
