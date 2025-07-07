import SubHeader from "@/common/SubHeader";
import { HistoryEvent } from "./type/History";

interface TimelineItemProps {
  event: HistoryEvent;
}

const TimelineItem = ({ event }: TimelineItemProps) => {
  return (
    <div className="relative flex gap-4 pb-8">
      <div className="flex flex-col items-center">
        <div className="w-1.5 h-1.5  bg-sunset-orange  rounded-full" />
        <div className="w-[1px]  bg-sunset-orange flex-1 " />
      </div>

      <div className="flex-1 ">
        <SubHeader className="mb-1">{event.date}</SubHeader>
        <SubHeader className="!text-base !text-jet-black font-semibold  mb-2">
          {event.title}
        </SubHeader>
        <SubHeader className="leading-relaxed !text-base">
          {event.description}
        </SubHeader>
      </div>
    </div>
  );
};

export default TimelineItem;
