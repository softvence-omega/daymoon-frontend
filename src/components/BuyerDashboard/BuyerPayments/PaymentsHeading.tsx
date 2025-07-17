import { Plus } from "lucide-react";

import RedButton from "@/components/ReUseable/RedButton";
import Title from "../../SellerDashboard/Shared/Title";

const PaymentsHeading = () => {
  return (
    <>
      <div className="w-full">
        {/* Top Section: Title + Action Buttons */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center mb-10 w-full">
          {/* Title */}
          <div className="w-full lg:flex-1">
            <Title
              title="Payments"
              subTitle="Manage your payments,  view transaction history and refund"
            />
          </div>

          <div className="w-full md:w-fit">
            <RedButton title="Add Payment Method" Icon={Plus} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentsHeading;
