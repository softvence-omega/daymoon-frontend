import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/Layout/reusable-component/Sidebar";
import DashboardNavbar from "@/Layout/reusable-component/DashboardNavbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const BuyerLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}

      <div className="hidden lg:flex md:w-64 md:flex-col">
        <div className="border-r border-gray-200 h-full">
          <Sidebar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <DashboardNavbar
          onMobileMenuToggle={handleMobileMenuToggle}
          notificationCount={3}
        />

        {/* Mobile SellerSidebar */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <div className="hidden" />
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default BuyerLayout;
