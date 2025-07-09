import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/lib/productCard/cardData";

interface ProductsComponentProps {
  selectedCategory: string;
  selectedPrice: string;
  visibleCount?: number;
  gridCols?: "2" | "3" | "4" | "6";
  mobileCols?: 1 | 2;
  showAll: boolean;
}

const ProductsComponent: React.FC<ProductsComponentProps> = ({
  selectedCategory,
  selectedPrice,
  visibleCount = 6,
  gridCols = "3",
  mobileCols = 1,
  showAll,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopGridClass = {
    "2": "grid-cols-2 lg:grid-cols-2",
    "3": "grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-2 lg:grid-cols-4",
    "6": "grid-cols-2 lg:grid-cols-6",
  }[gridCols];

  const mobileGridClass = mobileCols === 2 ? "grid-cols-2" : "grid-cols-1";
  const gridClass = isMobile ? mobileGridClass : desktopGridClass;

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchPrice =
      selectedPrice === "All" || product.priceRange === selectedPrice;
    return matchCategory && matchPrice;
  });

  const productsToShow = showAll
    ? filteredProducts
    : filteredProducts.slice(0, visibleCount);

  return (
    <div className="mx-auto mt-12">
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 text-lg font-medium py-10">
          Sorry, this price range has no product.
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default ProductsComponent;
