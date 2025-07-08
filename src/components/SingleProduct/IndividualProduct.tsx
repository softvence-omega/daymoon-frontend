import CommonWrapper from "@/common/CommonWrapper";
import { useParams } from "react-router-dom";
import HomeProducts from "../ReUseable/HomeProducts";
import ProductDetails from "./ProductDetails";
import ProductExtraDetails from "./ProductExtraDetails";

const IndividualProduct = () => {
  const { productId } = useParams();
  console.log("🚀 ~ IndividualProduct ~ productId:", productId);

  return (
    <CommonWrapper>
      <ProductDetails />
      <div className="mt-20 mb-32">
        <h1 className="text-xl font-semibold md:text-5xl">
          {" "}
          Frequently bought together
        </h1>
        <HomeProducts
          cols={{ mobile: 1, md: 2, lg: 4 }}
          rows={{ mobile: 1, md: 1, lg: 1 }}
        />
      </div>

      <ProductExtraDetails />
    </CommonWrapper>
  );
};

export default IndividualProduct;
