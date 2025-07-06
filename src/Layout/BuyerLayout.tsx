import { Outlet } from "react-router-dom";
import Sidebar from "@/Layout/reusable-component/Sidebar";
import DashboardNavbar from "@/Layout/reusable-component/DashboardNavbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

const BuyerLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <SidebarInset className="flex-1 flex flex-col min-h-screen">
          {/* Top Navbar */}
          <DashboardNavbar notificationCount={3} />

          {/* Page Content - Optimized for mobile scrolling */}
          <main className="flex-1 overflow-auto p-6 md:p-10 -webkit-overflow-scrolling-touch">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default BuyerLayout;