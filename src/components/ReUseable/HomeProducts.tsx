import { useState, useEffect } from "react";
import HomeProductCard from "./HomeProductCard";
import { products } from "@/lib/productCard/cardData";
import { Button } from "@/components/ui/button";
import arrow from "../../assets/Icon/arrow.svg";

const HomeProducts = () => {
  const [visibleCount, setVisibleCount] = useState(30); // desktop default
  const [mobileIndex, setMobileIndex] = useState(1); // mobile pagination
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Products to show
  const displayedProducts = isMobile
    ? products.slice(0, mobileIndex * 4)
    : products.slice(0, visibleCount);

  // Handle explore more
  const handleExploreMore = () => {
    if (isMobile) {
      setMobileIndex((prev) => prev + 1);
    } else {
      setVisibleCount((prev) => prev + 30);
    }
  };

  // Whether there are more products to show
  const hasMore = isMobile
    ? mobileIndex * 4 < products.length
    : visibleCount < products.length;

  return (
    <div className="mt-[80px]">
      {/* Grid */}
      <div
        className={`grid gap-8 ${
          isMobile
            ? `grid-cols-2 ${displayedProducts.length > 2 ? "grid-rows-2" : ""}`
            : "grid-cols-6"
        }`}
      >
        {displayedProducts.map((product, idx) => (
          <HomeProductCard key={idx} {...product} />
        ))}
      </div>

      {/* Explore More Button */}
      {hasMore && (
        <div className="text-center mt-6">
          <Button
            onClick={handleExploreMore}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-[20px] 
              text-sunset-orange font-medium md:font-semibold text-base md:text-[18px] 
              hover:shadow-lg transition-shadow cursor-pointer"
          >
            Explore More
            <img src={arrow} alt="arrow icon" className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomeProducts;
