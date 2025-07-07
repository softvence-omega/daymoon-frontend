import CommonWrapper from "@/common/CommonWrapper";

import GlobalSearchBar from "../ReUseable/GlobalSearchBar";
import JoinUs from "../ReUseable/JoinUs";
import ShopAdvertise from "./Advertise";
import { BestSellingBanner } from "./BestSale";
import FashionBanner from "./FashonBanner";
import { FlashSaleBanner } from "./FlashSale";
import { NewArrivalBanner } from "./NewArrival";
import ShopCategories from "./ShopCategories";
import TopRatedManufacturers from "./TopManufacturer";
import ProductsComponent from "../ReUseable/ProductsComponent";

const Shop = () => {
  return (
    <div>
      <FashionBanner />
      <ShopAdvertise />
      <GlobalSearchBar />
      <NewArrivalBanner />
      <div className="flex flex-col lg:flex-row  max-w-[1080px] mx-auto justify-center items-center gap-8">
        <FlashSaleBanner />
        <BestSellingBanner />
      </div>
      <CommonWrapper>
        <ShopCategories number={8} />
        <div className="mt-20">
          <ProductsComponent
            selectedCategory="All"
            selectedPrice="All"
            gridCols="4"
            mobileCols={2}
            visibleCount={16}
          />
        </div>
        <TopRatedManufacturers />
        <JoinUs />
        {/* <FilterSection /> */}
      </CommonWrapper>
    </div>
  );
};

export default Shop;
