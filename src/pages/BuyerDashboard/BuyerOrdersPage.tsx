import BuyerOrdersTable from "@/components/BuyerDashboard/BuyerOrders/BuyerOrdersTable";
import { BuyerOrderTableData } from "@/lib/Buyer/BuyerOrderTable";

const BuyerOrdersPage = () => {
  return (
    <div>
      <BuyerOrdersTable orders={BuyerOrderTableData} />
    </div>
  );
};

export default BuyerOrdersPage;
