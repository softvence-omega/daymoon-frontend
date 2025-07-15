import image1 from "../../../assets/landing/product2.png";
import image2 from "../../../assets/landing/product3.png";
import image3 from "../../../assets/landing/image1.png";
import image4 from "../../../assets/landing/products.png";
export interface Order {
  id: string;
  orderNo: string;
  product: {
    name: string;
    sku: string;
    image: string;
  };
  buyer: {
    name: string;
    company: string;
  };
  date: string;
  status: "Shipped" | "Delivered" | "Pending";
  price: number;
}

export const orders: Order[] = [
  {
    id: "1",
    orderNo: "001-GADGETS",
    product: {
      name: "Ultra HD Display",
      sku: "SP-X2023-BLK",
      image: image1,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "17/06/2025",
    status: "Shipped",
    price: 89.99,
  },
  {
    id: "2",
    orderNo: "002-FASHION",
    product: {
      name: "4K Gaming Monitor",
      sku: "SP-X2023-BLK",
      image: image2,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "15/08/23",
    status: "Delivered",
    price: 79.99,
  },
  {
    id: "3",
    orderNo: "003-HOME",
    product: {
      name: "High-Resolution Screen",
      sku: "SP-X2023-BLK",
      image: image3,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "22/11/24",
    status: "Delivered",
    price: 59.99,
  },
  {
    id: "4",
    orderNo: "004-TOYS",
    product: {
      name: "Crystal Clear Monitor",
      sku: "SP-X2023-BLK",
      image: image4,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "03/05/25",
    status: "Pending",
    price: 69.99,
  },
  {
    id: "5",
    orderNo: "005-SUSTAINABLE",
    product: {
      name: "Vivid Color Display",
      sku: "SP-X2023-BLK",
      image: image1,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "09/12/22",
    status: "Delivered",
    price: 49.99,
  },
  {
    id: "6",
    orderNo: "006-BEAUTY",
    product: {
      name: "Premium Visual Monitor",
      sku: "SP-X2023-BLK",
      image: image2,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "09/12/22",
    status: "Shipped",
    price: 99.99,
  },
  {
    id: "7",
    orderNo: "007-TRENDY",
    product: {
      name: "Next-Gen 4K Screen",
      sku: "SP-X2023-BLK",
      image: image4,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "09/12/22",
    status: "Delivered",
    price: 89.99,
  },
  {
    id: "8",
    orderNo: "008-OUTDOOR",
    product: {
      name: "Stunning Clarity Monitor",
      sku: "SP-X2023-BLK",
      image: image1,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "09/12/22",
    status: "Delivered",
    price: 79.99,
  },
  {
    id: "9",
    orderNo: "009-TECH",
    product: {
      name: "Dynamic Display",
      sku: "SP-X2023-BLK",
      image: image3,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "09/12/22",
    status: "Shipped",
    price: 69.99,
  },
  {
    id: "10",
    orderNo: "010-LIFESTYLE",
    product: {
      name: "Elite 4K Monitor",
      sku: "SP-X2023-BLK",
      image: image1,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "09/12/22",
    status: "Delivered",
    price: 89.99,
  },
  {
    id: "11",
    orderNo: "011-OFFICE",
    product: {
      name: "Business Pro Display",
      sku: "SP-X2023-BLK",
      image: image2,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "10/01/23",
    status: "Pending",
    price: 74.99,
  },
  {
    id: "12",
    orderNo: "012-SPORTS",
    product: {
      name: "Wide Angle Display",
      sku: "SP-X2023-BLK",
      image: image3,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "12/03/24",
    status: "Delivered",
    price: 64.99,
  },
  {
    id: "13",
    orderNo: "013-KITCHEN",
    product: {
      name: "Smart Kitchen Display",
      sku: "SP-X2023-BLK",
      image: image4,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "18/06/25",
    status: "Shipped",
    price: 54.99,
  },
  {
    id: "14",
    orderNo: "014-PETS",
    product: {
      name: "Pet-Friendly Monitor",
      sku: "SP-X2023-BLK",
      image: image1,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "21/04/25",
    status: "Delivered",
    price: 44.99,
  },
  {
    id: "15",
    orderNo: "015-TECH2",
    product: {
      name: "AI Ready Display",
      sku: "SP-X2023-BLK",
      image: image2,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "02/09/23",
    status: "Pending",
    price: 94.99,
  },
  {
    id: "16",
    orderNo: "016-KIDS",
    product: {
      name: "Colorful Learning Monitor",
      sku: "SP-X2023-BLK",
      image: image3,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "13/11/23",
    status: "Delivered",
    price: 39.99,
  },
  {
    id: "17",
    orderNo: "017-AUTO",
    product: {
      name: "In-Car Entertainment Display",
      sku: "SP-X2023-BLK",
      image: image4,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "29/06/24",
    status: "Shipped",
    price: 59.99,
  },
  {
    id: "18",
    orderNo: "018-HEALTH",
    product: {
      name: "Medical-Grade Display",
      sku: "SP-X2023-BLK",
      image: image1,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "03/02/25",
    status: "Delivered",
    price: 109.99,
  },
  {
    id: "19",
    orderNo: "019-EDU",
    product: {
      name: "Smart Classroom Display",
      sku: "SP-X2023-BLK",
      image: image2,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "16/10/23",
    status: "Delivered",
    price: 84.99,
  },
  {
    id: "20",
    orderNo: "020-ARTS",
    product: {
      name: "Creative Studio Monitor",
      sku: "SP-X2023-BLK",
      image: image3,
    },
    buyer: { name: "Jane Smith", company: "XYZ Company" },
    date: "07/07/25",
    status: "Pending",
    price: 77.99,
  },
];
