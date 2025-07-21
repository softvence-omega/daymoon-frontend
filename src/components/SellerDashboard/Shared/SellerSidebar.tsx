import logo from "@/assets/Navbar/Pangeti-logo.png";
import { Badge } from "@/components/ui/badge";
import { Home } from "lucide-react";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import {
  MdGridView,
  MdOutlineCreditCard,
  MdOutlineMessage,
  MdOutlineRateReview,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

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
  onItemClick?: () => void;
}

const defaultSidebarItems: SidebarItem[] = [
  { icon: MdGridView, label: "Dashboard", href: "/seller-dashboard/dashboard" },
  { icon: Home, label: "Home", href: "/" },
  { icon: FaTruck, label: "Products", href: "/seller-dashboard/products" },
  { icon: MdOutlineMessage, label: "Orders", href: "/seller-dashboard/orders" },
  {
    icon: MdOutlineCreditCard,
    label: "Inquiries",
    href: "/seller-dashboard/inquiries",
  },
  { icon: FaRegHeart, label: "Payments", href: "/seller-dashboard/payments" },
  {
    icon: MdOutlineRateReview,
    label: "Analytics",
    href: "/seller-dashboard/analytics",
  },
  {
    icon: GrAnnounce,
    label: "Promotions",
    href: "/seller-dashboard/promotions",
  },
  { icon: FaRegStar, label: "Reviews", href: "/seller-dashboard/reviews" },
  {
    icon: IoSettingsOutline,
    label: "Settings",
    href: "/seller-dashboard/settings",
  },
  {
    icon: IoMdHelpCircleOutline,
    label: "Help",
    href: "/seller-dashboard/help",
  },
];

const SellerSidebar: React.FC<SidebarProps> = ({
  items = defaultSidebarItems,
  onItemClick,
}) => {
  const location = useLocation();

  return (
    <div
      className="flex flex-col h-full bg-white"
      style={{ boxShadow: "3px 4px 42.3px 0px #0000001A" }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center p-2 sm:p-3 border-b border-[#E5E5E5]">
        <Link to="/">
          <img src={logo} className="w-30 md:w-32 pt-1 pb-2" alt="Logo" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="space-y-4 md:space-y-6">
          {items.map((item) => {
            const isDashboard = item.label === "Dashboard";
            const isActive =
              item.href !== "/" &&
              (location.pathname === item.href ||
                location.pathname.startsWith(item.href) ||
                (isDashboard && location.pathname === "/seller-dashboard"));

            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={onItemClick}
                className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium transition-colors border-b-2 ${
                  isActive
                    ? "text-[#F7813B] border-[#F7813B]"
                    : "text-[#666666] border-transparent hover:text-[#F46A39] hover:border-[#F46A39]"
                }`}
              >
                <div className="flex items-center space-x-2 md:text-lg">
                  <item.icon
                    className={`w-5 h-5 transition-colors ${
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
