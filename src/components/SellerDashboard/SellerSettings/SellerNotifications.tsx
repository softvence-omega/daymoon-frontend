import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface NotificationSetting {
  id: string;
  label: string;
  description: string;
  checked: boolean;
}

interface NotificationSection {
  title: string;
  settings: NotificationSetting[];
}

const SellerNotifications = () => {
  const [sections, setSections] = useState<NotificationSection[]>([
    {
      title: "Order Notifications",
      settings: [
        {
          id: "new-orders",
          label: "New Orders",
          description:
            "Receive notifications when a customer places a new order.",
          checked: false,
        },
        {
          id: "shipped-orders",
          label: "Shipped Orders",
          description: "Receive notifications when an order is shipped.",
          checked: false,
        },
        {
          id: "completed-orders",
          label: "Completed Orders",
          description:
            "Receive notifications when an order is marked as completed.",
          checked: false,
        },
      ],
    },
    {
      title: "Product Reviews",
      settings: [
        {
          id: "new-reviews",
          label: "New Reviews",
          description:
            "Receive notifications when a customer leaves a review on your product.",
          checked: false,
        },
      ],
    },
    {
      title: "Promotions",
      settings: [
        {
          id: "sale-alerts",
          label: "Sale Alerts",
          description: "Receive notifications about sales and promotions.",
          checked: false,
        },
        {
          id: "coupon-usages",
          label: "Coupon Usages",
          description: "Receive notifications when a coupon code is used.",
          checked: false,
        },
      ],
    },
    {
      title: "Communications Alerts",
      settings: [
        {
          id: "new-messages",
          label: "New Messages",
          description:
            "Receive notifications when you get a new message from a customer.",
          checked: false,
        },
        {
          id: "customer-inquiries",
          label: "Customer Inquiries",
          description:
            "Receive notifications about customer inquiries about your products.",
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

  return (
    <div className="mt-32 md:mt-42 lg:mt-0 mx-auto p-6 ">
      <div className="space-y-2 px-4 mt-20 mb-3">
        <h1 className="text-2xl font-semibold text-jet-black">
          Notifications Settings
        </h1>
        <p className="text-[#666]">
          Choose how you want to be notified about your activity
        </p>
      </div>

      <div className="space-y-6">
        {sections.map((section, sectionIndex) => (
          <Card key={section.title} className="shadow-none border-none m-0 ">
            <hr className=" text-[#E5E5E5]" />
            <CardHeader className="">
              <CardTitle className="text-xl font-medium text-jet-black">
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SellerNotifications;
