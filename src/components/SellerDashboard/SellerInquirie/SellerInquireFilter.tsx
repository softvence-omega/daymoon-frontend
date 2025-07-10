import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSelectProps {
  placeholder: string;
  options: FilterOption[];
  defaultValue: string;
  onValueChange?: (value: string) => void;
}

interface RFQFilterProps {
  onFilterChange?: (filters: FilterState) => void;
}

export interface FilterState {
  status: string;
  category: string;
  time: string;
  sortBy: string;
  search: string;
}

const FilterSelect = ({
  placeholder,
  options,
  defaultValue,
  onValueChange,
}: FilterSelectProps) => {
  return (
    <Select defaultValue={defaultValue} onValueChange={onValueChange}>
      <SelectTrigger className="w-full rounded-full border border-[#E5E5E5] bg-white text-[#1A1A1A] placeholder:text-[#1A1A1A] px-5 py-3 data-[size=default]:h-auto text-base [&>svg]:text-[#F04436] [&>svg]:opacity-100">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const SellerInquireFilter = ({ onFilterChange = () => {} }: RFQFilterProps) => {
  const [filters, setFilters] = useState<FilterState>({
    status: "all",
    category: "all",
    time: "all",
    sortBy: "newest",
    search: "",
  });

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  }, [filters, onFilterChange]);

  const filterConfigs = [
    {
      label: "Status",
      placeholder: "All Status",
      defaultValue: "all",
      filterKey: "status" as keyof FilterState,
      options: [
        { value: "all", label: "All Status" },
        { value: "completed", label: "Completed" },
        { value: "pending", label: "Pending" },
        { value: "failed", label: "Failed" },
        { value: "processing", label: "Processing" },
      ],
    },
    {
      label: "Category",
      placeholder: "All Categories",
      defaultValue: "all",
      filterKey: "category" as keyof FilterState,
      options: [
        { value: "all", label: "All Categories" },
        { value: "subscription", label: "Subscription" },
        { value: "purchase", label: "Purchase" },
        { value: "refund", label: "Refund" },
        { value: "transfer", label: "Transfer" },
      ],
    },
    {
      label: "Time",
      placeholder: "All Time",
      defaultValue: "all",
      filterKey: "time" as keyof FilterState,
      options: [
        { value: "all", label: "All Time" },
        { value: "today", label: "Today" },
        { value: "week", label: "This Week" },
        { value: "month", label: "This Month" },
        { value: "quarter", label: "This Quarter" },
        { value: "year", label: "This Year" },
      ],
    },
  ];

  const handleFilterChange = (filterKey: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: value,
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      search: e.target.value,
    }));
  };
  return (
    <div className="p-4 xl:border xl:border-[#E5E5E5] rounded-full max-w-7xl mx-auto bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 items-center">
        {/* Search Bar - Takes half on large screens */}
        <div className="relative md:col-span-2 lg:col-span-1">
          <div className="relative">
            <Search
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white w-6 p-1 rounded-full h-auto"
              style={{
                background: "linear-gradient(270deg, #F7813B 0%, #F46A39 100%)",
              }}
            />
            <Input
              type="text"
              placeholder="Search payments..."
              value={filters.search}
              onChange={handleSearchChange}
              className="w-full rounded-full border border-[#E5E5E5] bg-white text-[#1A1A1A] placeholder:text-[#666666] pl-6 pr-12 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#F04436] focus:border-transparent h-auto"
            />
          </div>
        </div>

        {/* Filter Selects - Takes other half on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:col-span-2 lg:col-span-1">
          {filterConfigs.map((config) => (
            <FilterSelect
              key={config.label}
              placeholder={config.placeholder}
              options={config.options}
              defaultValue={config.defaultValue}
              onValueChange={(value) =>
                handleFilterChange(config.filterKey, value)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellerInquireFilter;