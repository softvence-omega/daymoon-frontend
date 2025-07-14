import CommonHeader from "@/common/CommonHeader";
import Toggle from "./Toggle";
import AddMore from "./AddMore";
import { useState } from "react";

const Customization = () => {
  const [on, setOn] = useState(false);
  return (
    <div className="">
      <div className="flex justify-between pb-6 ">
        <CommonHeader className="text-[#484848] ">Customization</CommonHeader>
        <Toggle on={on} setOn={setOn} />
      </div>
      <div
        className={`
          transition-all duration-500 ease-in-out
          ${
            on
              ? "opacity-100 scale-100 max-h-[1000px]"
              : "opacity-0 scale-95 max-h-0 overflow-hidden"
          }
        `}
      >
        <AddMore width={"50%"} />
      </div>
    </div>
  );
};

export default Customization;
