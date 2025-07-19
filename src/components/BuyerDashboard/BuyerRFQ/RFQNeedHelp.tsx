import RedButton from "@/components/ReUseable/RedButton";
import { MdOutlineMessage } from "react-icons/md";

const RFQNeedHelp = () => {
  return (
    <div className="border border-[#E5E5E5] rounded-2xl bg-white sm:max-w-[350px] p-4 sm:p-6 mt-10 flex sm:block items-center justify-between gap-2">
      <h3 className="text-md mb-6 sm:text-2xl text-[#1A1A1A] ">Need Help?</h3>
      <RedButton title="Contact Support" Icon={MdOutlineMessage} />
    </div>
  );
};

export default RFQNeedHelp;
