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
import { FaArrowRightLong } from "react-icons/fa6";

const Reviews = () => {
  const [sortOption, setSortOption] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(9);

  // Filter based on selected option
  const filteredReviews = reviews.filter((review) => {
    if (sortOption === "latest") {
      return review.rating === 5;
    } else if (sortOption === "highest") {
      return review.rating >= 3 && review.rating <= 5;
    } else if (sortOption === "lowest") {
      return review.rating >= 1 && review.rating < 3.5;
    }
    return true;
  });

  // Sort descending
  const sortedReviews = [...filteredReviews].sort((a, b) => b.rating - a.rating);

  const visibleReviews = sortedReviews.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <section className="mt-[48px]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
        <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1A1A1A] leading-[120%] uppercase">
          ALL REVIEWS{" "}
          <span className="text-jet-black text-base font-normal leading-[160%]">
            ({filteredReviews.length})
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          {/* Filter Button */}
          <button className="rounded-full bg-[#F0F0F0] w-[56px] h-[56px] flex items-center justify-center cursor-pointer">
            <img src={frame} alt="Filter" className="w-6 h-6" />
          </button>

          {/* Sort Dropdown */}
          <Select
            value={sortOption}
            onValueChange={(value) => {
              setSortOption(value);
              setVisibleCount(9); // Reset on change
            }}
          >
            <SelectTrigger className="rounded-full bg-[#F0F0F0] w-[180px] h-[56px] border-none focus:ring-0 outline-none text-[#181C32] font-semibold text-base shadow-none px-6 flex items-center cursor-pointer">
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

          {/* Write Review Button */}
          <button className="bg-[#FCAB3F] text-white w-full sm:w-[180px] h-[56px] text-base rounded-full font-semibold flex items-center justify-center cursor-pointer">
            Write a Review
          </button>
        </div>
      </div>

      {/* Review Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {visibleReviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < sortedReviews.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-white shadow-md rounded-xl px-5 text-goldenrod font-semibold text-lg hover:shadow-lg transition flex items-center gap-3 py-3 cursor-pointer"
          >
            Load More Reviews <FaArrowRightLong />
          </button>
        </div>
      )}
    </section>
  );
};

export default Reviews;
