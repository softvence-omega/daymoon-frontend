import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductExtraDetails from "./ProductExtraDetails";

const IndividualProduct = () => {
  const { productId } = useParams();
  console.log("🚀 ~ IndividualProduct ~ productId:", productId);

  return (
    <div className="w-[1520px] mx-auto">
      <ProductDetails />
      <ProductExtraDetails />
    </div>
  );
};

export default IndividualProduct;
