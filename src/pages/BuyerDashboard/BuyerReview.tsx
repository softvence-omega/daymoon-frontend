// components/Reviews.tsx

import PendingReviewCard from "@/components/BuyerDashboard/BuyerReviews/PendingReviewCard";
import ReviewedCard from "@/components/BuyerDashboard/BuyerReviews/ReviewedCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pendingReviews, reviewedData } from "@/lib/Buyer/buyerReviewData";

const BuyerReview = () => {
  return (
    <Tabs defaultValue="pending" className="space-y-8 w-full">
      <TabsList className="flex space-x-16 w-full">
        <TabsTrigger
          value="pending"
          className="w-full text-2xl font-semibold 
          pb-3"
        >
          Pending Reviews ({pendingReviews.length})
        </TabsTrigger>
        <TabsTrigger
          value="reviewed"
          className="w-full text-2xl font-semibold 
          pb-3"
        >
          Reviewed ({reviewedData.length})
        </TabsTrigger>
      </TabsList>

      <TabsContent value="pending">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pendingReviews.map((review, idx) => (
            <PendingReviewCard key={idx} {...review} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="reviewed">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviewedData.map((review, reviewIdx) => (
            <ReviewedCard key={reviewIdx} {...review} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default BuyerReview;
