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

// Type definitions
type FilterOption = {
  value: string;
  label: string;
};

type FilterSelectProps = {
  placeholder: string;
  options: FilterOption[];
  defaultValue: string;
  onValueChange?: (value: string) => void;
};

type FilterState = {
  status: string;
  products: string;
  time: string;
  sortBy: string;
  search: string;
};

type RFQFilterProps = {
  onFilterChange?: (filters: FilterState) => void;
};

type FilterConfig = {
  label: string;
  placeholder: string;
  defaultValue: string;
  filterKey: keyof FilterState;
  options: FilterOption[];
};

/**
 * Reusable select component for filters
 */
const FilterSelect = ({
  placeholder,
  options,
  defaultValue,
  onValueChange,
}: FilterSelectProps) => {
  return (
    <Select defaultValue={defaultValue} onValueChange={onValueChange}>
      <SelectTrigger className="w-full rounded-full border border-[#E5E5E5] bg-white text-[#1A1A1A] placeholder:text-[#1A1A1A] px-5 py-3 data-[size=default]:h-auto text-base [&>svg]:text-[#F04436] [&>svg]:opacity-100 cursor-pointer">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white cursor-pointer border-none">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="cursor-pointer hover:bg-gray-50"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

/**
 * Main filter component for seller inquiries
 */
const SellerInquireFilter = ({ onFilterChange = () => {} }: RFQFilterProps) => {
  const [filters, setFilters] = useState<FilterState>({
    status: "all",
    products: "all",
    time: "all",
    sortBy: "newest",
    search: "",
  });

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const filterConfigs: FilterConfig[] = [
    {
      label: "Status",
      placeholder: "All Status",
      defaultValue: "all",
      filterKey: "status",
      options: [
        { value: "all", label: "All Status" },
        { value: "new", label: "New" },
        { value: "resolved", label: "Resolved" },
        { value: "closed", label: "Closed" },
      ],
    },
    {
      label: "Products",
      placeholder: "All Products",
      defaultValue: "all",
      filterKey: "products",
      options: [
        { value: "all", label: "All Products" },
        { value: "Ultra HD Display", label: "Ultra HD Display" },
        { value: "Smart Watch 5", label: "Smart Watch 5" },
        { value: "Webcam", label: "Webcam" },
      ],
    },

    {
      label: "Time",
      placeholder: "Last 30 Days",
      defaultValue: "all",
      filterKey: "time",
      options: [
        { value: "all", label: "Last 30 Days" },
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
        {/* Search Bar */}
        <div className="relative md:col-span-2 lg:col-span-1">
          <div className="relative">
            <Search
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white w-6 p-1 rounded-full h-auto cursor-pointer"
              style={{
                background: "linear-gradient(270deg, #F7813B 0%, #F46A39 100%)",
              }}
            />
            <Input
              type="text"
              placeholder="Search orders by number, product and suppliers..."
              value={filters.search}
              onChange={handleSearchChange}
              className="w-full rounded-full border border-[#E5E5E5] bg-white text-[#1A1A1A] placeholder:text-[#666666] pl-6 pr-12 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#F04436] focus:border-transparent h-auto"
            />
          </div>
        </div>

        {/* Filter Selects */}
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
