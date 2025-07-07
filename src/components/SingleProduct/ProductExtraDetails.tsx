import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

export default function ProductExtraDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  useEffect(() => {
    fetch("/product_info.json")
      .then((res) => res.json())
      .then((data) => setProduct(data[0]));
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      {/* Top Section: Product Info & Customization */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* PRODUCT DETAILS */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-[32px] font-bold">PRODUCT DETAILS</h2>
          <p className="text-[18px]  text-gray-600 ">
            Step into the future of audio with our {product.name} — designed for
            comfort, convenience, and exceptional sound quality. Whether you're
            commuting, working out, or simply enjoying your favorite tunes,
            these wireless earphones provide the perfect blend of style and
            performance.
          </p>

          <div>
            <h3 className="text-[24px] font-semibold mb-2">Key Features:</h3>
            <ul className="text-[18px] list-disc pl-6 text-gray-700 space-y-1">
              {product.productDetails.keyFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold mb-2">
              Additional Features:
            </h3>
            <ul className="text-[18px] list-disc pl-6 text-gray-700 space-y-1">
              {product.productDetails.additionalFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CUSTOMIZATION OPTION */}
        <Card className="p-4 space-y-4 h-fit">
          <h3 className=" text-[24px] font-semibold text-base">
            Customization Option
          </h3>
          <ul className="text-[18px] text-gray-700 space-y-1">
            <li>Logo/graphic design: +$0.20/piece (Min. order: 1000 pieces)</li>
            <li>Package: (Min. order: 1000 pieces)</li>
            <li>Color: (Min. order: 2000 pieces)</li>
          </ul>
          <Button
            variant="secondary"
            className="text-sm"
            onClick={() => {
              setClickedButton("Message");
              console.log("Send Message");
            }}
          >
            📩 Message
          </Button>
        </Card>
      </div>

      {/* BOTTOM SECTION: Key Attributes Table */}
      <div>
        <h3 className="text-[24px] font-semibold mb-2">Key Attributes</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left font-semibold border border-gray-300">
                  Attribute
                </th>
                <th className="py-2 px-4 text-left font-semibold border border-gray-300">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {Object.entries(product.productDetails.keyAttributes).map(
                ([key, value], index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border border-gray-300">{key}</td>
                    <td className="py-2 px-4 border border-gray-300">
                      {value}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex w-full">
        <div className="grid grid-cols-2 gap-8 mt-1 pr-5 pt-0">
          {/* Show all images from img2 folder statically */}
          {Array.from({ length: 5 }).map((_, idx) => (
            <img
              key={idx}
              src={`/img2/img${idx + 1}.png`} // change extension if .png or .webp
              alt={`Thumb ${idx + 1}`}
              className="w-[744px] h-[501px] object-cover border rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
