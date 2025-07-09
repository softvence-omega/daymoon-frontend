import PaymentsHeading from '@/components/BuyerDashboard/BuyerPayments/PaymentsHeading';
import PaymentsCards from '@/components/BuyerDashboard/BuyerPayments/PaymentsCards';
import PaymentsFilters from '../../components/BuyerDashboard/BuyerPayments/PaymentsFilters';
const BuyerPayments = () => {
  return <div>
   <PaymentsHeading/>
   <PaymentsCards/>
    <PaymentsFilters/>
    {/* <PaymentsCards/> */}
  </div>;
};

export default BuyerPayments;
