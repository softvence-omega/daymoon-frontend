import { Check, Truck, Package } from "lucide-react";
import { FC } from "react";
import ButtonWithIcon from "@/common/ButtonWithIcon";
import CommonButton from "@/common/CommonButton";
import SubHeader from "@/common/SubHeader";
import CommonHeader from "@/common/CommonHeader";

interface TrackingStep {
  id: string;
  title: string;
  date: string;
  description: string;
  status: "completed" | "current" | "pending" | string;
  trackingNumber?: string;
}

interface OrderTracking {
  orderNumber: string;
  orderDate: string;
  currentStatus: string;
  trackingSteps: TrackingStep[];
  onUpdateStatus?: () => void;
}

interface OrderTrackingProps {
  data: OrderTracking;
}

const getStepIcon = (step: TrackingStep) => {
  if (step?.status === "completed") {
    return (
      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
        <Check className="w-6 h-6 text-white" />
      </div>
    );
  } else if (step?.status === "current") {
    return (
      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
        <Truck className="w-6 h-6 text-white" />
      </div>
    );
  } else {
    return (
      <div className="w-12 h-12 bg-[#B3B3B3] rounded-full flex items-center justify-center">
        <Package className="w-6 h-6 text-black" />
      </div>
    );
  }
};

const getStatusBadgeColor = (status: string) => {
  switch (status?.toLowerCase()) {
    case "shipped":
      return "bg-orange-500 text-white hover:bg-orange-500";
    case "delivered":
      return "bg-green-500 text-white hover:bg-green-500";
    case "pending":
      return "bg-yellow-500 text-white hover:bg-yellow-500";
    default:
      return "bg-blue-500 text-white hover:bg-blue-500";
  }
};

const OrderTracking: FC<OrderTrackingProps> = ({ data }) => {
  const { currentStatus, orderDate, trackingSteps } = data;

  return (
    <div className="w-full bg-white p-10 rounded-2xl border border-foundation-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <ButtonWithIcon
            className={`${getStatusBadgeColor(
              currentStatus
            )} border-transparent !bg-goldenrod`}
          >
            <Truck className="w-4 h-4" />
            {currentStatus}
          </ButtonWithIcon>
          <SubHeader className="!text-sm">
            Order placed on {orderDate}
          </SubHeader>
        </div>
        <CommonButton className="!bg-catalien-blue text">
          Update Status
        </CommonButton>
        {/* onClick={onUpdateStatus} */}
      </div>

      {/* Timeline */}
      <div className="relative">
        {trackingSteps?.map((step, index) => {
          const isLast = index === trackingSteps.length - 1;

          return (
            <div key={step.id} className="flex gap-4 pb-8 last:pb-0 relative">
              <div className="relative z-10">{getStepIcon(step)}</div>

              {/* Vertical line, only if not the last step */}
              {!isLast && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200" />
              )}

              <div className="flex-1 pt-2">
                <div className="flex items-center gap-2 mb-1">
                  <CommonHeader className="!text-lg">{step.title}</CommonHeader>
                </div>
                <SubHeader className="text-sm mb-2">{step.date}</SubHeader>
                {step.description && (
                  <SubHeader className="t mb-2">{step.description}</SubHeader>
                )}
                {step.trackingNumber && (
                  <SubHeader className="text-gray-600">
                    Tracking number:{" "}
                    <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                      {step.trackingNumber}
                    </span>
                  </SubHeader>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTracking;
