// components/ReviewCard.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import prodImg from "@/assets/image/product1.png";
import sendImg from "@/assets/send.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface insideProducts {
  name: string;
  price: number;
  quantity: number;
}

interface singleProducts {
  date: string;
  products: insideProducts[];
  rating: number;
  store: string;
  storeAddress: string;
}

interface ReviewCardProps {
  products: singleProducts;
}

export const ReviewCard = ({ products }: ReviewCardProps) => {
  console.log(products, "rrrrrttt");
  return (
    <Card className="w-[488px]  bg-white border border-gray-200 shadow-md rounded-lg">
      <CardHeader className="flex items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">
            {products.store}
          </CardTitle>
          {/* <CardDescription className="text-sm text-gray-500">
            {store}
          </CardDescription> */}
          <CardDescription className="text-sm text-gray-500">
            {products.storeAddress}
          </CardDescription>
        </div>
        <div className="flex items-center gap-1 bg-white text-xs">
          <StarIcon className={`h-5 w-5 text-yellow-400`} />
          {products.rating}
        </div>
      </CardHeader>
      <div className="w-5/6 mx-auto text-gray-300">
        <hr />
      </div>
      <CardContent className="space-y-2">
        {products.products.map((product, index) => (
          <div key={index} className="flex justify-between items-center">
            {/* image will be here  */}
            <div className="flex items-center gap-2">
              <div>
                <img src={prodImg} alt="" className="w-12 h-12" />
              </div>
              <div>
                <h1>{product.name}</h1>
                <p className="text-gray-400 text-xs">
                  {product.quantity} pieces
                </p>
              </div>
            </div>
            <div className="text-sunset-orange">{product.price}</div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex flex-col">
        <textarea
          name="reviewContext"
          id=""
          className="bg-[#E5E5E5] text-[#666] w-full h-[100px] resize-none rounded-lg p-2"
        >
          Leave a review
        </textarea>

        <div className="w-full flex justify-between mt-4 px-2">
          <div>
            <Select>
              <SelectTrigger className="border border-gray-300 text-gray-500">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent className="bg-gray-300 border-none">
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="1">1</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <button>
              <img src={sendImg} alt="" />
            </button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
