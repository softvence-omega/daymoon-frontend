import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MultiStepTracker from "../../MultiStepTracker";
import Nav from "../../Nav";
import upload from "../../../../assets/form/upload.png";
import SubmitButton from "./SubmitButton";
import { Plus } from "lucide-react";
import { HandleStep } from "./step";

import facebook from "../../../../assets/form/fb.png";
import instagram from "../../../../assets/form/instagram.png";
import linkedin from "../../../../assets/form/linked.png";

const styles = {
  input:
    "w-full px-4 py-3 rounded-[20px] border border-[#B3B3B3] bg-white focus:outline-none focus:border-blue-400 focus:shadow-2xl",
};

const imageValidation = z
  .custom<File>()
  .refine((file) => file instanceof File && file.size > 0, {
    message: "Image is required",
  });

const schema = z.object({
  logo: imageValidation,
  banner: imageValidation,
  description: z.string().min(10, "Description must be at least 10 characters"),
  socialLinks: z
    .array(
      z.object({
        platform: z.string(),
        url: z
          .string()
          .optional()
          .refine(
            (val) =>
              !val || /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(val),
            {
              message: "Enter a valid URL",
            }
          ),
      })
    )
    .optional(),
});

type FormValues = z.infer<typeof schema>;

const initialSocials = [
  {
    platform: "Facebook",
    url: "",
    icon: facebook,
    placeholder: "Facebook URL",
  },
  {
    platform: "Instagram",
    url: "",
    icon: instagram,
    placeholder: "Instagram URL",
  },
  {
    platform: "Linkedin",
    url: "",
    icon: linkedin,
    placeholder: "LinkedIn URL",
  },
];

const StoreBranding: React.FC<HandleStep> = ({ step, setStep }) => {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      logo: undefined,
      banner: undefined,
      description: "Welcome to our amazing store!",
      socialLinks: initialSocials.map((s) => ({
        platform: s.platform,
        url: "https://www.facebook.com/",
      })),
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "socialLinks",
  });

  const onLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("logo", file, { shouldValidate: true });
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const onBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("banner", file, { shouldValidate: true });
      setBannerPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    setStep(3);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-6">
      <div className="w-full max-w-6xl mb-4">
        <Nav />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl flex flex-col gap-6"
      >
        <div className="pb-10">
          <MultiStepTracker
            totalSteps={5}
            currentStep={step}
            title=" Store Branding"
          />
        </div>

        {/* Logo Upload */}
        <div>
          <label className="block text-jet-black font-medium mb-2">
            Store Logo
          </label>
          <div className="border border-dotted rounded-md border-gray-[#B3B3B3] p-6 flex flex-col items-center gap-4">
            <img
              src={logoPreview || upload}
              alt="Logo preview"
              className="w-24 h-24 object-contain rounded"
            />
            <label htmlFor="logo1">
              <p className="text-sm rounded-md border border-[#969696] px-4 py-2">
                Choose logo
              </p>
              <input
                id="logo1"
                type="file"
                accept="image/*"
                onChange={onLogoChange}
                className="cursor-pointer"
                hidden
              />
            </label>
            <p className="text-[#696F79] text-sm">
              Recommended Size: 1024x1024px
            </p>
            {errors.logo && (
              <p className="text-red-500 text-sm">{errors.logo.message}</p>
            )}
          </div>
        </div>

        {/* Banner Upload */}
        <div>
          <label className="block text-jet-black font-medium mb-2">
            Store Banner
          </label>
          <div className="border border-dotted rounded-md border-gray-[#B3B3B3] p-6 flex flex-col items-center gap-4">
            <img
              src={bannerPreview || upload}
              alt="Banner preview"
              className="w-24 h-24 object-contain rounded"
            />
            <label htmlFor="banner">
              <p className="text-sm rounded-md border border-[#969696] px-4 py-2">
                Choose banner
              </p>
              <input
                id="banner"
                type="file"
                accept="image/*"
                onChange={onBannerChange}
                className="cursor-pointer"
                hidden
              />
            </label>
            <p className="text-[#696F79] text-sm">
              Recommended Size: 1024x1024px
            </p>
            {errors.banner && (
              <p className="text-red-500 text-sm">{errors.banner.message}</p>
            )}
          </div>
        </div>

        {/* Store Description */}
        <div>
          <label className="block text-jet-black font-medium mb-2">
            Store Description
          </label>
          <textarea
            {...register("description")}
            placeholder="Tell us about your store"
            className="w-full border border-dotted rounded-md border-gray-[#B3B3B3] p-4 resize-none outline-none text-black"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Social Media Links */}
        <div className="flex-col flex gap-6">
          <label className="block text-jet-black font-medium mb-4 text-center">
            Social Media Links (Optional)
          </label>

          <div className="flex flex-col gap-4">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-4 items-center">
                <img
                  className="w-12 h-12"
                  src={initialSocials[index]?.icon || facebook}
                  alt={field.platform}
                />
                <div className="w-full">
                  <input
                    type="text"
                    {...register(`socialLinks.${index}.url` as const)}
                    placeholder={
                      initialSocials[index]?.placeholder || "Social URL"
                    }
                    className={styles.input}
                  />
                  {errors.socialLinks?.[index]?.url && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.socialLinks[index]?.url?.message}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                append({
                  platform: "Other",
                  url: "",
                })
              }
              className="w-full flex items-center justify-center cursor-pointer gap-2 border border-catalien-blue rounded-[20px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-catalien-blue"
            >
              <Plus className="w-4 h-4 text-current" aria-hidden="true" />
              <span>Add Another Social Media</span>
            </button>
          </div>
        </div>

        <SubmitButton />
      </form>
    </div>
  );
};

export default StoreBranding;
