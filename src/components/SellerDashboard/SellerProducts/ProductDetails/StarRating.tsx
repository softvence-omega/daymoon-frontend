import { IoMdStar } from "react-icons/io";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showRating?: boolean;
}

export function StarRating({
  rating,
  size = "md",
  showRating = false,
}: StarRatingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <IoMdStar
          key={star}
          className={`${sizeClasses[size]} ${
            star <= Math.floor(rating)
              ? "fill-yellow-400 text-yellow-400"
              : star <= rating
              ? "fill-yellow-400/50 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
      {showRating && (
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      )}
    </div>
  );
}
