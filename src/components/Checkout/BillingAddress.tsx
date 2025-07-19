import CommonButton from "@/common/CommonButton";
import CommonHeader from "@/common/CommonHeader";
import CommonSelect from "@/common/CommonSelect";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Link } from "react-router-dom";
import { countryList } from "./CountryList";

const BillingAddress = ({}) => {
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [country, setCountry] = useState("bangladesh");

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

  return (
    <div className=" flex flex-col gap-6 pb-10">
      <Card className="flex flex-col gap-4 border border-foundation-white rounded-3xl">
        <CardHeader>
          <CommonHeader>Shipping Method</CommonHeader>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={shippingMethod}
            onValueChange={setShippingMethod}
            className="space-y-4"
          >
            {/* Standard Shipping */}
            <div
              className={`flex items-center justify-between p-4 border rounded-lg ${
                shippingMethod === "standard"
                  ? "text-orange-500 border-orange-500"
                  : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="standard" id="standard" />
                <div>
                  <Label
                    htmlFor="standard"
                    className="font-medium cursor-pointer"
                  >
                    Standard Shipping
                  </Label>
                  <p className="text-sm text-gray-600">3-5 business days</p>
                </div>
              </div>
              <span className="font-semibold">$9.99</span>
            </div>

            {/* Express Shipping */}
            <div
              className={`flex items-center justify-between p-4 border rounded-lg ${
                shippingMethod === "express"
                  ? "text-orange-500 border-orange-500"
                  : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="express" id="express" />
                <div>
                  <Label
                    htmlFor="express"
                    className="font-medium cursor-pointer"
                  >
                    Express Shipping
                  </Label>
                  <p className="text-sm text-gray-600">1-2 business days</p>
                </div>
              </div>
              <span className="font-semibold">$19.99</span>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4 border border-foundation-white rounded-3xl">
        <Card className="border-none shadow-none pt-6 pb-0">
          <CardHeader>
            <CommonHeader>Billing Address</CommonHeader>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="sameAsShipping"
                checked={sameAsShipping}
                onCheckedChange={(checked) =>
                  setSameAsShipping(checked === true)
                }
                className="border border-gray-300 data-[state=checked]:bg-red-500 text-white data-[state=checked]:border-red-500"
              />

              <Label
                htmlFor="sameAsShipping"
                className="text-sm font-medium cursor-pointer"
              >
                Same as shipping address
              </Label>
            </div>

            {/* Smooth transition */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                sameAsShipping
                  ? "max-h-0 opacity-0"
                  : "max-h-[1000px] opacity-100"
              }`}
            >
              <div className="mt-4 space-y-4">
                <Input className={styles.label} placeholder="Full Name" />
                <Input className={styles.label} placeholder="Address" />
                <Input
                  className={styles.label}
                  placeholder="Apartment, Suite, etc."
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input className={styles.label} placeholder="City" />
                  <Input className={styles.label} placeholder="Postal Code" />
                </div>
                <CommonSelect
                  value={country}
                  item={countryList}
                  onValueChange={(val) => setCountry(val)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-3 px-6 pb-6">
          <Link to="/payment">
            <CommonButton className="w-full bg-sunset-orange hover:bg-red-600 text-white py-3 text-base font-medium">
              Continue To Payment
            </CommonButton>
          </Link>
          <CommonButton className="w-full border border-sunset-orange bg-transparent !text-sunset-orange py-3 text-base font-medium">
            Back To Cart
          </CommonButton>
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;
