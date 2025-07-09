import AnimatedPurchaseBehaviorChart from "./AnimatedPurchaseBehaviorChart";

const sampleData = [
  { category: "Home Goods", value: 120 },
  { category: "Home Goods", value: 180 },
  { category: "Electronics", value: 160 },
  { category: "Clothing", value: 200 },
];

export default function AnimatedHome() {
  return (
    <div className="bg-gray-50  ">
      <div className=" mx-auto space-y-8">
        {/* Original Chart */}
        <AnimatedPurchaseBehaviorChart
          data={sampleData}
          title="Purchase Behaviour"
          maxValue={350}
        />
      </div>
    </div>
  );
}
