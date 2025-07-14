import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@/components/SellerDashboard/SellerProducts/Breadcrumbs";
import ProductBar from "@/components/SellerDashboard/SellerProducts/ProductDetails/ProductBar";
import SingleProductImage from "./SingleProductImage";
import ProductText from "./ProductText";
import PerformanceAnalytics from "./PerformanceAnalytics";
import ReviewFeedback from "./ReviewFeedback";
import ProductHistory from "./ProductHistory";
import InventoryManagement from "./InventoryManagement";
import PriceMoqCard from "./PriceMoqCard";
import ShippingDetails from "./ShippingDetails";
import CommonWrapper from "@/common/CommonWrapper";

const originalTitle = (slug: string): string => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

const ProductDetails = () => {
  const { title } = useParams<{ title: string }>();

  // Zoom state for shared use
  const [lensVisible, setLensVisible] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [imageSrc, setImageSrc] = useState<string>("");

  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <CommonWrapper>
      <div className="pb-6 md:pb-10">
        <Breadcrumbs
          title="Products"
          subtitle={`All Product > ${originalTitle(title || "")}`}
        />
      </div>
      <ProductBar />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <SingleProductImage
            lensVisible={lensVisible}
            lensPos={lensPos}
            setLensVisible={setLensVisible}
            setLensPos={setLensPos}
            setImageSrc={setImageSrc}
            imgRef={imgRef}
          />
          <ProductText />
          <PerformanceAnalytics />
          <ReviewFeedback />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <InventoryManagement
            zoom={{ lensVisible, lensPos, imageSrc, imgRef }}
          />
          <PriceMoqCard />
          <ShippingDetails />
          <ProductHistory />
        </div>
      </div>
    </CommonWrapper>
  );
};

export default ProductDetails;
