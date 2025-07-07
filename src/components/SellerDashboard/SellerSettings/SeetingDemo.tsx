// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
// import { IoIosArrowBack } from "react-icons/io";
// import SellerPersonalInformation from "./SellerPersonalInformation";
// import SellerStorePreferences from "./SellerStorePreferences";
// import SellerPaymentSettings from "./SellerPaymentSettings";
// import SellerNotifications from "./SellerNotifications";
// import SellerSecurity from "./SellerSecurity";

// const tabsData = [
//   {
//     value: "personal-information",
//     label: "Account Information",
//     component: <SellerPersonalInformation />,
//   },
//   {
//     value: "business-information",
//     label: " Store Preferences",
//     component: <SellerStorePreferences />,
//   },
//   {
//     value: "shipping-address",
//     label: "Payment Settings",
//     component: <SellerPaymentSettings />,
//   },
//   {
//     value: "account-settings",
//     label: "Notifications",
//     component: <SellerNotifications />,
//   },
//   {
//     value: "payment-methods",
//     label: "Security",
//     component: <SellerSecurity />,
//   },
// ];

// const BuyerSettings = () => {
//   return (
//     <div className="space-y-4 md:space-y-6">
//       {/* Header */}
//       <div className="hidden md:block space-y-2 md:space-y-4">
//         <h1 className="text-2xl md:text-3xl font-medium text-[#1A1A1A] tracking-tight">
//           Settings
//         </h1>
//         <p className="text-[#666666] text-sm md:text-base">
//           Manage your account preferences, payment settings, notifications, and
//           more.
//         </p>
//       </div>

//       {/* Mobile Header */}
//       <div className="flex justify-between items-center md:hidden">
//         <Button
//           className="text-sm text-[#F04436] rounded-full w-8 h-8 p-0"
//           style={{ boxShadow: "5px 4px 19.4px 0px #0000001A" }}
//         >
//           <IoIosArrowBack />
//         </Button>

//         <h1 className="font-semibold text-xl text-[#1A1A1A] absolute left-1/2 transform -translate-x-1/2">
//           Settings
//         </h1>

//         <div className="w-8 h-8"></div>
//       </div>

//       <Separator />

//       {/* Tabs for larger screens */}
//       <div className="hidden md:block">
//         <Tabs defaultValue="personal-information" className="space-y-4">
//           <TabsList className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 h-auto">
//             {tabsData.map((tab) => (
//               <TabsTrigger
//                 key={tab.value}
//                 value={tab.value}
//                 className="md:text-lg lg:text-xl [@media(min-width:1600px)]:text-2xl font-normal border-b-2 border-transparent hover:border-gray-300 focus:border-gray-300"
//               >
//                 {tab.label}
//               </TabsTrigger>
//             ))}
//           </TabsList>

//           {tabsData.map((tab) => (
//             <TabsContent key={tab.value} value={tab.value}>
//               {tab.component}
//             </TabsContent>
//           ))}
//         </Tabs>
//       </div>

//       {/* Mobile View - Optimized for performance */}
//       <div className="block md:hidden">
//         <div
//           className="space-y-4 will-change-scroll"
//           style={{ scrollBehavior: "smooth" }}
//         >
//           {tabsData.map((tab) => (
//             <div key={tab.value} className="transform-gpu">
//               {tab.component}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyerSettings;
