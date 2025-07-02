// src/lib/productCard/CardData.ts
import prdt1 from "@/assets/Reuseable/prodcut1.png";
import prdt2 from "@/assets/Reuseable/prodcut2.png";
import prdt3 from "@/assets/Reuseable/prodcut3.png";
import prdt4 from "@/assets/Reuseable/prodcut4.png";
import prdt5 from "@/assets/Reuseable/prodcut5.png";
import prdt6 from "@/assets/Reuseable/prodcut3.png";

export interface ProductType {
  id: number;
  title: string;
  images: string[];
  priceRange: string;
  rating: number;
  moq: string;
}

export const products: ProductType[] = [
  {
    id: 1,
    title:
      "Bluetooth Wireless Earbuds with Deep Bass, 40H Playtime, LED Display, IP7 Rating, Mic for Phone and Android, Black.",
    images: [prdt1, prdt2],
    priceRange: "$20-$28",
    rating: 4.2,
    moq: "MOQ : 10",
  },
  {
    id: 2,
    title: "Smart Fitness Band with Heart Rate Monitor and Sleep Tracking.",
    images: [prdt3, prdt4],
    priceRange: "$12-$18",
    rating: 4.5,
    moq: "MOQ : 20",
  },
  {
    id: 3,
    title: "Stylish Analog Watch for Men - Waterproof & Durable.",
    images: [prdt5, prdt6],
    priceRange: "$30-$35",
    rating: 4.8,
    moq: "MOQ : 5",
  },
  {
    id: 4,
    title: "Wireless Over-Ear Headphones with Noise Cancellation.",
    images: [prdt1, prdt3],
    priceRange: "$45-$60",
    rating: 4.6,
    moq: "MOQ : 8",
  },
  {
    id: 5,
    title: "Portable Bluetooth Speaker with Deep Bass and LED Lights.",
    images: [prdt1, prdt6],
    priceRange: "$25-$40",
    rating: 4.4,
    moq: "MOQ : 15",
  },
  {
    id: 6,
    title: "Smartwatch with Heart Rate and GPS Tracking.",
    images: [prdt2, prdt5],
    priceRange: "$80-$120",
    rating: 4.7,
    moq: "MOQ : 12",
  },
  {
    id: 7,
    title: "Smartwatch with Heart Rate and GPS Tracking.",
    images: [prdt2, prdt5],
    priceRange: "$80-$120",
    rating: 4.7,
    moq: "MOQ : 12",
  },
  {
    id: 8,
    title: "Smartwatch with Heart Rate and GPS Tracking.",
    images: [prdt2, prdt5],
    priceRange: "$80-$120",
    rating: 4.7,
    moq: "MOQ : 12",
  },
  {
    id: 9,
    title: "Stylish Analog Watch for Men - Waterproof & Durable.",
    images: [prdt5, prdt6],
    priceRange: "$30-$35",
    rating: 4.8,
    moq: "MOQ : 5",
  },
];
