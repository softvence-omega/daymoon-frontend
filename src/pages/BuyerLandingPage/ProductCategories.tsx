import CommonWrapper from "@/common/CommonWrapper";
import GlobalSearchBar from "@/components/ReUseable/GlobalSearchBar";
import MoreButton from "@/components/ReUseable/MoreButton";
import ProductsComponent from "@/components/ReUseable/ProductsComponent";
import FashionBanner from "@/components/Shop/FashonBanner"
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
                <GlobalSearchBar />
                <ShopAdvertise />
                <ShopSubCategories number={6} />
                {/* Products Section */}
                <div className="mt-20">
                    <ProductsComponent
                        selectedCategory="All"
                        selectedPrice="All"
                        gridCols="4"
                        mobileCols={1}
                        visibleCount={12}
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
                            : { mobile: 2, md: 2, lg: 2 }       // Show initial few
                    }
                />
                {!showAllTopRated && (
                    <MoreButton
                        onClick={() => setShowAllTopRated(true)}
                        text="Explore More Top Rated"
                    />
                )}
            </CommonWrapper>
        </div>
    )
}

export default ProductCategories;