import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "./ProductCard";
import { products } from "@/lib/productCard/cardData";

interface ProductsComponentProps {
  selectedCategory: string;
  selectedPrice: string;
  gridCols?: "2" | "3" | "4" | "6"; // Desktop columns
  mobileCols?: 1 | 2;               // Mobile columns
  visibleCount?: number;
}

const ProductsComponent: React.FC<ProductsComponentProps> = ({
  selectedCategory,
  selectedPrice,
  gridCols = "3",
  mobileCols = 1,
  visibleCount = 6,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // gridCols জন্য switch দিয়ে desktop ক্লাস নির্ধারণ
  let desktopGridClass = "grid-cols-2 lg:grid-cols-3"; // default
  switch (gridCols) {
    case "2":
      desktopGridClass = "grid-cols-2 lg:grid-cols-2";
      break;
    case "3":
      desktopGridClass = "grid-cols-2 lg:grid-cols-3";
      break;
    case "4":
      desktopGridClass = "grid-cols-2 lg:grid-cols-4";
      break;
    case "6":
      desktopGridClass = "grid-cols-2 lg:grid-cols-6";
      break;
  }

  // mobileCols জন্য switch দিয়ে mobile ক্লাস নির্ধারণ
  let mobileGridClass = "grid-cols-1"; // default
  switch (mobileCols) {
    case 1:
      mobileGridClass = "grid-cols-1";
      break;
    case 2:
      mobileGridClass = "grid-cols-2";
      break;
  }

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const priceMatch =
      selectedPrice === "All" || product.priceRange === selectedPrice;
    return categoryMatch && priceMatch;
  });

  const productsToShow = showAll
    ? filteredProducts
    : filteredProducts.slice(0, visibleCount);

  const gridClass = isMobile ? mobileGridClass : desktopGridClass;

  return (
    <div className="mx-auto mt-12">
      <div className={`grid gap-4 ${gridClass} gap-6 md:gap-8`}>
        {productsToShow.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            images={product.images}
            priceRange={product.priceRange}
            rating={product.rating}
            moq={product.moq}
            discount={product.discount}
          />
        ))}
      </div>

      {!showAll && filteredProducts.length > visibleCount && (
        <div className="flex items-center justify-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="bg-white shadow-md rounded-lg md:rounded-xl px-4 md:px-5 text-sunset-orange font-medium md:font-semibold text-base md:text-lg hover:shadow-lg transition flex items-center gap-2 md:gap-3 py-2 md:py-3 cursor-pointer"
          >
            View All ({filteredProducts.length}) Products{" "}
            <FaArrowRightLong className="text-sm md:text-base" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsComponent;
