import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FavoriteProducts from './FavoriteProducts';
import FavoriteSuppliers from './FavoriteSuppliers';
const tabsData = [
  {
    value: "products",
    label: "Products",
    component: <FavoriteProducts/>,
  },
  {
    value: "suppliers",
    label: "Suppliers",
    component: <FavoriteSuppliers/>,
  },
  
];
const FavoritesTab = () => {
  return (
    <div>
      <div>
        <Tabs defaultValue="products" className="space-y-4">
          <TabsList className="grid w-full gap-4 grid-cols-2 h-auto border-b-2 border-gray-200 rounded-none">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="text-xl lg:text-2xl font-normal border-b-2 border-transparent hover:border-gray-300 focus:border-gray-300"
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
      </div>
    </div>
  );
};

export default FavoritesTab;
