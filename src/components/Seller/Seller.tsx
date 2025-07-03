import CommonWrapper from "@/common/CommonWrapper";
import BusinessCard from "./BusinessCard";
import ChoosePlan from "./ChoosePlan";
import Confidence from "./Confidence";
import Counter from "./Counter";
import Hero from "./Hero";
import Work from "./Work";

const Seller = () => {
  return (
    <CommonWrapper>
      <Hero />
      <Counter />
      <BusinessCard />
      <Confidence />
      <Work />
      <ChoosePlan />
    </CommonWrapper>
  );
};

export default Seller;
