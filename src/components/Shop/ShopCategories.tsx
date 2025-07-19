import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ICategory } from "@/types";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom"; // Make sure useNavigate is imported correctly
import img1 from "../../assets/Home/electronics.png";
import img2 from "../../assets/Home/image(1).png";
import img3 from "../../assets/Home/image(2).png";
import img4 from "../../assets/Home/image(3).png";
import img5 from "../../assets/Home/image(4).png";
import img6 from "../../assets/Home/image(5).png";
import img7 from "../../assets/Home/image(6).png";
import img8 from "../../assets/Home/image(7).png";
import img13 from "../../assets/Home/image.png";

const ShopCategories = ({ number }: { number: number }) => {
  const numberOfCategories = number || 8;
  const navigate = useNavigate(); // Initialize navigate

  const getResponsiveBasisClass = (number: number) => {
    switch (number) {
      case 6:
        return "lg:basis-1/6 xl:basis-1/6";
      case 8:
        return "lg:basis-1/6 xl:basis-1/8";
      default:
        return "lg:basis-1/6 xl:basis-1/6";
    }
  };
  const responsiveBasis = getResponsiveBasisClass(numberOfCategories);

  const categoriesData: ICategory[] = [
    { name: "Electronics", image: img1, slug: "electronics" },
    { name: "Home & Living", image: img13, slug: "home-and-living" },
    { name: "Fashion & Apparel", image: img2, slug: "fashion-and-apparel" },
    { name: "Beauty", image: img3, slug: "beauty" },
    { name: "Industrial", image: img4, slug: "industrial" },
    { name: "Health & Wellness", image: img5, slug: "health" },
    { name: "Furniture", image: img6, slug: "furniture" },
    { name: "Kids", image: img7, slug: "kids" },
    { name: "Jewellery", image: img8, slug: "jewellery" },
  ];

  const [visibleCategories, setVisibleCategories] = useState(2); // Initially show 2 categories
  const isSmallDevice = useMediaQuery({ query: "(max-width: 768px)" });

  const handleCategoryClick = (category: ICategory) => {
    // This will navigate to the correct route
    navigate(`/buyerHome/${category.slug}`);
  };

  const handleShowMore = () => {
    setVisibleCategories((prev) => prev + 4); // Show 4 more categories
  };

  return (
    <div className="w-full mt-10 md:mt-20">
      {isSmallDevice ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {categoriesData.slice(0, visibleCategories).map((category, index) => (
            <div key={index}>
              <Card
                onClick={() => handleCategoryClick(category)}
                className="relative border-none overflow-hidden m-0 p-0 border-box h-[140px] rounded-lg cursor-pointer transition-transform group"
              >
                <div className="w-full h-full">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-fill w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-0 right-0">
                    <h3 className="text-white bg-black/50 w-fit mx-auto px-2 text-xs md:text-sm py-1 rounded-md backdrop-blur-md font-medium text-nowrap">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative mt-10 md:mt-20">
          <Carousel className="w-full">
            <CarouselContent>
              {categoriesData.map((category, index) => (
                <CarouselItem
                  key={index}
                  className={`basis-1/2 md:basis-1/4  ${responsiveBasis}`}
                >
                  <div>
                    <Card
                      onClick={() => handleCategoryClick(category)}
                      className="relative border-none overflow-hidden m-0 p-0 border-box h-[140px] rounded-lg cursor-pointer transition-transform group"
                    >
                      <div className="w-full h-full">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="object-fill w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute bottom-2 left-0 right-0">
                          <h3 className="text-white bg-black/50 w-fit mx-auto px-2 line-clamp-1  md:text-sm py-1 rounded-md backdrop-blur-md font-medium text-nowrap">
                            {category.name}
                          </h3>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -top-0 shadow-lg  bg-white left-7 bottom-0 opacity-100">
              <CarouselPrevious className="bg-white cursor-pointer border-none rounded-full w-12 h-12 flex justify-center items-center text-[#f04436] hover:bg-gray-100" />
            </div>
            <div className="absolute -top-0 shadow-lg !cursor-pointer bg-white right-6 bottom-0 opacity-100">
              <CarouselNext className="bg-white border-none cursor-pointer rounded-full w-12 h-12 flex justify-center items-center text-[#f04436] hover:bg-gray-100" />
            </div>
          </Carousel>
        </div>
      )}

      {isSmallDevice && visibleCategories < categoriesData.length && (
        <div className="text-center mt-6">
          <Button
            onClick={handleShowMore}
            variant="outline"
            className="text-[#F46A39] bg-white border border-[#F46A39] hover:bg-[#F46A39] hover:text-white"
          >
            Show More
          </Button>
        </div>
      )}
    </div>
  );
};

export default ShopCategories;
