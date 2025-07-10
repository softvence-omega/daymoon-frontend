import CommonWrapper from "@/common/CommonWrapper";
import SidebarInfo from "./SidebarInfo";
import OverViewTab from "./OverViewTab";

const overviewData = [
  {
    label: "Business Type",
    value: "Manufacturer, Exporter",
  },
  {
    label: "Main Products",
    value: "Electronic Components Lot Devices",
  },
  {
    label: "Factory Size",
    value: "25,000 sq meters",
  },
  {
    label: "R&D staff",
    value: "45+ Engineers",
  },
  {
    label: "OME/ODM",
    value: "Available",
  },
  {
    label: "Trade Terms",
    value: "FOB,EXW,CIF",
  },
];

const OverView = () => {
  return (
    <div className="mt-[80px] mb-[90px]">
      <CommonWrapper>
        <div className="flex flex-col lg:flex-row justify-between gap-[24px]">
          {/* Left/Main Content */}
          <div className="w-full lg:w-3/4 my-10 md:my-0 lg:my-0">
            <h1 className="text-[28px] lg:text-[32px] font-semibold leading-[120%] uppercase text-[#000] mb-[20px] text-center md:text-left lg:text-left">
              Company Overview
            </h1>
            <p className="text-[15px] lg:text-[16px] font-normal leading-[160%] text-jet-black mb-8 text-center md:text-left lg:text-left">
              Lorem ipsum dolors si amet consectetur. Nulla hac id nec at
              pellentesque maecenas faucibus. Nullam blandit tellus sapien donec
              cras leo at urna. In aliquam a in et faucibus elit tristique.
              Habitant pharetra viverra vel aenean a imperdiet. Mauris in urna
              ac natoque blandit bibendum convallis sodales eget. Diam molestie
              id curabitur vestibulum ullamcorper amet risus ac. Mi sed quisque
              at volutpat velit gravida lobortis purus odio. Vel scelerisque
              tempus orci tincidunt in turpis diam orci adipiscing. Lectus
              montes orci lectus aliquet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] py-6 md:py-0 lg:py-0 ">
              {overviewData.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-[#E4E7EC] rounded-[20px] bg-white p-5"
                >
                  <div className="text-[16px] font-semibold text-[#181C32] mb-2">
                    {item.label}
                  </div>
                  <div className="text-[14px] text-[#666]">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <OverViewTab />
            </div>
          </div>

          {/* Right/Sidebar */}
          <div className="w-full lg:w-1/4">
            <SidebarInfo />
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default OverView;
