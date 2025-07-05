import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ShippingAddress = () => {
  const [address, setAddress] = useState({
    fullName: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Shipping Address
        </CardTitle>
        <CardDescription>Manage your shipping address details.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-0.5">
              <Label>Full Name</Label>
              <input
                type="text"
                value={address.fullName}
                onChange={(e) =>
                  setAddress({ ...address, fullName: e.target.value })
                }
                className="w-full p-2 border rounded"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-0.5">
              <Label>Phone Number</Label>
              <input
                type="tel"
                value={address.phoneNumber}
                onChange={(e) =>
                  setAddress({ ...address, phoneNumber: e.target.value })
                }
                className="w-full p-2 border rounded"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div className="space-y-0.5">
            <Label>Street Address</Label>
            <input
              type="text"
              value={address.streetAddress}
              onChange={(e) =>
                setAddress({ ...address, streetAddress: e.target.value })
              }
              className="w-full p-2 border rounded"
              placeholder="123 Main St"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-0.5">
              <Label>City</Label>
              <input
                type="text"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
                className="w-full p-2 border rounded"
                placeholder="Anytown"
              />
            </div>
            <div className="space-y-0.5">
              <Label>Postal Code</Label>
              <input
                type="text"
                value={address.postalCode}
                onChange={(e) =>
                  setAddress({ ...address, postalCode: e.target.value })
                }
                className="w-full p-2 border rounded"
                placeholder="12345"
              />
            </div>
          </div>

          <div className="space-y-0.5">
            <Label>Country</Label>
            <input
              type="text"
              value={address.country}
              onChange={(e) =>
                setAddress({ ...address, country: e.target.value })
              }
              className="w-full p-2 border rounded"
              placeholder="United States"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button>Update Shipping Address</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShippingAddress;
