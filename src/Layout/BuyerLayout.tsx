import { Outlet } from "react-router-dom";

const BuyerLayout = () => (
  <div>
    {/* Add your seller sidebar/header here */}
    <h2>Seller Dashboard</h2>
    <Outlet />
  </div>
);

export default BuyerLayout;