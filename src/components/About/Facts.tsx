import { factsData } from "@/lib/about/stats";

const Facts =() => {
  return (
    <div className="my-[120px] self-stretch w-full">
      <h5 className="text-[32px] font-semibold leading-[38.4px] uppercase">Fast facts</h5>
      <div className="pt-[40px] flex items-center gap-[33px] self-stretch w-full">
        {factsData.map((fact, idx) => (
          <div
            key={idx}
            className="py-[45px] w-full border border-foundation-white rounded-[12px] bg-white"
          >
            <h2 className="text-[48px] font-semibold leading-[48px] tracking-[-0.06em] uppercase text-center text-sunset-orange">
              {fact.value}
            </h2>
            <p className="text-[18px] font-normal leading-[28.8px] text-jet-black text-center">
              {fact.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facts;