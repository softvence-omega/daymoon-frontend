import CommonWrapper from "@/common/CommonWrapper";
import SellerHeader from "./SellerHeader";
import CommonSpace from "@/common/CommonSpace";
import arrow from "../../assets/landing/arrow.svg";
import SellWithUsSection from "./SellWithUsSection";
import ConsultationSection from "./ConsultationSection";
import SubHeader from "@/common/SubHeader";
import CommonHeader from "@/common/CommonHeader";
import frame1 from "../../../src/assets/landing/f1.svg";
import frame2 from "../../../src/assets/landing/f2.svg";
import frame3 from "../../../src/assets/landing/f3.svg";
import frame4 from "../../../src/assets/landing/d.svg";
import ChoosePlan from "@/common/ChoosePlan";

const WorkList = [
  {
    id: 1,
    title: "Register",
    label: "Sign up and create your profile",
    icon: frame1,
    style: "bg-[#0060FF] shadow-[1px_20px_18px_rgba(0,96,255,0.2)]",
  },
  {
    id: 2,
    title: "Add Products",
    label: "Upload product photos & details",
    icon: frame3,
    style: "bg-[#00FF99] shadow-[1px_20px_18px_0px_rgba(0,255,153,0.2)]",
  },
  {
    id: 3,
    title: "Receive Orders",
    label: "Manage and track sales",
    icon: frame4,
    style: "bg-[#FFC300] shadow-[1px_20px_18.9px_0px_rgba(255,195,0,0.2)]",
  },
  {
    id: 4,
    title: "Earn & Grow",
    label: "Get paid and expand globally",
    icon: frame2,
    style: "bg-[#FF6A00] shadow-[1px_20px_18px_0px_rgba(255,106,0,0.2)",
  },
];

const Work = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <CommonSpace>
        <CommonWrapper>
          <SellerHeader className="text-center">How IT WORKS</SellerHeader>
          <CommonSpace>
            <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6">
              {WorkList.map((work, idx) => {
                const isLast = idx === WorkList.length - 1;
                return (
                  <div key={work.id} className="flex items-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div
                        className={`w-16 h-16 rounded-full ${work.style} flex items-center justify-center`}
                      >
                        <img
                          className="w-8 h-8 object-contain"
                          src={work.icon}
                          alt={work.title}
                        />
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
