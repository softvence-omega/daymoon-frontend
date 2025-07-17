import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar1 } from "lucide-react";

// Reusable Calendar Component
interface CommonCalendarProps {
  label: string;
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void; // Consistent naming with the parent component
  placeholder?: string;
}

const CommonCalendar: React.FC<CommonCalendarProps> = ({
  selectedDate,
  onSelectDate,
  placeholder = "Pick a date",
}) => {
  return (
    <div className="w-full">
      <div className=" text-base">
        <Popover>
          <PopoverTrigger asChild className="w-full border-[#B3B3B3]">
            <Button
              variant="outline"
              data-empty={!selectedDate}
              className="text-start h-full p-3 justify-between gap-2 text-[#1A1A1A] text-base bg-[#E5E5E5] rounded-xl"
            >
              {selectedDate ? (
                format(selectedDate, "PP")
              ) : (
                <span>{placeholder}</span>
              )}
              <Calendar1 size={24} color="#F04436" className="ml-2" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white border-primary-border-color border-1 border-[#B3B3B3] ">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onSelectDate} // Correctly pass the onSelect handler
              className="custom-calendar"
              required={true}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default CommonCalendar;
