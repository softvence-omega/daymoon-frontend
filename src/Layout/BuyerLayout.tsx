import DashboardNavbar from "@/Layout/reusable-component/DashboardNavbar";
import Sidebar from "@/Layout/reusable-component/Sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

const BuyerLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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
        <div className="md:block fixed inset-0 z-20 lg:relative">
          <DashboardNavbar
            onMobileMenuToggle={handleMobileMenuToggle}
            notificationCount={3}
          />
        </div>

        {/* Mobile Sidebar */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild></SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>

        {/* Page Content */}
        <main className="flex-1 mt-16  z-40 overflow-auto p-6 md:p-10">
          <Outlet />
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            theme="light"
            transition={Bounce}
          />
        </main>
      </div>
    </div>
  );
};

export default BuyerLayout;
