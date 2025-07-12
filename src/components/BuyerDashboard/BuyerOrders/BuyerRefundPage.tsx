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
    <div className="">
      <h1 className="text-xl font-semibold text-gray-900 mb-4">
        Recent Orders
      </h1>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Order List */}
          <div className="space-y-4">
            <div className="space-y-3">
              {refundOrdersData.map((order) => (
                <RefundCard
                  key={order.id}
                  order={order}
                  isSelected={selectedOrderId === order.id}
                  onSelect={setSelectedOrderId}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Refund Form */}
          <div className="lg:sticky lg:top-6">
            {selectedOrder ? (
              <RefundForm order={selectedOrder} />
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
