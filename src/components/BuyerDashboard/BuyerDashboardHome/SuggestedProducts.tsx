import HomeProducts from "../../ReUseable/HomeProducts";

const SuggestedProducts = () => {
  return (
    <div className="mt-12">
      <div>
        <h2 className="uppercase font-semibold text-2xl lg:text-3xl">
          Suggested products
        </h2>
      </div>
      <HomeProducts
        cols={{ mobile: 2, md: 2, lg: 4, xl: 4 }}
        rows={{ mobile: 2, md: 2, lg: 2, xl: 2 }}
      />
    </div>
  );
};

export default SuggestedProducts;
