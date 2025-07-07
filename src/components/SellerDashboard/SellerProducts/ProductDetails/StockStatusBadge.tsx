interface StockStatusBadgeProps {
  status: "In Stock" | "Low Stock" | "Out of Stock";
}

const StockStatusBadge = ({ status }: StockStatusBadgeProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock":
        return "text-blue-600";
      case "Low Stock":
        return "text-yellow-600";
      case "Out of Stock":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <span className={`font-semibold ${getStatusColor(status)}`}>{status}</span>
  );
};

export default StockStatusBadge;
