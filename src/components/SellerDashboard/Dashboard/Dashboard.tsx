import Wrapper from "../Shared/Wrapper";
import OrderStatus from "./OrderStatus";
import RevenueOverview from "./RevenueOverview";
import SellerCard from "./SellerCard";

const Dashboard = () => {
  return (
    <Wrapper>
      <div className="space-y-8">
        <SellerCard />
        <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="w-full lg:w-1/2">
            <RevenueOverview />
          </div>

          <div className="w-full lg:w-1/2">
            <OrderStatus />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
