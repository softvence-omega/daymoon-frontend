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
import logo from "@/assets/dashboard/buyer-dashboard/logo.png";
import {
  Sidebar as SidebarRoot,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

// Define types for better reusability
export interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  badge?: string;
}

export interface SidebarProps {
  items?: SidebarItem[];
  className?: string;
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
    label: "RFQ",
    href: "/buyer/dashboard/rfq",
  },
  { icon: IoMdSettings, label: "Settings", href: "/buyer/dashboard/settings" },
];

const Sidebar: React.FC<SidebarProps> = ({
  items = defaultSidebarItems,
  
}) => {
  const location = useLocation();

  return (
    <SidebarRoot
      collapsible="offcanvas"
      className="bg-white border-r border-gray-200"
      style={
        {
          "--sidebar-width": "16rem",
          "--sidebar-width-mobile": "16rem",
          boxShadow: "3px 4px 42.3px 0px #0000001A",
        } as React.CSSProperties
      }
    >
      <div className="h-full">
        <SidebarHeader className="border-b border-[#E5E5E5] p-2 sm:p-3 bg-white">
          <div className="flex items-center justify-center">
            <img src={logo} className="w-30 md:w-32" alt="Logo" />
          </div>
        </SidebarHeader>

        <SidebarContent className="bg-white h-full">
          <SidebarMenu className="p-4 md:p-8 space-y-4 md:space-y-6">
            {items.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className={`flex items-center justify-between w-full px-3 py-2 text-sm font-normal rounded-none transition-colors border-b-2 h-auto hover:bg-transparent data-[active=true]:bg-transparent ${
                      isActive
                        ? "text-[#F7813B] border-[#F7813B]"
                        : "text-[#666666] border-transparent hover:text-[#F46A39] hover:border-[#F46A39]"
                    }`}
                  >
                    <Link
                      to={item.href}
                      className="flex items-center justify-between w-full"
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
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
      </div>
    </SidebarRoot>
  );
};

export default Sidebar;
