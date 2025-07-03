import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Title from "../Shared/Title";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div className="w-full md:w-auto">
        <Title
          title="Manage your Orders"
          subTitle="View and manage your incoming orders. Track status, process returns, and update order details."
        />
      </div>
      <div className="w-full sm:w-[250px] md:w-[221px] text-[#484848]">
        <Select>
          <SelectTrigger className="w-full h-[48px] border border-[#B3B3B3] rounded-[12px] px-[20px] py-[10px] flex items-center justify-between cursor-pointer">
            <SelectValue placeholder="Last 30 Days" />
          </SelectTrigger>
          <SelectContent className=" ">
            <SelectGroup className="cursor-pointer ">
              <SelectLabel className="cursor-pointer">Days</SelectLabel>
              <SelectItem value="7">Last 7 Days</SelectItem>
              <SelectItem value="14">Last 14 Days</SelectItem>
              <SelectItem value="30">Last 30 Days</SelectItem>
              <SelectItem value="60">Last 60 Days</SelectItem>
              <SelectItem value="90">Last 90 Days</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Header;
