import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ImPencil } from "react-icons/im";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { TbBriefcase2 } from "react-icons/tb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import PageHeader from "@//components/BuyerDashboard/BuyerSettings/PageHeader";

const BusinessInformation = () => {
  const [formData, setFormData] = useState({
    companyName: "John",
    businessType: "",
    registrationNumber: "123456789",
    vatId: "VAT12345",
    industryType: "",
    companySize: "small",
    address:
      "123 Business Street, Suite 100, San Francisco, CA 94107, United States",
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
    <Card className="mx-auto mt-8 md:p-10 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[20px] py-0 md:py-6 shadow-none ">
      <div className="space-y-6 lg:col-span-8">
       <div className="hidden md:block">
         <PageHeader
          title="Business Details"
          onEdit={handleSubmit}
          buttonTitle="Edit"
          icon={<ImPencil />}
        />
       </div>

        {/* Desktop Form */}
        <div className="hidden md:block">
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
                onChange={(e) =>
                  handleInputChange("companyName", e.target.value)
                }
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
                onValueChange={(value) =>
                  handleInputChange("businessType", value)
                }
              >
                <SelectTrigger
                  id="businessType"
                  className="w-full border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto data-[size=default]:h-auto [&_svg:not([class*='text-'])]:text-[#F04436] [&_svg]:text-[##F04436]"
                >
                  <SelectValue
                    placeholder={
                      formData.businessType || "Select Business Type"
                    }
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
                onValueChange={(value) =>
                  handleInputChange("industryType", value)
                }
              >
                <SelectTrigger
                  id="industryType"
                  className="w-full border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto data-[size=default]:h-auto [&_svg:not([class*='text-'])]:text-[#F04436] [&_svg]:text-[##F04436]"
                >
                  <SelectValue
                    placeholder={
                      formData.industryType || "Select Industry Type"
                    }
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
                onValueChange={(value) =>
                  handleInputChange("companySize", value)
                }
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
            <div className="space-y-2 md:col-span-2">
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

        {/* Mobile Drawer */}
        <div className="md:hidden ">
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                className="w-full border border-[#E5E5E5] bg-white rounded-xl text-base p-3 font-medium flex justify-between items-center shadow-none h-auto"
              >
                <div className="flex items-center text-[#484848]">
                  <TbBriefcase2 className="inline-block mr-2 w-6 h-6 " />
                  Business Information
                </div>
                <IoIosArrowForward  className="text-  [#F04436]"/>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-white rounded-xl">
              <DrawerHeader>
                <div className="flex justify-between items-center">
                  <DrawerClose asChild>
                    <Button
                      className="text-sm text-[#F04436] rounded-full w-8 h-8"
                      style={{ boxShadow: "5px 4px 19.4px 0px #0000001A" }}
                    >
                      <IoIosArrowBack />
                    </Button>
                  </DrawerClose>

                  <h1 className="font-semibold text-xl text-[#1A1A1A] absolute left-1/2 transform -translate-x-1/2">
                    Business Details
                  </h1>

                  <div className="w-8 h-8"></div>
                </div>
              </DrawerHeader>

              <div className="px-4 pb-4 space-y-4 max-h-[60vh] overflow-y-auto">
                {/* Company Name */}
                <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
                  <div className="flex-1">
                    <Label
                      htmlFor="companyName-mobile"
                      className="text-[#666666] text-sm font-normal block mb-1"
                    >
                      Company Name
                    </Label>
                    <Input
                      id="companyName-mobile"
                      value={formData.companyName}
                      onChange={(e) =>
                        handleInputChange("companyName", e.target.value)
                      }
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

                {/* Business Type */}
                <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
                  <div className="flex-1">
                    <Label
                      htmlFor="businessType-mobile"
                      className="text-[#666666] text-sm font-normal block mb-1"
                    >
                      Business Type
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("businessType", value)
                      }
                    >
                      <SelectTrigger
                        id="businessType-mobile"
                        className="w-full border-none bg-transparent shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                      >
                        <SelectValue
                          placeholder={
                            formData.businessType || "Select Business Type"
                          }
                          className="text-[#1A1A1A] font-medium text-base placeholder:text-[#1A1A1A] placeholder:font-medium placeholder:text-base"
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
                </div>

                {/* Registration Number */}
                <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
                  <div className="flex-1">
                    <Label
                      htmlFor="registrationNumber-mobile"
                      className="text-[#666666] text-sm font-normal block mb-1"
                    >
                      Business Registration Number
                    </Label>
                    <Input
                      id="registrationNumber-mobile"
                      value={formData.registrationNumber}
                      onChange={(e) =>
                        handleInputChange("registrationNumber", e.target.value)
                      }
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

                {/* VAT/TAX ID */}
                <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
                  <div className="flex-1">
                    <Label
                      htmlFor="vatId-mobile"
                      className="text-[#666666] text-sm font-normal block mb-1"
                    >
                      VAT/TAX ID
                    </Label>
                    <Input
                      id="vatId-mobile"
                      value={formData.vatId}
                      onChange={(e) =>
                        handleInputChange("vatId", e.target.value)
                      }
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

                {/* Industry Type */}
                <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
                  <div className="flex-1">
                    <Label
                      htmlFor="industryType-mobile"
                      className="text-[#666666] text-sm font-normal block mb-1"
                    >
                      Industry Type
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("industryType", value)
                      }
                    >
                      <SelectTrigger
                        id="industryType-mobile"
                        className="w-full border-none bg-transparent shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                      >
                        <SelectValue
                          placeholder={
                            formData.industryType || "Select Industry Type"
                          }
                          className="text-[#1A1A1A] font-medium text-base"
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
                </div>

                {/* Company Size */}
                <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
                  <div className="flex-1">
                    <Label
                      htmlFor="companySize-mobile"
                      className="text-[#666666] text-sm font-normal block mb-1"
                    >
                      Company Size
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("companySize", value)
                      }
                    >
                      <SelectTrigger
                        id="companySize-mobile"
                        className="w-full border-none bg-transparent shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                      >
                        <SelectValue
                          placeholder={
                            formData.companySize || "Select Company Size"
                          }
                          className="text-[#1A1A1A] font-medium text-base"
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
                </div>

                {/* Address */}
                <div className="flex items-start justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto">
                  <div className="flex-1">
                    <Label
                      htmlFor="address-mobile"
                      className="text-[#666666] text-sm font-normal block mb-1"
                    >
                      Address
                    </Label>
                    <Textarea
                      id="address-mobile"
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      className="w-full border-none bg-transparent shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 text-[#1A1A1A] font-medium text-base resize-none"
                      placeholder="Enter your address"
                      rows={2}
                    />
                  </div>
                  <Button
                    size="sm"
                    className="text-[#F04436] bg-transparent shadow-none p-0 w-6 h-6 mt-6"
                  >
                    <ImPencil className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <DrawerFooter>
                <Button
                  onClick={handleSubmit}
                  className="bg-[#F04436] text-white rounded-xl py-3 px-4 font-medium"
                >
                  Save Changes
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </Card>
  );
};

export default BusinessInformation;
