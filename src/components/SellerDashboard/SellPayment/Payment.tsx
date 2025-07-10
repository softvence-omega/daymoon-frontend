import Wrapper from "../Shared/Wrapper";
import EarningTrend from "./EarningTrend";
import EnquiriesByCategories from "./EnquiriesByCategories";
import PaymentCard from "./PaymentCard";
import { PaymentHistory } from "./PaymentHistory";
import PaymentMethodsSeller from "./PaymentMethodsSeller";
import { PaymentTable } from "./PaymentTable";
import SellerPaymentFilter from "./SellerPaymentFilter";

const Payment = () => {
  return (
    <Wrapper>
      <div className="space-y-8">
        <PaymentCard />
        {/* part-2 */}

        <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="w-full lg:w-1/2">
            <EnquiriesByCategories />
          </div>
          <div className="w-full lg:w-1/2">
            <EarningTrend />
          </div>
        </div>
        <SellerPaymentFilter />
        <PaymentTable />
        <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="w-full lg:w-1/2">
            <PaymentHistory />
          </div>
          <div className="w-full lg:w-1/2">
            <PaymentMethodsSeller />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Payment;
