import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const BuyerRoute = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  // Check if the user is logged in and is a seller
//    if (!user || user.role !== "buyer") {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default BuyerRoute;