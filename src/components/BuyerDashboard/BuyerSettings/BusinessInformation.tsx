import { useState } from "react";
import {
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImPencil } from "react-icons/im";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import PageHeader from '@//components/BuyerDashboard/BuyerSettings/PageHeader';

const BusinessInformation = () => {
  const [formData, setFormData] = useState({
    companyName: "John",
    businessType: "",
    registrationNumber: "123456789",
    vatId: "VAT12345",
    industryType: "",
    companySize: "small",
    address: "123 Business Street, Suite 100, San Francisco, CA 94107, United States",
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
    // fetch('/api/business-information', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
  };

  const industryOptions = [
    { value: "electronics", label: "Electronics" },
    { value: "healthcare", label: "Beauty" },
    { value: "education", label: "Education" },
  ];

  const businessTypeOptions = [
    { value: "wholesale", label: "Wholesale" },
    { value: "partnership", label: "Partnership" },
    { value: "corporation", label: "Corporation" },
    { value: "llc", label: "LLC" },
  ];

  const companySizeOptions = [
    { value: "small", label: "Small (1-50 employees)" },
    { value: "medium", label: "Medium (51-250 employees)" },
    { value: "large", label: "Large (250+ employees)" },
  ];

  return (
    <Card className="mx-auto mt-8 p-10 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[20px] ">
      <div className="space-y-6 lg:col-span-8">
        <PageHeader 
          title="Business Details"
          onEdit={handleSubmit}
          buttonTitle="Edit"
          icon={<ImPencil />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Company Name */}
          <div className="space-y-2">
            <Label
              htmlFor="companyName"
              className="text-[#666666] text-sm font-normal"
            >
              Company Name
            </Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              className="border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto"
            />
          </div>
          {/* Business Type */}
          <div className="space-y-2">
            <Label
              htmlFor="businessType"
              className="text-[#666666] text-sm font-normal"
            >
              Business Type
            </Label>
            <Select
              onValueChange={(value) => handleInputChange("businessType", value)}
            >
              <SelectTrigger
                id="businessType"
                className="w-full border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto data-[size=default]:h-auto [&_svg:not([class*='text-'])]:text-[#F04436] [&_svg]:text-[##F04436]"
              >
                <SelectValue
                  placeholder={formData.businessType || "Select Business Type"}
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {businessTypeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Registration Number */}
          <div className="space-y-2">
            <Label
              htmlFor="registrationNumber"
              className="text-[#666666] text-sm font-normal"
            >
              Business Registration Number
            </Label>
            <Input
              id="registrationNumber"
              value={formData.registrationNumber}
              onChange={(e) =>
                handleInputChange("registrationNumber", e.target.value)
              }
              className="border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto"
            />
          </div>
          {/* VAT/TAX ID */}
          <div className="space-y-2">
            <Label
              htmlFor="vatId"
              className="text-[#666666] text-sm font-normal"
            >
              VAT/TAX ID
            </Label>
            <Input
              id="vatId"
              value={formData.vatId}
              onChange={(e) => handleInputChange("vatId", e.target.value)}
              className="border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto"
            />
          </div>
          {/* Industry Type */}
          <div className="space-y-2">
            <Label
              htmlFor="industryType"
              className="text-[#666666] text-sm font-normal"
            >
              Industry Type
            </Label>
            <Select
              onValueChange={(value) => handleInputChange("industryType", value)}
            >
              <SelectTrigger
                id="industryType"
                className="w-full border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto data-[size=default]:h-auto [&_svg:not([class*='text-'])]:text-[#F04436] [&_svg]:text-[##F04436]"
              >
                <SelectValue
                  placeholder={formData.industryType || "Select Industry Type"}
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {industryOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Company Size */}
          <div className="space-y-2">
            <Label
              htmlFor="companySize"
              className="text-[#666666] text-sm font-normal"
            >
              Company Size
            </Label>
            <Select
              onValueChange={(value) => handleInputChange("companySize", value)}
            >
              <SelectTrigger
                id="companySize"
                className="w-full border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto data-[size=default]:h-auto [&_svg:not([class*='text-'])]:text-[#F04436] [&_svg]:text-[##F04436]"
              >
                <SelectValue
                  placeholder={formData.companySize || "Select Company Size"}
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {companySizeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Address */}
          <div className="space-y-2 lg:col-span-2">
            <Label
              htmlFor="address"
              className="text-[#666666] text-sm font-normal"
            >
              Address
            </Label>
            <Textarea
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="w-full border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto"
              placeholder="Enter your address"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BusinessInformation;