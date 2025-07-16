import Wrapper from "../Shared/Wrapper";
import PromotionCard from "./PromotionCard";
import PromotionPerformance from "./PromotionPerformance";
import { PromotionTable } from "./PromotionTable";

const Promotion = () => {
  return (
    <Wrapper>
      <div className="space-y-8">
        <PromotionCard />
        {/* part-2 */}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-5">
          <div className="xl:col-span-4 w-full">
            <PromotionPerformance />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-5">
          <div className="xl:col-span-4 w-full">
            <PromotionTable />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Promotion;
