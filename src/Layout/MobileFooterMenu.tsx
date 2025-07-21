import { cn } from "@/lib/utils";
import { Home, MessageCircle, ShoppingCart, User } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}

const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    id: "messages",
    label: "Messages",
    icon: MessageCircle,
    href: "/buyer/dashboard/messages",
  },
  {
    id: "cart",
    label: "Cart",
    icon: ShoppingCart,
    href: "/cart",
  },
  {
    id: "account",
    label: "Account",
    icon: User,
    href: "/buyer/dashboard/settings",
  },
];

interface MobileNavBarProps {
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
}

export default function MobileFooterMenu({
  activeItem = "home",
  onItemClick,
}: MobileNavBarProps) {
  const [currentActive, setCurrentActive] = useState(activeItem);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleItemClick = (itemId: string) => {
    setCurrentActive(itemId);
    onItemClick?.(itemId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide navbar if scrolling down and show it if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Hide navbar
      } else {
        setShowNavbar(true); // Show navbar
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#b5b5b5] z-50 transition-all duration-300 ease-in-out",
        showNavbar ? "translate-y-0" : "translate-y-full"
      )}
    >
      <nav className="flex items-center justify-between w-full px-4 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentActive === item.id;

          return (
            <Link to={item.href!} key={item.id}>
              <button
                onClick={() => handleItemClick(item.id)}
                className={cn(
                  "flex flex-col items-center justify-center w-full",
                  "hover:bg-gray-50 rounded-lg"
                )}
              >
                <div className="flex flex-col items-center gap-1">
                  <Icon
                    className={cn(
                      "w-6 h-6 transition-colors duration-200",
                      isActive ? "text-[#F46A39]" : "text-[#969696]"
                    )}
                  />
                  <span
                    className={cn(
                      "text-xs font-medium transition-colors duration-200",
                      isActive ? "text-[#F46A39]" : "text-[#969696]"
                    )}
                  >
                    {item.label}
                  </span>
                </div>
              </button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
