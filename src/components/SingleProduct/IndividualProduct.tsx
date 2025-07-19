import CommonWrapper from "@/common/CommonWrapper";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductExtraDetails from "./ProductExtraDetails";
import ProductsComponent from "../ReUseable/ProductsComponent";
import { useState } from "react";
import MoreButton from "../ReUseable/MoreButton";

const IndividualProduct = () => {
  const { productId } = useParams();
  console.log("🚀 ~ IndividualProduct ~ productId:", productId);

  const [showAllProducts, setShowAllProducts] = useState(false);

  return (
    <CommonWrapper>
      <ProductDetails />

      <div className="my-20 max-[767px]:my-10">
        <h1 className="text-xl font-semibold md:text-5xl">
          Frequently bought together
        </h1>

        <ProductsComponent
        // titleProducts=""
          selectedCategory="All"
          selectedPrice="All"
          showAll={showAllProducts}
          cols={{ mobile: 2, md: 4, lg: 4 }}
          rows={
            showAllProducts
              ? { mobile: 100, md: 100, lg: 100 } // Show all products
              : { mobile: 2, md: 1, lg: 1 }       // Show limited initially
          }
        />
      </div>
      <ProductExtraDetails />
      {/* Products Section */}
      <div className="my-20 max-[767px]:my-14">
        <h1 className="text-[24px] lg:text-[40px] font-semibold uppercase">More From the seller</h1>
        <ProductsComponent
        // titleProducts=""
          selectedCategory="All"
          selectedPrice="All"
          showAll={showAllProducts}
          cols={{ mobile: 2, md: 4, lg: 4 }}
          rows={
            showAllProducts
              ? { mobile: 100, md: 100, lg: 100 } // Show all products
              : { mobile: 1, md: 1, lg: 1 }       // Show limited initially
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
