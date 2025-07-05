import { Card } from "@/components/ui/card";
import { FaPlus } from "react-icons/fa";
import PageHeader from "@/components/BuyerDashboard/BuyerSettings/PageHeader"; // Corrected import path
import { ImPencil } from "react-icons/im";
import { MdOutlineDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";

const addresses = [
  {
    title: "Main Office",
    address: "123 Business Street, Suite 100, San Francisco, CA 94107, United States",
    isDefault: true,
  },
  {
    title: "Branch Office",
    address: "456 Another Street, Suite 200, Los Angeles, CA 90001, United States",
    isDefault: false,
  },
];

const ShippingAddress = () => {
  const handleEdit = (index: number) => {
    console.log(`Editing address at index ${index}`);
    // Example: Open a modal or navigate to an edit page
  };

  const handleDelete = (index: number) => {
    console.log(`Deleting address at index ${index}`);
    // Example: Send a DELETE request to the backend
    // fetch(`/api/addresses/${index}`, { method: 'DELETE' })
  };

  const handleSubmit = () => {
    console.log("Submitting addresses:", addresses);
    // Example: Send data to the backend
    // fetch('/api/addresses', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(addresses),
    // });
  };

  return (
    <Card className="mx-auto mt-8 p-6 md:p-10 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[20px] ">
      <div className="space-y-6 lg:col-span-8">
        <PageHeader
          title="Shipping Addresses"
          icon={<FaPlus />}
          buttonTitle="Add New Address"
          onEdit={handleSubmit} // Pass the submit handler
        />
      </div>

      <div className="space-y-4">
        {addresses.map((address, index) => (
          <div
            key={index}
            className="bg-[#FCFCFC] p-6 rounded-xl border border-[#B3B3B3] relative"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-medium">{address.title}</h1>
              <div className="flex items-center gap-4 absolute top-5 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-6"
                    onClick={() => handleEdit(index)} // Call edit handler
                  >
                    <ImPencil className="w-6 h-6 text-[#F04436]" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-6"
                    onClick={() => handleDelete(index)} // Call delete handler
                  >
                    <MdOutlineDelete className="w-6 h-6 text-[#F04436]" />
                  </Button>
                </div>
            </div>
            <p className="text-[#484848] text-sm md:text-base mt-4 max-w-42 md:max-w-sm">
              {address.address}
            </p>
            {address.isDefault && (
              <span className="absolute bottom-4 right-4 bg-[#08AD361A] text-[#08AD36] text-sm font-normal px-3 py-1 rounded-lg">
                Default Address
              </span>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ShippingAddress;