import { useState } from "react";
import { Calendar } from "lucide-react"; // or use your preferred date picker icon

export default function AddNewPromotion() {
  const [promotionType, setPromotionType] = useState("");

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      {/* Upload Image */}
      <div className="border border-dashed border-gray-300 rounded-lg flex flex-col justify-center items-center py-10 text-center">
        <span className="text-2xl">📤</span>
        <p className="text-sm text-gray-500 mt-2">
          <span className="text-red-500">Upload an image</span> or drag and drop
          PNG, JPG, PDF up to 10 mb
        </p>
      </div>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Promotion Name</label>
          <input
            type="text"
            placeholder="E.g., looking for 1000 units of Bluetooth headsets"
            className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Promotion Type</label>
          <select
            className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2"
            value={promotionType}
            onChange={(e) => setPromotionType(e.target.value)}
          >
            <option>Select Promotion type</option>
            <option>Discount</option>
            <option>Buy One Get One</option>
          </select>
        </div>
      </div>

      {/* Discount Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Discount Value</label>
          <input
            type="number"
            className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2"
            placeholder="$ 0.00"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Minimum Purchase</label>
          <input
            type="number"
            className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2"
            placeholder="$ 0.00"
          />
        </div>
      </div>

      {/* Applicable Products */}
      <div>
        <label className="text-sm font-medium">Applicable Products</label>
        <div className="flex items-center gap-6 mt-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="productOption"
              className="accent-red-500"
            />
            All Products
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="productOption"
              className="accent-red-500"
            />
            Specific Products
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="productOption"
              className="accent-red-500"
            />
            Products Categories
          </label>
        </div>

        <div className="mt-4 space-y-3">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2"
            >
              <input type="checkbox" />
              <img
                src="/product-placeholder.png"
                alt="Product"
                className="w-8 h-8"
              />
              <div>
                <p className="text-sm font-medium">Ultra HD Display</p>
                <p className="text-xs text-gray-500">SKU: HP-X1239-45K</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promotion Schedule */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Start Date</label>
          <div className="relative mt-1">
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            <Calendar className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium">End Date</label>
          <div className="relative mt-1">
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            <Calendar className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div>
        <label className="text-sm font-medium">
          Terms & Conditions (Optional)
        </label>
        <textarea
          placeholder="Enter any terms, conditions and restrictions apply for this promotion"
          className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 h-24"
        />
      </div>
    </div>
  );
}
