import img from "../../assets/About/joinUs.png";

const JoinUs = () => {
  return (
    <div className="w-full h-auto lg:h-[466px]  bg-my-gradient rounded-lg md:rounded-xl lg:rounded-[16px] flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden">
      {/* Content Section - Comes second on mobile, first on desktop */}
      <div className="text-[#FCFCFC] w-full lg:w-1/2 py-8 md:py-10 lg:py-0 lg:pl-[60px] p-5 md:p-0 lg:pr-[20px] text-center lg:text-left">
        <h2 className="text-xl md:text-[48px] lg:text-[67.36px] font-semibold leading-[1.2] md:leading-[1.25] lg:leading-[80.832px] tracking-[-0.05em] md:tracking-[-0.07em] lg:tracking-[-0.084em] uppercase mb-3 md:mb-4">
          Why Wait ? Join Us Today!
        </h2>
        <p className="text-[12px] md:text-[15px] lg:text-[16px] font-normal leading-[1.6] md:leading-[1.65] lg:leading-[25.6px] mb-4 md:mb-6 max-w-[500px] mx-auto lg:mx-0">
          Start your journey with Us and experience a platform designed for
          trust, quality, and convenience.
        </p>
        <button className="px-6 md:px-8 lg:px-[40px] py-2 md:py-[8px] lg:py-[10px] rounded-full md:rounded-[20px] bg-catalien-blue text-white font-medium hover:opacity-90 transition text-sm md:text-base cursor-pointer">
          Sign Up Now
        </button>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end pt-8 md:pt-10 lg:pt-0 lg:pr-[60px]">
        <img
          className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[401px] w-auto max-w-full object-contain"
          src={img}
          alt="Join Us"
        />
      </div>
    </div>
  );
};

export default JoinUs;
