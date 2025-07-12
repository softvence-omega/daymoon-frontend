import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import send from "../../../assets/Reuseable/send.svg";
import star from "../../../assets/Reuseable/star.svg";

interface OrderDetail {
  variant: string;
  quantity: number;
  price: string;
  orderDate: string;
  image: string;
}

interface PendingReviewCardProps {
  productId: string;
  productName: string;
  vendorName: string;
  vendorLogo: string;
  vendorRating: number;
  productCategory: string;
  vendorLocation: string;
  orderDetails: OrderDetail[];
}

const PendingReviewCard: React.FC<PendingReviewCardProps> = ({
  productId,
  productName,
  vendorName,
  vendorLogo,
  vendorLocation,
  vendorRating,
  productCategory,
  orderDetails,
}) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    console.log(productId, rating, comment);
  };

  return (
    <div className="border flex flex-col justify-between border-gray-200 rounded-md p-4 mb-6">
      <div className="border-1 border-[#E5E5E5] rounded-xl p-4 mb-4">
        <div className="flex gap-4 items-center mb-4">
          <img
            src={vendorLogo}
            alt={`${vendorName} logo`}
            className="w-18 h-18 rounded-full "
          />
          <div className="flex justify-between items-center w-full">
            <div>
              <h3 className="font-semibold text-xl">{vendorName}</h3>
              <div className="flex text-[#666] items-center gap-2 mt-1 justify-center">
                <IoLocationOutline />
                <span className="text-sm">{vendorLocation}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <h1 className="text-base font-semibold">{vendorRating}</h1>
              <img
                src={star}
                alt={"star"}
                className="w-5 h-5 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        <hr className="text-[#e5e5e5] my-4 h1 w-full" />

        <div className="mb-8">
          {orderDetails.map((order, idx) => (
            <div
              key={idx}
              className="flex items-start mb-4 justify-between space-x-4"
            >
              <img
                src={order.image}
                alt={order.variant}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex flex-col justify-between">
                <h4 className="text-md font-medium mb-1">
                  {productName.slice(0, 100)} ({productCategory})
                </h4>
                <div className="text-sm text-[#666]">
                  <span>
                    {order.variant} - {order.quantity} pcs
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between items-end">
                <span className="font-semibold text-lg text-[#D1512D] mb-4">
                  {order.price}
                </span>
                <span className="text-xs text-[#666]">{order.orderDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4">
          <Textarea
            className="w-full h-24 p-3 border border-[#E5E5E5] rounded-md bg-[#E5E5E5] ring-[#E5E5E5] focus:ring-[#E5E5E5] mb-2"
            placeholder="Leave a shop review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex justify-between gap-4 items-center mt-5 mb-2">
            <div className="relative w-fit">
              <Select
                defaultValue={rating ? rating.toString() : ""}
                onValueChange={(e) => setRating(Number(e))}
              >
                <SelectTrigger
                  className="
                    w-full cursor-pointer rounded-lg border border-[#E5E5E5] focus:ring-[#E5E5E5] bg-white text-[#1A1A1A] placeholder:text-[#1A1A1A] px-6 py-2 data-[size=default]:h-auto text-base [&>svg]:text-[#F04436] [&>svg]:opacity-100"
                >
                  <SelectValue placeholder={rating} />
                </SelectTrigger>
                <SelectContent className="bg-white border-none  ">
                  {[1, 2, 3, 4, 5].map((option) => (
                    <SelectItem
                      className="hover:bg-[#E5E5E5]"
                      key={option}
                      value={option.toString()}
                    >
                      {option}
                      <Star className="ml-1 w-fit rounded-md text-amber-400" />
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <button className=" rounded-md" onClick={handleSubmit}>
              <img
                src={send}
                alt={"send icon"}
                className="w-6 h-6 object-cover rounded-md"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingReviewCard;
