import { CheckCircle, Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
}

const ReviewCard = ({ name, rating, review }: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-[2px_4px_14.1px_rgba(0,0,0,0.08)] p-5">
      {/* Star Rating */}
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 mr-1 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Name + Verified */}
      <div className="flex items-center font-semibold text-[#181C32] mb-2">
        {name}
        <CheckCircle className="text-green-500 h-4 w-4 ml-2" />
      </div>

      {/* Review Text */}
      <p className="text-[#484848] text-sm leading-relaxed line-clamp-4">
        "{review}"
      </p>
    </div>
  );
};

export default ReviewCard;
