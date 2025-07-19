import CommonWrapper from "@/common/CommonWrapper";
import DashboardCommonSpace from "@/common/DashboardCommonSpace";
import HomeTabs from "@/components/HomePage/HomeTabs";
import HowItWorks from "@/components/HomePage/HowItWorks";
import SourceDirectSection from "@/components/HomePage/SourceDirection";
import TestimonialCarousel from "@/components/HomePage/WhatPeopleSays";
import GlobalSearchBar from "@/components/ReUseable/GlobalSearchBar";
import JoinUs from "@/components/ReUseable/JoinUs";

const Home = () => {
  return (
    <>
      <CommonWrapper>
        <div className=" lg:hidden block  ">
          <GlobalSearchBar />
        </div>
      </CommonWrapper>
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
