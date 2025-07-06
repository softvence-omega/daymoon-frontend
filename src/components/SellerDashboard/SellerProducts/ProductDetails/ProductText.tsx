import Variants from "../Variants";
import product from "../../../../assets/landing/products.png";
import p1 from "../../../../assets/landing/product2.png";
import p2 from "../../../../assets/landing/product3.png";
import CommonHeader from "@/common/CommonHeader";
import SubHeader from "@/common/SubHeader";

const imageList = [{ img: p1 }, { img: p2 }, { img: product }];
const priceTiers = [
  { range: "10–99 pieces", price: "$5.34" },
  { range: "200–499 pieces", price: "$3.45" },
  { range: "500–999 pieces", price: "$1.56" },
  { range: ">= 1000 pieces", price: "$0.56" },
];

import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";

const ProductText = () => {
  return (
    <div className="flex flex-col gap-4 border border-foundation-white rounded-3xl p-4">
      <CommonHeader>
        Bluetooth Wireless Earbuds with Deep Bass, 40H Playtime, LED Display,
        IP7 Rating, Mic for iPhone and Android, Black.
      </CommonHeader>
      <div className="flex items-center gap-4">
        <div className="flex gap-2 text-[#FFC633]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
        </div>
        <div className="flex">
          <CommonHeader className="!text-black !text-base"> 4.5/</CommonHeader>
          <SubHeader>5 (7457)</SubHeader>
        </div>
      </div>

      <div>
        <SubHeader>Minimum Order Quantity</SubHeader>
        <CommonHeader>10 Pieces</CommonHeader>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 ">
        {priceTiers.map((tier, index) => (
          <div key={index} className=" ">
            <p className="text-sm text-foundation-gray">{tier.range}</p>
            <CommonHeader className="!text-lg">{tier.price}</CommonHeader>
          </div>
        ))}
      </div>

      <Variants imageList={imageList} />

      <div>
        <CommonHeader className=" !text-black !text-lg">
          About This Product
        </CommonHeader>
        <SubHeader>
          Lorem ipsum dolor sit amet consectetur. Eget volutpat varius proin
          risus nisl. Egestas purus at id urna convallis in. Lorem ipsum dolor
          sit amet consectetur. Eget volutpat varius proin risus nisl. Egestas
          purus at id urna convallis in. Lorem ipsum dolor sit amet consectetur.
          Eget volutpat varius proin risus nisl. Egestas purus at id urna
          convallis in. Lorem ipsum dolor sit amet consectetur. Eget volutpat
          varius proin risus nisl. Egestas purus at id urna convallis in. Lorem
          ipsum dolor sit amet consectetur. Eget volutpat varius proin risus
          nisl. Egestas purus at id urna convallis in. Lorem ipsum dolor sit
          amet consectetur. Eget volutpat varius proin risus nisl. Egestas purus
          at id urna convallis in. Lorem ipsum dolor sit amet consectetur. Eget
          volutpat varius proin risus nisl. Egestas purus at id urna convallis
          in. Lorem ipsum dolor sit amet consectetur. Eget volutpat varius proin
          risus nisl. Egestas purus at id urna convallis in.{" "}
        </SubHeader>
      </div>
    </div>
  );
};

export default ProductText;
