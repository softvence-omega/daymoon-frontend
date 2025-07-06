import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SellerDashboardNavbar from "@/components/SellerDashboard/Shared/SellerDashboardNavbar";
import SellerSidebar from "@/components/SellerDashboard/Shared/SellerSidebar";

const SellerLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { pathname } = useLocation();

  const hide = [
    "/seller-dashboard/add-product",
    "/seller-dashboard/all-products",
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      {!hide.includes(pathname) && (
        <div className="hidden lg:flex md:w-64 md:flex-col">
          <div className="border-r border-gray-200 h-full">
            <SellerSidebar />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <SellerDashboardNavbar
          onMobileMenuToggle={handleMobileMenuToggle}
          notificationCount={3}
        />

        {/* Mobile SellerSidebar */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <div className="hidden" />
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SellerSidebar />
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

export default SellerLayout;
