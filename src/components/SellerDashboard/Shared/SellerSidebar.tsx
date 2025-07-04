import {
  MdGridView,
  MdOutlineMessage,
  MdOutlineCreditCard,
  MdOutlineRateReview,
} from "react-icons/md";
import { FaTruck } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/dashboard/buyer-dashboard/logo.png"; // Adjust the path to your logo image

// Define types for better reusability
export interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  badge?: string;
}

export interface SidebarProps {
  items?: SidebarItem[];
  brandName?: string;
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  userInitials?: string;
}

// Updated sidebar items to match your route structure
const defaultSidebarItems: SidebarItem[] = [
  { icon: MdGridView, label: "Dashboard", href: "/sellerdashboard/dashboard" },
  {
    icon: FaTruck,
    label: "Products",
    href: "/sellerdashboard/dashboard/products",
  },
  {
    icon: MdOutlineMessage,
    label: "Orders",
    href: "/sellerdashboard/dashboard/orders",
  },
  {
    icon: MdOutlineCreditCard,
    label: "Inquiries",
    href: "/sellerdashboard/dashboard/inquiries",
  },
  {
    icon: FaRegHeart,
    label: "Payments",
    href: "/sellerdashboard/dashboard/payments",
  },
  {
    icon: MdOutlineRateReview,
    label: "Analytics",
    href: "/sellerdashboard/dashboard/analytics",
  },
  {
    icon: IoMdSettings,
    label: "Promotions",
    href: "/sellerdashboard/dashboard/promotions",
  },
  {
    icon: IoMdSettings,
    label: "Reviews",
    href: "/sellerdashboard/dashboard/reviews",
  },
  {
    icon: IoMdSettings,
    label: "Settings",
    href: "/sellerdashboard/dashboard/settings",
  },
  {
    icon: IoMdSettings,
    label: "Help",
    href: "/sellerdashboard/dashboard/help",
  },
];

const SellerSidebar: React.FC<SidebarProps> = ({
  items = defaultSidebarItems,
}) => {
  const location = useLocation();

  return (
    <div
      className="flex flex-col h-full bg-white"
      style={{ boxShadow: "3px 4px 42.3px 0px #0000001A" }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center p-2 sm:p-3 border-b border-[#E5E5E5]">
        <img src={logo} className="w-30 md:w-32" alt="Logo" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 md:p-8">
        <div className="space-y-4 md:space-y-6">
          {items.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center justify-between w-full px-3 py-2 text-sm font-normal rounded-none transition-colors border-b-2 ${
                  isActive
                    ? "text-[#F7813B] border-[#F7813B]"
                    : "text-[#666666] border-transparent hover:text-[#F46A39] hover:border-[#F46A39]"
                }`}
              >
                <div className="flex items-center space-x-2 md:text-lg">
                  <item.icon
                    className={`w-5 h-5 ${
                      isActive
                        ? "text-[#F7813B]"
                        : "text-[#666666] hover:text-[#F46A39]"
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default SellerSidebar;
