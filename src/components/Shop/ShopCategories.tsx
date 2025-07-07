import { Card } from "@/components/ui/card";
import img1 from "../../assets/Home/electronics.png";
import img2 from "../../assets/Home/image(1).png";
import img11 from "../../assets/Home/image(10).png";
import img3 from "../../assets/Home/image(2).png";
import img4 from "../../assets/Home/image(3).png";
import img5 from "../../assets/Home/image(4).png";
import img6 from "../../assets/Home/image(5).png";
import img7 from "../../assets/Home/image(6).png";
import img8 from "../../assets/Home/image(7).png";
import img9 from "../../assets/Home/image(8).png";
import img10 from "../../assets/Home/image(9).png";
import img13 from "../../assets/Home/image.png";
import img12 from "../../assets/Home/outwear.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ICategory } from "@/types";

const ShopCategories = ({ number }: { number: number }) => {
  const numberOfCategories = number || 8;

  const getResponsiveBasisClass = (number: number) => {
    switch (number) {
      case 6:
        return "lg:basis-1/6";
      case 8:
        return "lg:basis-1/8";
      default:
        return "lg:basis-1/2";
    }
  };
  const responsiveBasis = getResponsiveBasisClass(numberOfCategories);

  const handleCategoryClick = (categoryName: string) => {
    console.log(`Dont click me, said by: ${categoryName}`);
  };
  const categoriesData: ICategory[] = [
    { name: "Electronics", image: img1 },
    { name: "Home & Living", image: img13 },
    { name: "Fashion & Apperel", image: img2 },
    { name: "Health & Beauty", image: img3 },
    { name: "Industrial ", image: img4 },
    { name: "Health & Wellness", image: img5 },
    { name: " Furniture", image: img6 },
    { name: "Men's Clothing", image: img7 },
    { name: "Women's Clothing", image: img8 },
    { name: "Footwear", image: img9 },
    { name: "Accessories", image: img10 },
    { name: "Sportswear", image: img11 },
    { name: "Outwear & Jackets", image: img12 },
  ];
  return (
    <div className=" relative   mt-10 md:mt-20">
      <Carousel className="w-full  ">
        <CarouselContent className=" ">
          {categoriesData.map((category, index) => (
            <CarouselItem
              key={index}
              className={`basis-1/2 md:basis-1/4 lg:basis-1/6  ${responsiveBasis}`}
            >
              <div className="">
                <Card
                  onClick={() => handleCategoryClick(category.name)}
                  className={`relative border-none overflow-hidden m-0 p-0 border-box h-[140px]  rounded-lg cursor-pointer transition-transform group  $`}
                >
                  <div className="  w-full h-full">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-fill w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-115"
                    />

                    <div className="absolute bottom-2 left-0 right-0 ">
                      <h3 className="text-white bg-black/50  w-fit mx-auto px-2 text-sm py-1 rounded-md backdrop-blur-md  font-medium  text-nowrap">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -top-0 shadow-lg bg-white left-7 bottom-0 opacity-100  ">
          <CarouselPrevious className="bg-white border-none rounded-full w-12 h-12 flex justify-center items-center text-[#f04436] hover:bg-gray-100" />
        </div>
        <div className="absolute -top-0 shadow-lg   bg-white right-6 bottom-0 opacity-100  ">
          <CarouselNext className="bg-white border-none rounded-full w-12 h-12 flex justify-center items-center text-[#f04436] hover:bg-gray-100" />
        </div>
      </Carousel>
    </div>
  );
};

export default ShopCategories;
