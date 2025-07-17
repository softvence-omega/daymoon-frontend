import CommonWrapper from "@/common/CommonWrapper";
import DashboardCommonSpace from "@/common/DashboardCommonSpace";
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
        <DashboardCommonSpace className="py-16">
          <JoinUs />
        </DashboardCommonSpace>
      </CommonWrapper>
    </>
  );
};

export default Home;
