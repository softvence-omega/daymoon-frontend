import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProductsComponent from "./ProductsComponent";
import Reviews from "./Reviews";
import CommonWrapper from "@/common/CommonWrapper";

const OverViewTab = () => {
  return (
    <CommonWrapper>
      <div >
        <Tabs defaultValue="product" className="w-full mt-12 ">
          {/* Tabs Header */}
          <TabsList
            className="w-full flex flex-wrap justify-between sm:justify-start sm:gap-10 border-b border-[#E5E5E5] bg-transparent p-0 "
          >
            <TabsTrigger
              value="product"
              className="relative px-2 py-2 text-sm sm:text-base font-medium text-muted-foreground
              data-[state=active]:text-black data-[state=active]:font-semibold
              data-[state=active]:after:content-[''] data-[state=active]:after:absolute
              data-[state=active]:after:left-0 data-[state=active]:after:bottom-[-1px]
              data-[state=active]:after:h-[2px] data-[state=active]:after:w-full
              data-[state=active]:after:bg-[#FCAB3F] rounded-none bg-transparent
              border-none shadow-none text-center cursor-pointer "
            >
              Product
            </TabsTrigger>

            <TabsTrigger
              value="reviews"
              className="relative px-2 py-2 text-sm sm:text-base font-medium text-muted-foreground
              data-[state=active]:text-black data-[state=active]:font-semibold
              data-[state=active]:after:content-[''] data-[state=active]:after:absolute
              data-[state=active]:after:left-0 data-[state=active]:after:bottom-[-1px]
              data-[state=active]:after:h-[2px] data-[state=active]:after:w-full
              data-[state=active]:after:bg-[#FCAB3F] rounded-none bg-transparent
              border-none shadow-none text-center cursor-pointer"
            >
              Rating & Reviews
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <TabsContent value="product" className="mt-6">
            <ProductsComponent />
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Reviews />
          </TabsContent>
        </Tabs>
      </div>
    </CommonWrapper>
  );
};

export default OverViewTab;
