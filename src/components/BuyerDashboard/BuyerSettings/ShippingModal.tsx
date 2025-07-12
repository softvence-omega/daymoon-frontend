import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import React from "react";

interface AddressData {
  address: string;
  apartment: string;
  city: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

interface ShippingModalProps {
  isOpen: boolean;
  onClose: () => void;
  newAddress: AddressData;
  setNewAddress: React.Dispatch<React.SetStateAction<AddressData>>;
  handleAddAddress: () => void;
}

const ShippingModal: React.FC<ShippingModalProps> = ({
  isOpen,
  onClose,
  newAddress,
  setNewAddress,
  handleAddAddress,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-xl max-w-md md:max-w-lg">
        <DialogHeader className="px-4 md:px-6 py-4 md:py-6">
          <DialogTitle className="text-lg md:text-xl">Shipping Address</DialogTitle>
          <DialogDescription className="text-sm md:text-base">
            Enter your shipping address details
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 md:space-y-6 px-4 md:px-6">
          <div className="space-y-2">
            <Label htmlFor="address" className="text-[#666666] text-sm md:text-base font-normal">
              Address
            </Label>
            <input
              id="address"
              value={newAddress.address}
              onChange={(e) => setNewAddress((prev) => ({ ...prev, address: e.target.value }))}
              placeholder="Enter street address"
              className="border border-[#666666] rounded-xl px-4 py-3 md:py-4 text-sm md:text-base w-full focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apartment" className="text-[#666666] text-sm md:text-base font-normal">
              Apartment, suite, etc.
            </Label>
            <input
              id="apartment"
              value={newAddress.apartment}
              onChange={(e) => setNewAddress((prev) => ({ ...prev, apartment: e.target.value }))}
              placeholder="Apartment, suite, etc. (optional)"
              className="border border-[#666666] rounded-xl px-4 py-3 md:py-4 text-sm md:text-base w-full focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-[#666666] text-sm md:text-base font-normal">
                City
              </Label>
              <input
                id="city"
                value={newAddress.city}
                onChange={(e) => setNewAddress((prev) => ({ ...prev, city: e.target.value }))}
                placeholder="City"
                className="border border-[#666666] rounded-xl px-4 py-3 md:py-4 text-sm md:text-base w-full focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="postalCode" className="text-[#666666] text-sm md:text-base font-normal">
                Postal Code
              </Label>
              <input
                id="postalCode"
                value={newAddress.postalCode}
                onChange={(e) => setNewAddress((prev) => ({ ...prev, postalCode: e.target.value }))}
                placeholder="Postal Code"
                className="border border-[#666666] rounded-xl px-4 py-3 md:py-4 text-sm md:text-base w-full focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="text-[#666666] text-sm md:text-base font-normal">
              Country
            </Label>
            <select
              id="country"
              value={newAddress.country}
              onChange={(e) => setNewAddress((prev) => ({ ...prev, country: e.target.value }))}
              className="w-full border border-[#666666] rounded-xl px-4 py-3 md:py-4 bg-white text-sm md:text-base focus:outline-none"
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="JP">Japan</option>
              <option value="IN">India</option>
            </select>
          </div>
        </div>

        <DialogFooter className="px-4 md:px-6 py-4 md:py-6">
          <button
            onClick={handleAddAddress}
            className="w-full bg-[#F04436] text-white rounded-xl py-3 md:py-4 px-4 md:px-6 font-medium text-sm md:text-base"
          >
            Save Changes
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShippingModal;
