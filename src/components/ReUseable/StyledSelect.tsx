import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface FilterSelectProps {
  placeholder: string;
  options: FilterOption[];
  defaultValue: string;
  className?: string;
  onValueChange?: (value: string) => void;
}

interface FilterOption {
  value: string;
  label: string;
}

const StyledSelect = ({
  placeholder,
  options,
  defaultValue,
  onValueChange,
  className,
}: FilterSelectProps) => {
  return (
    <Select defaultValue={defaultValue} onValueChange={onValueChange}>
      <SelectTrigger
        className={classNames(
          "w-full cursor-pointer rounded-full border border-[#E5E5E5] focus:ring-[#E5E5E5] bg-white text-[#1A1A1A] placeholder:text-[#1A1A1A] px-5 py-3 data-[size=default]:h-auto text-base [&>svg]:text-[#F04436] [&>svg]:opacity-100",
          className
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white border-none ">
        {options.map((option) => (
          <SelectItem
            className="hover:bg-[#E5E5E5]"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
      <ChevronDown className="absolute right-2 top-1/2   w-4 h-4 pointer-events-none" />
    </Select>
  );
};
export default StyledSelect;
