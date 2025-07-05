import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import PersonalInformation from "@/components/BuyerDashboard/BuyerSettings/PersonalInformation";
import BusinessInformation from "@/components/BuyerDashboard/BuyerSettings/BusinessInformation";
import ShippingAddress from "@/components/BuyerDashboard/BuyerSettings/ShippingAddress";
import AccountSettings from "@/components/BuyerDashboard/BuyerSettings/AccountSettings";
import PaymentMethods from "@/components/BuyerDashboard/BuyerSettings/PaymentMethods";

const Settings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2 md:space-y-4">
        <h1 className="text-2xl md:text-3xl font-medium text-[#1A1A1A] tracking-tight">
          Settings
        </h1>
        <p className="text-[#666666] text-sm md:text-base">
          Manage your account preferences, payment settings, notifications, and
          more.
        </p>
      </div>

      <Separator />

      <Tabs defaultValue="personal-information" className="space-y-4 ">
        <TabsList className="grid w-full lg:grid-cols-5 gap-4">
          <TabsTrigger
            value="personal-information"
            className="md:text-2xl font-normal border-b-2 border-transparent hover:border-gray-300 focus:border-gray-300"
          >
            Account Information
          </TabsTrigger>
          <TabsTrigger
            value="business-information"
            className="md:text-2xl font-normal border-b-2 border-transparent hover:border-gray-300 focus:border-gray-300"
          >
            Store Preferences
          </TabsTrigger>
          <TabsTrigger
            value="shipping-address"
            className="md:text-2xl font-normal border-b-2 border-transparent hover:border-gray-300 focus:border-gray-300"
          >
            Payment Settings
          </TabsTrigger>
          <TabsTrigger
            value="account-settings"
            className="md:text-2xl font-normal border-b-2 border-transparent hover:border-gray-300 rounded-none focus:border-gray-300"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="payment-methods"
            className="md:text-2xl font-normal border-b-2 border-transparent hover:border-gray-300 focus:border-gray-300"
          >
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="personal-information">
          <PersonalInformation />
        </TabsContent>
        <TabsContent value="business-information">
          <BusinessInformation />
        </TabsContent>
        <TabsContent value="shipping-address">
          <ShippingAddress />
        </TabsContent>
        <TabsContent value="account-settings">
          <AccountSettings />
        </TabsContent>
        <TabsContent value="payment-methods">
          <PaymentMethods />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
