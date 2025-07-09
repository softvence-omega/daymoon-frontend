import ProductCard from "@/components/SellerDashboard/SellerProducts/ProductCard";
import ProductNavbar from "@/components/SellerDashboard/SellerProducts/ProductNavbar";
import ProductSearch from "@/components/SellerDashboard/SellerProducts/ProductSearch";
import { ProductTable } from "@/components/SellerDashboard/SellerProducts/ProductTable";
import RevenueOverview from "@/components/SellerDashboard/SellerProducts/RevenueOverview";

const SellerProductsPage = () => {
  return (
    <div>
      <ProductNavbar />
      <ProductCard />
      <ProductSearch />
      <ProductTable />
      <RevenueOverview />
    </div>
  );
};

export default SellerProductsPage;
