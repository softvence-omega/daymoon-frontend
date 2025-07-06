export interface BuyerOrder {
  id: string;
  supplier: string;
  product: {
    name: string;
    image: string;
  };
  quantity: number;
  date: string;
  status: "Delivered" | "Pending" | "Shipped";
  amount: string;
}

export interface OrdersTableProps {
  orders: BuyerOrder[];
}
