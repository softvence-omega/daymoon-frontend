import { IoMdStar } from "react-icons/io";
import { RatingBreakdown } from "./type/Review";

interface RatingBreakdownProps {
  breakdown: RatingBreakdown[];
}

export function RatingBreakdownChart({ breakdown }: RatingBreakdownProps) {
  return (
    <div className="space-y-2">
      {breakdown.map((item) => (
        <div key={item.stars} className="flex items-center gap-3">
          <div className="flex items-center gap-1 w-8">
            <span className="text-sm font-medium">{item.stars}</span>
            <IoMdStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>

          <div className="flex-1 bg-gray-100 rounded-full h-1.5">
            <div
              className="bg-[#1565D8] h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${item.percentage}%` }}
            />
          </div>

          <span className="text-sm font-medium text-gray-600 w-8">
            {item.percentage}%
          </span>
        </div>
      ))}
    </div>
  );
}
