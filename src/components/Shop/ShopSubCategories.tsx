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
import { useNavigate, useParams } from "react-router-dom"; // Make sure useNavigate is imported correctly
import img11 from "../../assets/Home/image(10).png";
import img7 from "../../assets/Home/image(6).png";
import img8 from "../../assets/Home/image(7).png";
import img9 from "../../assets/Home/image(8).png";
import img10 from "../../assets/Home/image(9).png";
import img12 from "../../assets/Home/outwear.png";

const ShopSubCategories = ({ number }: { number: number }) => {
  const numberOfCategories = number || 8;
  const navigate = useNavigate(); // Initialize navigate
  const { slug } = useParams();

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

  const handleCategoryClick = (category: ICategory) => {
    // Navigating to the subcategory page
    navigate(`/buyerHome/${slug}/${category.slug}`);
  };

  const categoriesData: ICategory[] = [
    { name: "Men's Clothing", image: img7, slug: "mens-clothing" },
    { name: "Women's Clothing", image: img8, slug: "womens-clothing" },
    { name: "Footwear", image: img9, slug: "footwear" },
    { name: "Accessories", image: img10, slug: "accessories" },
    { name: "Sportswear", image: img11, slug: "sportswear" },
    { name: "Outwear & Jackets", image: img12, slug: "outwear-and-jackets" },
  ];

  const [visibleCategories, setVisibleCategories] = useState(2); // Initially show 2 categories
  const isSmallDevice = useMediaQuery({ query: "(max-width: 768px)" });

  const handleShowMore = () => {
    setVisibleCategories((prev) => prev + 4); // Show 4 more categories
  };

  return (
    <div>
      <div className="relative mt-6 md:mt-20">
        {!isSmallDevice && (
          <Carousel className="w-full">
            <CarouselContent>
              {categoriesData.map((category, index) => (
                <CarouselItem
                  key={index}
                  className={`basis-1/2 md:basis-1/4 lg:basis-1/6 ${responsiveBasis}`}
                >
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
                        <h3 className="text-white bg-black/50 w-fit mx-auto px-2 text-[8px] md:text-sm py-1 rounded-md backdrop-blur-md font-medium ">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-0 shadow-lg bg-white left-7 bottom-0 opacity-100">
              <CarouselPrevious className="bg-white border-none rounded-full w-12 h-12 flex justify-center items-center text-[#f04436] hover:bg-gray-100" />
            </div>
            <div className="absolute top-0 shadow-lg bg-white right-6 bottom-0 opacity-100">
              <CarouselNext className="bg-white border-none rounded-full w-12 h-12 flex justify-center items-center text-[#f04436] hover:bg-gray-100" />
            </div>
          </Carousel>
        )}

        {isSmallDevice && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {categoriesData
              .slice(0, visibleCategories)
              .map((category, index) => (
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
                        <h3 className="text-white bg-black/50 w-fit mx-auto px-2 text-xs line-clamp-1 md:text-sm py-1 rounded-md backdrop-blur-md font-medium text-nowrap">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
          </div>
        )}

        {/* Show More button for small devices */}
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
    </div>
  );
};

export default ShopSubCategories;
