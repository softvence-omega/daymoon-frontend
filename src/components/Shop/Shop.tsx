import { useState } from "react";
import CommonWrapper from "@/common/CommonWrapper";
import GlobalSearchBar from "../ReUseable/GlobalSearchBar";
import JoinUs from "../ReUseable/JoinUs";
import FashionBanner from "./FashonBanner";
import ShopCategories from "./ShopCategories";
import ProductsComponent from "../ReUseable/ProductsComponent";
import MoreButton from "../ReUseable/MoreButton";
import ShopAdvertise from "./ShopAdvertise";
import TopManufacturer from "./TopManufacturer";

const Shop = () => {
  // State for ProductsComponent showAll
  const [showAllProducts, setShowAllProducts] = useState(false);

  // State for Top Rated Manufacturers showAll
  const [showAllTopRated, setShowAllTopRated] = useState(false);

  // State for All Manufacturers showAll
  // const [showAllManufacturers, setShowAllManufacturers] = useState(false);

  return (
    <div>
      <FashionBanner />
      <CommonWrapper>
        <GlobalSearchBar />
        <ShopAdvertise />
        <ShopCategories number={8} />

        {/* Products Section */}
        <div className="mt-20">
          <ProductsComponent
            selectedCategory="All"
            selectedPrice="All"
            gridCols="4"
            mobileCols={1}
            visibleCount={16}
            showAll={showAllProducts}
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
