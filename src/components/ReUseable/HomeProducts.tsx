// components/HomeProduct/HomeProducts.tsx

import { useState, useEffect, useCallback } from "react";
import HomeProductCard from "./HomeProductCard";
import { products } from "@/lib/productCard/cardData";
import MoreButton from "./MoreButton";

interface HomeProductsProps {
  cols: {
    mobile: number;
    md: number;
    lg: number;
  };
  rows: {
    mobile: number;
    md: number;
    lg: number;
  };
}

const isMobileWidth = (width: number) => width < 768;
const isMdWidth = (width: number) => width >= 768 && width < 1024;

const HomeProducts = ({ cols, rows }: HomeProductsProps) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCount = useCallback(() => {
    if (isMobileWidth(windowWidth)) return cols.mobile * rows.mobile;
    if (isMdWidth(windowWidth)) return cols.md * rows.md;
    return cols.lg * rows.lg;
  }, [windowWidth, cols, rows]);

  useEffect(() => {
    setVisibleCount(getVisibleCount());
  }, [getVisibleCount]);

  const handleExploreMore = () => {
    setVisibleCount((prev) => prev + getVisibleCount());
  };

  const displayedProducts = products.slice(0, visibleCount);

  const currentCols = isMobileWidth(windowWidth)
    ? cols.mobile
    : isMdWidth(windowWidth)
    ? cols.md
    : cols.lg;

  const rowsCount = Math.ceil(displayedProducts.length / currentCols);

  const getColsClass = (num: number) => {
    switch (num) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      case 4:
        return "grid-cols-4";
      case 5:
        return "grid-cols-5";
      case 6:
        return "grid-cols-6";
      default:
        return "";
    }
  };

  const colClass = getColsClass(currentCols);
  const gridClass = `grid gap-8 ${colClass}`;

  const gridStyle =
    currentCols > 6
      ? { gridTemplateColumns: `repeat(${currentCols}, minmax(0, 1fr))` }
      : {};

  return (
    <div className="mt-[80px]">
      <div
        className={gridClass}
        style={{
          ...gridStyle,
          gridTemplateRows: `repeat(${rowsCount}, auto)`,
        }}
      >
        {displayedProducts.map((product, idx) => (
          <HomeProductCard key={idx} {...product} />
        ))}
      </div>

      {visibleCount < products.length && (
        <MoreButton onClick={handleExploreMore} text="Explore More"/>
      )}
    </div>
  );
};

export default HomeProducts;
