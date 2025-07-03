import {
  Home,
  ShoppingCart,
  Heart,
  Package,
  CreditCard,
  Star,
  MessageSquare,
  Settings,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

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
  { icon: Home, label: "Dashboard", href: "/buyer/dashboard" },
  { icon: Package, label: "Orders", href: "/buyer/dashboard/orders" },
  {
    icon: MessageSquare,
    label: "Messages",
    href: "/buyer/dashboard/messages",
  },
  { icon: CreditCard, label: "Payments", href: "/buyer/dashboard/payments" },
  { icon: ShoppingCart, label: "Favorites", href: "/buyer/dashboard/cart" },
  { icon: Heart, label: "Buying Leads", href: "/buyer/dashboard/wishlist" },
  { icon: Star, label: "Reviews", href: "/buyer/dashboard/reviews" },
  { icon: Settings, label: "Settings", href: "/buyer/dashboard/settings" },
];

const Sidebar: React.FC<SidebarProps> = ({
  items = defaultSidebarItems,
  brandName = "DayMoon",
}) => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Logo */}
      <div className="flex items-center justify-center p-6 border-b">
        <h2 className="text-xl font-bold text-primary">{brandName}</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <Badge variant="secondary" className="text-xs">
                  {item.badge}
                </Badge>
              )}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
