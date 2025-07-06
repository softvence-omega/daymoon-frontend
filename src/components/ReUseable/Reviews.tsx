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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Reviews = () => {
  const [sortOption, setSortOption] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(9);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const filteredReviews = reviews.filter((review) => {
    if (sortOption === "latest") {
      return 0;
    } else if (sortOption === "highest") {
      return b.rating - a.rating;
    } else if (sortOption === "lowest") {
      return a.rating - b.rating;
    }
    return 0;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => b.rating - a.rating);
  const visibleReviews = sortedReviews.slice(0, visibleCount);

  const handleLoadMore = () => {
    const loadAmount = window.innerWidth < 768 ? 3 : 6;
    setVisibleCount((prev) => prev + loadAmount);
  };

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleSubmitReview = () => {
    console.log({ name, rating, description });
    setName("");
    setRating(0);
    setDescription("");
  };

  return (
    <section className="mt-8 md:mt-[24px]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] leading-[120%] uppercase">
          ALL REVIEWS{" "}
          <span className="text-jet-black text-base font-normal leading-[160%]">
            ({reviews.length})
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="hidden md:flex rounded-full bg-[#F0F0F0] w-12 h-12 sm:w-14 sm:h-14 items-center justify-center cursor-pointer shrink-0">
              <img src={frame} alt="Filter" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <Select
              value={sortOption}
              onValueChange={(value) => {
                setSortOption(value);
                setVisibleCount(window.innerWidth < 768 ? 6 : 9);
              }}
            >
              <SelectTrigger className="cursor-pointer rounded-full bg-[#F0F0F0] w-full sm:w-[180px] h-12 sm:h-14 border-none focus:ring-0 outline-none text-[#181C32] font-medium sm:font-semibold text-sm sm:text-base shadow-none px-4 py-6 sm:px-6 flex items-center">
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

          <Dialog>
            <DialogTrigger asChild>
              <button className="cursor-pointer bg-sunset-orange text-white w-full sm:w-[180px] h-10 sm:h-12 text-sm sm:text-base rounded-full font-medium sm:font-semibold flex items-center justify-center px-4">
                Write a Review
              </button>
            </DialogTrigger>
            <DialogContent className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-[95vw] sm:max-w-lg border border-gray-200">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-2xl font-semibold text-gray-900">
                  ✍️ Write Your Review
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-gray-50 border border-gray-300 focus:ring-1 focus:ring-sunset-orange focus:border-sunset-orange rounded-lg px-4 py-2 text-sm"
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Rating
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`h-6 w-6 transition-colors ${
                          star <= rating ? "text-yellow-400" : "text-gray-300"
                        } cursor-pointer`}
                        onClick={() => handleRatingClick(star)}
                      />
                    ))}
                  </div>
                </div>

                {/* Description Field */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Review Description
                  </label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Share your experience..."
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-300 focus:ring-1 focus:ring-sunset-orange focus:border-sunset-orange rounded-lg px-4 py-2 text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleSubmitReview}
                  className="cursor-pointer bg-sunset-orange text-white px-6 py-2.5 rounded-full font-medium hover:bg-orange-600 transition"
                >
                  Submit Review
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Review Cards */}
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

      {/* Load More */}
      {visibleReviews < sortedReviews.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="cursor-pointer bg-white shadow-md rounded-lg sm:rounded-xl px-4 sm:px-5 text-sunset-orange font-medium sm:font-semibold text-base hover:shadow-lg transition flex items-center gap-2 sm:gap-3 py-2 sm:py-3"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </section>
  );
};

export default Reviews;
