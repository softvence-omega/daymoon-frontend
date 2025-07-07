import CommonHeader from "@/common/CommonHeader";
import { RatingBreakdownChart } from "./RatingBreakdownChart";
import { Review, ReviewSummary } from "./type/Review";
import { ReviewCard } from "./ReviewCard";
import { StarRating } from "./StarRating";

import img from "../../../../assets/landing/review.png";

interface ReviewFeedbackProps {
  summary?: ReviewSummary;
  reviews?: Review[];
}

const ReviewFeedback = ({ summary, reviews }: ReviewFeedbackProps) => {
  const defaultSummary: ReviewSummary = {
    averageRating: 4.5,
    totalReviews: 28,
    breakdown: [
      { stars: 5, percentage: 70, count: 20 },
      { stars: 4, percentage: 20, count: 6 },
      { stars: 3, percentage: 5, count: 1 },
      { stars: 2, percentage: 3, count: 1 },
      { stars: 1, percentage: 2, count: 0 },
    ],
  };

  const defaultReviews: Review[] = [
    {
      id: "1",
      author: {
        name: "Arlene McCoy",
        avatar: img,
      },
      rating: 4.5,
      date: "20 June 2025",
      content:
        "I recently tried the EcoBlend Blender, and I must say, it's a game changer! The powerful motor blends everything smoothly, and the eco-friendly design is a huge plus. Cleanup is a breeze too, thanks to its dishwasher-safe components. Highly recommend for anyone looking to upgrade their kitchen gadgets!",
    },
    {
      id: "2",
      author: {
        name: "Arlene McCoy",
        avatar: img,
      },
      rating: 4.5,
      date: "20 June 2025",
      content:
        "I recently tried the EcoBlend Blender, and I must say, it's a game changer! The powerful motor blends everything smoothly, and the eco-friendly design is a huge plus. Cleanup is a breeze too, thanks to its dishwasher-safe components. Highly recommend for anyone looking to upgrade their kitchen gadgets!",
    },
    {
      id: "3",
      author: {
        name: "Arlene McCoy",
        avatar: img,
      },
      rating: 4.5,
      date: "20 June 2025",
      content:
        "I recently tried the EcoBlend Blender, and I must say, it's a game changer! The powerful motor blends everything smoothly, and the eco-friendly design is a huge plus. Cleanup is a breeze too, thanks to its dishwasher-safe components. Highly recommend for anyone looking to upgrade their kitchen gadgets!",
    },
  ];

  const reviewSummary = summary || defaultSummary;
  const reviewList = reviews || defaultReviews;

  return (
    <div className="bg-white border border-foundation-white rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <CommonHeader>Review & Feedback</CommonHeader>
        <button className=" text-sunset-orange font-medium">
          View All ({reviewSummary.totalReviews})
        </button>
      </div>

      {/* Rating Summary */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="text-center md:text-left">
          <CommonHeader className="!text-5xl !font-semibold  mb-2">
            {reviewSummary.averageRating}
          </CommonHeader>
          <StarRating rating={reviewSummary.averageRating} size="lg" />
          <p className="text-gray-600 mt-2">
            Based on {reviewSummary.totalReviews} ratings
          </p>
        </div>

        <div>
          <RatingBreakdownChart breakdown={reviewSummary.breakdown} />
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviewList.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewFeedback;
