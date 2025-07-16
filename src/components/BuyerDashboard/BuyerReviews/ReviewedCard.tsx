import { Star } from "lucide-react";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import star from "../../../assets/Reuseable/star.svg"; // Ensure the path is correct

interface OrderDetail {
  variant: string;
  quantity: number;
  price: string;
  orderDate: string;
  image: string;
}

interface ReviewedCardProps {
  productId: string;
  productName: string;
  vendorName: string;
  vendorLogo: string;
  vendorRating: number;
  productCategory: string;
  vendorLocation: string;
  orderDetails: OrderDetail[];
  userReview: string;
  userRating: number;
}

const ReviewedCard: React.FC<ReviewedCardProps> = ({
  productName,
  vendorName,
  vendorLogo,
  vendorLocation,
  vendorRating,
  productCategory,
  orderDetails,
  userReview,
  userRating,
}) => {
  return (
    <div className="border border-gray-200 rounded-md p-4 mb-6 flex flex-col justify-between h-full">
      <div className="md:border-1 border-[#E5E5E5] rounded-xl md:p-4 mb-4 flex-grow">
        <div className="flex flex-row gap-2 md:gap-4 items-center justify-between mb-4 ">
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

        <div className="md:mb-8">
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

      <div className="md:mt-4 flex-grow">
        <p className="text-[#666] bg-[#E5E5E5] text-sm mb-2 p-3 rounded-md">
          <span className="font-semibold">Your Review:</span> {userReview}
        </p>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 mt-4 shadow w-fit rounded-md ">
        <span className="font-semibold"> {userRating} </span>
        <Star className="w-4 h-4 text-amber-400" />
      </div>
    </div>
  );
};

export default ReviewedCard;
