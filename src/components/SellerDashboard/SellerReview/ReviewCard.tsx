import SubHeader from "@/common/SubHeader";
import { TrendingUp } from "lucide-react";
import { IoMdStar } from "react-icons/io";

const ReviewCard = () => {
  const metrics = {
    averageRating: 4.3,
    totalReviews: 125,
    allProductReviews: 4552,
    positiveFeedback: 87,
    negativeFeedback: 13,
    growthPercentage: 12,
  };

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <IoMdStar key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <IoMdStar className="w-5 h-5 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <IoMdStar className="w-5 h-5 fill-orange-400 text-orange-400" />
          </div>
        </div>
      );
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <IoMdStar key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      );
    }

    return stars;
  };

  const MetricCard = ({
    title,
    value,
    subtitle,
    showStars = false,
    showProgressBar = false,
    progressColor = "green",
    progressValue = 0,
  }: {
    title: string;
    value: string | number;
    subtitle: string;
    showStars?: boolean;
    showProgressBar?: boolean;
    progressColor?: "green" | "red";
    progressValue?: number;
  }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 min-w-0">
      <div className="flex items-center justify-between mb-4">
        <SubHeader className="text-[#666] !text-lg ">{title}</SubHeader>
        <div className="flex items-center text-green-600">
          <TrendingUp className="w-4 h-4 mr-1" />
          <span className="text-sm font-medium">
            {metrics.growthPercentage}%
          </span>
        </div>
      </div>

      <div className="mb-3">
        <div className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          {value}
          {showStars && (
            <div className="flex items-center gap-1">
              {renderStars(metrics.averageRating)}
            </div>
          )}
        </div>

        {showProgressBar && (
          <div className="w-full bg-gray-200 rounded-full min-h-1.5 mb-2">
            <div
              className={`h-1.5 rounded-full ${
                progressColor === "green" ? "bg-green-500" : "bg-red-500"
              }`}
              style={{ width: `${progressValue}%` }}
            />
          </div>
        )}
      </div>

      <SubHeader className="t">{subtitle}</SubHeader>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 w-full">
      <MetricCard
        title="Average Rating"
        value={metrics.averageRating}
        subtitle={`Out of ${metrics.totalReviews} reviews`}
        showStars={true}
      />

      <MetricCard
        title="Total Reviews"
        value={metrics.allProductReviews.toLocaleString()}
        subtitle="Across all products"
      />

      <MetricCard
        title="Positive Feedback"
        value={`${metrics.positiveFeedback}%`}
        subtitle="4 & 5 star review"
        showProgressBar={true}
        progressColor="green"
        progressValue={metrics.positiveFeedback}
      />

      <MetricCard
        title="Negative Feedback"
        value={`${metrics.negativeFeedback}%`}
        subtitle="1 to 3 star review"
        showProgressBar={true}
        progressColor="red"
        progressValue={metrics.negativeFeedback}
      />
    </div>
  );
};

export default ReviewCard;
