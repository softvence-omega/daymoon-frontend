import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/lib/productCard/cardData";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ProductsComponent from "./ProductsComponent";
import Reviews from "./Reviews";
import MoreButton from "./MoreButton";

const OverViewTab = () => {
  const [activeTab, setActiveTab] = useState("product");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [showAll, setShowAll] = useState(false);

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

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
      (selectedPrice === "All" || p.priceRange === selectedPrice)
  );

  return (
    <div>
      <Tabs
        defaultValue="product"
        className="w-full mt-12"
        onValueChange={(val) => {
          setActiveTab(val);
          if (val !== "product") {
            setShowAll(false);
          }
        }}
      >
        <TabsList className="w-full flex flex-wrap justify-between sm:justify-start sm:gap-10 border-b border-[#E5E5E5] bg-transparent p-0">
          <TabsTrigger
            value="product"
            className="relative px-2 py-2 text-sm sm:text-base font-medium text-muted-foreground
              data-[state=active]:text-black data-[state=active]:font-semibold
              data-[state=active]:after:content-[''] data-[state=active]:after:absolute
              data-[state=active]:after:left-0 data-[state=active]:after:bottom-[-1px]
              data-[state=active]:after:h-[2px] data-[state=active]:after:w-full
              data-[state=active]:after:bg-[#FCAB3F] rounded-none bg-transparent
              border-none shadow-none text-center cursor-pointer"
          >
            Products
          </TabsTrigger>

          <TabsTrigger
            value="reviews"
            className="relative px-2 py-2 text-sm sm:text-base font-medium text-muted-foreground
              data-[state=active]:text-black data-[state=active]:font-semibold
              data-[state=active]:after:content-[''] data-[state=active]:after:absolute
              data-[state=active]:after:left-0 data-[state=active]:after:bottom-[-1px]
              data-[state=active]:after:h-[2px] data-[state=active]:after:w-full
              data-[state=active]:after:bg-[#FCAB3F] rounded-none bg-transparent
              border-none shadow-none text-center cursor-pointer"
          >
            Rating & Reviews
          </TabsTrigger>
        </TabsList>

        {/* Filters */}
        {activeTab === "product" && (
          <div className="flex flex-wrap justify-end gap-4 mt-[40px]">
            {/* Category Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[180px] flex justify-between items-center"
                >
                  {selectedCategory === "All"
                    ? "All Categories"
                    : selectedCategory}
                  <ChevronDown className="ml-2 h-4 w-4 text-sunset-orange" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white max-h-[60vh] overflow-y-auto">
                {categories.map((cat) => (
                  <DropdownMenuItem
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* ✅ Price Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[150px] flex justify-between items-center"
                >
                  Price: {selectedPrice}
                  <ChevronDown className="ml-2 h-4 w-4 text-sunset-orange" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white max-h-[60vh] overflow-y-auto">
                {prices.map((price) => (
                  <DropdownMenuItem
                    key={price}
                    onClick={() => setSelectedPrice(price)}
                  >
                    {price}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        {/* Tab Content - Products */}
        <TabsContent value="product" className="mt-6">
          <ProductsComponent
            selectedCategory={selectedCategory}
            selectedPrice={selectedPrice}
            showAll={showAll}
            gridCols="3"
            mobileCols={1}
            visibleCount={9}
          />

          {!showAll && filteredProducts.length > 6 && (
            <MoreButton
              onClick={() => setShowAll(true)}
              text={`View All (${filteredProducts.length}) Products`}
            />
          )}
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <Reviews />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OverViewTab;
