import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Package,
  Heart,
  Star,
  TrendingUp,
  DollarSign,
  Eye,
} from "lucide-react";

const BuyerDashboardDemo = () => {
  const stats = [
    {
      title: "Total Orders",
      value: "24",
      change: "+12%",
      icon: Package,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Cart Items",
      value: "8",
      change: "+3",
      icon: ShoppingCart,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Wishlist",
      value: "16",
      change: "+5",
      icon: Heart,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      title: "Total Spent",
      value: "$1,249",
      change: "+18%",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-001",
      product: "Wireless Headphones",
      status: "Delivered",
      date: "Dec 15, 2024",
      amount: "$199.99",
    },
    {
      id: "#ORD-002",
      product: "Smart Watch",
      status: "Shipped",
      date: "Dec 12, 2024",
      amount: "$299.99",
    },
    {
      id: "#ORD-003",
      product: "Laptop Stand",
      status: "Processing",
      date: "Dec 10, 2024",
      amount: "$79.99",
    },
  ];

  const recentlyViewed = [
    {
      name: "Gaming Mouse",
      price: "$89.99",
      image: "🖱️",
    },
    {
      name: "Mechanical Keyboard",
      price: "$149.99",
      image: "⌨️",
    },
    {
      name: "Monitor Stand",
      price: "$59.99",
      image: "🖥️",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, John! 👋</h1>
        <p className="text-blue-100">
          Here's what's happening with your account today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {stat.change}
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Orders</h3>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Package className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">{order.product}</p>
                      <p className="text-sm text-gray-500">
                        {order.id} • {order.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <Badge
                      variant={
                        order.status === "Delivered"
                          ? "default"
                          : order.status === "Shipped"
                          ? "secondary"
                          : "outline"
                      }
                      className="text-xs"
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recently Viewed */}
        <div>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recently Viewed</h3>
              <Eye className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentlyViewed.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-2xl">{item.image}</div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline">
              View More
            </Button>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button
            variant="outline"
            className="flex flex-col items-center p-6 h-auto"
          >
            <ShoppingCart className="w-6 h-6 mb-2" />
            <span>View Cart</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center p-6 h-auto"
          >
            <Heart className="w-6 h-6 mb-2" />
            <span>Wishlist</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center p-6 h-auto"
          >
            <Package className="w-6 h-6 mb-2" />
            <span>Track Orders</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center p-6 h-auto"
          >
            <Star className="w-6 h-6 mb-2" />
            <span>Reviews</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default BuyerDashboardDemo;
