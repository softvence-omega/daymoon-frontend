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
import SellerLayout from "@/Layout/SellerLayout";
import SellerDashboardPage from "@/pages/SellerDashboard/SellerDashboardPage";
import SellerHelpPage from "@/pages/SellerDashboard/SellerHelpPage";
import SellerInquiriesPage from "@/pages/SellerDashboard/SellerInquiriesPage";
import SellerProductsPage from "@/pages/SellerDashboard/SellerProductsPage";
import SellerOrdersPage from "@/pages/SellerDashboard/SellerOrder/SellerOrdersPage";
import SellerPaymentPage from "@/pages/SellerDashboard/SellerPaymentPage";
import SellerAnalyticsPage from "@/pages/SellerDashboard/SellerAnalyticsPage";
import SellerPromotionPage from "@/pages/SellerDashboard/SellerPromotionPage";
import SellerRewiewPage from "@/pages/SellerDashboard/SellerRewiewPage";
import SellerSettingsPage from "@/pages/SellerDashboard/SellerSettingsPage";
import AddProductForm from "@/components/SellerDashboard/SellerProducts/AddProductForm";
import SellerInquiriesDetails from "@/pages/SellerDashboard/SellerInquiriesDetails";
import BuyerRoute from "./BuyerRoute";
import BuyerLayout from "../Layout/BuyerLayout";
import BuyerDashboardDemo from "../pages/BuyerDashboard/BuyerDashboardDemo";
import BuyerSettings from "../pages/BuyerDashboard/BuyerSettings";

import AllProduct from "@/components/SellerDashboard/SellerProducts/AllProduct";
import ProductDetails from "@/components/SellerDashboard/SellerProducts/ProductDetails/ProductDetails";
import SellerInvoiceFormPage from "@/pages/SellerDashboard/SellerInvoiceFormPage";
import Shop from "@/components/Shop/Shop";
// import BuyerOrdersPage from "@/pages/BuyerDashboard/BuyerOrdersPage";
import BuyerRFQ from "../pages/BuyerDashboard/BuyerRFQ";
import BuyerOrdersPage from "@/pages/BuyerDashboard/BuyerOrdersPage";
import BuyerReview from "@/pages/BuyerDashboard/BuyerReview";
import BuyerRefund from "@/pages/BuyerDashboard/BuyerRefund";
import BuyerOrderDetails from "@/pages/BuyerDashboard/BuyerOrderDetails";
import BuyerPayments from "@/pages/BuyerDashboard/BuyerPayments";
import BuyerMessages from "@/pages/BuyerDashboard/BuyerMessages";
import BuyerFavorites from "@/pages/BuyerDashboard/BuyerFavorites";
import BuyerHome from "@/pages/BuyerLandingPage/BuyerHome";

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
        path: "/overview",
        element: <OverViewBanner />,
      },
      // rakib demo route 
      {
        path: "/buyerHome",
        element: <BuyerHome />
      },
      // -----------
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
          {
            path: "orders",
            element: <BuyerOrdersPage />,
          },
          {
            path: "reviews",
            element: <BuyerReview />,
          },
          {
            path: "refund",
            element: <BuyerRefund />,
          },
          {
            path: "orders/:id",
            element: <BuyerOrderDetails />,
          },
          {
            path: "messages",
            element: <BuyerMessages />,
          },
          {
            path: "favorites",
            element: <BuyerFavorites />,
          },
          {
            path: "payments",
            element: <BuyerPayments />,
          },
          {
            path: "settings",
            element: <BuyerSettings />,
          },
          {
            path: "rfq",
            element: <BuyerRFQ />,
          },
        ],
      },
    ],
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
      { path: "all-products", element: <AllProduct /> },
      { path: "all-products/:title", element: <ProductDetails /> },
      { path: "orders", element: <SellerOrdersPage /> },

      // { path: "orders", element: <SellerOrdersPage /> },

      { path: "products", element: <SellerProductsPage /> },
      { path: "orders", element: <SellerOrdersPage /> },

      { path: "inquiries", element: <SellerInquiriesPage /> },
      { path: "payments", element: <SellerPaymentPage /> },
      { path: "analytics", element: <SellerAnalyticsPage /> },
      { path: "promotions", element: <SellerPromotionPage /> },
      { path: "reviews", element: <SellerRewiewPage /> },
      { path: "settings", element: <SellerSettingsPage /> },
      { path: "help", element: <SellerHelpPage /> },
      { path: "inquiries-details", element: <SellerInquiriesDetails /> },
      { path: "invoice-form", element: <SellerInvoiceFormPage /> },
    ],
  },
]);

export default routes;
