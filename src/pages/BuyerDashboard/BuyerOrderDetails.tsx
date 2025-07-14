import OrderTracking from "@/components/SellerDashboard/SellerOrder/OrderDetails/OrderTracking";
import Breadcrumbs from "@/components/SellerDashboard/SellerProducts/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BuyerOrderDetails } from "@/lib/Buyer/BuyerOrderTable";
import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";
import call from "../../assets/dashboard/buyer-dashboard/call.svg";
import mastercard from "../../assets/dashboard/buyer-dashboard/mastercard.svg";
import paypal from "../../assets/dashboard/buyer-dashboard/paypal.svg";
import refund from "../../assets/dashboard/buyer-dashboard/refund.svg";
import visa from "../../assets/dashboard/buyer-dashboard/visa.svg";

const getPaymentMethodIcon = (method: string) => {
  switch (method) {
    case "Visa":
      return <img src={visa} alt="Visa" className="w-6 h-6" />;
    case "MasterCard":
      return <img src={mastercard} alt="MasterCard" className="w-6 h-6" />;
    case "PayPal":
      return <img src={paypal} alt="PayPal" className="w-6 h-6" />;

    default:
      return <CreditCard className="w-6 h-6 text-gray-400" />;
  }
};

export default function OrderDetails() {
  const orderData = BuyerOrderDetails;

  if (!orderData) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
          Order Not Found
        </h2>
        <p className="text-[#666]">
          The order you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  const data = {
    orderNumber: orderData.id,
    orderDate: orderData.date,
    currentStatus: orderData.orderTimeline[0].status,
    trackingSteps: orderData.orderTimeline,
  };

  return (
    <div className="">
      <Breadcrumbs title="Orders" subtitle={orderData.id} />

      <div className="flex flex-col mt-8">
        <h1 className="text-3xl lg:text-4xl font-semibold text-[#484848]">
          Order Details
        </h1>
        <p className="text-[#666] text-sm mt-3">
          View & manage your order information
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 mt-8">
        <div className="xl:w-2/3 space-y-8">
          <div className="my-8 w-full bg-[#FFF7EC] border-[#E5E5E5] border-1 p-6 rounded-xl">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center">
              <p className="md:text-lg text-[#1A1A1A]">Order #{orderData.id}</p>
              <p className="text-[#666]">
                Placed on {orderData.orderTimeline[0].date}
              </p>
            </div>
            <div className="mt-8">
              <div className="flex flex-wrap lg:flex-nowrap gap-6 justify-between mb-8">
                <div className="bg-white w-full xl:w-1/3 p-6 rounded-2xl">
                  <p className="text-sm text-[#666]">Total amount</p>
                  <div className="flex mt-4 justify-center items-center">
                    <h2 className="text-xl text-center font-semibold text-[#F04436]">
                      {orderData.amount}
                    </h2>
                  </div>
                </div>
                <div className="bg-white w-full xl:w-1/3 p-6 rounded-2xl">
                  <p className="text-sm text-[#666]">Payment Status</p>
                  <div className="flex mt-4 justify-center items-center">
                    <h2
                      className={`text-xl text-center font-semibold ${
                        orderData.paymentStatus === "paid"
                          ? "text-[#08AD36]"
                          : "text-[#F04436]"
                      }`}
                    >
                      {orderData.paymentStatus.toUpperCase()}
                    </h2>
                  </div>
                </div>
                <div className="bg-white w-full xl:w-1/3 p-6 rounded-2xl">
                  <p className="text-sm text-[#666]">Shipping Method</p>
                  <div className="flex mt-4 justify-center items-center">
                    <h2 className="text-base md:text-xl text-center font-semibold text-[#1A1A1A]">
                      {orderData.shippingMethod}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-transparent cursor-pointer flex justify-center gap-2 border-1 border-[#e5e5e5] rounded-2xl items-center px-4 py-3 text-jet-black text-xs md:text-sm"
                >
                  Contact Supplier
                  <img
                    src={call}
                    className="w-4 h-4 object-contain"
                    alt="phone"
                  />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl cursor-pointer flex justify-center gap-2 border-1 border-[#e5e5e5] items-center bg-[#192D4E] px-4 py-3 text-white text-xs md:text-sm"
                >
                  Request Refund
                  <img
                    src={refund}
                    className="w-4 h-4 object-contain"
                    alt="phone"
                  />
                </motion.button>
              </div>
            </div>
          </div>

          <OrderTracking data={data} />

          <Card className="border-[#e5e5e5] md:border-1">
            <CardHeader>
              <CardTitle className="text-2xl font-medium md:border-b md:border-[#e5e5e5] pb-4">
                Products
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {orderData.orderItems.map((item, index) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 border border-gray-200 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover bg-gray-100"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-[#1A1A1A]">{item.name}</h3>
                    <p className="text-sm text-[#666]">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-[#1A1A1A]">{item.total}</p>
                    <p className="text-sm text-[#666]">{item.price} each</p>
                  </div>
                </div>
              ))}

              <Separator className="my-6" />

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#1A1A1A]">Subtotal</span>
                  <span className="text-[#666]">{orderData.subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#1A1A1A]">Shipping</span>
                  <span className="text-[#666]">{orderData.shipping}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#1A1A1A]">Tax</span>
                  <span className="text-[#666]">{orderData.tax}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold border-t border-[#e5e5e5] pt-4">
                  <span className="text-[#1A1A1A]">Total</span>
                  <span className="text-[#F04436]">{orderData.total}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full xl:w-1/3 space-y-6 mt-8">
          <Card className="border-[#e5e5e5] border-1">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2 pb-4 border-b border-[#e5e5e5]">
                Shipping Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-medium text-[#1A1A1A]">
                    Delivery Address
                  </h4>
                  <p className="text-sm text-[#666] font-mono">
                    {orderData.shippingAddress.name}
                  </p>
                  <p className="text-sm text-[#666] font-mono">
                    {orderData.shippingAddress.address}
                  </p>
                </div>

                {orderData.trackingNumber && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-[#1A1A1A]">
                      Shipping Details
                    </h4>
                    <p className="text-sm text-[#666] font-mono">
                      Carrier: {orderData.shippingAddress.carrier}
                    </p>
                    <p className="text-sm text-[#666] font-mono">
                      Estimated Delivery{" "}
                      {orderData.shippingAddress.EstimatedDelivery}
                    </p>
                    <p className="text-sm text-[#666] font-mono">
                      Tracking Number: {orderData.trackingNumber}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#e5e5e5] border-1">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-2 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {orderData.paymentInfo.method === "Visa" ? (
                        <img src={visa} alt="visa" className="w-6 h-6" />
                      ) : orderData.paymentInfo.method === "MasterCard" ? (
                        <img
                          src={mastercard}
                          alt="MasterCard"
                          className="w-6 h-6"
                        />
                      ) : orderData.paymentInfo.method === "PayPal" ? (
                        <img src={paypal} alt="paypal" className="w-6 h-6" />
                      ) : (
                        <CreditCard className="w-6 h-6 text-gray-400" />
                      )}
                    </span>
                  </div>
                  <span className="text-sm text-[#666]">
                    {orderData.paymentInfo.cardNumber}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#666]">Status</span>
                  <Badge
                    variant="default"
                    className="bg-green-100 text-[#08AD36]"
                  >
                    {orderData.paymentInfo.status}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#666]">Payment Date</span>
                  <p className="text-sm text-[#666]">
                    {orderData.paymentInfo.date}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#666]">Transaction ID</span>
                  <p className="text-sm text-[#666]">
                    {orderData.paymentInfo.transactionId}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="border-1 border-[#e5e5e5] rounded-2xl p-6">
            <h1 className="text-xl font-medium text-[#1A1A1A]">Need Help?</h1>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.8 }}
              className="w-full text-white bg-[#F04436] mt-6 hover:bg-red-500 flex justify-center items-center gap-2 text-lg font-medium py-3 rounded-2xl cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M20.5 17H4.5V5H14.6C14.52 4.61 14.42 3.89 14.6 3H4.5C3.4 3 2.5 3.9 2.5 5V23L6.5 19H20.5C21.6 19 22.5 18.1 22.5 17V7.98C21.92 8.42 21.24 8.75 20.5 8.9V17Z"
                  fill="#FEECEB"
                />
                <path
                  d="M19.5 7C21.1569 7 22.5 5.65685 22.5 4C22.5 2.34315 21.1569 1 19.5 1C17.8431 1 16.5 2.34315 16.5 4C16.5 5.65685 17.8431 7 19.5 7Z"
                  fill="#FEECEB"
                />
                <path d="M14.5 13H6.5V15H14.5V13Z" fill="#FEECEB" />
                <path d="M18.5 10H6.5V12H18.5V10Z" fill="#FEECEB" />
                <path
                  d="M6.5 9H18.5V8.9C17.29 8.65 16.25 7.95 15.53 7H6.5V9Z"
                  fill="#FEECEB"
                />
              </svg>
              Live Chat Support
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
