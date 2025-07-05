import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <Card className="mx-auto mt-8 p-10 bg-[#FFFFFF] border border-[#B3B3B3] rounded-[20px]">
      <h1 className="text-3xl font-medium text-[#1A1A1A] mb-6">
        Account Settings
      </h1>

      {/* Change Password Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-medium">Change Password</h2>
        <div className="space-y-2">
          <Label
            htmlFor="currentPassword"
            className="text-[#666666] text-sm font-normal"
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
            className="border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto w-full sm:w-1/2"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="newPassword"
            className="text-[#666666] text-sm font-normal"
          >
            New Password
          </Label>
          <Input
            id="newPassword"
            type="password"
            placeholder="*********"
            value={formData.newPassword}
            onChange={(e) => handleInputChange("newPassword", e.target.value)}
            className="border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto w-full sm:w-1/2"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="confirmPassword"
            className="text-[#666666] text-sm font-normal"
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
            className="border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg h-auto w-full sm:w-1/2"
          />
        </div>
        <Button
          className="text-lg px-10 py-4 border-[#192D4E] text-white bg-[#192D4E] rounded-[20px] h-auto w-auto"
          onClick={handleSubmit}
        >
          Update Password
        </Button>
      </div>

      {/* Two Factor Authentication Section */}
      <div className="mt-20">
        <h3 className="text-lg font-medium text-[#484848]">
          Two Factor Authentication
        </h3>
        <p className="text-[#484848] text-base w-full sm:w-1/2 mt-4 mb-8">
          Add an extra layer of security to your account by requiring access to
          your phone when you log in.
        </p>
        <Button
          className="text-lg px-10 py-4 border-[#192D4E] text-white bg-[#192D4E] rounded-[20px] h-auto w-auto"
          onClick={() => handleInputChange("twoFactorEnabled", true)}
        >
          Enable Two-Factor Authentication
        </Button>
      </div>

      {/* Email Preferences Section */}
      <div className="mt-20">
        <h3 className="text-lg font-medium text-[#484848]">
          E-mail Preference
        </h3>
        <div className="space-y-4 mt-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="promotions"
              checked={formData.emailPreferences.promotions}
              onCheckedChange={(checked) =>
                handleEmailPreferenceChange("promotions", checked)
              }
              className="text-[#F04436]"
            />
            <Label htmlFor="promotions" className="text-[#484848] text-sm">
              Receive promotional emails
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="updates"
              checked={formData.emailPreferences.updates}
              onCheckedChange={(checked) =>
                handleEmailPreferenceChange("updates", checked)
              }
              className="text-[#F04436]"
            />
            <Label htmlFor="updates" className="text-[#484848] text-sm">
              Receive updates about new features
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="news"
              checked={formData.emailPreferences.newsletters}
              onCheckedChange={(checked) =>
                handleEmailPreferenceChange("newsletters", checked)
              }
              className="text-[#F04436]"
            />
            <Label htmlFor="news" className="text-[#484848] text-sm">
              Receive newsletters
            </Label>
          </div>
        </div>
      </div>

      {/* Language and Currency Section */}
      <div className="mt-20">
        <h3 className="text-lg font-medium text-[#484848]">
          Language and Currency
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
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
          <div className="space-y-2">
            <Label
              htmlFor="currency"
              className="text-[#666666] text-sm font-normal"
            >
              Currency
            </Label>
            <Select
              onValueChange={(value) => handleInputChange("currency", value)}
            >
              <SelectTrigger
                id="currency"
                className="w-full border border-[#B3B3B3] rounded-xl px-4 py-3 md:text-lg data-[size=default]:h-auto"
              >
                <SelectValue
                  placeholder={formData.currency || "Select Currency"}
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {currencyOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Delete Account Section */}
      <div className="mt-20">
        <h3 className="text-lg font-medium text-[#484848]">Delete Account</h3>
        <p className="text-[#484848] text-base w-full sm:w-1/2 mt-4 mb-8">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
        <Button
          className="text-lg px-10 py-4 border-[#D30009] text-white bg-[#D30009] rounded-[20px] h-auto w-auto"
          onClick={() => alert("Account deleted successfully!")}
        >
          Delete Account
        </Button>
      </div>

      {/* Save Changes Button */}
      <div className="mt-20 flex justify-end">
        <Button
          className="text-lg px-10 py-4 border-[#F04436] text-white bg-[#F04436] rounded-[20px] h-auto w-auto"
          onClick={() => alert("Account deleted successfully!")}
        >
          Save Changes
        </Button>
      </div>
    </Card>
  );
};

export default AccountSettings;
