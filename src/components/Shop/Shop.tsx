import CommonWrapper from "@/common/CommonWrapper";
import GlobalSearchBar from "../HomePage/SearchBar";
import JoinUs from "../ReUseable/JoinUs";
import { BestSellingBanner } from "./BestSale";
import { FlashSaleBanner } from "./FlashSale";
import { NewArrivalBanner } from "./NewArrival";
import ShopCategories from "./ShopCategories";
import TopRatedManufacturers from "./TopManufacturer";

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

        <TopRatedManufacturers />
        <JoinUs />
      </CommonWrapper>
    </div>
  );
};

export default Shop;
