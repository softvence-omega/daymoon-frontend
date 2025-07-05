import EnquiriesByStatus from "../SellerInquirie/EnquiriesByStatus";
import InquiriesTrend from "../SellerInquirie/InquiriesTrend";
import Wrapper from "../Shared/Wrapper";
import PaymentCard from "./PaymentCard";

const Payment = () => {
  return (
    <Wrapper>
      <div className="space-y-8">
        <PaymentCard />
        {/* part-2 */}

        <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="w-full lg:w-1/2">
            <EnquiriesByStatus />
          </div>
          <div className="w-full lg:w-1/2">
            <InquiriesTrend />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Payment;
