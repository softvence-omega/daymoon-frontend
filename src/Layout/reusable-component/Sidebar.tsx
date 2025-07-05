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
  mobileView?: boolean;
}

// Updated sidebar items to match your route structure
const defaultSidebarItems: SidebarItem[] = [
  { icon: MdGridView, label: "Dashboard", href: "/buyer/dashboard" },
  { icon: FaTruck, label: "Orders", href: "/buyer/dashboard/orders" },
  {
    icon: MdOutlineMessage,
    label: "Messages",
    href: "/buyer/dashboard/messages",
  },
  {
    icon: MdOutlineCreditCard,
    label: "Payments",
    href: "/buyer/dashboard/payments",
  },
  { icon: FaRegHeart, label: "Favorites", href: "/buyer/dashboard/cart" },
  {
    icon: MdOutlineRateReview,
    label: "Buying Leads",
    href: "/buyer/dashboard/wishlist",
  },
  { icon: IoMdSettings, label: "Settings", href: "/buyer/dashboard/settings" },
];

const Sidebar: React.FC<SidebarProps> = ({
  items = defaultSidebarItems,
  mobileView = false,
}) => {
  const location = useLocation();

  // If mobile view is true, render only the mobile dock with inline items
  if (mobileView) {
    return (
      <div className="bg-white border-t border-gray-200 py-3 px-2">
        <div className="flex justify-around items-center">
          {items.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center justify-center ${
                  isActive
                    ? "text-[#F7813B]"
                    : "text-[#666666] hover:text-[#F46A39]"
                }`}
              >
                <item.icon
                  className={`w-6 h-6 ${
                    isActive
                      ? "text-[#F7813B]"
                      : "text-[#666666] hover:text-[#F46A39]"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className="hidden md:flex flex-col h-full bg-white"
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

      {/* Mobile Dock */}
      {!mobileView && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center p-2 md:hidden">
          {items.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`flex flex-col items-center text-xs ${
                  isActive
                    ? "text-[#F7813B]"
                    : "text-[#666666] hover:text-[#F46A39]"
                }`}
              >
                <item.icon
                  className={`w-6 h-6 ${
                    isActive
                      ? "text-[#F7813B]"
                      : "text-[#666666] hover:text-[#F46A39]"
                  }`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Sidebar;
