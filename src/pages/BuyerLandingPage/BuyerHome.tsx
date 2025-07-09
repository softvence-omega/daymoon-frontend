import CommonWrapper from "@/common/CommonWrapper";
import DynamicTabs from "@/components/ReUseable/DynamicTabs";
import productIcon from "@/assets/Home/products.png";
import manuIcon from "@/assets/Home/manu.png";
import GlobalSearchBar from "@/components/ReUseable/GlobalSearchBar";
import { NewArrivalBanner } from "@/components/Shop/NewArrival";
import ShopCategories from "@/components/Shop/ShopCategories";
import HomeProducts from "@/components/ReUseable/HomeProducts";
import ChooseYourPlan from "@/components/ReUseable/ChooseYourPlan";
import TopManufacturer from "@/components/Shop/TopManufacturer";
import MoreButton from "@/components/ReUseable/MoreButton";
import { useState } from "react";

const BuyerHome = () => {
  const [showAllTopRated, setShowAllTopRated] = useState(false);
  const [showAllManufacturers, setShowAllManufacturers] = useState(false);

  const buyerTabItems = [
    {
      value: "product",
      label: "Products",
      icon: productIcon,
      content: (
        <>
          <GlobalSearchBar />
          <NewArrivalBanner />
          <ShopCategories number={8} />
          <HomeProducts
            cols={{ mobile: 2, md: 4, lg: 6 }}
            rows={{ mobile: 2, md: 4, lg: 8 }}
          />
          <ChooseYourPlan />
        </>
      ),
    },
    {
      value: "manufacturer",
      label: "Manufacturers",
      icon: manuIcon,
      content: (
        <div className="text-center max-w-full">
          <GlobalSearchBar />
          <ShopCategories number={8} />

          {/* Top Rated Manufacturers */}
          <TopManufacturer
            title="Top Rated Manufacturers"
            showTopRatedOnly={true}
            showAll={showAllTopRated}
            cols={{ mobile: 1, md: 2, lg: 3 }}
            rows={
              showAllTopRated
                ? { mobile: 100, md: 100, lg: 100 } // show all when true
                : { mobile: 2, md: 2, lg: 2 }       // initial few
            }
          />
          {!showAllTopRated && (
            <MoreButton
              onClick={() => setShowAllTopRated(true)}
              text="Explore More"
            />
          )}

          {/* All Manufacturers */}
          <TopManufacturer
            title="All Manufacturers"
            showTopRatedOnly={false}
            showAll={true}
            cols={{ mobile: 1, md: 3, lg: 3 }}
            rows={
              showAllManufacturers
                ? { mobile: 100, md: 100, lg: 100 } // show all when true
                : { mobile: 3, md: 5, lg: 5 }       // initial few
            }
          />
          {!showAllManufacturers && (
            <MoreButton
              onClick={() => setShowAllManufacturers(true)}
              text="Explore More"
            />
          )}
        </div>
      ),
    },
  ];

  return (
    <div>
      <CommonWrapper>
        <DynamicTabs tabItems={buyerTabItems} />
      </CommonWrapper>
    </div>
  );
};

export default BuyerHome;
