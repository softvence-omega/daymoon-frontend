import logo from "@/assets/Navbar/Pangeti-logo.png";
import { Badge } from "@/components/ui/badge";
import { Home } from "lucide-react";
import { FaRegHeart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import {
  MdGridView,
  MdOutlineCreditCard,
  MdOutlineMessage,
  MdOutlineRateReview,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

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
  { icon: MdGridView, label: "Dashboard", href: "/buyer/dashboard" },
  { icon: Home, label: "Home", href: "/" },
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
  { icon: FaRegHeart, label: "Favorites", href: "/buyer/dashboard/favorites" },
  {
    icon: MdOutlineRateReview,
    label: "RFQ",
    href: "/buyer/dashboard/rfq",
  },
  { icon: IoMdSettings, label: "Settings", href: "/buyer/dashboard/settings" },
];

const Sidebar: React.FC<SidebarProps> = ({ items = defaultSidebarItems }) => {
  const location = useLocation();

  return (
    <div
      className="flex sticky flex-col bg-white  top-0 h-screen"
      style={{ boxShadow: "3px 4px 42.3px 0px #0000001A" }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center  sm:p-3 border-b border-[#E5E5E5]">
        <Link to="/">
          <img src={logo} className="h-10 md:my-1 my-3 " alt="Logo" />
        </Link>
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

export default Sidebar;
