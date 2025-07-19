import CommonWrapper from "@/common/CommonWrapper";
import GlobalSearchBar from "@/components/ReUseable/GlobalSearchBar";
import JoinUs from "@/components/ReUseable/JoinUs";
import MoreButton from "@/components/ReUseable/MoreButton";
import ProductsComponent from "@/components/ReUseable/ProductsComponent";
import FashionBanner from "@/components/Shop/FashonBanner";
import ShopAdvertise from "@/components/Shop/ShopAdvertise";
// import ShopCategories from "@/components/Shop/ShopCategories";
import ShopSubCategories from "@/components/Shop/ShopSubCategories";
import TopManufacturer from "@/components/Shop/TopManufacturer";
import { useState } from "react";

const ProductCategories = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showAllTopRated, setShowAllTopRated] = useState(false);

  return (
    <div>
      <FashionBanner />
      <CommonWrapper>
        <div className="lg:w-3/4 mx-auto">
          <GlobalSearchBar />
        </div>
        <ShopAdvertise />
        <ShopSubCategories number={6} />

        {/* Products Section */}
        <div className="mt-20">
          <ProductsComponent
            selectedCategory="All"
            selectedPrice="All"
            showAll={showAllProducts}
            cols={{ mobile: 2, md: 4, lg: 4 }}      // example columns per breakpoint
            rows={
              showAllProducts
                ? { mobile: 100, md: 100, lg: 100 }  // show all products
                : { mobile: 2, md: 3, lg: 3 }        // show limited rows initially
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
          showAll={showAllTopRated}
          cols={{ mobile: 1, md: 3, lg: 3 }}
          rows={
            showAllTopRated
              ? { mobile: 100, md: 100, lg: 100 }
              : { mobile: 2, md: 2, lg: 2 }
          }
        />
        {!showAllTopRated && (
          <MoreButton
            onClick={() => setShowAllTopRated(true)}
            text="Explore More"
          />
        )}
        <JoinUs/>
      </CommonWrapper>
    </div>
  );
};

export default ProductCategories;
