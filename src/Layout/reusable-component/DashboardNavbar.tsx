import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Menu, ShoppingCart } from "lucide-react";
import { FiSearch } from "react-icons/fi";

export interface NavbarProps {
  onMobileMenuToggle: () => void;
  notificationCount?: number;
  cartItems?: number;
  userName?: string;
  userRole?: string;
  userAvatar?: string;
  userInitials?: string;
}

const DashboardNavbar: React.FC<NavbarProps> = ({
  onMobileMenuToggle,
  notificationCount = 20,
  cartItems = 5,
  userRole = "Buyer",
  userName = "John Doe",
  userAvatar = "/placeholder-avatar.jpg",
  userInitials = "JD",
}) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-10 py-3">
      <div className="flex items-center justify-between">
        {/* Left Side - Mobile Menu & Title */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMobileMenuToggle}
          >
            <Menu className="w-5 h-5" />
          </Button>

          {/* User Info */}
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8 md:w-10 md:h-10 border">
              <AvatarImage src={userAvatar} alt="User" />
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
            <div className="hidden lg:block">
              <p className="text-lg font-medium text-[#1A1A1A]">{userName}</p>
              <p className="text-sm font-medium text-[#6A6A6A]">{userRole}</p>
            </div>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="hidden sm:block w-full sm:w-[451px] mx-auto px-4">
            <div className="flex items-center w-full h-12 px-4 gap-3 border border-[#E5E5E5] rounded-full bg-white">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow outline-none bg-transparent text-gray-700 placeholder-gray-400"
              />
              <button className="w-8 h-8 flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors duration-200">
                <FiSearch size={16} />
              </button>
            </div>
          </div>

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            className="relative cursor-pointer"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItems > 0 && (
              <Badge
                // variant="destructive"
                className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs p-0"
              >
                {cartItems}
              </Badge>
            )}
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative cursor-pointer"
          >
            <Bell className="w-6 h-6" />
            {notificationCount > 0 && (
              <Badge
                // variant="destructive"
                className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs p-0"
              >
                {notificationCount > 99 ? "99+" : notificationCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
