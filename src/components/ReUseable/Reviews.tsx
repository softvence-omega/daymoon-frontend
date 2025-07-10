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
import { FaArrowRightLong, FaChevronDown, FaStar } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Reviews = () => {
  const [sortOption, setSortOption] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(9);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const filteredReviews = reviews.filter((review) => {
    if (sortOption === "latest") return review.rating === 5;
    if (sortOption === "highest") return review.rating >= 3;
    if (sortOption === "lowest") return review.rating < 3.5;
    return true;
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
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] uppercase">
          ALL REVIEWS{" "}
          <span className="text-jet-black text-sm sm:text-base font-normal">
            ({filteredReviews.length})
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="hidden md:flex rounded-full bg-[#F0F0F0] w-12 h-12 sm:w-14 sm:h-14 items-center justify-center shrink-0">
              <img src={frame} alt="Filter" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <Select
              value={sortOption}
              onValueChange={(value) => {
                setSortOption(value);
                setVisibleCount(window.innerWidth < 768 ? 6 : 9);
              }}
            >
              <SelectTrigger className="cursor-pointer rounded-full bg-[#F0F0F0] w-full sm:w-[180px] border-none px-4 sm:px-6 text-[#181C32] text-[16px] font-medium sm:font-semibold flex items-center justify-between py-[24px]">
                <SelectValue placeholder="Latest" />
                <FaChevronDown className="ml-2 h-4 w-4 text-sunset-orange" />
              </SelectTrigger>
              <SelectContent className="rounded-lg bg-white py-4">
                <SelectItem value="latest" className="cursor-pointer">
                  Latest
                </SelectItem>
                <SelectItem value="highest" className="cursor-pointer hover:text-sunset-orange">
                  Highest
                </SelectItem>
                <SelectItem value="lowest" className="cursor-pointer hover:text-sunset-orange">
                  Lowest
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <button className="cursor-pointer bg-goldenrod text-white w-full sm:w-[180px] py-3 text-[16px] rounded-full font-medium sm:font-semibold flex items-center justify-center px-4 transition-all duration-300 hover:bg-orange-600">
                Write a Review
              </button>
            </DialogTrigger>
            <DialogContent
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-[95vw] sm:max-w-lg border border-gray-200 
              transition-all duration-500 ease-in-out animate-fade-in"
            >
              <DialogHeader className="mb-4">
                <DialogTitle className="text-2xl font-semibold text-gray-900">
                  ✍️ Write Your Review
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-gray-50 border border-gray-300 focus:ring-1 focus:ring-sunset-orange rounded-lg px-4 py-2 text-sm"
                  />
                </div>

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
                    className="w-full bg-gray-50 border border-gray-300 focus:ring-1 focus:ring-sunset-orange rounded-lg px-4 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleSubmitReview}
                  className="bg-sunset-orange text-white px-6 py-2.5 rounded-full font-medium hover:bg-orange-600 transition duration-300"
                >
                  Submit Review
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

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

      {visibleCount < sortedReviews.length && (
        <div className="flex justify-center mt-8 sm:mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-white shadow-md rounded-lg sm:rounded-xl px-4 sm:px-5 text-sunset-orange font-medium sm:font-semibold text-base hover:shadow-lg transition flex items-center gap-2 py-2 sm:py-3"
          >
            More Reviews <FaArrowRightLong className="text-sm sm:text-base" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Reviews;
