import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/Layout/reusable-component/Sidebar";
import DashboardNavbar from "@/Layout/reusable-component/DashboardNavbar";

const BuyerLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Single Sidebar Component - Handles both desktop and mobile */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <DashboardNavbar
          onMobileMenuToggle={toggleSidebar}
          notificationCount={3}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default BuyerLayout;
