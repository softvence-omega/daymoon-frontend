import Wrapper from "../Shared/Wrapper";
import AnalyticsCard from "./AnalyticsCard";
import { CampaignTable } from "./CampaignTable";
import { ProductCategory } from "./ProductCategory";
import SalesByCategory from "./SalesByCategory";
import SaleTrends from "./SaleTrends";
import CustomerInsights from "./CustomerInsights";
import ConversionFunnel from "./ConversionFunnel";
import PromotionsAnalytics from "./PromotionsAnalytics";
import GeographicDistribution from "./GeographicDistribution";
import PurchaseBehaviour from "./PurchaseBehaviour";

const Analytics = () => {
  return (
    <Wrapper>
      <div className="space-y-8">
        <AnalyticsCard />
        {/* part-2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-5">
          <div className="xl:col-span-4 w-full">
            <SaleTrends />
          </div>
        </div>

        {/* <SaleTrends /> */}
        {/* Part-3 */}
        <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="w-full lg:w-1/2">
            <SalesByCategory />
          </div>
          <div className="w-full lg:w-1/2">
            <PurchaseBehaviour />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-5">
          <div className="xl:col-span-4 w-full">
            <ProductCategory />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="w-full lg:w-1/2">
            <CustomerInsights />
          </div>
          <div className="w-full lg:w-1/2">
            <GeographicDistribution />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="w-full lg:w-1/2">
            <SalesByCategory />
          </div>
          <div className="w-full lg:w-1/2">
            <ConversionFunnel />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-5">
          <div className="xl:col-span-4 w-full">
            <PromotionsAnalytics />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-5">
          <div className="xl:col-span-4 w-full">
            <CampaignTable />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Analytics;
