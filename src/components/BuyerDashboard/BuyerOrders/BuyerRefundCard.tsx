import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface RefundOrder {
  id: string;
  productName: string;
  orderNumber: string;
  orderDate: string;
  price: number;
  image: string;
  status: "delivered" | "processing" | "shipped";
  description?: string;
  quantity: number;
}

interface RefundCardProps {
  order: RefundOrder;
  isSelected: boolean;
  onSelect: (orderId: string) => void;
}

export function RefundCard({ order, isSelected, onSelect }: RefundCardProps) {
  const getStatusColor = (status: RefundOrder["status"]) => {
    switch (status) {
      case "delivered":
        return "bg-[#10b98133] text-[#10B981]";
      case "processing":
        return "bg-[#f59e4233] text-[#F59E42]";
      case "shipped":
        return "bg-[#1565d833] text-[#1565D8]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card
      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected ? "bg-red-50 border-red-200" : "bg-white border-gray-200"
      } rounded-lg shadow-lg border p-4`}
      onClick={() => onSelect(order.id)}
    >
      <CardContent className="p-2 ">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
          <img
            src={order.image || "/placeholder.svg"}
            alt={order.productName}
            className="w-full h-32 lg:w-20 lg:h-20 rounded-lg object-cover bg-gray-100"
          />

          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-base lg:text-xl">
              {order.productName}
            </h3>
            <p className="text-xs text-[#666] mt-1">
              Order {order.orderNumber}
            </p>
            <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-2 lg:gap-4  mt-6 md:mt-2">
              <Badge
                className={`text-sm font-medium px-4 py-1 ${getStatusColor(
                  order.status
                )}`}
              >
                {order.status}
              </Badge>

              <span className="text-sm text-[#666] lg:block md:hidden">
                {order.orderDate}
              </span>
            </div>
          </div>

          <div className="text-right md:mt-4 lg:mt-0 md:flex md:flex-col md:items-end md:text-right">
            <p className="text-lg lg:text-2xl font-semibold text-[#F04436]">
              ${order.price.toLocaleString()}
            </p>
            <p className="text-xs text-[#666] mt-1">Qty: {order.quantity}</p>

            <div className="mt-4  border-t border-gray-100">
              <Button
                variant="outline"
                size="sm"
                className="w-full lg:w-auto shadow-none border-none text-lg font-medium text-[#192D4E] bg-transparent "
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(order.id);
                }}
              >
                Request Refund →
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
