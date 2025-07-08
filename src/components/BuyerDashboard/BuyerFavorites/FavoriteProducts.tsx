import HomeProducts from "../../ReUseable/HomeProducts";

const FavoriteProducts = () => {
  return (
    <div>
      <HomeProducts
        cols={{ mobile: 2, md: 2, lg: 6 }}
        rows={{ mobile: 2, md: 2, lg: 3 }}
      />
    </div>
  );
};

export default FavoriteProducts;
