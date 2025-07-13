import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
}

const FilterSelect = ({
  placeholder,
  options,
  defaultValue,
  onValueChange,
}: FilterSelectProps) => {
  return (
    <Select defaultValue={defaultValue} onValueChange={onValueChange}>
      <SelectTrigger className="w-full  rounded-full border border-[#E5E5E5] focus:ring-[#E5E5E5] bg-white text-[#1A1A1A] placeholder:text-[#1A1A1A] px-5 py-3 data-[size=default]:h-auto text-base [&>svg]:text-[#F04436] [&>svg]:opacity-100">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white border-none cursor-pointer">
        {options.map((option) => (
          <SelectItem
            className="hover:bg-[#E5E5E5] cursor-pointer"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const RFQFilter = ({ onFilterChange = () => {} }: RFQFilterProps) => {
  const [filters, setFilters] = useState<FilterState>({
    status: "all",
    category: "all",
    time: "all",
    sortBy: "newest",
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
        { value: "open", label: "Open" },
        { value: "in-progress", label: "In Progress" },
        { value: "closed", label: "Closed" },
      ],
    },
    {
      label: "Category",
      placeholder: "All Categories",
      defaultValue: "all",
      filterKey: "category" as keyof FilterState,
      options: [
        { value: "all", label: "All Categories" },
        { value: "electronics", label: "Electronics" },
        { value: "fashion", label: "Fashion" },
        { value: "home", label: "Home & Living" },
        { value: "automotive", label: "Automotive" },
        { value: "industrial", label: "Industrial" },
        { value: "healthcare", label: "Healthcare" },
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
    {
      label: "Sort By",
      placeholder: "Sort By",
      defaultValue: "newest",
      filterKey: "sortBy" as keyof FilterState,
      options: [
        { value: "newest", label: "Newest First" },
        { value: "oldest", label: "Oldest First" },
        { value: "responses-high", label: "Most Responses" },
        { value: "responses-low", label: "Least Responses" },
        { value: "title", label: "Title A-Z" },
      ],
    },
  ];

  const handleFilterChange = (filterKey: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: value,
    }));
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:border lg:border-[#E5E5E5] rounded-full max-w-7xl mx-auto bg-transparent">
      {filterConfigs.map((config) => (
        <FilterSelect
          key={config.label}
          placeholder={config.placeholder}
          options={config.options}
          defaultValue={config.defaultValue}
          onValueChange={(value) => handleFilterChange(config.filterKey, value)}
        />
      ))}
    </div>
  );
};

export default RFQFilter;
