import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import manu from "../../assets/Home/manu.png";
import product from "../../assets/Home/products.png";
import Categories from "../Shop/ShopCategories";
import TopRatedManufacturers from "../Shop/TopManufacturer";
import GlobalSearchBar from "../ReUseable/GlobalSearchBar";
import HomeProducts from "../ReUseable/HomeProducts";

const contentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const HomeTabs = () => {
  const [tabValue, setTabValue] = useState("product");

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
                <HomeProducts
                  cols={{ mobile: 2, md: 4, lg: 6 }}
                  rows={{ mobile: 2, md: 3, lg: 5 }}
                />
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
                <GlobalSearchBar />
                <Categories number={8} />
                <TopRatedManufacturers />
              </motion.div>
            )}
          </AnimatePresence>
        </Tabs>
      </div>
  );
};

export default HomeTabs;
