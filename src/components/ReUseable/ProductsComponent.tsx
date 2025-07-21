import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/lib/productCard/cardData";

interface ProductsComponentProps {
  selectedCategory: string;
  selectedPrice: string;
  showAll: boolean;
  cols: {
    mobile: 1 | 2;
    md?: 1 | 2 | 3 | 4 | 6;
    lg?: 1 | 2 | 3 | 4 | 6;
  };
  rows: {
    mobile: number;
    md?: number;
    lg?: number;
  };
}

const ProductsComponent: React.FC<ProductsComponentProps> = ({
  selectedCategory,
  selectedPrice,
  showAll,
  cols,
  rows,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine current breakpoint based on window width
  const getBreakpoint = () => {
    if (windowWidth < 768) return "mobile";
    if (windowWidth < 1024) return "md";
    return "lg";
  };

  const breakpoint = getBreakpoint();

  // Get columns and rows for current breakpoint (fallback to mobile if not provided)
  const currentCols = cols[breakpoint] ?? cols.mobile;
  const currentRows = rows[breakpoint] ?? rows.mobile;

  // Calculate how many products to show
  const visibleCount = showAll ? Infinity : currentCols * currentRows;

  // Compose grid column classes based on currentCols and breakpoint
  // Using Tailwind CSS responsive classes: e.g. grid-cols-1, md:grid-cols-2, lg:grid-cols-3
  const gridClass = [
    `grid-cols-${cols.mobile}`,
    cols.md ? `md:grid-cols-${cols.md}` : "",
    cols.lg ? `lg:grid-cols-${cols.lg}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  // Filter products based on selected category and price
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchPrice =
      selectedPrice === "All" || product.priceRange === selectedPrice;
    return matchCategory && matchPrice;
  });

  // Slice filtered products according to visibleCount
  const productsToShow = filteredProducts.slice(0, visibleCount);

  return (
    <div className="mx-auto mt-12">
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 text-lg font-medium py-10">
          Sorry, this price range has no product.
        </div>
      ) : (
        <div className={`grid gap-4 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8 ${gridClass}`}>
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
      )}
    </div>
  );
};

export default ProductsComponent;
