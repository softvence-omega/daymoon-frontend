interface StockProgressBarProps {
  current: number;
  max: number;
  threshold: number;
}

const StockProgressBar = ({
  current,
  max,
  threshold,
}: StockProgressBarProps) => {
  const percentage = (current / max) * 100;
  const isLowStock = current <= threshold;

  return (
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div
        className={`h-2 rounded-full transition-all duration-500 ${
          isLowStock ? "bg-red-500" : "bg-[#08AD36]"
        }`}
        style={{ width: `${Math.min(percentage, 100)}%` }}
      />
    </div>
  );
};

export default StockProgressBar;
