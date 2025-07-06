import CommonWrapper from "@/common/CommonWrapper";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import manu from "../../assets/Home/manu.png";
import product from "../../assets/Home/products.png";
import Categories from "../Shop/ShopCategories";
import TopRatedManufacturers from "../Shop/TopManufacturer";
import GlobalSearchBar from "./SearchBar";
import HomeProducts from "../ReUseable/HomeProducts";
import { NewArrivalBanner } from "../Shop/NewArrival";
import ChoosePlan from "../ReUseable/ChoosePlan";

const contentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const HomeTabs = () => {
  const [tabValue, setTabValue] = useState("product");

  return (
    <CommonWrapper>
      <div className="flex justify-center mt-12 items-center">
        <Tabs value={tabValue} onValueChange={setTabValue} className="w-full">
          <TabsList className="flex justify-center gap-10 bg-transparent p-0 border-none">
            <TabsTrigger
              value="product"
              className="relative px-2 py-2 text-sm sm:text-base font-medium text-muted-foreground
                data-[state=active]:text-black data-[state=active]:font-semibold
                data-[state=active]:after:content-[''] data-[state=active]:after:absolute
                data-[state=active]:after:left-0 data-[state=active]:after:bottom-[-1px]
                data-[state=active]:after:h-[2px] data-[state=active]:after:w-full
                data-[state=active]:after:bg-[#FCAB3F] rounded-none bg-transparent
                border-none shadow-none text-center cursor-pointer flex items-center gap-4"
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
                border-none shadow-none text-center cursor-pointer flex items-center gap-4"
            >
              <img alt="manufacturer" src={manu} className="w-12 h-12" />
              Manufacturers
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait" initial={false}>
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
                <GlobalSearchBar />
                <Categories number={8} />
                <NewArrivalBanner />
                <HomeProducts />
                <ChoosePlan />
              </motion.div>
            )}

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
                <TopRatedManufacturers />
              </motion.div>
            )}
          </AnimatePresence>
        </Tabs>
      </div>
    </CommonWrapper>
  );
};

export default HomeTabs;
