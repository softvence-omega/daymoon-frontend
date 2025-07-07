export interface InventoryData {
  availableStock: number;
  maxStock: number;
  stockStatus: "In Stock" | "Low Stock" | "Out of Stock";
  lowStockThreshold: number;
  lastRestock: string;
}

export interface InventoryManagementProps {
  inventory?: InventoryData;
  onUpdateStock?: () => void;
  onViewHistory?: () => void;
}
