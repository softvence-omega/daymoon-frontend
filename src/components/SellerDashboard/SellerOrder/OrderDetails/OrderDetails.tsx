import Breadcrumbs from "@/components/SellerDashboard/SellerProducts/Breadcrumbs";
import { useParams } from "react-router-dom";
import OrderTracking from "./OrderTracking";
import OrderSummary from "./OrderSummary";
import ShippingInformation from "./ShippingInformation";

import product from "../../../../assets/landing/product2.png";
import profile from "../../../../assets/landing/profile.png";
import CustomerInformation from "./CustomerInformation";
import OrderAction from "./OrderAction";
import PaymentInformation from "./PaymentInformation";

export const originalTitle = (slug: string): string => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();

  const trackingSteps = [
    {
      id: "1",
      title: "Order Received",
      date: "June 12, 2025",
      description: "Order #001-GADGETS was received and is being proceed",
      status: "completed",
      trackingNumber: "#LX123456789",
    },
    {
      id: "2",
      title: "Payment Processed",
      date: "June 12, 2025",
      description:
        "Payment of $99.98 was successfully processed via Credit Card (Visa)",
      status: "completed",
      trackingNumber: "#LX123456789",
    },
    {
      id: "3",
      title: "Shipped",
      date: "June 12, 2025",
      description: "Order was shipped via Express Shipping",
      status: "completed",
      trackingNumber: "#LX123456789",
    },
    {
      id: "4",
      title: "Out for Delivery",
      date: "June 12, 2025",
      description: "Package is out for delivery",
      status: "current",
      trackingNumber: "#LX123456789",
    },
    {
      id: "5",
      title: "Delivered",
      date: "Expected on Jan 15, 2025",
      description: "",
      status: "pending",
      trackingNumber: "#LX123456789",
    },
  ];

  const orderTrackingData = {
    orderNumber: "001-GADGETS",
    orderDate: "June 12, 2025",
    currentStatus: "Shipped",
    trackingSteps,
    onUpdateStatus: () => alert("Update triggered!"),
  };
  const mockProduct = {
    name: "Wireless Earbuds",
    sku: "ER-57543",
    quantity: 2,
    unitPrice: 49.99,
    variant: {
      imageUrl: product,
      customization:
        "Logo/graphic design: +$0.20/piece (Min. order: 1,000 pieces)",
    },
  };

  const customerData = {
    name: "Alex Johnson",
    company: "XYZ Company",
    email: "alexjohnson@gmail.com",
    phone: "+4953034533",
    address: "123 Innovation Drive, Suite 400, USA",
    photoUrl: profile,
    joinedDate: "Jan 1, 2025",
    orderCount: 5,
    totalSpent: 547.89,
  };

  const paymentData = {
    method: "Credit Card Visa",
    last4: "1234",
    brand: "VISA",
    status: "Paid",
    transactionId: "#385893456tr5rt944",
    paymentDate: "12 Jan, 2025",
    totalAmount: 114.48,
    currency: "$",
  };
  return (
    <div className="">
      <div className="pb-6">
        <Breadcrumbs title="Orders" subtitle={`${originalTitle(id || "")}`} />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
          <OrderTracking data={orderTrackingData} />
          <OrderSummary product={mockProduct} shipping={5.99} tax={8.0} />
          <ShippingInformation />
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <OrderAction />
          <CustomerInformation customer={customerData} />
          <PaymentInformation payment={paymentData} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
