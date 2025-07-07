// src/App/Components/Home/ProductDetails.tsx

import { Button } from "@/components/ui/button";
import classNames from "classnames";
import { ChevronRight, Star, Truck } from "lucide-react";
import { useEffect, useState } from "react";

interface Product {
  productId: string;
  name: string;
  brand: string;
  category: string;
  rating: {
    score: number;
    reviews: number;
  };
  minimumOrderQuantity: number;
  priceTiers: { quantityRange: string; price: number }[];
  sample: { available: boolean; price: number };
  variants: { color: string; image: string }[];
  shipping: {
    type: string;
    description: string;
  };
  actions: string[];
  description: string;
  images: string[];
  productDetails: {
    keyFeatures: string[];
    additionalFeatures: string[];
    keyAttributes: Record<string, string>;
  };
}

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  useEffect(() => {
    fetch("/product_info.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data[0]);
        setSelectedImage(data[0].images[0]);
        setSelectedColor(data[0].variants[0].color);
      });
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <div className="grid grid-cols-1 ml-20 mx-auto md:grid-cols-2 gap-8 p-6">
        {/* LEFT SIDE – IMAGES */}
        <div className="flex wfull">
          <div className="flex flex-col gap-2 mt-1 pr-5 pt-0">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumb ${idx}`}
                onClick={() => setSelectedImage(img)}
                className={classNames(
                  "w-16 h-16 object-cover cursor-pointer border rounded-md",
                  {
                    "ring-2 ring-blue-500": selectedImage === img,
                  }
                )}
                style={{ width: "87px", height: "45px" }}
              />
            ))}
          </div>
          <img
            src={selectedImage!}
            alt="Main Product"
            className="w-full max-h-[400px] object-contain rounded-xl border"
            style={{ width: "614px", height: "732px" }}
          />
        </div>

        {/* RIGHT SIDE – DETAILS */}
        <div className="max-w-xl mx-auto p-4 rounded-xl border bg-white shadow-sm space-y-4">
          {/* Title & Rating */}
          <div>
            <h1 className="text-lg font-semibold leading-snug">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              {product.rating.score}/5 ({product.rating.reviews})
            </div>
          </div>

          {/* MOQ + Prices */}
          <div className="text-sm">
            <p className=" text-gray-700">Minimum Order Quantity</p>
            <p className=" mb-2">{product.minimumOrderQuantity} Pieces</p>
            <div className="grid grid-cols-4 text-center text-xs text-gray-700 gap-2">
              {product.priceTiers.map((tier, i) => (
                <div key={i}>
                  <p>{tier.quantityRange} pieces</p>
                  <p className="font-bold">${tier.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sample */}
          <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm">
            <div className="font-medium ">
              🎁 Get Your Sample{" "}
              <span className="text-red-600">(${product.sample.price})</span>
            </div>
            <ChevronRight className="text-orange-600 w-4 h-4" />
          </div>

          {/* Variants */}
          <div>
            <p className="text-sm font-semibold mb-2">Variants</p>
            <div className="flex gap-3">
              {product.variants.map((variant, i) => (
                <img
                  key={i}
                  src={variant.image}
                  alt={variant.color}
                  onClick={() => {
                    setSelectedImage(variant.image);
                    setSelectedColor(variant.color);
                  }}
                  className={classNames(
                    "w-[60px] h-[60px] object-cover border rounded-lg cursor-pointer p-1",
                    {
                      "border-red-500 ring-2 ring-red-500":
                        selectedColor === variant.color,
                    }
                  )}
                />
              ))}
            </div>
          </div>

          {/* Shipping */}
          <div className="bg-gray-50 border rounded-lg p-3 text-sm space-y-1">
            <div className="flex items-center gap-2 font-semibold">
              <Truck className="w-4 h-4 text-orange-500" />
              Shipping
            </div>
            <p className="font-medium">{product.shipping.type}</p>
            <p className="text-gray-600">{product.shipping.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              className={classNames(
                "text-[14px] hover:bg-transparent hover:text-inherit",
                clickedButton === "add" && "bg-red-500 text-white"
              )}
              onClick={() => {
                setClickedButton("add");
                console.log("Add To Cart clicked");
              }}
            >
              Add To Cart
            </Button>

            <Button
              variant="outline"
              className={classNames(
                "text-[14px] hover:bg-transparent hover:text-inherit",
                clickedButton === "chat" && "bg-red-500 text-white"
              )}
              onClick={() => {
                setClickedButton("chat");
                console.log("Chat Now clicked");
              }}
            >
              Chat Now
            </Button>

            <Button
              variant="outline"
              className={classNames(
                "text-[14px] hover:bg-transparent hover:text-inherit",
                clickedButton === "buy" && "bg-red-500 text-white"
              )}
              onClick={() => {
                setClickedButton("buy");
                console.log("Buy Now clicked");
              }}
            >
              Buy Now
            </Button>
          </div>

          {/* Description */}
          <div className="border rounded-lg p-4 bg-gray-50 text-sm">
            <p className="font-semibold mb-2">About This Product</p>
            <p className="text-gray-600 leading-relaxed line-clamp-6">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
