import CommonWrapper from "@/common/CommonWrapper";
import Banner from "@/components/About/Banner";
import Core from "@/components/About/Core";
import Facts from "@/components/About/Facts";
import Founders from "@/components/About/Founders";
import Story from "@/components/About/Story";
import JoinUs from "@/components/ReUseable/JoinUs";


import JoinUs from "@/components/ReUseable/JoinUs";

const About = () => {
  return (
    <div className="">
      <CommonWrapper>
        <Banner />
        <Story />
        <Core />
        <Facts />
        <Founders />
        <JoinUs />
      </CommonWrapper>
    </div>
  );
};

export default About;
