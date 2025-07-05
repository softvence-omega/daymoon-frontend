import Wrapper from "../Shared/Wrapper";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <Wrapper>
      <div className="space-y-8">
        <ProductCard />
        {/* part-2 */}
        <div className="flex flex-col lg:flex-row w-full gap-5"></div>
      </div>
    </Wrapper>
  );
};

export default Product;
