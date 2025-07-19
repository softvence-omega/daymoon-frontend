import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";

import RedButton from "@/components/ReUseable/RedButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";

const currencyOptions = [
  { value: "usd", label: "USD ($)" },
  { value: "eur", label: "Euro (€)" },
  { value: "gbp", label: "GBP (£)" },
];

const languageOptions = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
];

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorEnabled: false,
    emailPreferences: {
      promotions: false,
      updates: false,
      newsletters: false,
    },
    language: "",
    currency: "",
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEmailPreferenceChange = (preference: string, value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      emailPreferences: {
        ...prev.emailPreferences,
        [preference]: value,
      },
    }));
  };

  const handleSubmit = () => {
    console.log("Submitting form data:", formData);
    // Example: Send formData to the backend
    // fetch('/api/account-settings', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
  };

  return (
    <Card className="mx-auto mt-4 md:mt-8 p-4 md:p-10 bg-[#FFFFFF] border border-[#E5E5E5]  rounded-[20px]">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#1A1A1A] mb-4 md:mb-6">
        Account Settings
      </h1>

      {/* Change Password Section */}
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-lg md:text-xl font-medium">Change Password</h2>

        {/* Desktop View */}
        <div className="hidden md:block space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="currentPassword"
              className="text-[#666666] text-sm md:text-base font-normal"
            >
              Current Password
            </Label>
            <Input
              id="currentPassword"
              type="password"
              placeholder="*********"
              value={formData.currentPassword}
              onChange={(e) =>
                handleInputChange("currentPassword", e.target.value)
              }
              className="border border-[#B3B3B3] rounded-xl px-4 py-3 md:py-4 text-sm md:text-base lg:text-lg h-auto w-full sm:w-1/2"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="newPassword"
              className="text-[#666666] text-sm md:text-base font-normal"
            >
              New Password
            </Label>
            <Input
              id="newPassword"
              type="password"
              placeholder="*********"
              value={formData.newPassword}
              onChange={(e) => handleInputChange("newPassword", e.target.value)}
              className="border border-[#B3B3B3] rounded-xl px-4 py-3 md:py-4 text-sm md:text-base lg:text-lg h-auto w-full sm:w-1/2"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="confirmPassword"
              className="text-[#666666] text-sm md:text-base font-normal"
            >
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="*********"
              value={formData.confirmPassword}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
              className="border border-[#B3B3B3] rounded-xl px-4 py-3 md:py-4 text-sm md:text-base lg:text-lg h-auto w-full sm:w-1/2"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.8 }}
            className="text-sm md:text-base mt-10 cursor-pointer lg:text-lg px-6 md:px-8 lg:px-10 py-3  border-[#192D4E] text-white bg-[#192D4E] rounded-[20px] font-medium h-auto "
            onClick={handleSubmit}
          >
            Update Password
          </motion.button>
        </div>

        {/* Mobile Drawer */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3 h-auto cursor-pointer">
                <div className="flex items-center gap-3">
                  <RiLockPasswordLine className="w-5 h-5 text-[#F04436]" />
                  <div className="flex-1">
                    <Label className="text-[#666666] text-sm font-normal block mb-1">
                      Password
                    </Label>
                    <div className="text-[#1A1A1A] font-medium text-base">
                      ••••••••••••
                    </div>
                  </div>
                </div>
                <IoIosArrowForward className="w-5 h-5 text-[#F04436]" />
              </div>
            </DrawerTrigger>

            <DrawerContent className="bg-white rounded-xl">
              <DrawerHeader className="px-4 md:px-6 py-4 md:py-6">
                <div className="flex justify-between items-center">
                  <DrawerClose asChild>
                    <Button
                      className="text-sm md:text-base text-[#F04436] rounded-full w-8 h-8 md:w-10 md:h-10"
                      style={{ boxShadow: "5px 4px 19.4px 0px #0000001A" }}
                    >
                      <IoIosArrowBack />
                    </Button>
                  </DrawerClose>

                  <h1 className="font-semibold text-lg md:text-xl text-[#1A1A1A] absolute left-1/2 transform -translate-x-1/2 w-full max-w-[200px] text-center">
                    Change Password
                  </h1>

                  <div className="w-8 h-8 md:w-10 md:h-10"></div>
                </div>
              </DrawerHeader>

              <div className="px-4 md:px-6 pb-4 md:pb-6 space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="currentPassword-mobile"
                    className="text-[#666666] text-sm md:text-base font-normal"
                  >
                    Current Password
                  </Label>
                  <Input
                    id="currentPassword-mobile"
                    type="password"
                    placeholder="*********"
                    value={formData.currentPassword}
                    onChange={(e) =>
                      handleInputChange("currentPassword", e.target.value)
                    }
                    className="border border-[#666666] rounded-xl px-4 py-3 md:py-4 text-sm md:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="newPassword-mobile"
                    className="text-[#666666] text-sm md:text-base font-normal"
                  >
                    New Password
                  </Label>
                  <Input
                    id="newPassword-mobile"
                    type="password"
                    placeholder="*********"
                    value={formData.newPassword}
                    onChange={(e) =>
                      handleInputChange("newPassword", e.target.value)
                    }
                    className="border border-[#666666] rounded-xl px-4 py-3 md:py-4 text-sm md:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword-mobile"
                    className="text-[#666666] text-sm md:text-base font-normal"
                  >
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword-mobile"
                    type="password"
                    placeholder="*********"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className="border border-[#666666] rounded-xl px-4 py-3 md:py-4 text-sm md:text-base"
                  />
                </div>
              </div>

              <DrawerFooter className="px-4 md:px-6 py-4 md:py-6">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.8 }}
                  className="text-sm md:text-base cursor-pointer lg:text-lg px-6 md:px-8 lg:px-10 py-3  border-[#192D4E] text-white bg-[#192D4E] rounded-[20px] font-medium h-auto "
                  onClick={handleSubmit}
                >
                  Update Password
                </motion.button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* Two Factor Authentication Section */}
      <div className="mt-8 md:mt-16 lg:mt-20">
        <h3 className="text-base md:text-lg font-medium text-[#484848]">
          Two Factor Authentication
        </h3>
        <p className="text-[#484848] text-sm md:text-base w-full sm:w-1/2 mt-2 md:mt-4 mb-4 md:mb-6 lg:mb-8">
          Add an extra layer of security to your account by requiring access to
          your phone when you log in.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.8 }}
          className="text-sm md:text-base cursor-pointer lg:text-lg px-6 md:px-8 lg:px-10 py-3  border-[#192D4E] text-white bg-[#192D4E] rounded-[20px] font-medium h-auto "
          onClick={() => handleInputChange("twoFactorEnabled", true)}
        >
          Enable Two-Factor Authentication
        </motion.button>
      </div>

      {/* Email Preferences Section */}
      <div className="mt-8 md:mt-16 lg:mt-20">
        <h3 className="text-base md:text-lg font-medium text-[#484848]">
          E-mail Preference
        </h3>

        {/* Desktop View - Checkboxes */}
        <div className="hidden md:block space-y-3 md:space-y-4 mt-2 md:mt-4">
          <div className="flex items-center space-x-2 md:space-x-3">
            <Checkbox
              id="promotions"
              checked={formData.emailPreferences.promotions}
              onCheckedChange={(checked) =>
                handleEmailPreferenceChange("promotions", !!checked)
              }
              className="text-[#F04436] w-4 h-4 md:w-5 md:h-5"
            />
            <Label
              htmlFor="promotions"
              className="text-[#484848] text-sm md:text-base"
            >
              Receive promotional emails
            </Label>
          </div>
          <div className="flex items-center space-x-2 md:space-x-3">
            <Checkbox
              id="updates"
              checked={formData.emailPreferences.updates}
              onCheckedChange={(checked) =>
                handleEmailPreferenceChange("updates", !!checked)
              }
              className="text-[#F04436] w-4 h-4 md:w-5 md:h-5"
            />
            <Label
              htmlFor="updates"
              className="text-[#484848] text-sm md:text-base"
            >
              Receive updates about new features
            </Label>
          </div>
          <div className="flex items-center space-x-2 md:space-x-3">
            <Checkbox
              id="news"
              checked={formData.emailPreferences.newsletters}
              onCheckedChange={(checked) =>
                handleEmailPreferenceChange("newsletters", !!checked)
              }
              className="text-[#F04436] w-4 h-4 md:w-5 md:h-5"
            />
            <Label
              htmlFor="news"
              className="text-[#484848] text-sm md:text-base"
            >
              Receive newsletters
            </Label>
          </div>
        </div>

        {/* Mobile View - Switches */}
        <div className="md:hidden space-y-4 mt-4">
          <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3">
            <Label
              htmlFor="promotions-mobile"
              className="text-[#484848] text-sm font-medium"
            >
              Receive promotional emails
            </Label>
            <Switch
              id="promotions-mobile"
              checked={formData.emailPreferences.promotions}
              onCheckedChange={(checked) =>
                handleEmailPreferenceChange("promotions", checked)
              }
              className="bg-black data-[state=checked]:bg-[#F04436] [&>span]:bg-white"
            />
          </div>
          <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3">
            <Label
              htmlFor="updates-mobile"
              className="text-[#484848] text-sm font-medium"
            >
              Receive updates about new features
            </Label>
            <Switch
              id="updates-mobile"
              checked={formData.emailPreferences.updates}
              onCheckedChange={(checked) =>
                handleEmailPreferenceChange("updates", checked)
              }
              className="bg-black data-[state=checked]:bg-[#F04436] [&>span]:bg-white"
            />
          </div>
          <div className="flex items-center justify-between bg-white border border-[#B3B3B3] rounded-xl px-4 py-3">
            <Label
              htmlFor="newsletters-mobile"
              className="text-[#484848] text-sm font-medium"
            >
              Receive newsletters
            </Label>
            <Switch
              id="newsletters-mobile"
              checked={formData.emailPreferences.newsletters}
              onCheckedChange={(checked) =>
                handleEmailPreferenceChange("newsletters", checked)
              }
              className="bg-black data-[state=checked]:bg-[#F04436] [&>span]:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Language and Currency Section */}
      <div className="mt-8 md:mt-16 lg:mt-20">
        <h3 className="text-base md:text-lg font-medium text-[#484848]">
          Language and Currency
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6 lg:mt-8">
          <div className="space-y-2">
            <Label
              htmlFor="language"
              className="text-[#666666] text-sm md:text-base font-normal"
            >
              Language
            </Label>
            <Select
              onValueChange={(value) => handleInputChange("language", value)}
            >
              <SelectTrigger
                id="language"
                className="w-full border bg-white border-[#B3B3B3] rounded-xl px-4 py-3 md:py-4 text-sm md:text-base lg:text-lg h-auto data-[size=default]:h-auto [&_svg:not([class*='text-'])]:text-[#F04436] [&_svg]:text-[##F04436]"
              >
                <SelectValue
                  placeholder={formData.language || "Select Language"}
                />
              </SelectTrigger>
              <SelectContent className="bg-white border-none">
                {languageOptions.map((option) => (
                  <SelectItem
                    className="hover:bg-gray-100 hover:text-sunset-orange cursor-pointer"
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="currency"
              className="text-[#666666] text-sm md:text-base font-normal"
            >
              Currency
            </Label>
            <Select
              onValueChange={(value) => handleInputChange("currency", value)}
            >
              <SelectTrigger
                id="currency"
                className="w-full border border-[#B3B3B3] rounded-xl px-4 py-3 md:py-4 text-sm md:text-base lg:text-lg data-[size=default]:h-auto"
              >
                <SelectValue
                  placeholder={formData.currency || "Select Currency"}
                />
              </SelectTrigger>
              <SelectContent className="bg-white border-none">
                {currencyOptions.map((option) => (
                  <SelectItem
                    className="hover:bg-gray-100 hover:text-sunset-orange cursor-pointer"
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
      </div>

      {/* Delete Account Section */}
      <div className="mt-8 md:mt-16 lg:mt-20">
        <h3 className="text-base md:text-lg font-medium text-[#484848]">
          Delete Account
        </h3>
        <p className="text-[#484848] text-sm md:text-base w-full sm:w-1/2 mt-2 md:mt-4 mb-4 md:mb-6 lg:mb-8">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
        <div className="w-fit">
          <RedButton
            className="text-sm md:text-base lg:text-lg px-6 md:px-8 lg:px-10 py-3 md:py-4 border-[#D30009] text-white bg-[#D30009] rounded-[20px] h-auto "
            onClick={() => toast.success("Account deleted successfully!")}
            title="  Delete Account"
          ></RedButton>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="mt-8 md:mt-16 lg:mt-20 flex justify-end items-center w-full ">
        <div>
          <RedButton
            className="text-sm   w-fit  md:text-base lg:text-lg px-6 md:px-8 lg:px-10 py-3 md:py-4 border-[#D30009] text-white bg-[#D30009] rounded-[20px] h-auto "
            onClick={() => toast.success("Account deleted successfully!")}
            title="  Save Changes"
          ></RedButton>
        </div>
      </div>
    </Card>
  );
};

export default AccountSettings;
