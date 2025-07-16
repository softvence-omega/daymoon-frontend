interface OrderItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: string;
  total: string;
}

interface ShippingAddress {
  name: string;
  EstimatedDelivery: string;
  carrier: string;
  address: string;
  phone?: string;
}

interface PaymentInfo {
  method: "Visa" | "MasterCard" | "PayPal" | "Credit Card" | "Debit Card" | "Apple Pay" | "Google Pay";
  cardNumber: string;
  status: "Paid" | "Pending";
  transactionId: string;
  date: string;
}


interface OrderTimeline {
  id: string;
  title: string;
  date: string;
  description: string;
  status: "completed" | "current" | "pending" | string;
  trackingNumber?: string;
}



export interface IBuyerOrderDetails {
  id: string;
  supplier: string;
  product: {
    name: string;
    image: string;
  };
  quantity: number;
  shippingMethod: string;
  date: string;
  paymentStatus: 'paid' | 'pending';
  status: string;
  amount: string;
  orderItems: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentInfo: PaymentInfo;
  orderTimeline: OrderTimeline[];
  subtotal: string;
  shipping: string;
  tax: string;
  total: string;
  trackingNumber: string;
  estimatedDelivery: string;
}
