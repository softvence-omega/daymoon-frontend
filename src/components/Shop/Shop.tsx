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

        <TopRatedManufacturers />
        <JoinUs />
        {/* <FilterSection /> */}
      </CommonWrapper>
    </div>
  );
};

export default Shop;
