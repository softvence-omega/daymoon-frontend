import SubTitle from "../Shared/SubTitle";

import stripe from "@/assets/Icon/stripe.png";

export default function DiscountPricingPayment() {
  return (
    <div className="  space-y-8 ">
      {/* Discount Section */}
      <div className="space-y-5">
        <SubTitle miniTitle="Discount" />
      </div>
      <div className="w-[650px] h-[240px] ml-0 bg-white border border-gray-200 rounded-2xl shadow-sm p-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-2 md:col-span-2 space-y-4">
            <div className="space-y-4">
              <label className="text-sm font-medium block mb-[12px] text-gray-700">
                Discount Type
              </label>
              <select className="w-[300px] h-[50px] border border-gray-300 rounded-[12px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                className="w-[300px] h-[50px] border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
              />
            </div>
          </div>
          <div className="col-span-2 md:col-span-2 space-y-4">
            <div>
              <label className="text-sm font-medium block mb-[12px] text-gray-700">
                Minimum Purchase
              </label>
              <input
                type="text"
                value="$1000"
                readOnly
                className="w-[300px] h-[50px] border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
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
                className="w-[300px] h-[50px] border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Summary */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Pricing Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>$25</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Discount</span>
            <span>$5</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Shipping</span>
            <span>$25</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Tax</span>
            <span>$15</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-black">
            <span>Total</span>
            <span>$20</span>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
        <div className="flex items-center gap-4 p-3 border rounded-lg w-fit">
          <input type="radio" checked readOnly />
          <span className="text-sm font-medium">Stripe</span>
          <img src={stripe} className="h-5" alt="Stripe Logo" />
        </div>
      </div>

      {/* Custom Note and Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Custom Note */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Custom Note</h2>
          <textarea
            rows={4}
            placeholder="Add a note..."
            className="w-full border rounded-lg px-4 py-2 resize-none"
          />
        </div>

        {/* Terms & Conditions */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Terms & Conditions</h2>
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
      <div className="flex items-start gap-6 p-4 border border-orange-400 rounded-lg">
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <span>alexjohnson@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>+4953034533</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>123 Innovation Drive, Suite 400, USA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
