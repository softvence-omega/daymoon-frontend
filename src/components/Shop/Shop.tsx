import CommonWrapper from "@/common/CommonWrapper";
import GlobalSearchBar from "../HomePage/SearchBar";
import JoinUs from "../ReUseable/JoinUs";
import { BestSellingBanner } from "./BestSale";
import { FlashSaleBanner } from "./FlashSale";
import { NewArrivalBanner } from "./NewArrival";
import ShopCategories from "./ShopCategories";
import TopRatedManufacturers from "./TopManufacturer";
import ProductsComponent from "../ReUseable/ProductsComponent";

const Shop = () => {
  return (
    <div>
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
      </CommonWrapper>
    </div>
  );
};

export default Shop;
