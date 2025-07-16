

interface Inventory {
  stock: number;
  inStock: boolean;
  lowStockThreshold: number;
}

interface Discount {
  type: "bulk";
  minQty: number;
  discountPercent: number;
}



interface AdditionalFeature {
  title: string;
  description: string;
}

interface Ratings {
  score: number;
  totalReviews: number;
}

interface Review {
  userId: string;
  rating: number;
  comment: string;
  date: string;
}

export interface VariantQuantities {
  [variant: string]: number;
}
export interface IProduct {
  productId: string;
  productSlug: string;
  productName: string;
  productCategory: string;
  brandName: string;
  skuNo: string;
  description: string;
  aboutProduct: string;
  vendorInfo: VendorInfo;
  samplePrice: string;
  minOrderQuantity: number;
  moq: PriceRange[];
  discounts: Discount[];
  inventory: Inventory;
  variants: Variant[];
  sizes: string[];
  keyFeatures: string[];
  additionalFeatures: AdditionalFeature[];
  keyAttributes: { [key: string]: string };
  ratings: Ratings;
  reviews: Review[];
  customizations: Customization[];
}

export interface Customization {
  option: string;
  price: number;
}export interface PriceRange {
  range: string;
  price: number;
}

export interface Variant {
  variantId: string;
  color: string;
  size?: string;
  image: string;
  quantity: number;
  priceRange: PriceRange[];
  customizations: Customization[];
}

export interface Customization {
  option: string;
  price: number;
}

export interface PriceRange {
  range: string;
  price: number;
}

export interface Product {
  productId: string;
  productName: string;
  variants: Variant[];
}

export interface VendorInfo {
  vendorName: string;
  vendorLocation: string;
  vendorLogo: string;
}

export interface Vendor {
  vendorInfo: VendorInfo;
  products: Product[];
}

export interface CartData {
  cart: Vendor[];
}
