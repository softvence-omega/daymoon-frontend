import SharedButton from "@/common/CommonHomepageButton";
import { products } from "@/lib/productCard/cardData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeProductCard from "./HomeProductCard";

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
    <div className="my-[80px]">
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
        <Link to="/products">
          <div className="max-w-[1520px] mx-auto flex justify-center mt-12 ">
            <SharedButton></SharedButton>
          </div>
        </Link>
      )}
    </div>
  );
};

export default HomeProducts;
