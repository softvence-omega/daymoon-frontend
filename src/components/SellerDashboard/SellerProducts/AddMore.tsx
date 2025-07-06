import { useState } from "react";
import { TfiPlus } from "react-icons/tfi";
import { FiTrash2 } from "react-icons/fi";

interface CustomizationOption {
  name: string;
  price: number;
}

export default function AddMore() {
  const [options, setOptions] = useState<CustomizationOption[]>([
    { name: "Colour customization", price: 0 },
  ]);

  const addNewOption = () => {
    setOptions([...options, { name: "", price: 0 }]);
  };

  const removeOption = (index: number) => {
    if (options.length > 1) {
      const newOptions = [...options];
      newOptions.splice(index, 1);
      setOptions(newOptions);
    }
  };

  const updateOption = (
    index: number,
    field: keyof CustomizationOption,
    value: string | number
  ) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], [field]: value };
    setOptions(newOptions);
  };

  return (
    <div className="border border-foundation-white rounded-xl p-4 flex flex-col gap-4 w-full transition-all duration-300 ease-in-out">
      {options.map((option, index) => (
        <div
          key={index}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 group relative transition-all duration-300 ease-in-out"
        >
          <div className="hover:bg-[#F8F8F8] rounded-md transition-colors">
            <label className="block text-sm text-[#969696] mb-2.5">
              Customization Option
            </label>
            <div>
              <input
                type="text"
                value={option.name}
                onChange={(e) => updateOption(index, "name", e.target.value)}
                className="w-full px-3 py-2 bg-[#FCFCFC] border border-[#B3B3B3] rounded-md outline-none"
                placeholder="Eg Color customization"
              />
            </div>
          </div>

          <div className="hover:bg-[#F8F8F8] rounded-md transition-colors">
            <label className="block text-sm text-[#969696] mb-2.5">Price</label>
            <div className="relative">
              <input
                type="number"
                value={option.price}
                onChange={(e) =>
                  updateOption(index, "price", parseFloat(e.target.value) || 0)
                }
                className="w-full px-3 py-2 bg-[#FCFCFC] border border-[#B3B3B3] rounded-md outline-none"
                placeholder="00"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div>
            {options.length > 1 && (
              <button
                onClick={() => removeOption(index)}
                className=" cursor-pointer hover:text-sunset-orange ml-auto block text-[#969696] opacity-0 group-hover:opacity-100 transition-opacity text-xl"
                aria-label="Remove option"
              >
                <FiTrash2 />
              </button>
            )}
          </div>
        </div>
      ))}

      <div
        onClick={addNewOption}
        className="flex justify-center items-center gap-2 border border-dashed border-[#FCFCFC] bg-[#FFF7EC] text-[#FCAB3F] px-10 py-3 cursor-pointer rounded-xl transition-all duration-300 ease-in-out"
      >
        <button className="cursor-pointer">Add More</button>
        <span>
          <TfiPlus />
        </span>
      </div>
    </div>
  );
}
