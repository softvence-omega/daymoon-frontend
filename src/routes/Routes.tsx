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
import BuyerSettings from "@/pages/BuyerDashboard/BuyerSettings";
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
      {
        path: "/buyer",
        element: <BuyerRoute />, 
        children: [
          {
            path: "dashboard",
            element: <BuyerLayout />, 
            children: [
             {
               path: "settings",
               element: <BuyerSettings/>
             }

            ],
          },
        ],
      },
      
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
]);

export default routes;
