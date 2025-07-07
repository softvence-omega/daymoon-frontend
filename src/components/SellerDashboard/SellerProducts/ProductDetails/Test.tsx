"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Tag,
  Eye,
  Package,
  TrendingUp,
  Star,
  ChevronLeft,
  Bell,
  Search,
} from "lucide-react";

interface ProductData {
  id: string;
  name: string;
  sku: string;
  status: "Active" | "Draft" | "Archived";
  createdOn: string;
  lastUpdated: string;
  category: string[];
  visibility: "Public" | "Private";
  price: number;
  stock: number;
  rating: number;
  reviews: number;
  sales: number;
}

const productData: ProductData = {
  id: "1",
  name: "Bluetooth Wireless Earbuds",
  sku: "SP-X2023-BLK",
  status: "Active",
  createdOn: "20 June, 2025",
  lastUpdated: "20 June, 2025",
  category: ["Electronics", "Audio", "Earbuds"],
  visibility: "Public",
  price: 89.99,
  stock: 247,
  rating: 4.8,
  reviews: 1247,
  sales: 3420,
};

const recentActivity = [
  { action: "Stock updated", time: "2 hours ago", user: "John Doe" },
  { action: "Price changed", time: "1 day ago", user: "Sarah Wilson" },
  { action: "Product published", time: "3 days ago", user: "Mike Johnson" },
  { action: "Images uploaded", time: "1 week ago", user: "Emma Davis" },
];

const salesData = [
  { month: "Jan", sales: 120 },
  { month: "Feb", sales: 180 },
  { month: "Mar", sales: 240 },
  { month: "Apr", sales: 320 },
  { month: "May", sales: 280 },
  { month: "Jun", sales: 380 },
];

export default function ProductManagement() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Product Header */}

        {/* Tabs Navigation */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-5 bg-white border border-gray-200 p-1">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-slate-900 data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-slate-900 data-[state=active]:text-white"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="inventory"
              className="data-[state=active]:bg-slate-900 data-[state=active]:text-white"
            >
              Inventory
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="data-[state=active]:bg-slate-900 data-[state=active]:text-white"
            >
              Reviews
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="data-[state=active]:bg-slate-900 data-[state=active]:text-white"
            >
              Activity
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Price
                  </CardTitle>
                  <Tag className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">
                    ${productData.price}
                  </div>
                  <p className="text-xs text-green-600 mt-1">
                    +5.2% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Stock
                  </CardTitle>
                  <Package className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">
                    {productData.stock}
                  </div>
                  <p className="text-xs text-red-600 mt-1">
                    -12 from yesterday
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Rating
                  </CardTitle>
                  <Star className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">
                    {productData.rating}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {productData.reviews} reviews
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Total Sales
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">
                    {productData.sales.toLocaleString()}
                  </div>
                  <p className="text-xs text-green-600 mt-1">
                    +18.2% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Product Image and Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1 border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                    <Package className="w-16 h-16 text-slate-400" />
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-slate-100 rounded-md flex items-center justify-center"
                      >
                        <Package className="w-6 h-6 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Product Description</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Experience premium sound quality with our latest Bluetooth
                    Wireless Earbuds. Featuring advanced noise cancellation,
                    40-hour battery life, and IPX7 water resistance. Perfect for
                    workouts, commuting, and everyday use.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Features
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Active Noise Cancellation</li>
                        <li>• 40-hour battery life</li>
                        <li>• IPX7 water resistance</li>
                        <li>• Touch controls</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Specifications
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Bluetooth 5.3</li>
                        <li>• 10mm drivers</li>
                        <li>• USB-C charging</li>
                        <li>• Voice assistant support</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Sales Performance</CardTitle>
                  <CardDescription>
                    Monthly sales over the last 6 months
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {salesData.map((data) => (
                      <div
                        key={data.month}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-12 text-sm font-medium text-gray-600">
                          {data.month}
                        </div>
                        <div className="flex-1">
                          <Progress
                            value={(data.sales / 400) * 100}
                            className="h-3"
                          />
                        </div>
                        <div className="w-16 text-sm font-semibold text-right">
                          {data.sales}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Customer Insights</CardTitle>
                  <CardDescription>
                    Key metrics and demographics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        68%
                      </div>
                      <div className="text-sm text-gray-600">
                        Repeat Customers
                      </div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        4.2
                      </div>
                      <div className="text-sm text-gray-600">
                        Avg. Order Value
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Top Regions
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          North America
                        </span>
                        <span className="text-sm font-semibold">45%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Europe</span>
                        <span className="text-sm font-semibold">32%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          Asia Pacific
                        </span>
                        <span className="text-sm font-semibold">23%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Inventory Tab */}
          <TabsContent value="inventory" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Stock Management</CardTitle>
                <CardDescription>
                  Current inventory levels and alerts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-green-800">
                          Available Stock
                        </span>
                        <Package className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-green-900">
                        247
                      </div>
                      <div className="text-xs text-green-600">
                        units in stock
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-yellow-800">
                          Reserved
                        </span>
                        <Eye className="w-4 h-4 text-yellow-600" />
                      </div>
                      <div className="text-2xl font-bold text-yellow-900">
                        23
                      </div>
                      <div className="text-xs text-yellow-600">
                        pending orders
                      </div>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-red-800">
                          Low Stock Alert
                        </span>
                        <Bell className="w-4 h-4 text-red-600" />
                      </div>
                      <div className="text-sm text-red-700">
                        Reorder when below 50 units
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Stock History
                    </h4>
                    <div className="space-y-3">
                      {[
                        {
                          date: "Jan 15",
                          action: "Restocked",
                          quantity: "+100",
                          type: "in",
                        },
                        {
                          date: "Jan 12",
                          action: "Sale",
                          quantity: "-15",
                          type: "out",
                        },
                        {
                          date: "Jan 10",
                          action: "Return",
                          quantity: "+3",
                          type: "in",
                        },
                        {
                          date: "Jan 08",
                          action: "Sale",
                          quantity: "-28",
                          type: "out",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                item.type === "in"
                                  ? "bg-green-500"
                                  : "bg-red-500"
                              }`}
                            />
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {item.action}
                              </div>
                              <div className="text-xs text-gray-500">
                                {item.date}
                              </div>
                            </div>
                          </div>
                          <div
                            className={`text-sm font-semibold ${
                              item.type === "in"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {item.quantity}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Rating Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900">
                      {productData.rating}
                    </div>
                    <div className="flex items-center justify-center space-x-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= Math.floor(productData.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {productData.reviews} total reviews
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <span className="text-sm w-2">{rating}</span>
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <Progress
                          value={
                            rating === 5
                              ? 70
                              : rating === 4
                              ? 20
                              : rating === 3
                              ? 7
                              : rating === 2
                              ? 2
                              : 1
                          }
                          className="flex-1 h-2"
                        />
                        <span className="text-sm text-gray-600 w-8">
                          {rating === 5
                            ? "70%"
                            : rating === 4
                            ? "20%"
                            : rating === 3
                            ? "7%"
                            : rating === 2
                            ? "2%"
                            : "1%"}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Recent Reviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Sarah Johnson",
                      rating: 5,
                      comment:
                        "Excellent sound quality and battery life. Highly recommended!",
                      date: "2 days ago",
                    },
                    {
                      name: "Mike Chen",
                      rating: 4,
                      comment:
                        "Great earbuds, comfortable fit. Only wish the case was smaller.",
                      date: "1 week ago",
                    },
                    {
                      name: "Emma Wilson",
                      rating: 5,
                      comment:
                        "Perfect for workouts! Sweat-proof and stays in place.",
                      date: "2 weeks ago",
                    },
                  ].map((review, index) => (
                    <div
                      key={index}
                      className="border border-gray-100 rounded-lg p-4"
                    >
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>
                            {review.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="font-medium text-gray-900">
                                {review.name}
                              </div>
                              <div className="flex items-center space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`w-3 h-3 ${
                                      star <= review.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">
                              {review.date}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest changes and updates to this product
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          {activity.action}
                        </div>
                        <div className="text-xs text-gray-500">
                          by {activity.user}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {activity.time}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
