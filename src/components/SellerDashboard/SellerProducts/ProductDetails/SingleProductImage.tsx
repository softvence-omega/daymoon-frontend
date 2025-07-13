import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import image1 from "../../../../assets/landing/product2.png";
import image2 from "../../../../assets/landing/product3.png";
import image3 from "../../../../assets/landing/products.png";

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

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.5,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 max-h-[860px] min-h-[400px] flex-1">
      {/* Thumbnail strip */}
      <div className="w-full md:w-24">
        <div className="block md:hidden px-1">
          <Slider {...sliderSettings}>
            {earbuds.map((earbud, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="px-1"
              >
                <div
                  className={`cursor-pointer border rounded-xl overflow-hidden transition duration-200 ${
                    activeIndex === index
                      ? "border-catalien-blue"
                      : "border-foundation-white"
                  }`}
                >
                  <img
                    src={earbud.img}
                    alt={`earbud-${index}`}
                    className="h-20 object-cover w-full"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Vertical thumbnails on md+ */}
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

      {/* Main image and square lens */}
      <div className="flex-1 flex items-center justify-center rounded-3xl border border-foundation-white min-h-[300px] relative">
        <div
          className="relative md:cursor-zoom-in"
          onMouseEnter={() => setLensVisible(true)}
          onMouseLeave={() => setLensVisible(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            ref={imgRef}
            src={imageSrc}
            alt="Selected Earbud"
            className="max-h-[600px] object-contain mix-blend-multiply"
          />

          {/* Square Lens */}
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
                backgroundSize: `${imgRef.current?.width! * ZOOM}px ${
                  imgRef.current?.height! * ZOOM
                }px`,
                backgroundPosition: `-${lensPos.x * ZOOM - LENS_SIZE / 2}px -${
                  lensPos.y * ZOOM - LENS_SIZE / 2
                }px`,
                zIndex: 20,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProductImage;
