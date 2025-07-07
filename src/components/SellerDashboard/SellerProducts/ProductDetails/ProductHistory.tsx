import CommonHeader from "@/common/CommonHeader";
import TimelineItem from "./TimelineItem";
import { HistoryEvent } from "./type/History";

export interface ProductHistoryProps {
  events?: HistoryEvent[];
}

const ProductHistory = ({ events }: ProductHistoryProps) => {
  const defaultEvents: HistoryEvent[] = [
    {
      id: "1",
      date: "20 June 2025",
      title: "Price Updated",
      description: "Price changed from $45.00 to $50.00",
      type: "price",
    },
    {
      id: "2",
      date: "15 June 2025",
      title: "Stock Updated",
      description: "Stock increased by 200 units",
      type: "stock",
    },
    {
      id: "3",
      date: "10 June 2025",
      title: "Product description updated",
      description: "Added noise-cancellation feature information",
      type: "description",
    },
    {
      id: "4",
      date: "08 June 2025",
      title: "Product created",
      description: "Initial product listing created",
      type: "created",
    },
  ];

  const historyEvents = events || defaultEvents;

  return (
    <div className=" bg-white border border-foundation-white rounded-2xl">
      <CommonHeader className="!text-header p-6  border-b border-foundation-white">
        Product History
      </CommonHeader>

      <div className="space-y-0 p-6">
        {historyEvents.map((event) => (
          <TimelineItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default ProductHistory;
