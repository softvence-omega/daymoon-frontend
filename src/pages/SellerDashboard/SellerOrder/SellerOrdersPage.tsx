import OrderNavbar from "@/components/SellerDashboard/SellerOrder/OrderNavbar";
import OrderTable from "@/components/SellerDashboard/SellerOrder/OrderTable";
import OrderCard from "@/components/SellerDashboard/SellerOrder/OrderCard";

const SellerOrdersPage = () => {
  return (
    <div>
      <OrderNavbar />

      <OrderCard />
      <OrderTable />
    </div>
  );
};

export default SellerOrdersPage;
