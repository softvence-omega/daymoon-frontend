import OrderNavbar from "@/components/SellerDashboard/SellerOrder/OrderNavbar";
import OrderTable from "@/components/SellerDashboard/SellerOrder/OrderTable";
import OrderCard from "@/components/SellerDashboard/SellerOrder/OrderCard";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "@/components/SellerDashboard/SellerProducts/Breadcrumbs";

const SellerOrdersPage = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/seller-dashboard/all-orders" ? (
        <Breadcrumbs title="Orders" subtitle="All Orders" />
      ) : (
        <OrderNavbar />
      )}

      <OrderCard />
      <OrderTable />
    </div>
  );
};

export default SellerOrdersPage;
