import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { products } from "@/lib/productCard/cardData";

const ProductsComponent = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = useMemo(() => {
    const setCategories = new Set<string>();
    products.forEach((p) => {
      if (p.category) setCategories.add(p.category);
    });
    return ["All", ...Array.from(setCategories)];
  }, [products]);

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
  ];
  const prices = [
    "All",
    ...Array.from(
      new Set(products.map((p) => p.priceRange).filter(Boolean))
    ).sort(),
  ];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const priceMatch =
      selectedPrice === "All" || product.priceRange === selectedPrice;
    return categoryMatch && priceMatch;
  });

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, visibleCount);

  return (
    <div className=" mx-auto mt-8 md:mt-12 ">
      {/* Filter Dropdowns */}
      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row justify-end"
        } gap-3 md:gap-4 mb-8 md:mb-12`}
      >
        {/* Category Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className={`rounded-lg text-jet-black font-medium ${
                isMobile ? "w-full" : "w-[180px] md:w-[200px]"
              } flex justify-between items-center truncate cursor-pointer py-2 h-auto`}
            >
              {selectedCategory === "All" ? "All Categories" : selectedCategory}
              <ChevronDown className="ml-2 h-5 w-5 text-sunset-orange" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            {categories.map((cat) => (
              <DropdownMenuItem
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
              >
                {cat}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Price Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className={`rounded-lg text-jet-black font-medium ${
                isMobile ? "w-full" : "w-[150px] md:w-[160px]"
              } flex justify-between items-center truncate cursor-pointer py-2 h-auto`}
            >
              Price: {selectedPrice}
              <ChevronDown className="ml-2 h-5 w-5 text-sunset-orange" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            {prices.map((price) => (
              <DropdownMenuItem
                key={price}
                onClick={() => {
                  setSelectedPrice(price);
                  setShowAll(false);
                }}
              >
                {price}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Product Cards Grid */}
      <div
        className={`grid ${
          isMobile
            ? "grid-cols-1 gap-4"
            : "grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        }`}
      >
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

      {/* View All Button */}
      {!showAll && filteredProducts.length > visibleCount && (
        <div className="flex items-center justify-center mt-12">
          <button
            className="bg-white shadow-md rounded-xl px-5 text-sunset-orange font-semibold text-lg hover:shadow-lg transition flex items-center gap-3 py-3"
            onClick={() => setShowAll(true)}
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
