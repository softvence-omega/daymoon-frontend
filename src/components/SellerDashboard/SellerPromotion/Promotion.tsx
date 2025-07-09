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
        <div>
          <PromotionPerformance />
        </div>
        <div>
          <PromotionTable />
        </div>
      </div>
    </Wrapper>
  );
};

export default Promotion;
