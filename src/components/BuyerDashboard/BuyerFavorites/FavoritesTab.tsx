import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FavoriteProducts from "./FavoriteProducts";
import FavoriteSuppliers from "./FavoriteSuppliers";
const tabsData = [
  {
    value: "products",
    label: "Products",
    component: <FavoriteProducts />,
  },
  {
    value: "suppliers",
    label: "Suppliers",
    component: <FavoriteSuppliers />,
  },
];
const FavoritesTab = () => {
  return (
    <Tabs defaultValue="products" className="">
      <TabsList className="grid w-full grid-cols-2 rounded-none">
        {tabsData.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={`relative px-2 py-2 md:text-2xl text-sm sm:text-base font-medium text-muted-foreground
          data-[state=active]:text-black data-[state=active]:font-semibold
          data-[state=active]:after:content-[''] 
          data-[state=active]:after:absolute
          data-[state=active]:after:left-0 data-[state=active]:after:bottom-0
          data-[state=active]:after:h-[2px] data-[state=active]:after:w-full
          data-[state=active]:after:bg-[#FCAB3F] 
          
          data-[state=inactive]:after:content-[''] data-[state=inactive]:text-[#666] 
          data-[state=inactive]:after:absolute
          data-[state=inactive]:after:left-0 data-[state=inactive]:after:bottom-0
          data-[state=inactive]:after:h-[1px] data-[state=inactive]:after:w-full
          data-[state=inactive]:after:bg-[#e5e5e5] 
          rounded-none bg-transparent
          border-none shadow-none text-center cursor-pointer flex md:flex-row flex-col items-center gap-4`}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabsData.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.component}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default FavoritesTab;
