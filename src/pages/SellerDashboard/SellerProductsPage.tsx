import Breadcrumbs from "@/components/SellerDashboard/SellerProducts/Breadcrumbs";
import ProductCard from "@/components/SellerDashboard/SellerProducts/ProductCard";
import ProductNavbar from "@/components/SellerDashboard/SellerProducts/ProductNavbar";
import ProductSearch from "@/components/SellerDashboard/SellerProducts/ProductSearch";
import { ProductTable } from "@/components/SellerDashboard/SellerProducts/ProductTable";
import RevenueOverview from "@/components/SellerDashboard/SellerProducts/RevenueOverview";
import { useLocation } from "react-router-dom";

const SellerProductsPage = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname === "/seller-dashboard/all-products" ? (
        <Breadcrumbs title="Products" subtitle="All Products" />
      ) : (
        <ProductNavbar />
      )}

      <ProductCard />
      <ProductSearch />
      <ProductTable />
      {pathname !== "/seller-dashboard/all-products" && <RevenueOverview />}
    </div>
  );
};

export default SellerProductsPage;
