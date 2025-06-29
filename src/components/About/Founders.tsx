import { founders } from "@/lib/about/card";

const Founders = () => {
  return (
    <div className="">
      <h5
        className="text-[32px] font-semibold leading-[38.4px] uppercase 
                   text-center md:text-left"
      >
        founders
      </h5>

      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center md:items-start justify-center md:justify-between gap-[24px] mt-[32px]">
        {founders.map((founder, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-[12px] bg-white"
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[450px] object-cover rounded-[16px] mb-[20px]"
            />
            <div className="space-y-[12px]">
              <h2 className="text-[24px] font-medium leading-[31.2px] text-[#1A1A1A]">
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
