import { factsData } from "@/lib/about/stats";

const Facts = () => {
  return (
    <div className="my-[120px] max-[767px]:my-[60px] w-full">
      <h5 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[1.2] md:leading-[1.25] lg:leading-[38.4px] uppercase text-center md:text-left ld:text-left">
        Fast facts
      </h5>
      <div className="pt-[24px] md:pt-[32px] lg:pt-[40px] flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-[33px] w-full">
        {factsData.map((fact, idx) => (
          <div
            key={idx}
            className="py-6 md:py-8 lg:py-[45px] w-full border border-foundation-white rounded-lg md:rounded-xl lg:rounded-[12px] bg-white"
          >
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.1] md:leading-[1.1] lg:leading-[48px] tracking-[-0.06em] uppercase text-center text-sunset-orange">
              {fact.value}
            </h2>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-[1.6] md:leading-[1.65] lg:leading-[28.8px] text-jet-black text-center mt-2 md:mt-3 lg:mt-4">
              {fact.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facts;
