import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import PersonalInformation from "@/components/BuyerDashboard/BuyerSettings/PersonalInformation";
import BusinessInformation from "@/components/BuyerDashboard/BuyerSettings/BusinessInformation";
import ShippingAddress from "@/components/BuyerDashboard/BuyerSettings/ShippingAddress";
import AccountSettings from "@/components/BuyerDashboard/BuyerSettings/AccountSettings";
import PaymentMethods from "@/components/BuyerDashboard/BuyerSettings/PaymentMethods";

const BuyerSettings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2 md:space-y-4">
        <h1 className="text-2xl md:text-3xl font-medium text-[#1A1A1A] tracking-tight">
          My Profile
        </h1>
        <p className="text-[#666666] text-sm md:text-base">
          Update your personal and business information, shipping addresses, and
          account settings
        </p>
      </div>

      <Separator />

      <Tabs defaultValue="personal-information" className="space-y-4 ">
        <TabsList className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <TabsTrigger
            value="personal-information"
            className="md:text-2xl font-normal border-b-2 border-transparent hover:border-gray-300 focus:border-gray-300"
          >
            Personal Information
          </TabsTrigger>
          <TabsTrigger
            value="business-information"
            className="md:text-2xl font-normal border-b-2 border-transparent hover:border-gray-300 focus:border-gray-300"
          >
            Business Information
          </TabsTrigger>
          <TabsTrigger
            value="shipping-address"
            className="md:text-2xl font-normal border-b-2 border-transparent hover:border-gray-300 focus:border-gray-300"
          >
            Shipping Address
          </TabsTrigger>
          <TabsTrigger
            value="account-settings"
            className="md:text-2xl font-normal border-b-2 border-transparent hover:border-gray-300 rounded-none focus:border-gray-300"
          >
            Account Settings
          </TabsTrigger>
          <TabsTrigger
            value="payment-methods"
            className="md:text-2xl font-normal border-b-2 border-transparent hover:border-gray-300 focus:border-gray-300"
          >
            Payment Methods
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

export default BuyerSettings;
