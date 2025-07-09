// src/types/review.d.ts

export interface BuyerProduct {
  name: string;
  price: number;
  quantity: number;
}

export interface BuyerReview {
  store: string;
  storeAddress: string;
  products: BuyerProduct[];
  date: string;
  rating: number;
}
