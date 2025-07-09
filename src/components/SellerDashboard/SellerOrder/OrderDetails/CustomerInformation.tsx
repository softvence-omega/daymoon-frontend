import CommonHeader from "@/common/CommonHeader";
import SubHeader from "@/common/SubHeader";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { slugify } from "../OrderTable";

export interface Customer {
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  photoUrl: string;
  joinedDate: string;
  orderCount: number;
  totalSpent: number;
}

interface CustomerInformationProps {
  customer: Customer;
}

const CustomerInformation: React.FC<CustomerInformationProps> = ({
  customer,
}) => {
  const { id } = useParams<{ id: string }>();

  console.log("CustomerInformationCustomerInformation", id);

  const {
    name,
    company,
    email,
    phone,
    address,
    photoUrl,
    joinedDate,
    orderCount,
    totalSpent,
  } = customer;

  return (
    <div className="w-full bg-white p-10 rounded-2xl border border-foundation-white">
      <CommonHeader className="!text-2xl font-semibold mb-6 text-[#484848]">
        Customer Information
      </CommonHeader>

      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <img
            src={photoUrl}
            alt={`${name} profile photo`}
            className="object-cover"
          />
        </div>
        <div>
          <Link
            to={`/seller-dashboard/all-orders/${slugify(id!)}/buyer-profile`}
            className="lg:text-xl  text-base  text-jet-black font-medium hover:underline"
          >
            {name}
          </Link>
          <SubHeader className="">{company}</SubHeader>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-gray-500" />
          <SubHeader>{email}</SubHeader>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-gray-500" />
          <SubHeader>{phone}</SubHeader>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-gray-500" />
          <SubHeader>{address}</SubHeader>
        </div>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* Customer Statistics */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <SubHeader>Customer Since</SubHeader>
          <SubHeader className="text-jet-black font-medium">
            {joinedDate}
          </SubHeader>
        </div>

        <div className="flex justify-between items-center">
          <SubHeader>Orders</SubHeader>
          <SubHeader className="text-jet-black font-medium">
            {orderCount} Orders
          </SubHeader>
        </div>

        <div className="flex justify-between items-center">
          <SubHeader>Spends</SubHeader>
          <SubHeader className="text-jet-black font-medium">
            ${totalSpent.toFixed(2)}
          </SubHeader>
        </div>
      </div>
    </div>
  );
};

export default CustomerInformation;
