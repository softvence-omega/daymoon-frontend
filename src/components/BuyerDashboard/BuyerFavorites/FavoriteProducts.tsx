import HomeProducts from "../../ReUseable/HomeProducts";

const FavoriteProducts = () => {
  return (
    <div>
      <HomeProducts
        cols={{ mobile: 2, md: 3, lg: 6, xl: 6 }}
        rows={{ mobile: 3, md: 3, lg: 3, xl: 3 }}
      />
    </div>
  );
};

export default FavoriteProducts;
