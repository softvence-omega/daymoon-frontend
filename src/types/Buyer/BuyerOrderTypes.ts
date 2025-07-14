export interface BuyerOrder {
  id: string;
  supplier: string;
  product: {
    name: string;
    image: string;
  };
  quantity: number;
  date: string;

  status: "delivered" | "pending" | "shipped";
  amount: string;
}

