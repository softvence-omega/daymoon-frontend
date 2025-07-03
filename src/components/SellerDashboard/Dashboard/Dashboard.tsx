import Wrapper from "../Shared/Wrapper";
import CustomersReview from "./CustomersReview";
import OrderStatus from "./OrderStatus";
import RecentInquiries from "./RecentInquiries";
import RecentOrders from "./RecentOrders";
import RevenueOverview from "./RevenueOverview";
import SellerCard from "./SellerCard";
import TopSellingProducts from "./TopSellingProducts";

const Dashboard = () => {
  return (
    <Wrapper>
      <div className="space-y-8">
        <SellerCard />
        {/* part-2 */}
        <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="w-full lg:w-1/2">
            <RevenueOverview />
          </div>
          <div className="w-full lg:w-1/2">
            <OrderStatus />
          </div>
        </div>
        {/* part-3 */}
        <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="w-full lg:w-1/2">
            <RecentOrders />
          </div>
          <div className="w-full lg:w-1/2">
            <TopSellingProducts />
          </div>
        </div>
        {/* part-4 */}
        <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="w-full lg:w-1/2">
            <RecentInquiries />
          </div>
          <div className="w-full lg:w-1/2">
            <CustomersReview />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
