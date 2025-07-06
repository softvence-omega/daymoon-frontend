import BuyerSignup from "@/components/Authentication/BuyerSignup";
import SellerRegistration from "@/components/Authentication/seller/SellerRegistration";
import OverViewBanner from "@/components/ReUseable/OverViewBanner";
import Seller from "@/components/Seller/Seller";
import AddProductForm from "@/components/SellerDashboard/SellerProducts/AddProductForm";
import Shop from "@/components/Shop/Shop";
import SellerLayout from "@/Layout/SellerLayout";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Login";
import SellerAnalyticsPage from "@/pages/SellerDashboard/SellerAnalyticsPage";
import SellerDashboardPage from "@/pages/SellerDashboard/SellerDashboardPage";
import SellerHelpPage from "@/pages/SellerDashboard/SellerHelpPage";
import SellerInquiriesDetails from "@/pages/SellerDashboard/SellerInquiriesDetails";
import SellerInquiriesPage from "@/pages/SellerDashboard/SellerInquiriesPage";
import SellerInvoiceFormPage from "@/pages/SellerDashboard/SellerInvoiceFormPage";
import SellerOrdersPage from "@/pages/SellerDashboard/SellerOrder/SellerOrdersPage";
import SellerPaymentPage from "@/pages/SellerDashboard/SellerPaymentPage";
import SellerProductsPage from "@/pages/SellerDashboard/SellerProductsPage";
import Signup from "@/pages/Signup";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AdminRoute from "./AdminRoutes";
import BuyerRoute from "./BuyerRoute";
// import BuyerOrdersPage from "@/pages/BuyerDashboard/BuyerOrdersPage";

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
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "seller",
        element: <Seller />,
      },
      {
        path: "/buyer",
        element: <BuyerRoute />,
        children: [
          {
            path: "dashboard",
            element: <BuyerLayout />,
            children: [
              {
                path: "",
                element: <BuyerDashboardDemo />,
              },
              // {
              //   path: "orders",
              //   element: <BuyerOrdersPage />,
              // },
              {
                path: "settings",
                element: <BuyerSettings />,
              },
            ],
          },
        ],
      },
      {
        path: "/overview",
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
    path: "/seller-dashboard",
    element: <SellerLayout />,
    children: [
      { index: true, element: <SellerDashboardPage /> },
      { path: "dashboard", element: <SellerDashboardPage /> },
      {
        path: "products",
        element: <SellerProductsPage />,
      },
      { path: "add-product", element: <AddProductForm /> },
      // { path: "orders", element: <SellerOrdersPage /> },

      { path: "products", element: <SellerProductsPage /> },
      { path: "orders", element: <SellerOrdersPage /> },

      { path: "inquiries", element: <SellerInquiriesPage /> },
      { path: "payments", element: <SellerPaymentPage /> },
      { path: "analytics", element: <SellerAnalyticsPage /> },
      { path: "promotions", element: <SellerPromotionPage /> },
      { path: "reviews", element: <SellerRewiewPage /> },
      { path: "settings", element: <SellerSettingsPage /> },
      // { path: "help", element: <SellerHelpPage /> },
      { path: "help", element: <SellerInquiriesDetails /> },
    ],
  },
]);

export default routes;
