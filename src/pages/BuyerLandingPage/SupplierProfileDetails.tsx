import CommonWrapper from "@/common/CommonWrapper";
import GlobalSearchBar from "@/components/ReUseable/GlobalSearchBar";
import MoreButton from "@/components/ReUseable/MoreButton";
import FilterSection from "@/components/Shop/FilterSection";
import TopManufacturer from "@/components/Shop/TopManufacturer";
import { useState } from "react";

const SupplierProfileDetails = () => {
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

          {/* ✅ Top Rated Manufacturers - Limited view + button */}
          <TopManufacturer
            title="Top Rated Suppliers"
            showTopRatedOnly={true}
            showAll={false}
            cols={{ mobile: 1, md: 2, lg: 2 }}
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

          {/* ✅ All Manufacturers - Always show all, no button */}
          <TopManufacturer
            title="All Suppliers"
            showTopRatedOnly={false}
            showAll={true}
            cols={{ mobile: 1, md: 2, lg: 2 }}
            rows={{ mobile: 3, md: 5, lg: 5 }} // show all
          />
          {/* ❌ Don't render MoreButton for All Manufacturers */}
        </div>
      </div>
    </CommonWrapper>
  );
};

export default SupplierProfileDetails;
