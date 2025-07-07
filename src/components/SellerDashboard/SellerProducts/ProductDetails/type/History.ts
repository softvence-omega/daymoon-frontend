export interface HistoryEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "price" | "stock" | "description" | "created" | "other";
}

export interface ProductHistoryProps {
  events?: HistoryEvent[];
}
