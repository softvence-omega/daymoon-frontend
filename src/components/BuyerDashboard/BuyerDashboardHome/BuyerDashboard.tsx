import { RecentOrders } from "./RecentOrders";
import BuyerCard from "./BuyerCard";
import { RecentMessages } from "./RecentMessages";
import RecentActivity from "./RecentActivity";
import SuggestedProducts from './SuggestedProducts';

const BuyerDashboard = () => {
  return (
    <div className="w-full mx-auto h-full">
      <div className="space-y-8">
        <BuyerCard />
        {/* part-2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-5">
          <div className="xl:col-span-2 w-full">
            <RecentOrders />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
        {/* part-4 */}
        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3  gap-5">
          <div className="xl:col-span-2 w-full">
            <SuggestedProducts/>
          </div>
          <div>
            <RecentMessages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
