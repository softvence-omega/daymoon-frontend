import CommonWrapper from "@/common/CommonWrapper";
import SellerHeader from "./SellerHeader";
import { IoPersonSharp } from "react-icons/io5";
import CommonSpace from "@/common/CommonSpace";
import arrow from "../../assets/landing/arrow.svg";
import SellWithUsSection from "./SellWithUsSection";
import ConsultationSection from "./ConsultationSection";
import ChoosePlan from "@/common/ChoosePlan";
import SubHeader from "@/common/SubHeader";
import CommonHeader from "@/common/CommonHeader";

const WorkList = [
  {
    id: 1,
    title: "Register",
    label: "Sign up and create your profile",
    icon: IoPersonSharp,
    style: "drop-shadow(1px 20px 18px rgba(0, 96, 255, 0.20))",
  },
  {
    id: 2,
    title: "Add Products",
    label: "Upload product photos & details",
    icon: IoPersonSharp,
    style: "1px 20px 18px 0px rgba(0, 255, 153, 0.20)",
  },
  {
    id: 3,
    title: "Receive Orders",
    label: "Manage and track sales",
    icon: IoPersonSharp,
    style: "1px 20px 18.9px 0px rgba(255, 195, 0, 0.20)",
  },
  {
    id: 4,
    title: "Earn & Grow",
    label: "Get paid and expand globally",
    icon: IoPersonSharp,
    style: "1px 20px 18px 0px rgba(0, 255, 153, 0.20)",
  },
];

const Work = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <CommonSpace>
        <CommonWrapper>
          <SellerHeader className="text-center">How IT WORKS</SellerHeader>
          <CommonSpace>
            <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 place-items-center">
              {WorkList.map((work, idx) => {
                const isLast = idx === WorkList.length - 1;
                return (
                  <div key={work.id} className="flex items-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div
                        className={`bg-blue-500 p-4 rounded-full  shadow-[1px_20px_18px_rgba(0,255,153,0.20)]`}
                      >
                        <span className="text-white text-xl">
                          <work.icon />
                        </span>
                      </div>
                      <div className="text-center">
                        <CommonHeader className=" font-semibold leading-12 tracking-tight">
                          {work.title}
                        </CommonHeader>
                        <SubHeader>{work.label}</SubHeader>
                      </div>
                    </div>

                    {/* Conditionally render the arrow */}
                    {!isLast && (
                      <div className="ml-4 hidden lg:block">
                        <img src={arrow} alt="" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CommonSpace>

          <SellWithUsSection />
          <ConsultationSection />
          <ChoosePlan />
        </CommonWrapper>
      </CommonSpace>
    </div>
  );
};

export default Work;
