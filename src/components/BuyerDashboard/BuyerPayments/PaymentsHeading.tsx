import { Plus } from "lucide-react";

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
            <button className="h-[60px] w-full  px-6 md:px-10 md:py-[10px] gap-2 rounded-[20px] bg-[var(--color-sunset-orange)] text-white flex items-center justify-center text-[16px] md:text-[18px] font-medium font-poppins leading-[130%] shadow-md hover:shadow-lg transition hover:bg-[var(--color-sunset-orange)]/90">
              Add Payment Method
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentsHeading;
