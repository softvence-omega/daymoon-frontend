import { useState } from "react";
import { products } from "@/lib/productCard/cardData";
import ProductCard from "./ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import Reviews from "./Reviews";

const ProductsComponent = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCount = 6;

  const visibleProducts = showAll ? products : products.slice(0, visibleCount);

  return (
    <div className="container mx-auto mt-[48px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            images={product.images}
            priceRange={product.priceRange}
            rating={product.rating}
            moq={product.moq}
          />
        ))}
      </div>
      {!showAll && products.length > visibleCount && (
        <div className="flex items-center justify-center mt-[48px]">
          <button
            className="bg-white shadow-[3px_4px_14.6px_rgba(0,0,0,0.12)] rounded-[20px] px-[20px] text-sunset-orange font-[500] text-[18px] hover:shadow-lg transition-shadow duration-300 flex items-center gap-[12px] py-[10px] "
            onClick={() => setShowAll(true)}
          >
            View All ({products.length}) Products <FaArrowRightLong />
          </button>
        </div>
      )}
      <Reviews/>
    </div>
  );
};

export default ProductsComponent;
