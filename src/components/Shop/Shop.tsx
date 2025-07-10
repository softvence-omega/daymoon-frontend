import { useState } from "react";
import CommonWrapper from "@/common/CommonWrapper";
import GlobalSearchBar from "../ReUseable/GlobalSearchBar";
import JoinUs from "../ReUseable/JoinUs";
import ShopCategories from "./ShopCategories";
import ProductsComponent from "../ReUseable/ProductsComponent";
import MoreButton from "../ReUseable/MoreButton";
import TopManufacturer from "./TopManufacturer";
import { NewArrivalBanner } from "./NewArrival";
import { BestSellingBanner } from "./BestSale";
import { FlashSaleBanner } from "./FlashSale";

const Shop = () => {
  // State for ProductsComponent showAll
  const [showAllProducts, setShowAllProducts] = useState(false);

  // State for Top Rated Manufacturers showAll
  const [showAllTopRated, setShowAllTopRated] = useState(false);

  // State for All Manufacturers showAll
  // const [showAllManufacturers, setShowAllManufacturers] = useState(false);

  return (
    <div>
      <CommonWrapper>
        <div className="lg:w-3/4 mx-auto">
          <GlobalSearchBar />
          <NewArrivalBanner />
          <div className="lg:flex items-center lg:gap-6">
            <FlashSaleBanner />
            <BestSellingBanner />
          </div>
        </div>
        <ShopCategories number={8} />

        {/* Products Section */}
        <div className="mt-20">
          <ProductsComponent
            selectedCategory="All"
            selectedPrice="All"
            showAll={showAllProducts}
            cols={{ mobile: 1, md: 4, lg: 4 }}
            rows={
              showAllProducts
                ? { mobile: 100, md: 100, lg: 100 } // Show all products
                : { mobile: 3, md: 4, lg: 4 }       // Show limited initially
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
          title="Top Rated Manufacturer"
          showTopRatedOnly={true}
          showAll={false}
          cols={{ mobile: 1, md: 3, lg: 3 }}
          rows={
            showAllTopRated
              ? { mobile: 100, md: 100, lg: 100 } // Show all top rated
              : { mobile: 2, md: 2, lg: 2 } // Show initial few
          }
        />
        {!showAllTopRated && (
          <MoreButton
            onClick={() => setShowAllTopRated(true)}
            text="Explore More"
          />
        )}

        {/* All Manufacturers Section */}
        {/* <TopRatedManufacturers
          showTopRatedOnly={false}
          showAll={true}
          cols={{ mobile: 1, md: 3, lg: 3 }}
          rows={
            showAllManufacturers
              ? { mobile: 100, md: 100, lg: 100 } // Show all manufacturers
              : { mobile: 1, md: 3, lg: 3 }       // Show initial few
          }
        />
        {!showAllManufacturers && (
          <MoreButton
            onClick={() => setShowAllManufacturers(true)}
            text="Explore More Manufacturers"
          />
        )} */}

        <JoinUs />
      </CommonWrapper>
    </div>
  );
};

export default Shop;
