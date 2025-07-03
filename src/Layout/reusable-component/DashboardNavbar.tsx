import { Menu, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface NavbarProps {
  onMobileMenuToggle: () => void;
  title?: string;
  searchPlaceholder?: string;
  notificationCount?: number;
  userName?: string;
  userAvatar?: string;
  userInitials?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
  showUserInfo?: boolean;
}

const DashboardNavbar: React.FC<NavbarProps> = ({
  onMobileMenuToggle,
  title = "Dashboard",
  searchPlaceholder = "Search...",
  notificationCount = 0,
  userName = "John Doe",
  userAvatar = "/placeholder-avatar.jpg",
  userInitials = "JD",
  showSearch = true,
  showNotifications = true,
  showUserInfo = true,
}) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left Side - Mobile Menu & Title */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onMobileMenuToggle}
          >
            <Menu className="w-5 h-5" />
          </Button>

          {/* Page Title */}
          <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          {showSearch && (
            <div className="hidden sm:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Notifications */}
          {showNotifications && (
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              {notificationCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs p-0"
                >
                  {notificationCount > 99 ? "99+" : notificationCount}
                </Badge>
              )}
            </Button>
          )}

          {/* User Menu */}
          {showUserInfo && (
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src={userAvatar} alt="User" />
                <AvatarFallback>{userInitials}</AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{userName}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;