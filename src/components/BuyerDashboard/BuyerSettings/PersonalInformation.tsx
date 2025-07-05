import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ImPencil } from "react-icons/im";
import {
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import PageHeader from "@//components/BuyerDashboard/BuyerSettings/PageHeader";

const countryOptions = [
  { value: "usa", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
];

const languageOptions = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
];

const PersonalInformation = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    country: "",
    language: "",
    role: "Buyer", // Added role
    id: "ID: 123456", // Added ID
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Send formData to the backend
    console.log("Submitting data:", formData);
    // Example: Use fetch or axios to send data
    // fetch('/api/personal-information', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
  };

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
          <div className="space-y-4 flex items-center flex-col justify-center lg:col-span-4">
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
          <div className="space-y-6 lg:col-span-8">
            <div className="hidden md:block">
              <PageHeader
              title="Personal Details"
              onEdit={handleSubmit}
              buttonTitle="Edit"
              icon={<ImPencil />}
            />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phone Number - Mobile */}
              <div className="flex items-center justify-between bg-white border border-[#E5E5E5] rounded-xl p-3 h-auto md:hidden">
                <div className="flex-1">
                  <Label
                    htmlFor="phone-mobile"
                    className="text-[#666666] text-sm font-normal block mb-1"
                  >
                    Phone
                  </Label>
                  <Input
                    id="phone-mobile"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="border-none bg-transparent shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 text-[#1A1A1A] font-medium text-base"
                  />
                </div>
                <Button

                  className="text-[#F04436] bg-transparent shadow-none p-0 w-6 h-6"
                >
                  <ImPencil className="w-full " />
                </Button>
              </div>
              {/* First Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-[#666666] text-sm font-normal"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto"
                />
              </div>
              {/* Last Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-[#666666] text-sm font-normal"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto"
                />
              </div>
              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-[#666666] text-sm font-normal"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto"
                />
              </div>
              {/* Phone Number */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-[#666666] text-sm font-normal"
                >
                  Phone
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto"
                />
              </div>
              {/* Country Select */}
              <div className="space-y-2">
                <Label
                  htmlFor="country"
                  className="text-[#666666] text-sm font-normal"
                >
                  Country
                </Label>
                <Select
                  onValueChange={(value) => handleInputChange("country", value)}
                >
                  <SelectTrigger
                    id="country"
                    className="w-full border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg data-[size=default]:h-auto"
                  >
                    <SelectValue
                      placeholder={formData.country || "Select Country"}
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {countryOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Language Select */}
              <div className="space-y-2">
                <Label
                  htmlFor="language"
                  className="text-[#666666] text-sm font-normal"
                >
                  Language
                </Label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("language", value)
                  }
                >
                  <SelectTrigger
                    id="language"
                    className="w-full border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto data-[size=default]:h-auto [&_svg:not([class*='text-'])]:text-[#F04436] [&_svg]:text-[##F04436]"
                  >
                    <SelectValue
                      placeholder={formData.language || "Select Language"}
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {languageOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Form Section */}
        <div className="lg:hidden">

          <div className="grid grid-cols-1 gap-4 mt-6">
            {/* First Name */}
            <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
              <div className="flex-1">
                <Label
                  htmlFor="firstName-mobile"
                  className="text-[#666666] text-sm font-normal block mb-1"
                >
                  First Name
                </Label>
                <Input
                  id="firstName-mobile"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="border-none bg-transparent shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 text-[#1A1A1A] font-medium text-base"
                />
              </div>
              <Button
                size="sm"
                className="text-[#F04436] bg-transparent shadow-none p-0 w-6 h-6"
              >
                <ImPencil className="w-4 h-4" />
              </Button>
            </div>

            {/* Last Name */}
            <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
              <div className="flex-1">
                <Label
                  htmlFor="lastName-mobile"
                  className="text-[#666666] text-sm font-normal block mb-1"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName-mobile"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="border-none bg-transparent shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 text-[#1A1A1A] font-medium text-base"
                />
              </div>
              <Button
                size="sm"
                className="text-[#F04436] bg-transparent shadow-none p-0 w-6 h-6"
              >
                <ImPencil className="w-4 h-4" />
              </Button>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
              <div className="flex-1">
                <Label
                  htmlFor="email-mobile"
                  className="text-[#666666] text-sm font-normal block mb-1"
                >
                  Email
                </Label>
                <Input
                  id="email-mobile"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-none bg-transparent shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 text-[#1A1A1A] font-medium text-base"
                />
              </div>
              <Button
                size="sm"
                className="text-[#F04436] bg-transparent shadow-none p-0 w-6 h-6"
              >
                <ImPencil className="w-4 h-4" />
              </Button>
            </div>

            {/* Phone Number */}
            <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
              <div className="flex-1">
                <Label
                  htmlFor="phone-mobile-form"
                  className="text-[#666666] text-sm font-normal block mb-1"
                >
                  Phone
                </Label>
                <Input
                  id="phone-mobile-form"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="border-none bg-transparent shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 text-[#1A1A1A] font-medium text-base"
                />
              </div>
              <Button
                size="sm"
                className="text-[#F04436] bg-transparent shadow-none p-0 w-6 h-6"
              >
                <ImPencil className="w-4 h-4" />
              </Button>
            </div>

            {/* Country Select */}
            <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
              <div className="flex-1">
                <Label
                  htmlFor="country-mobile"
                  className="text-[#666666] text-sm font-normal block mb-1"
                >
                  Country
                </Label>
                <Select
                  onValueChange={(value) => handleInputChange("country", value)}
                >
                  <SelectTrigger
                    id="country-mobile"
                    className="w-full border-none bg-transparent shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                  >
                    <SelectValue
                      placeholder={formData.country || "Select Country"}
                      className="text-[#1A1A1A] font-medium text-base"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {countryOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Language Select */}
            <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
              <div className="flex-1">
                <Label
                  htmlFor="language-mobile"
                  className="text-[#666666] text-sm font-normal block mb-1"
                >
                  Language
                </Label>
                <Select
                  onValueChange={(value) => handleInputChange("language", value)}
                >
                  <SelectTrigger
                    id="language-mobile"
                    className="w-full border-none bg-transparent shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                  >
                    <SelectValue
                      placeholder={formData.language || "Select Language"}
                      className="text-[#1A1A1A] font-medium text-base"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {languageOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PersonalInformation;
