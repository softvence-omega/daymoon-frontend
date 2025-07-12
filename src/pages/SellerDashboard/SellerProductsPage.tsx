import CommonWrapper from "@/common/CommonWrapper";
import Breadcrumbs from "@/components/SellerDashboard/SellerProducts/Breadcrumbs";
import ProductCard from "@/components/SellerDashboard/SellerProducts/ProductCard";
import ProductNavbar from "@/components/SellerDashboard/SellerProducts/ProductNavbar";
import ProductSearch from "@/components/SellerDashboard/SellerProducts/ProductSearch";
import { ProductTable } from "@/components/SellerDashboard/SellerProducts/ProductTable";
import RevenueOverview from "@/components/SellerDashboard/SellerProducts/RevenueOverview";
import { useLocation } from "react-router-dom";

const SellerProductsPage = () => {
  const { pathname } = useLocation();

  const content = (
    <>
      {pathname === "/seller-dashboard/all-products" ? (
        <Breadcrumbs title="Products" subtitle="All Products" />
      ) : (
        <ProductNavbar />
      )}

      <ProductCard />
      <ProductSearch />
      <ProductTable />

      {pathname !== "/seller-dashboard/all-products" && <RevenueOverview />}
    </>
  );

  // If on /seller-dashboard/products, return content directly (no wrapper)
  if (pathname === "/seller-dashboard/products") {
    return content;
  }

  // Otherwise wrap in CommonWrapper
  return <CommonWrapper>{content}</CommonWrapper>;
};

export default SellerProductsPage;
