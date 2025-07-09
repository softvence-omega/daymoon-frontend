import ButtonWithIcon from "@/common/ButtonWithIcon";
import { Mail, Truck } from "lucide-react";
const OrderAction = () => {
  return (
    <div className="w-full bg-white p-10 rounded-2xl border border-foundation-white">
      <div className=" flex flex-col gap-6 pt-12">
        <ButtonWithIcon
          className=" bg-sunset-orange text-white border-transparent   w-full flex justify-center"
          icon={Truck}
        >
          Mark As Delivered
        </ButtonWithIcon>
        <ButtonWithIcon
          className=" border border-sunset-orange text-sunset-orange  w-full flex justify-center"
          icon={Mail}
        >
          Send Tracking Information
        </ButtonWithIcon>
      </div>
    </div>
  );
};

export default OrderAction;
