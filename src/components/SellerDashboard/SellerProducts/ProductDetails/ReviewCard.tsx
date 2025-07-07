import { Review } from "./type/Review";
import { StarRating } from "./StarRating";
import img from "../../../../assets/landing/11646368f8dee5f8cbbffa51d46fd9524f76b69d.png";
import SubHeader from "@/common/SubHeader";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="border-b border-gray-100 pb-6 last:border-b-0">
      <div className="flex items-start gap-3">
        <img
          src={review.author.avatar || img}
          alt={review.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <SubHeader className="!text-base !text-black">
                {review.author.name}
              </SubHeader>
              <SubHeader>{review.date}</SubHeader>
            </div>
            <StarRating rating={review.rating} size="sm" />
          </div>
          <SubHeader className="!text-base !text-black mb-3 leading-relaxed">
            {review.content}
          </SubHeader>

          <SubHeader className="!text-base  !text-catalien-blue hover:text-gray-800 cursor-pointer underline">
            Reply to this review
          </SubHeader>
        </div>
      </div>
    </div>
  );
}
