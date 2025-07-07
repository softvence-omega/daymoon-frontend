import Breadcrumbs from "@/components/SellerDashboard/SellerProducts/Breadcrumbs";
import ProductBar from "@/components/SellerDashboard/SellerProducts/ProductDetails/ProductBar";
import { useParams } from "react-router-dom";
import SingleProductImage from "./SingleProductImage";
import ProductText from "./ProductText";
import PerformanceAnalytics from "./PerformanceAnalytics";
import ReviewFeedback from "./ReviewFeedback";
import ProductHistory from "./ProductHistory";
import InventoryManagement from "./InventoryManagement";
import PriceMoqCard from "./PriceMoqCard";
import ShippingDetails from "./ShippingDetails";

const originalTitle = (slug: string): string => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

const ProductDetails = () => {
  const { title } = useParams<{ title: string }>();

  return (
    <div className="bg-[#FCFCFC]">
      <div className="pb-6">
        <Breadcrumbs
          title="Products"
          subtitle={`All Product > ${originalTitle(title || "")}`}
        />
      </div>
      <ProductBar />

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3 flex flex-col gap-9">
          <SingleProductImage />
          <ProductText />
          <PerformanceAnalytics />
          <ReviewFeedback />
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-9">
          <InventoryManagement />
          <PriceMoqCard />
          <ShippingDetails />
          <ProductHistory />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
