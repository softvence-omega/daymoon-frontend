import CommonWrapper from "@/common/CommonWrapper";
import HomeTabs from "@/components/HomePage/HomeTabs";
import HowItWorks from "@/components/HomePage/HowItWorks";
import SourceDirectSection from "@/components/HomePage/SourceDirection";
import TestimonialCarousel from "@/components/HomePage/WhatPeopleSays";
import JoinUs from "@/components/ReUseable/JoinUs";

const Home = () => {
  return (
    <>
      <HomeTabs />
      <SourceDirectSection />
      <CommonWrapper>
        <HowItWorks />
        <TestimonialCarousel />
        <div className="my-32">
          <JoinUs />
        </div>
      </CommonWrapper>
    </>
  );
};

export default Home;
