import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import manu from "../../assets/Home/manu.png";
import product from "../../assets/Home/products.png";
import Categories from "../Shop/ShopCategories";
import GlobalSearchBar from "../ReUseable/GlobalSearchBar";
import HomeProducts from "../ReUseable/HomeProducts";
import TopManufacturer from "../Shop/TopManufacturer";
import WhyChooseUs from "./WhyChooseUs";
import TradeWithConfidence from "./TradeWithConfident";
import SourceDirectSection from "./SourceDirection";
import HowItWorks from "./HowItWorks";
import TestimonialCarousel from "./WhatPeopleSays";
import JoinUs from "../ReUseable/JoinUs";
import CommonWrapper from "@/common/CommonWrapper";
import MoreButton from "../ReUseable/MoreButton";

const contentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const HomeTabs = () => {
  const [tabValue, setTabValue] = useState("product");

  // State for all Manufacturers showAll
  const [showAllManufacturers, setShowAllManufacturers] = useState(false);

  // State for Top Rated Manufacturers showAll
  const [showAllTopRated, setShowAllTopRated] = useState(false);

  return (
    <div className="flex justify-center mt-12 items-center">
      <Tabs value={tabValue} onValueChange={setTabValue} className="w-full ">
        <TabsList className=" flex justify-between md:justify-center gap-1 md:gap-10 bg-transparent p-0 border-none">
          <TabsTrigger
            value="product"
            className="relative px-2 py-2 text-sm sm:text-base font-medium text-muted-foreground
                data-[state=active]:text-black data-[state=active]:font-semibold
                data-[state=active]:after:content-[''] data-[state=active]:after:absolute
                data-[state=active]:after:left-0 data-[state=active]:after:bottom-[-1px]
                data-[state=active]:after:h-[2px] data-[state=active]:after:w-full
                data-[state=active]:after:bg-[#FCAB3F] rounded-none bg-transparent
                border-none shadow-none text-center cursor-pointer flex flex-col md:flex-row items-center gap-4"
          >
            <img alt="product" src={product} className="w-12 h-12" />
            Products
          </TabsTrigger>

          <TabsTrigger
            value="reviews"
            className="relative px-2 py-2 text-sm sm:text-base font-medium text-muted-foreground
                data-[state=active]:text-black data-[state=active]:font-semibold
                data-[state=active]:after:content-[''] data-[state=active]:after:absolute
                data-[state=active]:after:left-0 data-[state=active]:after:bottom-[-1px]
                data-[state=active]:after:h-[2px] data-[state=active]:after:w-full
                data-[state=active]:after:bg-[#FCAB3F] rounded-none bg-transparent
                border-none shadow-none text-center cursor-pointer flex  md:flex-row flex-col items-center gap-4"
          >
            <img alt="manufacturer" src={manu} className="w-12 h-12" />
            Manufacturers
          </TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait" initial={false}>
          {/* Products tap related component  */}
          {tabValue === "product" && (
            <motion.div
              key="product"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className=""
            >
              <CommonWrapper>
                <div className="lg:w-3/4 mx-auto">
                  <GlobalSearchBar />
                </div>
                <HomeProducts
                  cols={{ mobile: 2, md: 4, lg: 6 }}
                  rows={{ mobile: 2, md: 3, lg: 5 }}
                />
                <WhyChooseUs />
                <TradeWithConfidence />
              </CommonWrapper>
              <SourceDirectSection />
              <CommonWrapper>
                <HowItWorks />
                <TestimonialCarousel />
                <JoinUs />
              </CommonWrapper>
            </motion.div>
          )}

          {/* Products tap related component  */}
          {tabValue === "reviews" && (
            <motion.div
              key="reviews"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className=""
            >

              <CommonWrapper>
                <div className="lg:w-3/4 mx-auto">
                  <GlobalSearchBar />
                </div>
                <Categories number={8} />
                <TopManufacturer
                  title="Top Rated Manufacturers"
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
              </CommonWrapper>
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs>
    </div>
  );
};

export default HomeTabs;
