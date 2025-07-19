export default function ConversionFunnel() {
  const funnelData = [
    { label: "Views", value: 15000, percentage: 100 },
    { label: "Detail View", value: 3000, percentage: 60 },
    { label: "Add to Cart", value: 1500, percentage: 30 },
    { label: "Purchased", value: 1000, percentage: 20 },
  ];

  return (
    <div className=" border border-[#E5E5E5] rounded-2xl mx-auto p-8 bg-[#FFFFFF]">
      <h1 className="text-[24px] leading-[130%]  text-[#484848] mb-5">
        Conversion Funnel
      </h1>

      <div className="space-y-8">
        {funnelData.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">{item.label}</span>
              <span className="text-gray-800 font-semibold">
                {item.value.toLocaleString()}
              </span>
            </div>

            <div className="w-full bg-gray-300 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
