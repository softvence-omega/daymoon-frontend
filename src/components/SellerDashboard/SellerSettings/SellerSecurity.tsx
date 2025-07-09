"use client";

import StyledInput from "@/components/ReUseable/StyledInput";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useState } from "react";

interface ISection {
  title: string;
  description?: string;
  settings: {
    id: string;
    label: string;
    description: string;
    checked: boolean;
  }[];
}

export default function AccountSecurity() {
  const [sections, setSections] = useState<ISection[]>([
    {
      title: "Profile Visibility",
      description: "Controll who can see your seller profile.",
      settings: [
        {
          id: "public",
          label: "Public",
          description: "anyone can see your profile",
          checked: false,
        },
        {
          id: "registered",
          label: "Only Registered Users",
          description: "Only registered users can see your profile",

          checked: false,
        },
        {
          id: "private",
          label: "Private",
          description: "Only you and selected users can see your profile",
          checked: false,
        },
      ],
    },

    {
      title: "Data Sharing",
      settings: [
        {
          id: "Share Data for marketing ",
          label: "Share Data for marketing ",
          description:
            "Allow us to use your data to personalize marketing and recommendations",
          checked: false,
        },
        {
          id: "Share Data for analytics",
          label: "Share Data for analytics",
          description:
            "Allow us to use data for improving our platform and services",
          checked: false,
        },
      ],
    },
  ]);

  const handleCheckboxChange = (
    sectionIndex: number,
    settingIndex: number,
    checked: boolean
  ) => {
    setSections((prevSections) => {
      const newSections = [...prevSections];
      newSections[sectionIndex].settings[settingIndex].checked = checked;

      const setting = newSections[sectionIndex].settings[settingIndex];
      console.log(
        `[LOG] ${setting.label} → ${checked ? "✅ Checked" : "❌ Unchecked"}`
      );

      return newSections;
    });
  };

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="mt-20  text-jet-black  space-y-8">
      <div className="space-y-2">
        <h1 className="text-xl md:text-2xl font-semibold ">Account Security</h1>
        <p className="text-[#666] text-sm">
          Manage your account security settings
        </p>
      </div>
      <hr className=" text-[#E5E5E5]" />
      <div className="flex flex-col lg:flex-row justify-between gap-32 items-start w-full">
        <div className="w-full lg:w-1/2">
          <h1 className="text-lg font-medium mb-4">Change Password</h1>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-[#666]" htmlFor="current-password">
                Current Password
              </Label>
              <StyledInput
                id="current-password"
                type="text"
                className="w-full"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••••••••••"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-[#666]" htmlFor="new-password">
                New Password
              </Label>
              <StyledInput
                id="new-password"
                type="text"
                className="w-full"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••••••••••"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-[#666]" htmlFor="confirm-password">
                Confirm Password
              </Label>
              <StyledInput
                id="confirm-password"
                type="text"
                className="w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••••••••••"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.01 }}
              className="bg-[#192D4E] rounded-2xl text-sm md:text-lg font-medium px-10 py-3 mt-4 hover:bg-gray-900 text-white cursor-pointer"
            >
              Update Password
            </motion.button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-end   ">
          <div className="p-0 shadow-none border-none">
            <div className="p-0">
              <div className="text-lg   p-0 font-medium">
                Two Factor Authentication
              </div>
            </div>
            <div className=" p-0 mt-3">
              <p className="text-sm text-gray-600">
                Add an extra layer of security to your account by requiring
                access to your phone when you log in.
              </p>
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.01 }}
                className="bg-[#192D4E] rounded-2xl text-sm md:text-lg font-medium px-10 py-3 mt-8 hover:bg-gray-900 text-white cursor-pointer"
              >
                Enable Two-Factor Authentication
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-none p-0 mt-20 shadow-none">
        <h1 className="text-2xl font-semibold">Email Verification</h1>

        <div className="space-y-4 mt-5">
          <div className="flex items-center gap-2">
            <Badge
              variant="destructive"
              className="bg-red-100 text-base text-red-800 hover:bg-red-100"
            >
              Verified Required
            </Badge>
            <span className="text-sm text-gray-600">
              Your email has not been verified
            </span>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Privacy & Data Security
        </h2>
        <p className="text-sm text-gray-600">
          Manage your privacy and security settings
        </p>
      </div>

      <hr className=" text-[#E5E5E5]" />
      <div className="space-y-6">
        {sections.map((section, sectionIndex) => (
          <div key={section.title} className="shadow-none border-none  ">
            <h1 className="text-xl  font-medium text-jet-black">
              {section.title}
            </h1>

            <div className="space-y-6 mt-5">
              {section.settings.map((setting, settingIndex) => (
                <div
                  key={setting.id}
                  className="flex items-start text-jet-black space-x-3"
                >
                  <Checkbox
                    id={setting.id}
                    checked={setting.checked}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(
                        sectionIndex,
                        settingIndex,
                        checked as boolean
                      )
                    }
                    className="mt-1 h-5 w-5 cursor-pointer transition-colors duration-200 ease-in-out 
    border 
    data-[state=checked]:bg-[#f04436] 
    data-[state=checked]:border-[#f04436] 
    data-[state=checked]:text-white 
    data-[state=unchecked]:bg-transparent 
    data-[state=unchecked]:border-[#f04436] 
    data-[state=unchecked]:border-2"
                  />

                  <div className="flex-1 space-y-1">
                    <Label
                      htmlFor={setting.id}
                      className="text-base font-medium text-gray-900 cursor-pointer"
                    >
                      {setting.label}
                    </Label>
                    <p className="text-sm text-gray-600">
                      {setting.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Separator />

      <div className="border-none  shadow-none ">
        <h1
          className="text-2xl    
       font-semibold"
        >
          Download Your Data
        </h1>

        <div className="space-y-4 mt-2">
          <p className="text-sm text-gray-600">
            Download a copy of your data including information, photos, posts
            and more information.
          </p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.01 }}
            className=" rounded-2xl text-sm md:text-lg font-medium px-10 py-3 mt-4 bg-transparent text-jet-black border-1 cursor-pointer"
          >
            Request data Download
          </motion.button>
        </div>
      </div>

      <Separator />

      <Card className="p-0 border-none shadow-none">
        <CardTitle className="text-2xl font-semibold text-[#484848] p-0  ">
          Deactivate Account
        </CardTitle>
        <CardContent className="space-y-4 p-0">
          <p className="text-sm text-gray-600">
            Temporarily disable your account. You can reactivate your account.
          </p>

          <Alert className="bg-[#D3000919] mt-8 border-red-200">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Warning:</strong> Deactivating your account will remove
              all your products from the marketplace and suspend your ability to
              sell. This action can be reversed by contacting support.
            </AlertDescription>
          </Alert>
          <div className="mt-6">
            <Label className="text-sm text-[#666]" htmlFor="deactivate-reason">
              Reason for deactivation (optional)
            </Label>
            <Textarea
              rows={12}
              className="w-full h-40 mt-2 rounded-md border border-[#B3B3B3] bg-transparent px-3 py-2 text-sm text-[#333333] placeholder:text-[#B3B3B3] focus:outline-none focus:border-[#B3B3B3] focus:ring-[#B3B3B3] focus:shadow-none"
            />
          </div>
          <div className="pt-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.01 }}
              className=" rounded-2xl text-sm md:text-lg font-medium px-10 py-3 mt-4   text-white bg-[#D30009] hover:bg-amber-800 border-1 cursor-pointer"
            >
              Deactivate Account
            </motion.button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
