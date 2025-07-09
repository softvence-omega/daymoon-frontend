import PaymentsHeading from "@/components/BuyerDashboard/BuyerPayments/PaymentsHeading";
import PaymentMethods from "../../components/BuyerDashboard/BuyerPayments/PaymentMethods";
import PaymentsTable from "../../components/BuyerDashboard/BuyerPayments/PaymentsTable";
import PaymentsHeaderCards from "../../components/BuyerDashboard/BuyerPayments/PaymentsHeaderCards";
import RefundRequests from "../../components/BuyerDashboard/BuyerPayments/RefundRequests";
const BuyerPayments = () => {
  return (
    <div>
      <PaymentsHeading />
      <PaymentsHeaderCards />
      <div className="mt-6">
        <PaymentsTable />
      </div>
      <PaymentMethods />
      <RefundRequests />
    </div>
  );
};

export default BuyerPayments;
