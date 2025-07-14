import { refundOrdersData } from "@/lib/Buyer/BuyerRefund";
import { useState } from "react";
import { RefundCard } from "./BuyerRefundCard";
import { RefundForm } from "./BuyerRefundForm";

export default function BuyerRefundPage() {
  const [selectedOrderId, setSelectedOrderId] = useState<string>(
    refundOrdersData[0]?.id || ""
  );

  const selectedOrder = refundOrdersData.find(
    (order) => order.id === selectedOrderId
  );

  return (
    <div className="mt-12">
      <h1 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
        Recent Orders
      </h1>
      <div className="">
        <div className="grid mt-8 grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-3">
              {refundOrdersData.map((order) => (
                <RefundCard
                  key={order.id}
                  order={{
                    ...order,
                    status: order.status as
                      | "delivered"
                      | "processing"
                      | "shipped",
                  }}
                  isSelected={selectedOrderId === order.id}
                  onSelect={setSelectedOrderId}
                />
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-6">
            {selectedOrder ? (
              <RefundForm
                order={{
                  ...selectedOrder,
                  status: selectedOrder.status as
                    | "delivered"
                    | "processing"
                    | "shipped",
                }}
              />
            ) : (
              <div className="flex items-center justify-center h-64 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-500">
                  Select an order to request a refund
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
