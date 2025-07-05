import { Outlet } from "react-router-dom";
import Sidebar from "@/Layout/reusable-component/Sidebar";
import DashboardNavbar from "@/Layout/reusable-component/DashboardNavbar";

const BuyerLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="border-r border-gray-200 h-full">
          <Sidebar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <DashboardNavbar notificationCount={3} />

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 md:p-10 pb-24 lg:pb-10">
          <Outlet />
        </main>

        {/* Mobile Bottom Navigation - Fixed at bottom */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white md:hidden">
          <Sidebar mobileView={true} />
        </div>
      </div>
    </div>
  );
};

export default BuyerLayout;
