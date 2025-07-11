// Define a type for your user (example)
export interface User {
  id: string;
  name: string;
  email: string;
}

// Define a type for your app's theme (example)
export type Theme = 'light' | 'dark';

// Define a type for your app's routes (example)
export type Route = {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
};
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ICategory {
  name: string;
  image: string;
  slug: string;
}
export interface ISlider {
  images: string[];
  instanceRef: any;
  sliderRef: any;
}
export interface IFilterOption {
  label: string;
  value: string;
}

export interface IFilterProps {
  title: string;
  options: IFilterOption[];

  onChange?: (selected: string[]) => void;
}
export interface IProduct {
  productId: string;
  minOrderQuantity: number;
  productSlug: string;
  productName: string;
  productCategory: string;
  brandName: string;
  skuNo: string;
  description: string;
  aboutProduct: string;
  vendorInfo: {
    vendorId: string;
    vendorName: string;
    storeUrl: string;
    contactEmail: string;
    verified: boolean;
  };
  samplePrice: string;
  moq: {
    range: string;
    price: string;
  }[];
  discounts?: {
    type: "bulk";
    minQty: number;
    discountPercent: number;
  }[];
  inventory: {
    stock: number;
    inStock: boolean;
    lowStockThreshold?: number;
  };
  variants: {
    color: string;
    image: string;
  }[];
  sizes: string[];
  keyFeatures: string[];
  additionalFeatures: {
    title: string;
    description: string;
  }[];
  keyAttributes: {
    [key: string]: string;
  };
  ratings: {
    score: number;
    totalReviews: number;
  };
  reviews?: {
    userId: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  customizations: {
    option: string;
    price: string;
  }[];
}
export interface IPriceTier {
  quantityRange: string;
  price: number;
}

export interface IVariant {
  color: string;
  image: string;
}

export interface ManufacturerCardProps {
  id: number;
  shopName: string;
  name: string;
  location: string;
  rating: number;
  totalReviews: number;
  images: string[];
}
