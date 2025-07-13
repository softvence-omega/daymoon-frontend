import OrderNavbar from "@/components/SellerDashboard/SellerOrder/OrderNavbar";
import OrderTable from "@/components/SellerDashboard/SellerOrder/OrderTable";
import OrderCard from "@/components/SellerDashboard/SellerOrder/OrderCard";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "@/components/SellerDashboard/SellerProducts/Breadcrumbs";
import CommonWrapper from "@/common/CommonWrapper";

const SellerOrdersPage = () => {
  const { pathname } = useLocation();

  const content = (
    <>
      {pathname === "/seller-dashboard/all-orders" ? (
        <Breadcrumbs title="Orders" subtitle="All Orders" />
      ) : (
        <OrderNavbar />
      )}

      <OrderCard />
      <OrderTable />
    </>
  );

  if (pathname === "/seller-dashboard/orders") {
    return content;
  }

  return <CommonWrapper>{content}</CommonWrapper>;
};

export default SellerOrdersPage;
