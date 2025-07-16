import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CommonSelect from "@/common/CommonSelect";
import { useState } from "react";
import { countryList } from "./CountryList";
import CommonHeader from "@/common/CommonHeader";
const styles = {
  input:
    "w-full px-4 py-3 rounded-[20px] border border-[#B3B3B3] bg-white text-gray-900 " +
    "focus:outline-none focus:ring-1 focus:ring-blue-400 " +
    "focus:shadow-[0_4px_10px_3px_rgba(21,101,216,0.25)]",

  button:
    "w-full bg-[#EF3F3F] text-white py-3 rounded-[20px] hover:bg-[#e73333] transition",

  label: "block text-sm font-medium text-gray-700 mb-[14px]",
  error: "text-sm text-red-500",
  rememberText: "text-sm text-gray-700",
  forgot:
    "text-sm text-[#FCAB3F] text-right block cursor-pointer  hover:underline cursor-pointer transition",
};
const ShippingAddress = () => {
  const [country, setCountry] = useState("bangladesh");
  return (
    <div className=" flex flex-col gap-6 lg:pb-10">
      <Card className="flex flex-col gap-4 border border-foundation-white rounded-3xl ">
        <CardHeader>
          <CommonHeader>Contact Information</CommonHeader>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email" className={styles.label}>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              className={styles.input}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Label htmlFor="phone" className={styles.label}>
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              className={styles.input}
              unset-orange
              placeholder="Enter your phone number"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="flex flex-col gap-4 border border-foundation-white rounded-3xl ">
        <CardHeader>
          <CommonHeader>Shipping Address</CommonHeader>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="fullName" className={styles.label}>
              Full Name
            </Label>
            <Input
              id="fullName"
              className={styles.input}
              unset-orange
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <Label htmlFor="address" className={styles.label}>
              Address
            </Label>
            <Input
              id="address"
              className={styles.input}
              unset-orange
              placeholder="Enter your address"
            />
          </div>
          <div>
            <Label htmlFor="apartment" className={styles.label}>
              Apartment, Suite, etc.
            </Label>
            <Input
              id="apartment"
              className={styles.input}
              unset-orange
              placeholder="Apartment, suite, etc. (optional)"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city" className={styles.label}>
                City
              </Label>
              <Input
                id="city"
                className={styles.input}
                unset-orange
                placeholder="City"
              />
            </div>
            <div>
              <Label htmlFor="postalCode" className={styles.label}>
                Postal Code
              </Label>
              <Input
                id="postalCode"
                className={styles.input}
                unset-orange
                placeholder="Postal code"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="country" className={styles.label}>
              Country
            </Label>

            <CommonSelect
              value={country}
              item={countryList}
              onValueChange={(val) => setCountry(val)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShippingAddress;
