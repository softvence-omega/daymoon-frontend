

import { IBuyerOrderDetails } from '@/types/Buyer/BuyerOrderDetails';
import { BuyerOrder } from "@/types/Buyer/BuyerOrderTypes";

export const BuyerOrderTableData: BuyerOrder[] = [
  {
    "id": "ORD-2025-347",
    "supplier": "TechSupplies Inc.",
    "product": {
      "name": "24\" Monitor de resolución",
      "image": "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    "quantity": 10,
    "date": "2025-07-17",
    "status": "delivered",
    "amount": "$1,250"
  },
  {
    "id": "ORD-2025-482",
    "supplier": "ShopSphere",
    "product": {
      "name": "Earbud pro",
      "image": "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    "quantity": 50,
    "date": "2025-07-15",
    "status": "pending",
    "amount": "$3,250"
  },
  {
    "id": "ORD-2025-763",
    "supplier": "MarketMingle",
    "product": {
      "name": "MarketMingle",
      "image": "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    "quantity": 200,
    "date": "2025-09-22",
    "status": "shipped",
    "amount": "$1,250"
  },
  {
    "id": "ORD-2025-169",
    "supplier": "CartCraze",
    "product": {
      "name": "CartCraze",
      "image": "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    "quantity": 300,
    "date": "2024-05-03",
    "status": "shipped",
    "amount": "$1,250"
  },
  {
    "id": "ORD-2025-159",
    "supplier": "EcoHaven",
    "product": {
      "name": "BuyBliss",
      "image": "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    "quantity": 20,
    "date": "2023-12-09",
    "status": "delivered",
    "amount": "$3,250"
  },
  {
    "id": "ORD-2025-159",
    "supplier": "ShopSphere",
    "product": {
      "name": "JoyfulAbode",
      "image": "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    "quantity": 20,
    "date": "2025-07-09",
    "status": "pending",
    "amount": "$3,250"
  },
  {
    "id": "ORD-2025-159",
    "supplier": "TrendNest",
    "product": {
      "name": "CheerfulRetreat",
      "image": "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    "quantity": 20,
    "date": "2025-09-09",
    "status": "delivered",
    "amount": "$3,250"
  },
  {
    "id": "ORD-2025-159",
    "supplier": "MarketMingle",
    "product": {
      "name": "PeacefulNook",
      "image": "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    "quantity": 20,
    "date": "2025-07-09",
    "status": "shipped",
    "amount": "$3,250"
  },
  {
    "id": "ORD-2025-159",
    "supplier": "GadgetGrove",
    "product": {
      "name": "EuphoricZephyr",
      "image": "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    "quantity": 20,
    "date": "2025-07-09",
    "status": "pending",
    "amount": "$3,250"
  },
  {
    "id": "ORD-2025-159",
    "supplier": "StyleHub",
    "product": {
      "name": "CalmEmbrace",
      "image": "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    "quantity": 20,
    "date": "2025-07-09",
    "status": "delivered",
    "amount": "$3,250"
  }]

export const BuyerOrderDetails: IBuyerOrderDetails = {
  id: "ORD-2025-347",
  supplier: "TechSupplies Inc.",
  product: {
    name: "24\" Monitor de resolución",
    image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
  },
  quantity: 10,
  date: "2025-07-17",
  status: "delivered",
  paymentStatus: "paid", // Payment status added here
  amount: "$1,250",
  orderItems: [
    {
      id: "1",
      name: "Bluetooth Wireless Earbuds",
      image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
      quantity: 100,
      price: "$25.00",
      total: "$2,500.00"
    },
    {
      id: "2",
      name: "Bluetooth Wireless Earbuds",
      image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
      quantity: 50,
      price: "$25.00",
      total: "$1,250.00"
    }
  ],
  shippingAddress: {
    name: "John Doe",
    address: "123 Main Street, Apt 4B,New York,United States",
    carrier: "USPS",
    EstimatedDelivery: "July 17, 2025",
    phone: "+1 (555) 123-4567"
  },
  paymentInfo: {
    method: "Credit Card",
    cardNumber: "**** **** **** 1234",
    status: "Paid",
    date: "June 12, 2025",
    transactionId: "LX123456789"
  },
  orderTimeline: [
    {
      id: "1",
      title: "Order Received",
      date: "June 12, 2025",
      description: "Order #001-GADGETS was received and is being processed",
      status: "completed",
      trackingNumber: "#LX123456789"
    },
    {
      id: "2",
      title: "Payment Processed",
      date: "June 12, 2025",
      description: "Payment of $99.98 was successfully processed via Credit Card (Visa)",
      status: "completed",
      trackingNumber: "#LX123456789"
    },
    {
      id: "3",
      title: "Shipped",
      date: "June 12, 2025",
      description: "Order was shipped via Express Shipping",
      status: "completed",
      trackingNumber: "#LX123456789"
    },
    {
      id: "4",
      title: "Out for Delivery",
      date: "June 12, 2025",
      description: "Package is out for delivery",
      status: "current",
      trackingNumber: "#LX123456789"
    },
    {
      id: "5",
      title: "Delivered",
      date: "Expected on Jul 17, 2025",
      description: "",
      status: "pending",
      trackingNumber: "#LX123456789"
    }
  ],
  subtotal: "$4,375.00",
  shipping: "$25.00",
  tax: "$350.00",
  shippingMethod: "Standard Shipping",
  total: "$4,750.00",
  trackingNumber: "TRK123456789",
  estimatedDelivery: "Jul 17, 2025"
};


