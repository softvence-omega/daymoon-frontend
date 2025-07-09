import CommonWrapper from "@/common/CommonWrapper";
import GlobalSearchBar from "@/components/ReUseable/GlobalSearchBar";
import JoinUs from "@/components/ReUseable/JoinUs";
import MoreButton from "@/components/ReUseable/MoreButton";
import ProductsComponent from "@/components/ReUseable/ProductsComponent";
import FilterSection from "@/components/Shop/FilterSection";
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
                <div className="lg:w-1/4">
                    <FilterSection />
                </div>
                <div className="lg:3/4">
                    <GlobalSearchBar />
                    <ShopCategories number={6} />
                    <div className="mt-20">
                        <ProductsComponent
                            selectedCategory="All"
                            selectedPrice="All"
                            gridCols="3"
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
                        title="Top Rated Suppliers"
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
                            text="Explore More"
                        />
                    )}
                </div>
            </div>
            <JoinUs/>
        </CommonWrapper>
    )
}

export default ProductFilter;