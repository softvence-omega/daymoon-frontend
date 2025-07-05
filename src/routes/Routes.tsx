import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AdminRoute from "./AdminRoutes";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import BuyerSignup from "@/components/Authentication/BuyerSignup";
import OverViewBanner from "@/components/ReUseable/OverViewBanner";
import SellerRegistration from "@/components/Authentication/seller/SellerRegistration";
import Seller from "@/components/Seller/Seller";

import BuyerRoute from "./BuyerRoute";
import BuyerLayout from "@/Layout/BuyerLayout";
import BuyerDashboardDemo from "@/pages/BuyerDashboard/BuyerDashboardDemo";
import BuyerSettings from '@/pages/BuyerDashboard/BuyerSettings';

import SellerLayout from "@/Layout/SellerLayout";
import SellerDashboardPage from "@/pages/SellerDashboard/SellerDashboardPage";
import SellerProductsPage from "@/pages/SellerDashboard/SellerProductsPage";
import SellerOrdersPage from "@/pages/SellerDashboard/SellerOrdersPage";
import SellerInquiriesPage from "@/pages/SellerDashboard/SellerInquiriesPage";
import SellerPaymentPage from "@/pages/SellerDashboard/SellerPaymentPage";
import SellerAnalyticsPage from "@/pages/SellerDashboard/SellerAnalyticsPage";
import SellerPromotionPage from "@/pages/SellerDashboard/SellerPromotionPage";
import SellerRewiewPage from "@/pages/SellerDashboard/SellerRewiewPage";
import SellerSettingsPage from "@/pages/SellerDashboard/SellerSettingsPage";
import SellerHelpPage from "@/pages/SellerDashboard/SellerHelpPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "seller",
        element: <Seller />,
      },
      // --------------
      // extra add
      {
        path: "overview",
        element: <OverViewBanner />,
      },
      // -------------------
      {
        path: "/admin",
        element: <AdminRoute />, // This will check if the user is an admin
        children: [
          { path: "", element: <AdminDashboard /> }, // Admin Dashboard
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "signup-buyer",
    element: <BuyerSignup />,
  },

  {
    path: "signup-seller",
    element: <SellerRegistration />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  /* Seller */

  {
    path: "/sellerdashboard",
    element: <SellerLayout />,
    children: [
      { index: true, element: <SellerDashboardPage /> },
      { path: "dashboard", element: <SellerDashboardPage /> },
      { path: "products", element: <SellerProductsPage /> },
      { path: "orders", element: <SellerOrdersPage /> },
      { path: "inquiries", element: <SellerInquiriesPage /> },
      { path: "payments", element: <SellerPaymentPage /> },
      { path: "analytics", element: <SellerAnalyticsPage /> },
      { path: "promotions", element: <SellerPromotionPage /> },
      { path: "reviews", element: <SellerRewiewPage /> },
      { path: "settings", element: <SellerSettingsPage /> },
      { path: "help", element: <SellerHelpPage /> },
    ],
  },
]);

export default routes;
