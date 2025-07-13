import BuyerSignup from "@/components/Authentication/BuyerSignup";
import SellerRegistration from "@/components/Authentication/seller/SellerRegistration";
import OverViewBanner from "@/components/ReUseable/OverViewBanner";
import Seller from "@/components/Seller/Seller";
import AddProductForm from "@/components/SellerDashboard/SellerProducts/AddProductForm";
import SellerLayout from "@/Layout/SellerLayout";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Login";
import SellerAnalyticsPage from "@/pages/SellerDashboard/SellerAnalyticsPage";
import SellerDashboardPage from "@/pages/SellerDashboard/SellerDashboardPage";
import SellerHelpPage from "@/pages/SellerDashboard/SellerHelpPage";
import SellerInquiriesDetails from "@/pages/SellerDashboard/SellerInquiriesDetails";
import SellerInquiriesPage from "@/pages/SellerDashboard/SellerInquiriesPage";
import SellerOrdersPage from "@/pages/SellerDashboard/SellerOrder/SellerOrdersPage";
import SellerPaymentPage from "@/pages/SellerDashboard/SellerPaymentPage";
import SellerProductsPage from "@/pages/SellerDashboard/SellerProductsPage";
import SellerPromotionPage from "@/pages/SellerDashboard/SellerPromotionPage";
import SellerReviewPage from "@/pages/SellerDashboard/SellerReviewPage";
import SellerSettingsPage from "@/pages/SellerDashboard/SellerSettingsPage";
import Signup from "@/pages/Signup";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BuyerLayout from "../Layout/BuyerLayout";
import About from "../pages/About";
import BuyerDashboardDemo from "../pages/BuyerDashboard/BuyerDashboardDemo";
import BuyerSettings from "../pages/BuyerDashboard/BuyerSettings";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AdminRoute from "./AdminRoutes";
import BuyerRoute from "./BuyerRoute";

import ProductDetails from "@/components/SellerDashboard/SellerProducts/ProductDetails/ProductDetails";
import Shop from "@/components/Shop/Shop";
import SellerInvoiceFormPage from "@/pages/SellerDashboard/SellerInvoiceFormPage";
// import BuyerOrdersPage from "@/pages/BuyerDashboard/BuyerOrdersPage";
import IndividualProduct from "@/components/SingleProduct/IndividualProduct";
import BuyerHome from "@/pages/BuyerLandingPage/BuyerHome";
import ProductCategories from "@/pages/BuyerLandingPage/ProductCategories";
import ProductFilter from "@/pages/BuyerLandingPage/ProductFilter";
import BuyerRFQ from "../pages/BuyerDashboard/BuyerRFQ";

import OrderDetails from "@/components/SellerDashboard/SellerOrder/OrderDetails/OrderDetails";

import BuyerProfile from "@/components/SellerDashboard/SellerOrder/Profile/BuyerProfile";
import BuyerFavorites from "@/pages/BuyerDashboard/BuyerFavorites";
import BuyerMessages from "@/pages/BuyerDashboard/BuyerMessages";
import BuyerOrderDetails from "@/pages/BuyerDashboard/BuyerOrderDetails";
import BuyerOrdersPage from "@/pages/BuyerDashboard/BuyerOrdersPage";
import BuyerPayments from "@/pages/BuyerDashboard/BuyerPayments";
import BuyerRefund from "@/pages/BuyerDashboard/BuyerRefund";
import BuyerReview from "@/pages/BuyerDashboard/BuyerReview";
import SupplierProfileDetails from "@/pages/BuyerLandingPage/SupplierProfileDetails";
import CreatePromotionPage from "@/pages/SellerDashboard/CreatePromotionPage";

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
        path: "/seller",
        element: <Seller />,
      },
      {
        path: "/single",
        element: <IndividualProduct />,
      },

      {
        path: "/overview",
        element: <OverViewBanner />,
      },
      // rakib demo route for buyer
      {
        path: "/buyerHome",
        element: <BuyerHome />,
      },
      {
        path: "/buyerHome/:slug",
        element: <ProductCategories />,
      },
      {
        path: "/buyerHome/:slug/:subCategory",
        element: <ProductFilter />,
      },
      {
        path: "/suppliersDetails",
        element: <SupplierProfileDetails />,
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
    path: "buyer-signup",
    element: <BuyerSignup />,
  },

  {
    path: "seller-signup",
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
            path: "orders/reviews",
            element: <BuyerReview />,
          },
          {
            path: "orders/refund",
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
      { path: "all-products", element: <SellerProductsPage /> },
      { path: "add-product", element: <AddProductForm /> },
      { path: "all-products/:title", element: <ProductDetails /> },
      { path: "orders", element: <SellerOrdersPage /> },
      { path: "all-orders", element: <SellerOrdersPage /> },
      { path: "all-orders/:id", element: <OrderDetails /> },
      { path: "all-orders/:id/buyer-profile", element: <BuyerProfile /> },

      { path: "inquiries", element: <SellerInquiriesPage /> },
      { path: "payments", element: <SellerPaymentPage /> },
      { path: "analytics", element: <SellerAnalyticsPage /> },
      { path: "promotions", element: <SellerPromotionPage /> },
      { path: "reviews", element: <SellerReviewPage /> },
      { path: "settings", element: <SellerSettingsPage /> },
      { path: "help", element: <SellerHelpPage /> },
      { path: "inquiries-details", element: <SellerInquiriesDetails /> },
      { path: "invoice-form", element: <SellerInvoiceFormPage /> },
      { path: "create-promotion", element: <CreatePromotionPage /> },
    ],
  },
]);

export default routes;
