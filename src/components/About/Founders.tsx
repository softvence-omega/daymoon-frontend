import { founders } from "@/lib/about/card";

const Founders = () => {
  return (
    <div>
      <h5 className="text-[32px] font-semibold leading-[38.4px] uppercase">
        founders
      </h5>
      <div className="flex items-center justify-between gap-[32px] mt-[40px]">
        {founders.map((founder, idx) => (
          <div key={idx} className="flex flex-col rounded-[12px] bg-white]">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-[450px] rounded-[16px] mb-[20px]"
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
