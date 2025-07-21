import React, { useEffect, useState } from "react";
import image1 from "../../../../assets/landing/product2.png";
import image2 from "../../../../assets/landing/product3.png";
import image3 from "../../../../assets/landing/products.png";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const earbuds = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image2 },
  { img: image1 },
  { img: image3 },
  { img: image2 },
];

const ZOOM = 2;
const LENS_SIZE = 150;

interface SingleProductImageProps {
  lensVisible: boolean;
  lensPos: { x: number; y: number };
  setLensVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setLensPos: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
  setImageSrc: React.Dispatch<React.SetStateAction<string>>;
  imgRef: React.RefObject<HTMLImageElement | null>;
}

const SingleProductImage: React.FC<SingleProductImageProps> = ({
  lensVisible,
  lensPos,
  setLensVisible,
  setLensPos,
  setImageSrc,
  imgRef,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageSrc = earbuds[activeIndex].img;

  useEffect(() => {
    setImageSrc(imageSrc);
  }, [imageSrc, setImageSrc]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imgRef.current) return;
    const { top, left, width, height } = imgRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const clampX = Math.max(LENS_SIZE / 2, Math.min(x, width - LENS_SIZE / 2));
    const clampY = Math.max(LENS_SIZE / 2, Math.min(y, height - LENS_SIZE / 2));

    setLensPos({ x: clampX, y: clampY });
  };

  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row gap-8 ">
        <div className="w-full md:w-24">
          <div className="block md:hidden w-full px-1">
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent>
                {earbuds.map((earbud, index) => (
                  <CarouselItem key={index} className="basis-[20%]">
                    <div
                      onClick={() => setActiveIndex(index)}
                      className={` rounded-lg  transition duration-200 cursor-pointer border  ${
                        activeIndex === index
                          ? "border-catalien-blue"
                          : "border-gray-200"
                      }`}
                    >
                      <Card className="!py-0 border-none">
                        <CardContent className="aspect-square p-2 flex items-center justify-center overflow-hidden !py-0">
                          <img
                            src={earbud.img}
                            alt={`earbud-${index}`}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="hidden md:flex flex-col gap-4 py-2 pr-1 overflow-y-auto">
            {earbuds.map((earbud, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer border rounded-xl overflow-hidden transition duration-200 ${
                  activeIndex === index
                    ? "border-catalien-blue"
                    : "border-foundation-white"
                }`}
              >
                <img
                  src={earbud.img}
                  alt={`earbud-${index}`}
                  className="w-full h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center rounded-3xl border border-foundation-white min-h-[300px] relative overflow-hidden ">
          <div
            className="relative lg:cursor-cell "
            onMouseEnter={() => setLensVisible(true)}
            onMouseLeave={() => setLensVisible(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              ref={imgRef}
              src={imageSrc}
              alt="Selected Earbud"
              className="max-h-[600px] object-contain mix-blend-multiply   "
            />

            {lensVisible && (
              <div
                className="absolute pointer-events-none border border-gray-400 shadow-lg hidden md:block"
                style={{
                  width: LENS_SIZE,
                  height: LENS_SIZE,
                  top: lensPos.y - LENS_SIZE / 2,
                  left: lensPos.x - LENS_SIZE / 2,
                  backgroundImage: `url(${imageSrc})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: `${
                    imgRef.current && imgRef.current.width
                      ? imgRef.current.width * ZOOM
                      : LENS_SIZE * ZOOM
                  }px ${
                    imgRef.current && imgRef.current.height
                      ? imgRef.current.height * ZOOM
                      : LENS_SIZE * ZOOM
                  }px`,
                  backgroundPosition: `-${
                    lensPos.x * ZOOM - LENS_SIZE / 2
                  }px -${lensPos.y * ZOOM - LENS_SIZE / 2}px`,
                  zIndex: 20,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductImage;
