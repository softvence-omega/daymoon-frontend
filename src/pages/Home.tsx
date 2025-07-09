import HomeTabs from "@/components/HomePage/HomeTabs";
import HowItWorks from "@/components/HomePage/HowItWorks";
import SourceDirectSection from "@/components/HomePage/SourceDirection";
import TradeWithConfidence from "@/components/HomePage/TradeWithConfident";
import TestimonialCarousel from "@/components/HomePage/WhatPeopleSays";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";
import JoinUs from "@/components/ReUseable/JoinUs";
import CommonWrapper from "../common/CommonWrapper";

const Home = () => {
  return (
    <>
      <HomeTabs />
      <CommonWrapper>
        <WhyChooseUs />
        <TradeWithConfidence />
      </CommonWrapper>
      <SourceDirectSection />
      <CommonWrapper>
        <HowItWorks />
        <TestimonialCarousel />
        <JoinUs />
      </CommonWrapper>
    </>
  );
};

export default Home;
