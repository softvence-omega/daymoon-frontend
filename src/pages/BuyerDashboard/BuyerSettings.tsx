import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import PersonalInformation from "@/components/BuyerDashboard/BuyerSettings/PersonalInformation";
import BusinessInformation from "@/components/BuyerDashboard/BuyerSettings/BusinessInformation";
import ShippingAddress from "@/components/BuyerDashboard/BuyerSettings/ShippingAddress";
import AccountSettings from "@/components/BuyerDashboard/BuyerSettings/AccountSettings";
import PaymentMethods from "@/components/BuyerDashboard/BuyerSettings/PaymentMethods";

const tabsData = [
    {
        value: "personal-information",
        label: "Personal Information",
        component: <PersonalInformation />,
    },
    {
        value: "business-information",
        label: "Business Information",
        component: <BusinessInformation />,
    },
    {
        value: "shipping-address",
        label: "Shipping Address",
        component: <ShippingAddress />,
    },
    {
        value: "account-settings",
        label: "Account Settings",
        component: <AccountSettings />,
    },
    {
        value: "payment-methods",
        label: "Payment Methods",
        component: <PaymentMethods />,
    },
];

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

            {/* Tabs for larger screens */}
            <div className="hidden sm:block">
                <Tabs defaultValue="personal-information" className="space-y-4">
                    <TabsList className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 h-auto">
                        {tabsData.map((tab) => (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className="md:text-lg lg:text-xl [@media(min-width:1600px)]:text-2xl font-normal border-b-2 border-transparent hover:border-gray-300 focus:border-gray-300"
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {tabsData.map((tab) => (
                        <TabsContent key={tab.value} value={tab.value}>
                            {tab.component}
                        </TabsContent>
                    ))}
                </Tabs>
            </div>

            {/* All data for mobile screens */}
            <div className="block sm:hidden space-y-6">
                {tabsData.map((tab) => (
                    <div key={tab.value}>{tab.component}</div>
                ))}
            </div>
        </div>
    );
};

export default BuyerSettings;