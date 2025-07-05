import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MultiStepTracker from "../../MultiStepTracker";
import Nav from "../../Nav";
import SubmitButton from "./SubmitButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HandleStep } from "./step";

const categories = [
  "Electronics",
  "Fashion",
  "Home Decore",
  "Beauty",
  "Sports",
  "Others",
];

const shippingOptions = [
  "Local within city state",
  "National within country",
  "International",
];

const returnPolicies = [
  "No returns accepted",
  "7-day return policy",
  "30-day return policy",
  "Exchange only",
];

// Zod schema
const schema = z.object({
  selectedCategories: z
    .array(z.string())
    .min(1, "Please select at least one product category"),
  selectedShipping: z
    .array(z.string())
    .min(1, "Please select at least one shipping option"),
  returnPolicy: z.string().nonempty("Please select a return policy"),
});

type FormValues = z.infer<typeof schema>;

const ProductShippingForm = ({ step, setStep }: HandleStep) => {
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      selectedCategories: [],
      selectedShipping: [],
      returnPolicy: "",
    },
  });

  const selectedCategories = watch("selectedCategories");
  const selectedShipping = watch("selectedShipping");

  const toggle = (
    field: "selectedCategories" | "selectedShipping",
    value: string
  ) => {
    const current = watch(field);
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setValue(field, updated, { shouldValidate: true });
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    setStep(4);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-6">
      <div className="w-full max-w-6xl mb-4">
        <Nav />
      </div>

      <div className="pb-10">
        <MultiStepTracker
          totalSteps={5}
          currentStep={step}
          title="Product & Shipping"
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-xl"
      >
        {/* Product Category */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Product Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <label
                key={category}
                className={`flex items-center gap-1 border rounded-xl p-4 cursor-pointer transition text-black ${
                  selectedCategories.includes(category)
                    ? "border-red-500"
                    : "border-[#B3B3B3]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggle("selectedCategories", category)}
                  className="mr-3 w-5 h-5 text-red-500 focus:ring-red-400"
                />
                {category}
              </label>
            ))}
          </div>
          {errors.selectedCategories && (
            <p className="text-red-500 text-sm mt-2">
              {errors.selectedCategories.message}
            </p>
          )}
        </div>

        {/* Shipping Options */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Shipping Range</h2>
          <div className="space-y-4">
            {shippingOptions.map((option) => (
              <label
                key={option}
                className={`flex items-center border rounded-xl p-4 cursor-pointer transition text-black ${
                  selectedShipping.includes(option)
                    ? "border-red-500"
                    : "border-[#B3B3B3]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedShipping.includes(option)}
                  onChange={() => toggle("selectedShipping", option)}
                  className="mr-3 w-5 h-5 text-red-500 focus:ring-red-400"
                />
                {option}
              </label>
            ))}
          </div>
          {errors.selectedShipping && (
            <p className="text-red-500 text-sm mt-2">
              {errors.selectedShipping.message}
            </p>
          )}
        </div>

        {/* Return Policy */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Return Policy</h2>
          <Controller
            name="returnPolicy"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full rounded-xl border border-gray-300 bg-white text-black py-6">
                  <SelectValue placeholder="Select return policy" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {returnPolicies.map((policy) => (
                    <SelectItem key={policy} value={policy}>
                      {policy}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.returnPolicy && (
            <p className="text-red-500 text-sm mt-2">
              {errors.returnPolicy.message}
            </p>
          )}
        </div>

        <SubmitButton />
      </form>
    </div>
  );
};

export default ProductShippingForm;
