import { useState } from "react";
import RFQFilter, { FilterState } from "./RFQFilter";
import { RFQTable } from "./RFQTable";

const RFQPage = () => {
  const [filters, setFilters] = useState<FilterState>({
    status: "all",
    category: "all",
    time: "all",
    sortBy: "newest",
  });

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <div className="space-y-6">
      <RFQFilter onFilterChange={handleFilterChange} />
      <RFQTable filters={filters} />
    </div>
  );
};

export default RFQPage;
