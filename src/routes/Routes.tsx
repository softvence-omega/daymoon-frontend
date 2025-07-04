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
import SellerProducts from "@/pages/SellerDashboard/SellerProducts";
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
      { path: "products", element: <SellerProducts /> },
    ],
  },
]);

export default routes;
