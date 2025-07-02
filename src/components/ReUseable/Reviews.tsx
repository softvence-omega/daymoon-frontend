import { useState } from "react";
import { reviews } from "@/lib/reviews";
import ReviewCard from "./ReviewCard";
import frame from "../../assets/Icon/frame.svg";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const Reviews = () => {
  const [sortOption, setSortOption] = useState("latest");
  const [visibleReviews, setVisibleReviews] = useState(9);

  // Sort reviews based on selected option
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortOption === "latest") {
      return 0;
    } else if (sortOption === "highest") {
      return b.rating - a.rating;
    } else if (sortOption === "lowest") {
      return a.rating - b.rating;
    }
    return 0;
  });

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 9);
  };

  return (
    <section className="mt-[40px]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h2 className="text-[32px] font-semibold text-[#1A1A1A] leading-[120%] uppercase">
          ALL REVIEWS{" "}
          <span className="text-jet-black text-base font-normal leading-[160%]">
            ({reviews.length})
          </span>
        </h2>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Filter Button */}
          <button className="rounded-full bg-[#F0F0F0] w-[56px] h-[56px] flex items-center justify-center">
            <img src={frame} alt="Filter" className="w-6 h-6" />
          </button>
          {/* ShadCN Select Component */}
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="rounded-full bg-[#F0F0F0] w-[180px] h-[56px] border-none focus:ring-0 outline-none text-[#181C32] font-semibold text-base shadow-none px-6 flex items-center">
              <SelectValue placeholder="Latest" />
            </SelectTrigger>
            <SelectContent className="rounded-lg bg-white">
              <SelectItem value="latest" className="cursor-pointer">
                Latest
              </SelectItem>
              <SelectItem value="highest" className="cursor-pointer">
                Highest
              </SelectItem>
              <SelectItem value="lowest" className="cursor-pointer">
                Lowest
              </SelectItem>
            </SelectContent>
          </Select>
          <button className="bg-[#FCAB3F] text-white w-[180px] h-[56px] text-base rounded-full font-semibold flex items-center justify-center">
            Write a Review
          </button>
        </div>
      </div>

      {/* Review Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedReviews.slice(0, visibleReviews).map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </div>

      {visibleReviews < sortedReviews.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreReviews}
            className="bg-white text-[#FCAB3F] border border-[#FCAB3F] px-6 py-3 rounded-full font-medium hover:bg-[#FCAB3F] hover:text-white transition-colors"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </section>
  );
};

export default Reviews;
