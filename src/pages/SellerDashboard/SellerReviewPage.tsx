import DashboardCommonSpace from "@/common/DashboardCommonSpace";
import SearchFilter from "@/components/SellerDashboard/SellerOrder/SearchFilter";
import MonthlyRevenue from "@/components/SellerDashboard/SellerProducts/ProductDetails/MonthlyRevenue";
import ReviewFeedback from "@/components/SellerDashboard/SellerProducts/ProductDetails/ReviewFeedback";
import ReviewNavbar from "@/components/SellerDashboard/SellerReview/ReviewNavbar";

const SellerReviewPage = () => {
  return (
    <div>
      <ReviewNavbar />
      <DashboardCommonSpace>
        <SearchFilter />
      </DashboardCommonSpace>
      <div className=" border border-foundation-white rounded-2xl p-6 bg-white">
        {" "}
        <MonthlyRevenue />
      </div>

      <DashboardCommonSpace>
        <ReviewFeedback />
      </DashboardCommonSpace>
    </div>
  );
};

export default SellerReviewPage;
