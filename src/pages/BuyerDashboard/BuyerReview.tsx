// components/Reviews.tsx

import PendingReviewCard from "@/components/BuyerDashboard/BuyerReviews/PendingReviewCard";
import ReviewedCard from "@/components/BuyerDashboard/BuyerReviews/ReviewedCard";
import Breadcrumbs from "@/components/SellerDashboard/SellerProducts/Breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pendingReviews, reviewedData } from "@/lib/Buyer/buyerReviewData";

const BuyerReview = () => {
  return (
    <div>
      <div className="mb-12">
        <Breadcrumbs title="Orders" subtitle="Refund Requests" />
      </div>
      <Tabs defaultValue="pending" className="space-y-8 w-full">
        <TabsList className="flex gap-4 md:space-x-16 w-full">
          <TabsTrigger
            value="pending"
            className="w-full   md:text-2xl font-semibold 
          pb-3"
          >
            Pending Reviews ({pendingReviews.length})
          </TabsTrigger>
          <TabsTrigger
            value="reviewed"
            className="w-full   md:text-2xl  font-semibold 
          pb-3"
          >
            Reviewed ({reviewedData.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <div className="grid grid-cols-1 xl:grid-cols-2  lg:grid-cols-1 gap-4">
            {pendingReviews.map((review, idx) => (
              <PendingReviewCard key={idx} {...review} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviewed">
          <div className="grid grid-cols-1 lg:grid-cols-1  xl:grid-cols-2 gap-4">
            {reviewedData.map((review, reviewIdx) => (
              <ReviewedCard key={reviewIdx} {...review} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BuyerReview;
