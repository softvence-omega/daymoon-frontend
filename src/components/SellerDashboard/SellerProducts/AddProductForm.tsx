import Breadcrumbs from "./Breadcrumbs";
import ProductImage from "./ProductImage";
import ProductInformation from "./ProductInformation";

const AddProductForm = () => {
  const productData = {
    title:
      "Bluetooth Wireless Earbuds with Deep Bass, 40H Playtime, LED Display, IP7 Rating, Mic for iPhone and Android, Black",
    minOrderQuantity: "10 Pieces",
    priceTiers: [
      { range: "10–99 pieces", price: "$5.34" },
      { range: "200–499 pieces", price: "$3.45" },
      { range: "500–999 pieces", price: "$1.56" },
      { range: ">= 1000 pieces", price: "$0.56" },
    ],
    samplePrice: "$1.50",
  };

  return (
    <div className="  ">
      <div className="py-6">
        <Breadcrumbs />
      </div>
      <div className="flex items-start gap-6">
        <ProductImage {...productData} />
        <ProductInformation />
      </div>
    </div>
  );
};

export default AddProductForm;
