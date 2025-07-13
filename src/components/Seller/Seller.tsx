import CommonWrapper from "@/common/CommonWrapper";
import JoinUs from "../ReUseable/JoinUs";
import BusinessCard from "./BusinessCard";
import Confidence from "./Confidence";
import Counter from "./Counter";
import Hero from "./Hero";
import Work from "./Work";
import CommonSpaceBottom from "@/common/CommonSpaceBottom";

const Seller = () => {
  return (
    <div className=" bg-[#FCFCFC] w-full">
      <Hero />
      <Counter />
      <BusinessCard />
      <Confidence />
      <Work />
      <CommonWrapper>
        <CommonSpaceBottom>
          <JoinUs />
        </CommonSpaceBottom>
      </CommonWrapper>
    </div>
  );
};

export default Seller;
