import CommonWrapper from "@/common/CommonWrapper";
import Banner from "@/components/About/Banner";
import Core from "@/components/About/Core";
import Facts from "@/components/About/Facts";
import Founders from "@/components/About/Founders";
import JoinUs from "@/components/About/JoinUs";
import Story from "@/components/About/Story";

const About = () => {
  return (
    <div className="">
      <CommonWrapper>
        <Banner/>
        <Story/>
        <Core/>
        <Facts/>
        <Founders/>
        <JoinUs/>
      </CommonWrapper>
    </div>
  );
};

export default About;
