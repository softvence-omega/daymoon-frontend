// components/Reviews.tsx
import { ReviewCard } from "@/components/BuyerDashboard/BuyerReviews/ReviewCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const BuyerReview = () => {
  return (
    <Tabs defaultValue="pending" className="space-y-8 w-full">
      <TabsList className="flex space-x-16 w-full">
        <TabsTrigger value="pending" className="w-full">
          Pending Reviews
        </TabsTrigger>
        <TabsTrigger value="reviewed">Reviewed</TabsTrigger>
      </TabsList>

      <TabsContent value="pending">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ReviewCard
            store="Fitness Zone"
            product="Bluetooth Wireless Earbuds"
            price={1200}
            quantity={10}
            date="17/06/2025"
            rating={4}
          />
          <ReviewCard
            store="Tech Haven"
            product="Noise Cancelling Headphones"
            price={1500}
            quantity={5}
            date="18/06/2025"
            rating={5}
          />
          <ReviewCard
            store="Gadget World"
            product="Smart Watch Series 6"
            price={2500}
            quantity={8}
            date="19/06/2025"
            rating={3}
          />
        </div>
      </TabsContent>

      <TabsContent value="reviewed">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ReviewCard
            store="Home Appliances"
            product="Robot Vacuum Cleaner"
            price={3000}
            quantity={3}
            date="20/06/2025"
            rating={5}
          />
          <ReviewCard
            store="Outdoor Gear"
            product="Camping Tent 4-Person"
            price={5000}
            quantity={2}
            date="21/06/2025"
            rating={4}
          />
          <ReviewCard
            store="Kitchen Essentials"
            product="Air Fryer Max XL"
            price={2000}
            quantity={6}
            date="22/06/2025"
            rating={4}
          />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default BuyerReview;
