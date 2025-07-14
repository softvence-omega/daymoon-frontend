import DashboardCommonSpace from "@/common/DashboardCommonSpace";
import DashboardSpaceBottom from "@/common/DashboardSpaceBottom";
import MonthlyRevenue from "@/components/SellerDashboard/SellerProducts/ProductDetails/MonthlyRevenue";
import ReviewFeedback from "@/components/SellerDashboard/SellerProducts/ProductDetails/ReviewFeedback";
import ReviewCard from "@/components/SellerDashboard/SellerReview/ReviewCard";
import ReviewNavbar from "@/components/SellerDashboard/SellerReview/ReviewNavbar";

const SellerReviewPage = () => {
  return (
    <div>
      <ReviewNavbar />
      <DashboardSpaceBottom>
        <ReviewCard />
      </DashboardSpaceBottom>
      <div className=" border border-foundation-white rounded-2xl p-4 sm:p-6 bg-white">
        <MonthlyRevenue title="Review Analytics" />
      </div>

      <DashboardCommonSpace>
        <ReviewFeedback />
      </DashboardCommonSpace>
    </div>
  );
};

export default SellerReviewPage;
