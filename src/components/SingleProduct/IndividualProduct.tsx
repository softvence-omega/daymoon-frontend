import CommonWrapper from "@/common/CommonWrapper";
import { useState } from "react";
import { useParams } from "react-router-dom";
import MoreButton from "../ReUseable/MoreButton";
import ProductsComponent from "../ReUseable/ProductsComponent";
import ProductDetails from "./ProductDetails";
import ProductExtraDetails from "./ProductExtraDetails";

const IndividualProduct = () => {
  const { productId } = useParams();
  console.log("🚀 ~ IndividualProduct ~ productId:", productId);

  const [showAllProducts, setShowAllProducts] = useState(false);

  return (
    <CommonWrapper>
      <ProductDetails />

      <div className="mt-20 mb-32">
        <h1 className="text-xl font-semibold md:text-5xl">
          Frequently bought together
        </h1>

        <ProductsComponent
          selectedCategory="All"
          selectedPrice="All"
          showAll={showAllProducts}
          cols={{ mobile: 2, md: 4, lg: 4 }}
          rows={
            showAllProducts
              ? { mobile: 100, md: 100, lg: 100 }
              : { mobile: 2, md: 1, lg: 1 }
          }
        />
      </div>
      <ProductExtraDetails />
      {/* Products Section */}
      <div className="my-20">
        <h1 className="text-[24px] lg:text-[40px] font-semibold uppercase">
          More From the seller
        </h1>
        <ProductsComponent
          selectedCategory="All"
          selectedPrice="All"
          showAll={showAllProducts}
          cols={{ mobile: 1, md: 4, lg: 4 }}
          rows={
            showAllProducts
              ? { mobile: 100, md: 100, lg: 100 }
              : { mobile: 1, md: 1, lg: 1 }
          }
        />
        {!showAllProducts && (
          <MoreButton
            onClick={() => setShowAllProducts(true)}
            text="Explore More"
          />
        )}
      </div>
    </CommonWrapper>
  );
};

export default IndividualProduct;
