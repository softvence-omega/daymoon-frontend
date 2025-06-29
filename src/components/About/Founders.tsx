import { founders } from "@/lib/about/card";

const Founders = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <h5
        className="text-[32px] font-semibold leading-[38.4px] uppercase 
                   text-center md:text-left"
      >
        founders
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[32px]">
        {founders.map((founder, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-[12px] bg-white"
          >
            {/* Image */}
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-[320px] sm:h-[380px] md:h-[300px] lg:h-[450px] object-cover rounded-[16px] mb-[20px]"
            />

            {/* Content */}
            <div className="space-y-[12px] md:text-center lg:text-left">
              <h2 className="text-[20px] lg:text-[24px] font-semibold leading-[31.2px] text-[#1A1A1A]">
                {founder.name}
              </h2>
              <p className="text-[16px] font-normal leading-[25.6px] text-jet-black">
                {founder.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
