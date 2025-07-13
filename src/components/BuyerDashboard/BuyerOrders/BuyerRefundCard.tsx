import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RefundOrder } from "@/lib/Buyer/BuyerRefund";

interface RefundCardProps {
  order: RefundOrder;
  isSelected: boolean;
  onSelect: (orderId: string) => void;
}

export function RefundCard({ order, isSelected, onSelect }: RefundCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card
      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected ? "bg-red-50 border-red-200" : "bg-white border-gray-200"
      }`}
      onClick={() => onSelect(order.id)}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <img
            src={order.image || "/placeholder.svg"}
            alt={order.productName}
            className="w-12 h-12 rounded-lg object-cover bg-gray-100"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm text-gray-900 truncate">
              {order.productName}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Order {order.orderNumber}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Badge
                className={`text-xs px-2 py-1 ${getStatusColor(order.status)}`}
              >
                {order.status}
              </Badge>
              <span className="text-xs text-gray-500">{order.orderDate}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-red-600">
              ${order.price.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500 mt-1">Qty: 2</p>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100">
          <Button
            variant="outline"
            size="sm"
            className="w-full text-xs bg-transparent"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(order.id);
            }}
          >
            Request Refund →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
