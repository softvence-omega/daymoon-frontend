import { Button } from "@/components/ui/button";
import { MdOutlineMessage } from "react-icons/md";

const RFQNeedHelp = () => {
  return (
    <div className="border border-[#E5E5E5] rounded-2xl bg-white max-w-[350px] p-6">
      <h3 className="text-2xl text-[#1A1A1A] ">Need Help?</h3>
      <Button
        variant="default"
        className="bg-[#F04436] text-white h-auto rounded-2xl mt-6 flex items-center gap-2 px-16 py-4 "
      >
        <MdOutlineMessage className="w-6 h-6" />
        <span className="text-lg">Live Chat Support</span>
      </Button>
    </div>
  );
};

export default RFQNeedHelp;
