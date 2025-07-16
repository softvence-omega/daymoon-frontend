import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductFormData, ProductSchema } from "./SellerData";
import CommonButton from "@/common/CommonButton";

interface Props {
  defaultValues: ProductFormData;
  onSubmit: (data: ProductFormData) => void;
  onCancel: () => void;
}

const SellerOrderUpdateForm: React.FC<Props> = ({
  defaultValues,
  onCancel,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.keys(defaultValues).map((field) => {
          return (
            <div key={field}>
              <label className="block font-medium">{field}</label>
              <input
                {...register(field as keyof ProductFormData, {
                  valueAsNumber:
                    field === "id" ||
                    field === "stock" ||
                    field === "views" ||
                    field === "inquiries",
                })}
                readOnly={field === "id"}
                className="w-full px-4 py-3 rounded-[20px] border border-[#B3B3B3] bg-white text-gray-900 
      focus:outline-none focus:ring-1 focus:ring-blue-400 
      focus:shadow-[0_4px_10px_3px_rgba(21,101,216,0.25)]"
              />
              {errors[field as keyof ProductFormData] && (
                <span className="text-red-600">
                  {errors[field as keyof typeof errors]?.message}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex gap-6 items-center py-6">
        <CommonButton
          type="button"
          onClick={onCancel}
          className=" bg-gray-300 text-gray-800  hover:bg-gray-400"
        >
          Cancel
        </CommonButton>
        <CommonButton type="submit" className="!bg-green-500 text-white ">
          Update
        </CommonButton>
      </div>
    </form>
  );
};

export default SellerOrderUpdateForm;
