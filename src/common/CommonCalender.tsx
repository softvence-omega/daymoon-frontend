import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar1 } from "lucide-react";
import { useState } from "react";

const CommonCalender = () => {
  const [date, setDate] = useState<Date>();
  return (
    <div className="w-full sm:px-4">
      <label htmlFor="homeDate" className="block text-sm text-dark-3 mb-2">
        Check-in Date
      </label>
      <div className="flex items-center gap-2 text-dark-2 text-base">
        <Calendar1 />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              data-empty={!date}
              className="data-[empty=true]:text-muted-foreground justify-start text-left font-normal col-span-3 outline-none w-full text-sm md:text-base bg-transparent border-none focus:border-none focus:ring-0 focus:ring-transparent shadow-none p-0 placeholder:text-base"
            >
              {date ? format(date, "PP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white border-primary-border-color">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default CommonCalender;
