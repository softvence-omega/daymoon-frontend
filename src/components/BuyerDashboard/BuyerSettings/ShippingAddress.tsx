import PageHeader from "@/components/BuyerDashboard/BuyerSettings/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FaPlus } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";

import { useState } from "react";
import ShippingModal from "./ShippingModal";

const ShippingAddress = () => {
  const [addresses, setAddresses] = useState([
    {
      title: "Main Office",
      address:
        "123 Business Street, Suite 100, San Francisco, CA 94107, United States",
      isDefault: true,
    },
    {
      title: "Branch Office",
      address:
        "456 Another Street, Suite 200, Los Angeles, CA 90001, United States",
      isDefault: false,
    },
  ]);

  const [newAddress, setNewAddress] = useState({
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    country: "",
    isDefault: false,
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Get default address for mobile button
  const defaultAddress =
    addresses.find((addr) => addr.isDefault) || addresses[0];

  const handleEdit = (index: number) => {
    console.log(`Editing address at index ${index}`);
  };

  const handleDelete = (index: number) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
  };

  const handleAddAddress = () => {
    if (newAddress.address && newAddress.city && newAddress.country) {
      // Create a formatted address string from the individual fields
      const formattedAddress = `${newAddress.address}${
        newAddress.apartment ? ", " + newAddress.apartment : ""
      }, ${newAddress.city}, ${newAddress.postalCode}, ${newAddress.country}`;

      const addressToAdd = {
        title: newAddress.city, // Use city as title for now
        address: formattedAddress,
        isDefault: addresses.length === 0 ? true : newAddress.isDefault,
      };

      if (newAddress.isDefault) {
        // Remove default from other addresses
        setAddresses((prev) =>
          prev.map((addr) => ({ ...addr, isDefault: false }))
        );
      }

      setAddresses((prev) => [...prev, addressToAdd]);
      setNewAddress({
        address: "",
        apartment: "",
        city: "",
        postalCode: "",
        country: "",
        isDefault: false,
      });
      setIsAddModalOpen(false);
    }
  };

  return (
    <div className="mx-auto mt-8 md:p-10  bg-[#FFFFFF] border border-[#E5E5E5] rounded-[20px] shadow-none ">
      <div className="space-y-6 lg:col-span-8">
        <div className="hidden md:block">
          <PageHeader
            title="Shipping Addresses"
            icon={<FaPlus />}
            buttonTitle="Add New Address"
            onButtonClick={() => setIsAddModalOpen(true)}
          />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block space-y-4 mt-12">
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
                  onClick={() => handleEdit(index)}
                >
                  <ImPencil className="w-6 h-6 text-[#F04436]" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-6"
                  onClick={() => handleDelete(index)}
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

      {/* Add New Address Button */}
      <ShippingModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        newAddress={newAddress}
        setNewAddress={setNewAddress}
        handleAddAddress={handleAddAddress}
      />

      {/* Mobile View */}
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <div className="bg-[#FCFCFC] p-4 md:p-6 rounded-xl border border-[#B3B3B3] relative cursor-pointer">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-medium text-base md:text-lg text-[#1A1A1A]">
                    {defaultAddress.title}
                  </h3>
                  <p className="text-[#484848] text-sm md:text-base mt-2">
                    {defaultAddress.address}
                  </p>
                  {defaultAddress.isDefault && (
                    <span className="inline-block mt-2 bg-[#08AD361A] text-[#08AD36] text-xs md:text-sm font-normal px-2 md:px-3 py-1 rounded-lg">
                      Default Address
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <IoIosArrowForward className="w-5 h-5 md:w-6 md:h-6 text-[#F04436]" />
                </div>
              </div>
            </div>
          </DrawerTrigger>

          <DrawerContent className="bg-white rounded-xl">
            <DrawerHeader className="px-4 md:px-6 py-4 md:py-6">
              <div className="flex justify-between items-center">
                <DrawerClose asChild>
                  <Button
                    className="text-sm md:text-base text-[#F04436] rounded-full w-8 h-8 md:w-10 md:h-10"
                    style={{ boxShadow: "5px 4px 19.4px 0px #0000001A" }}
                  >
                    <IoIosArrowBack />
                  </Button>
                </DrawerClose>

                <h1 className="font-semibold text-lg md:text-xl text-[#1A1A1A] absolute left-1/2 transform -translate-x-1/2 w-full max-w-[300px] text-center">
                  Shipping Addresses
                </h1>

                <div className="w-8 h-8 md:w-10 md:h-10"></div>
              </div>
            </DrawerHeader>

            <div className="px-4 md:px-6 pb-4 md:pb-6 space-y-4 max-h-[60vh] overflow-y-auto">
              {/* Address List */}
              {addresses.map((address, index) => (
                <div
                  key={index}
                  className="bg-[#FCFCFC] p-4 md:p-6 rounded-xl border border-[#B3B3B3] relative"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-medium text-base md:text-lg text-[#1A1A1A]">
                        {address.title}
                      </h3>
                      <p className="text-[#484848] text-sm md:text-base mt-2">
                        {address.address}
                      </p>
                      {address.isDefault && (
                        <span className="inline-block mt-2 bg-[#08AD361A] text-[#08AD36] text-xs md:text-sm font-normal px-2 md:px-3 py-1 rounded-lg">
                          Default Address
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 md:size-10"
                        onClick={() => handleEdit(index)}
                      >
                        <ImPencil className="w-4 h-4 md:w-5 md:h-5 text-[#F04436]" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 md:size-10"
                        onClick={() => handleDelete(index)}
                      >
                        <MdOutlineDelete className="w-4 h-4 md:w-5 md:h-5 text-[#F04436]" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <Button
                onClick={() => setIsAddModalOpen(true)}
                variant="outline"
                className="w-full text-[#FCAB3F] rounded-xl py-3 md:py-4 px-4 md:px-6 font-medium flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <FaPlus className="w-4 h-4 md:w-5 md:h-5" />
                Add New Address
              </Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default ShippingAddress;
