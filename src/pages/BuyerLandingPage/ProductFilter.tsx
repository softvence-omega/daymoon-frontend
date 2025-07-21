import CommonWrapper from "@/common/CommonWrapper";
import GlobalSearchBar from "@/components/ReUseable/GlobalSearchBar";
import JoinUs from "@/components/ReUseable/JoinUs";
import MoreButton from "@/components/ReUseable/MoreButton";
import ProductsComponent from "@/components/ReUseable/ProductsComponent";
import FilterSection from "@/components/Shop/FilterSection";
import MobileFilterSection from "@/components/Shop/MobileFilterSection";
import ShopCategories from "@/components/Shop/ShopCategories";
import TopManufacturer from "@/components/Shop/TopManufacturer";
import { useState } from "react";

const ProductFilter = () => {
  // State for ProductsComponent showAll
  const [showAllProducts, setShowAllProducts] = useState(false);

  // State for Top Rated Manufacturers showAll
  const [showAllTopRated, setShowAllTopRated] = useState(false);

  return (
    <CommonWrapper>
      <div className="lg:flex lg:justify-between lg:gap-[102px] md:gap-[102px]">
        <div className="lg:w-1/4 hidden lg:block">
          <FilterSection />
        </div>
        <div className="lg:w-3/4">
          <GlobalSearchBar />

          <div className="block mb-2 md:hidden ">
            {" "}
            <h1 className="text-start  text-base font-semibold text-black/60 ">
              All categories
            </h1>
          </div>
          <ShopCategories number={6} />
          <div className="flex  lg:hidden justify-end items-center mt-12 ">
            <MobileFilterSection />
          </div>
          <div className="mt-6 lg:my-24 max-[767px]:mb-10">
            <ProductsComponent
              // titleProducts=""
              selectedCategory="All"
              selectedPrice="All"
              showAll={showAllProducts}
              cols={{ mobile: 2, md: 2, lg: 3 }}
              rows={
                showAllProducts
                  ? { mobile: 100, md: 100, lg: 100 } // Show all products
                  : { mobile: 3, md: 4, lg: 4 } // Show limited initially
              }
            />
            {!showAllProducts && (
              <MoreButton
                onClick={() => setShowAllProducts(true)}
                text="Explore More"
              />
            )}
          </div>

          {/* Top Rated Manufacturers Section */}
          <TopManufacturer
            title="Suppliers from this category"
            showTopRatedOnly={true}
            showAll={showAllTopRated}
            cols={{ mobile: 1, md: 2, lg: 2 }}
            rows={
              showAllTopRated
                ? { mobile: 100, md: 100, lg: 100 } // Show all top rated
                : { mobile: 3, md: 2, lg: 2 } // Show initial few
            }
          />
          {!showAllTopRated && (
            <MoreButton
              onClick={() => setShowAllTopRated(true)}
              text="Explore More"
            />
          )}
        </div>
      </div>

      <div className="my-24 max-[767px]:my-14">
        <JoinUs />
      </div>
    </CommonWrapper>
  );
};

export default ProductFilter;
