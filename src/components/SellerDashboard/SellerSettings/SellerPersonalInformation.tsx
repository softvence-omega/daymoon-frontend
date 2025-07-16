import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ImPencil } from "react-icons/im";
import {
  Card,
  CardContent,
  //   CardDescription,
  //   CardHeader,
  //   CardTitle,
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
import PageHeader from "@/components/BuyerDashboard/BuyerSettings/PageHeader";

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

const SellerPersonalInformation = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    country: "",
    language: "",
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
    <Card className="mx-auto mt-8 p-10 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[20px] ">
      <CardContent className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side */}
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
                className="text-sm px-10 py-4 border-[#F04436] text-[#F04436] rounded-[20px] h-auto w-auto cursor-pointer"
              >
                Remove
              </Button>
              <Button
                variant="outline"
                className="text-sm px-10 py-4 border-[#F04436] text-white bg-[#F04436] rounded-[20px] h-auto w-auto cursor-pointer"
              >
                Upload
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6 lg:col-span-8">
          <PageHeader
            title="Personal Details"
            onButtonClick={handleSubmit}
            buttonTitle="Edit"
            icon={<ImPencil />}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                onChange={(e) => handleInputChange("firstName", e.target.value)}
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
                onChange={(e) => handleInputChange("lastName", e.target.value)}
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
                onValueChange={(value) => handleInputChange("language", value)}
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
      </CardContent>
    </Card>
  );
};

export default SellerPersonalInformation;
