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
  const [visibleCount, setVisibleCount] = useState(9); // Start with 6 for mobile

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
    const loadAmount = window.innerWidth < 768 ? 3 : 6;
    setVisibleCount((prev) => prev + loadAmount);
  };

  return (
    <section className="mt-8 md:mt-[48px] px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] leading-[120%] uppercase">
          ALL REVIEWS{" "}
          <span className="text-jet-black text-sm sm:text-base font-normal leading-[160%]">
            ({filteredReviews.length})
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Filter Button */}
            <button className="rounded-full bg-[#F0F0F0] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center cursor-pointer shrink-0">
              <img src={frame} alt="Filter" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Sort Dropdown */}
            <Select
              value={sortOption}
              onValueChange={(value) => {
                setSortOption(value);
                setVisibleCount(window.innerWidth < 768 ? 6 : 9);
              }}
            >
              <SelectTrigger className="rounded-full bg-[#F0F0F0] w-full sm:w-[180px] h-12 sm:h-14 border-none focus:ring-0 outline-none text-[#181C32] font-medium sm:font-semibold text-sm sm:text-base shadow-none px-4 sm:px-6 flex items-center cursor-pointer">
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
          </div>

          {/* Write Review Button */}
          <button className="bg-sunset-orange text-white w-full sm:w-[180px] h-12 sm:h-14 text-sm sm:text-base rounded-full font-medium sm:font-semibold flex items-center justify-center cursor-pointer px-4">
            Write a Review
          </button>
        </div>
      </div>

      {/* Review Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
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
        <div className="flex justify-center mt-8 sm:mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-white shadow-md rounded-lg sm:rounded-xl px-4 sm:px-5 text-goldenrod font-medium sm:font-semibold text-base hover:shadow-lg transition flex items-center gap-2 sm:gap-3 py-2 sm:py-3 cursor-pointer"
          >
            Load More Reviews <FaArrowRightLong className="text-sm sm:text-base" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Reviews;