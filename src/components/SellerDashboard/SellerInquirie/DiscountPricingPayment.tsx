import { useState } from "react";
import SubTitle from "../Shared/SubTitle";
import stripe from "@/assets/Icon/stripe.png";
import { Mail, MapPin, Pencil, Phone } from "lucide-react";

export default function DiscountPricingPayment() {
  const [selected, setSelected] = useState(true);
  return (
    <div className="space-y-8">
      {/* Discount Section */}
      <div>
        <SubTitle miniTitle="Discount" />
      </div>
      <div className="w-full md:w-[650px] bg-white border border-gray-200 rounded-2xl shadow-sm p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-[12px] text-gray-700">
                Discount Type
              </label>
              <select className="w-full h-[50px] border border-gray-300 rounded-[12px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Percentage</option>
                <option>Fixed</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-[12px] text-gray-700">
                Amount
              </label>
              <input
                type="text"
                value="20%"
                readOnly
                className="w-full h-[50px] border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-[12px] text-gray-700">
                Minimum Purchase
              </label>
              <input
                type="text"
                value="$1000"
                readOnly
                className="w-full h-[50px] border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-[12px] text-gray-700">
                Maximum Amount
              </label>
              <input
                type="text"
                value="$200"
                readOnly
                className="w-full h-[50px] border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="space-y-6">
        <SubTitle miniTitle="Pricing Summary" />
        <div className="space-y-5">
          {[
            ["Subtotal", "$25"],
            ["Discount", "$5"],
            ["Shipping", "$25"],
            ["Tax", "$15"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between text-[var(--color-foundation-gray)]"
            >
              <span>{label}</span>
              <span className="text-[var(--color-jet-black)]">{value}</span>
            </div>
          ))}
          <hr className="text-[#E5E5E5]" />
          <div className="flex justify-between font-bold text-black">
            <span className="text-[var(--color-foundation-gray)]">Total</span>
            <span className="text-[var(--color-jet-black)]"> $20</span>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="space-y-6">
        <SubTitle miniTitle="Payment Methods" />
        <div
          className="w-full md:w-[439px] h-[55px] flex justify-between items-center gap-4 p-3 border rounded-xl border-[#E5E5E5] cursor-pointer"
          onClick={() => setSelected(true)}
        >
          <div className="flex items-center space-x-3">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={selected}
                onChange={() => setSelected(true)}
                className="appearance-none w-6 h-6 rounded-full border-2 border-[var(--color-sunset-orange)] checked:border-[6px] checked:border-[var(--color-sunset-orange)] transition-all duration-200"
              />
            </label>
            <span className="text-base font-sans">Stripe</span>
          </div>
          <img src={stripe} className="h-5" alt="Stripe Logo" />
        </div>
      </div>

      {/* Custom Note and Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Custom Note */}
        <div className="space-y-5">
          <SubTitle miniTitle="Custom Note" />
          <textarea
            rows={4}
            placeholder=""
            className="w-full border border-[#B3B3B3] rounded-lg px-4 py-2 resize-none"
          />
        </div>

        {/* Terms & Conditions */}
        <div className="space-y-5">
          <SubTitle miniTitle="Teams & Conditions" />
          <ul className="list-decimal list-inside text-sm text-gray-700 space-y-1">
            <li>Payment is due by the date specified on this invoice.</li>
            <li>
              All items remain the property of the seller until payment is
              received in full.
            </li>
            <li>
              Returns accepted within 14 days of purchase with original
              packaging.
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-[385px] flex flex-col gap-4 p-4 border border-orange-400 rounded-lg">
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 text-[var(--color-sunset-orange)]">
                <Mail />
              </span>
              <span className="break-all">alexjohnson@gmail.com</span>
            </div>
            <span className="w-6 h-6 text-[var(--color-sunset-orange)] cursor-pointer">
              <Pencil />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 text-[var(--color-sunset-orange)]">
              <Phone />
            </span>
            <span>+4953034533</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 text-[var(--color-sunset-orange)]">
              <MapPin />
            </span>
            <span className="break-all">
              123 Innovation Drive, Suite 400, USA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
