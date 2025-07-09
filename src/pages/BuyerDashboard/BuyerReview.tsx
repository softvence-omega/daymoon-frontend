// components/Reviews.tsx
import { ReviewCard } from "@/components/BuyerDashboard/BuyerReviews/ReviewCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { buyerReviewData } from "@/lib/Buyer/buyerReviewData";

const BuyerReview = () => {
  // Separate data into pending and reviewed based on some condition
  // For this example, let's assume items before 20/06/2025 are reviewed and after are pending
  const pendingReviews = buyerReviewData.filter(
    (review) =>
      new Date(review.date.split("/").reverse().join("-")) >=
      new Date("2025-06-20")
  );

  const reviewed = buyerReviewData.filter(
    (review) =>
      new Date(review.date.split("/").reverse().join("-")) <
      new Date("2025-06-20")
  );

  return (
    <Tabs defaultValue="pending" className="space-y-8 w-full">
      <TabsList className="flex space-x-16 w-full">
        <TabsTrigger value="pending" className="w-full">
          Pending Reviews ({pendingReviews.length})
        </TabsTrigger>
        <TabsTrigger value="reviewed">Reviewed ({reviewed.length})</TabsTrigger>
      </TabsList>

      <TabsContent value="pending">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pendingReviews.map((review, index) =>
            review.products.map((product, productIndex) => (
              <ReviewCard
                key={`${index}-${productIndex}`}
                store={review.store}
                product={product.name}
                price={product.price}
                quantity={product.quantity}
                date={review.date}
                rating={review.rating}
              />
            ))
          )}
        </div>
      </TabsContent>

      <TabsContent value="reviewed">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviewed.map((review, index) =>
            review.products.map((product, productIndex) => (
              <ReviewCard
                key={`${index}-${productIndex}`}
                store={review.store}
                product={product.name}
                price={product.price}
                quantity={product.quantity}
                date={review.date}
                rating={review.rating}
              />
            ))
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default BuyerReview;
