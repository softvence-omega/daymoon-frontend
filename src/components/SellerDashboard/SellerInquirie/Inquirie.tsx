import EnquiriesByStatus from "./EnquiriesByStatus";
import InquirieCard from "./InquirieCard";
import InquiriesTrend from "./InquiriesTrend";
import { InquirieTable } from "./InquirieTable";
import SellerInquireFilter from "./SellerInquireFilter";

const Inquirie = () => {
  return (
    <div className="space-y-8">
      <InquirieCard />
      {/* part-2 */}
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="w-full lg:w-1/2">
          <EnquiriesByStatus />
        </div>
        <div className="w-full lg:w-1/2">
          <InquiriesTrend />
        </div>
      </div>
      <SellerInquireFilter />
      <div>
        <InquirieTable />
      </div>
    </div>
  );
};

export default Inquirie;
