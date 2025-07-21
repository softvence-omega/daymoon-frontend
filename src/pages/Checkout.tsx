import CommonWrapper from "@/common/CommonWrapper";
import BillingAddress from "@/components/Checkout/BillingAddress";
import ShippingAddress from "@/components/Checkout/ShippingAddress";
export default function Checkout() {
  return (
    <div className=" bg-ghost">
      <CommonWrapper className="">
        <div className="flex items-center justify-center py-8">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold text-[#1A1A1A] mb-2">
            Check Out
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <ShippingAddress />
          <BillingAddress />
        </div>
      </CommonWrapper>
    </div>
  );
}
