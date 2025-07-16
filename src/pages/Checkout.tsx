import ShippingAddress from "@/components/Checkout/ShippingAddress";
import BillingAddress from "@/components/Checkout/BillingAddress";
import CommonWrapper from "@/common/CommonWrapper";
import CommonHeader from "@/common/CommonHeader";
export default function Checkout() {
  return (
    <div className=" bg-ghost">
      <CommonWrapper className="">
        <div className="flex items-center justify-center py-8">
          <CommonHeader className="!text-2xl sm:!text-6xl font-semibold">
            Check Out
          </CommonHeader>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <ShippingAddress />
          <BillingAddress />
        </div>
      </CommonWrapper>
    </div>
  );
}
