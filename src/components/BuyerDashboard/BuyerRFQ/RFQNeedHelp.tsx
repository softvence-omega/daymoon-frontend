import { Button } from "@/components/ui/button";
import { MdOutlineMessage } from "react-icons/md";

const RFQNeedHelp = () => {
  return (
    <div className="border border-[#E5E5E5] rounded-2xl bg-white sm:max-w-[350px] p-4 sm:p-6 mt-10 flex sm:block items-center justify-between gap-2">
      <h3 className="text-md sm:text-2xl text-[#1A1A1A] ">Need Help?</h3>
      <Button
        className="bg-[#F04436] text-white h-auto rounded-2xl sm:mt-6 flex items-center gap-2 sm:px-16 sm:py-4 "
      >
        <MdOutlineMessage className="w-6 h-6" />
        <p className=" text-sm sm:text-lg">Live Chat Support</p>
      </Button>
    </div>
  );
};

export default RFQNeedHelp;
