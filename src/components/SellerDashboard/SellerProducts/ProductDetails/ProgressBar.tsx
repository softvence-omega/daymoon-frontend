import CommonHeader from "@/common/CommonHeader";
import SubHeader from "@/common/SubHeader";

interface FunnelStage {
  label: string;
  value: number;
  maxValue: number;
}

interface ConversionFunnelProps {
  stages?: FunnelStage[];
}

const ProgressBar = ({ stages }: ConversionFunnelProps) => {
  const defaultStages: FunnelStage[] = [
    { label: "Views", value: 15000, maxValue: 15000 },
    { label: "Detail View", value: 3000, maxValue: 15000 },
    { label: "Add to Cart", value: 1500, maxValue: 15000 },
    { label: "Porched", value: 1000, maxValue: 15000 },
  ];

  const funnelStages = stages || defaultStages;

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  const getProgressPercentage = (value: number, maxValue: number): number => {
    return (value / maxValue) * 100;
  };

  return (
    <div className="">
      <CommonHeader className="pb-6">Conversion Funnel</CommonHeader>
      <div className="space-y-6">
        {funnelStages.map((stage, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <SubHeader>{stage.label}</SubHeader>
              <SubHeader>{formatNumber(stage.value)}</SubHeader>
            </div>

            <div className="w-full bg-gray-300 rounded-full h-1.5">
              <div
                className="bg-[#1565D8] h-1.5  rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${getProgressPercentage(
                    stage.value,
                    stage.maxValue
                  )}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
