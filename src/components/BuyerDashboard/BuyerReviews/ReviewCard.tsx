// components/ReviewCard.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";

interface ReviewCardProps {
  store: string;
  product: string;
  price: number;
  quantity: number;
  date: string;
  rating: number;
}

export const ReviewCard = ({
  store,
  product,
  price,
  quantity,
  date,
  rating,
}: ReviewCardProps) => {
  return (
    <Card className="w-full max-w-sm bg-white border border-gray-200 shadow-md rounded-lg">
      <CardHeader className="flex items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">{product}</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            {store}
          </CardDescription>
        </div>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className={`h-5 w-5 ${
                index < rating ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Price:</span>
          <span>${price}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Quantity:</span>
          <span>{quantity}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Date:</span>
          <span>{date}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Leave a Review
        </Button>
      </CardFooter>
    </Card>
  );
};
