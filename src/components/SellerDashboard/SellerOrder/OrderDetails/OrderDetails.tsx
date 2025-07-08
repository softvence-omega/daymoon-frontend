import Breadcrumbs from "@/components/SellerDashboard/SellerProducts/Breadcrumbs";
import { useParams } from "react-router-dom";
import OrderTracking from "./OrderTracking";

const originalTitle = (slug: string): string => {
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

  return (
    <div className="bg-[#FCFCFC]">
      <div className="pb-6">
        <Breadcrumbs title="Orders" subtitle={`${originalTitle(id || "")}`} />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3 flex flex-col gap-9">
          <OrderTracking data={orderTrackingData} />
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-9">b</div>
      </div>
    </div>
  );
};

export default OrderDetails;
