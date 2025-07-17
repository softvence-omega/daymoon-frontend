import PageHeader from "@/components/BuyerDashboard/BuyerSettings/PageHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCallback, useState } from "react";
import { ImPencil } from "react-icons/im";

// Types
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  language: string;
  role: string;
  id: string;
}

interface SelectOption {
  value: string;
  label: string;
}

// Constants
const COUNTRY_OPTIONS: SelectOption[] = [
  { value: "usa", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
];

const LANGUAGE_OPTIONS: SelectOption[] = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
];

const PersonalInformation = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    country: "",
    language: "",
    role: "Buyer",
    id: "ID: 123456",
  });

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    console.log("Submitting data:", formData);
  }, [formData]);

  // Reusable components
  const FormField = ({
    id,
    label,
    value,
    onChange,
    type = "text",
    className = "",
  }: {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    className?: string;
  }) => (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={id} className="text-[#666666] text-sm font-normal">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto"
      />
    </div>
  );

  const SelectField = ({
    id,
    label,
    value,
    onChange,
    options,
    placeholder,
    className = "",
  }: {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder: string;
    className?: string;
  }) => (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={id} className="text-[#666666] text-sm font-normal">
        {label}
      </Label>
      <Select onValueChange={onChange}>
        <SelectTrigger
          id={id}
          className="w-full border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto data-[size=default]:h-auto"
        >
          <SelectValue placeholder={value || placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white border-none">
          {options.map((option) => (
            <SelectItem
              className="hover:bg-gray-100 hover:text-sunset-orange   cursor-pointer "
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  const MobileFormField = ({
    id,
    label,
    value,
    onChange,
    type = "text",
    showEdit = true,
  }: {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    showEdit?: boolean;
  }) => (
    <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
      <div className="flex-1">
        <Label
          htmlFor={id}
          className="text-[#666666] text-sm font-normal block mb-1"
        >
          {label}
        </Label>
        <Input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border-none bg-transparent shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 text-[#1A1A1A] font-medium text-base"
        />
      </div>
      {showEdit && (
        <Button
          size="sm"
          className="text-[#F04436] bg-transparent shadow-none p-0 w-6 h-6"
        >
          <ImPencil className="w-4 h-4" />
        </Button>
      )}
    </div>
  );

  const MobileSelectField = ({
    id,
    label,
    value,
    onChange,
    options,
    placeholder,
  }: {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder: string;
  }) => (
    <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
      <div className="flex-1">
        <Label
          htmlFor={id}
          className="text-[#666666] text-sm font-normal block mb-1"
        >
          {label}
        </Label>
        <Select onValueChange={onChange}>
          <SelectTrigger
            id={id}
            className="w-full border-none bg-transparent shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <SelectValue
              placeholder={value || placeholder}
              className="text-[#1A1A1A] font-medium text-base"
            />
          </SelectTrigger>
          <SelectContent className="bg-white border-none">
            {options.map((option) => (
              <SelectItem
                className="hover:bg-gray-100 hover:text-sunset-orange   cursor-pointer "
                key={option.value}
                value={option.value}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <Card className="mx-auto mt-4 md:mt-8 p-4 md:p-10 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[20px] ">
      <div className="space-y-6">
        {/* Mobile Profile Section */}
        <div className="flex items-center gap-4 lg:hidden">
          <div className="relative">
            <Avatar className="w-18 h-18 rounded-full bg-[#D9D9D9] border border-[#F7813B]">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button
              size="sm"
              className="absolute -bottom-1 -left-1 rounded-full bg-white text-[#F04436] p-2"
            >
              <ImPencil className="w-3 h-3" />
            </Button>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-medium text-[#1A1A1A]">
              {formData.firstName} {formData.lastName}
            </h3>
            <p className="text-xs text-[#6A6A6A]">{formData.email}</p>
            <div className="flex gap-2 items-center mt-1.5">
              <Button
                variant="outline"
                className="text-sm text-[#F7813B] bg-white border-[#F7813B] font-medium rounded-xl px-2 py-1 h-auto"
              >
                {formData.role}
              </Button>
              <p className="text-xs text-[#6A6A6A]">{formData.id}</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6">
          {/* Left Side - Desktop */}
          <div className="space-y-4 flex items-center flex-col justify-center lg:col-span-5 xl:col-span-4">
            <div className="flex flex-col items-center">
              <Avatar className="w-36 h-36 rounded-full bg-[#D9D9D9]">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <p className="text-base text-[#666666] mt-4 mb-5 max-w-xs text-center">
                Upload a profile picture. JPG, GIF or PNG. 1MB max.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="text-sm px-10 py-4 border-[#F04436] text-[#F04436] rounded-[20px] h-auto w-auto"
                >
                  Remove
                </Button>
                <Button
                  variant="outline"
                  className="text-sm px-10 py-4 border-[#F04436] text-white bg-[#F04436] rounded-[20px] h-auto w-auto"
                >
                  Upload
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Desktop */}
          <div className="space-y-6 lg:col-span-7 xl:col-span-8">
            <div className="hidden md:block">
              <PageHeader
                title="Personal Details"
                onButtonClick={handleSubmit}
                buttonTitle="Edit"
                icon={<ImPencil />}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                id="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={(value) => handleInputChange("firstName", value)}
              />
              <FormField
                id="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={(value) => handleInputChange("lastName", value)}
              />
              <FormField
                id="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={(value) => handleInputChange("email", value)}
              />
              <FormField
                id="phone"
                label="Phone"
                value={formData.phone}
                onChange={(value) => handleInputChange("phone", value)}
              />
              <SelectField
                id="country"
                label="Country"
                value={formData.country}
                onChange={(value) => handleInputChange("country", value)}
                options={COUNTRY_OPTIONS}
                placeholder="Select Country"
              />
              <SelectField
                id="language"
                label="Language"
                value={formData.language}
                onChange={(value) => handleInputChange("language", value)}
                options={LANGUAGE_OPTIONS}
                placeholder="Select Language"
                className="[&_svg:not([class*='text-'])]:text-[#F04436]"
              />
            </div>
          </div>
        </div>

        {/* Mobile Form Section */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 gap-4 mt-6">
            <MobileFormField
              id="firstName-mobile"
              label="First Name"
              value={formData.firstName}
              onChange={(value) => handleInputChange("firstName", value)}
            />
            <MobileFormField
              id="lastName-mobile"
              label="Last Name"
              value={formData.lastName}
              onChange={(value) => handleInputChange("lastName", value)}
            />
            <MobileFormField
              id="email-mobile"
              label="Email"
              type="email"
              value={formData.email}
              onChange={(value) => handleInputChange("email", value)}
            />
            <MobileFormField
              id="phone-mobile-form"
              label="Phone"
              value={formData.phone}
              onChange={(value) => handleInputChange("phone", value)}
            />
            <MobileSelectField
              id="country-mobile"
              label="Country"
              value={formData.country}
              onChange={(value) => handleInputChange("country", value)}
              options={COUNTRY_OPTIONS}
              placeholder="Select Country"
            />
            <MobileSelectField
              id="language-mobile"
              label="Language"
              value={formData.language}
              onChange={(value) => handleInputChange("language", value)}
              options={LANGUAGE_OPTIONS}
              placeholder="Select Language"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PersonalInformation;
