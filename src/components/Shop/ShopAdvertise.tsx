import image2 from "../../assets/Shop/Beige Modern Minimalist Fashion Clothing Sale.png";
import image1 from "../../assets/Shop/Pink White Bold Fashion Boutique New.png";

const ShopAdvertise = () => {
  return (
    <div className=" !mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 mb-16">
      <div>
        <img
          src={image1}
          alt="Thumbnail"
          className="md:w-[750px] md:h-[500px] object-cover md:object-fill rounded-3xl shadow-md"
        />
      </div>
      <div>
        <img
          src={image2}
          alt="Thumbnail"
          className="md:w-[750px] md:h-[500px] object-cover md:object-fill rounded-3xl shadow-md"
        />
      </div>
    </div>
  );
};

export default ShopAdvertise;
