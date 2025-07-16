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
    <div className="flex flex-col justify-between border-[#e5e5e5] border-1   rounded-md md:p-4 mb-6">
      <div className="md:border-1 border-[#E5E5E5] rounded-xl  p-4 md:mb-4">
        <div className="flex flex-row gap-2 md:gap-4 items-center justify-between  ">
          <img
            src={vendorLogo}
            alt={`${vendorName} logo`}
            className="w-18 h-18 rounded-full "
          />
          <div className="flex justify-between items-center w-full">
            <div className="">
              <h3 className="font-semibold md:text-xl text-start ">
                {vendorName}
              </h3>
              <div className="flex text-[#666] items-center md:items-center gap-2 mt-1 justify-center md:justify-start">
                <IoLocationOutline />
                <span className="text-xs md:text-sm">{vendorLocation}</span>
              </div>
            </div>
            <div className="flex items-center gap-1  ">
              <h1 className="text-xs md:text-base font-semibold">
                {vendorRating}
              </h1>
              <img
                src={star}
                alt={"star"}
                className="w-5 h-3 md:h-5 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        <hr className="text-[#e5e5e5] my-4 h1 w-full" />

        <div className=" ">
          {orderDetails.map((order, idx) => (
            <div
              key={idx}
              className="flex md:items-start items-end mb-4 justify-between md:space-x-4 gap-4 md:gap-4 flex-col md:flex-row md:border-none border-b-1 border-[#E5E5E5] pb-4 "
            >
              <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                <img
                  src={order.image}
                  alt={order.variant}
                  className="h-40 w-full md:w-24 md:h-20 object-contain rounded-md"
                />
                <div className="flex flex-col  justify-between ">
                  <h4 className="text-md font-medium mb-1">
                    {productName.slice(0, 100)} ({productCategory})
                  </h4>
                  <div className="text-sm text-[#666]">
                    <span>
                      {order.variant} - {order.quantity} pcs
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <span className="font-semibold text-lg text-[#D1512D] md:mb-4">
                  {order.price}
                </span>
                <span className="text-xs text-[#666]">{order.orderDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4 m-2 md:m-0 ">
          <Textarea
            className="w-full h-24 p-3  border border-[#E5E5E5] rounded-md bg-[#E5E5E5] ring-[#E5E5E5] focus:ring-[#E5E5E5] mb-2"
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
                <SelectTrigger className="w-full cursor-pointer rounded-lg border border-[#E5E5E5] focus:ring-[#E5E5E5] bg-white text-[#1A1A1A] placeholder:text-[#1A1A1A] px-6 py-2 data-[size=default]:h-auto text-base [&>svg]:text-[#F04436] [&>svg]:opacity-100">
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
            <button className="rounded-md" onClick={handleSubmit}>
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
