import { useState, useEffect } from "react";
import HomeProductCard from "./HomeProductCard";
import { products } from "@/lib/productCard/cardData";
import { Button } from "@/components/ui/button";
import arrow from "../../assets/Icon/arrow.svg";

const HomeProducts = () => {
  const [visibleCount, setVisibleCount] = useState(30); // large device cards count
  const [mobileIndex, setMobileIndex] = useState(1); // for mobile paging (4 cards per page)
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

  // Calculate displayed products
  const displayedProducts = isMobile
    ? products.slice(0, mobileIndex * 4) // mobile: 4 cards per page (2 cols x 2 rows)
    : products.slice(0, visibleCount); // desktop: visibleCount cards (30 by default)

  // Explore more click handler
  const handleExploreMore = () => {
    if (isMobile) {
      setMobileIndex((prev) => prev + 1);
    } else {
      setVisibleCount((prev) => prev + 30);
    }
  };

  // Check if more products available
  const hasMore = isMobile
    ? mobileIndex * 4 < products.length
    : visibleCount < products.length;

  return (
    <div>
      {/* Grid */}
      <div
        className={`grid gap-8 ${
          isMobile ? "grid-cols-2 grid-rows-2" : "grid-cols-6 grid-rows-5"
        }`}
      >
        {displayedProducts.map((product, idx) => (
          <HomeProductCard key={idx} {...product} />
        ))}
      </div>

      {/* Explore More Button */}
      {/* Explore More Button */}
      {hasMore && (
        <div className="text-center mt-6">
          <Button
            onClick={handleExploreMore}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg md:rounded-xl 
                 text-sunset-orange font-medium md:font-semibold text-base md:text-lg 
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
