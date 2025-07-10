import { FaPlus } from "react-icons/fa";
import visa from "@/assets/dashboard/buyer-dashboard/visa.svg";
import mastercard from "@/assets/dashboard/buyer-dashboard/mastercard.svg";
import PaymentMethodCard from "../Shared/PaymentMethodCard";

const cardDetails = [
  {
    id: "pm_1",
    image: visa,
    name: "Visa Card",
    details: "Expires 05/2026",
    isDefault: true,
  },
  {
    id: "pm_2",
    image: mastercard,
    name: "MasterCard",
    details: "Expires 08/2027",
    isDefault: false,
  },
  {
    id: "pm_3",
    image: mastercard,
    name: "MasterCard",
    details: "Expires 08/2027",
    isDefault: false,
  },
];

const PaymentMethods = () => {

  const handleEdit = (id: string) => {
    console.log(`Editing payment method with ID: ${id}`);
    // Example: Open a modal or navigate to an edit page
    // navigate(`/edit-payment-method/${id}`)
  };

  const handleDelete = (id: string) => {
    console.log(`Deleting payment method with ID: ${id}`);
    // Example: Send a DELETE request to the backend
    // fetch(`/api/payment-methods/${id}`, { method: 'DELETE' })
  };

  const handleSetDefault = (id: string) => {
    console.log(`Setting payment method with ID: ${id} as default`);
    // Example: Send a PUT request to the backend
    // fetch(`/api/payment-methods/${id}/set-default`, { method: 'PUT' })
  };

  const handleAddPaymentMethod = () => {
    console.log("Adding new payment method");
    // Example: Open a modal or navigate to add payment method page
  };
  return (
    <div className="mt-8 md:mt-10 lg:mt-20 ">
      <h2 className="text-[#1A1A1A] font-medium text-2xl">Payment Methods</h2>
      <div className="mx-auto mt-4 sm:mt-6 md:p-6 sm:p-10 bg-[#FFFFFF] md:border border-[#B3B3B3] rounded-[20px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          {cardDetails.map((card) => (
            <PaymentMethodCard
              key={card.id}
              card={card}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onSetDefault={handleSetDefault}
            />
          ))}

          {/* Add New Payment Method Card */}
          <div
            className="bg-[#FFFFFF] p-4 sm:p-6 rounded-xl border border-dashed border-[#B3B3B3] flex flex-col gap-2 items-center justify-center cursor-pointer hover:bg-[#F9F9F9] transition-colors"
            onClick={handleAddPaymentMethod}
          >
            <div className="p-2 bg-[#E5E5E5] rounded-full">
              <FaPlus className="w-4 sm:w-5 h-4 sm:h-5 text-[#1A1A1A]" />
            </div>
            <p className="text-[#666666] text-xs sm:text-sm font-normal text-center">
              Add new payment method (Credit card, Bank account, or Paypal)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
