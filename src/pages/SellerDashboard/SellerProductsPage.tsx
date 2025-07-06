import Product from "@/components/SellerDashboard/SellerProducts/Product";
import ProductSearch from "@/components/SellerDashboard/SellerProducts/ProductSearch";
import { ProductTable } from "@/components/SellerDashboard/SellerProducts/ProductTable";
import Pagination from "../../components/SellerDashboard/SellerProducts/Pagination";
import RevenueOverview from "@/components/SellerDashboard/SellerProducts/RevenueOverview";

const SellerProductsPage = () => {
  return (
    <div>
      <Product />
      <ProductSearch />
      <ProductTable />
      <Pagination />
      <RevenueOverview />
    </div>
  );
};

export default SellerProductsPage;
