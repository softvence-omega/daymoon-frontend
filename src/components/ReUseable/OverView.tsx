import CommonWrapper from "@/common/CommonWrapper";
import SidebarInfo from "./SidebarInfo";
import ProductsComponent from "./ProductsComponent";
import JoinUs from "./JoinUs";

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
    <div className="my-[80px]">
      <CommonWrapper>
        <div className="flex justify-between gap-[24px]">
          <div className="w-3/4">
            <h1 className="text-[32px] font-semibold leading-[120%] uppercase text-[#000] mb-[20px]">
              Company Overview
            </h1>
            <p className="text-[16px] font-normal leading-[160%] text-jet-black mb-8">
              Lorem ipsum dolor sit amet consectetur. Nulla hac id nec at
              pellentesque maecenas faucibus. Nullam blandit tellus sapien donec
              cras leo at urna. In aliquam a in et faucibus elit tristique.
              Habitant pharetra viverra vel aenean a imperdiet. Mauris in urna
              ac natoque blandit bibendum convallis sodales eget. Diam molestie
              id curabitur vestibulum ullamcorper amet risus ac. Mi sed quisque
              at volutpat velit gravida lobortis purus odio. Vel scelerisque
              tempus orci tincidunt in turpis diam orci adipiscing. Lectus
              montes orci lectus aliquet.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
              {overviewData.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-[#E4E7EC] rounded-[20px] bg-white p-5"
                >
                  <div className="text-[17px] font-semibold text-[#181C32] mb-2">
                    {item.label}
                  </div>
                  <div className="text-[15px] text-[#666]">{item.value}</div>
                </div>
              ))}
            </div>
              <ProductsComponent/>
          </div>
          <div className="w-1/4">
            <SidebarInfo />
          </div>
        </div>
        <JoinUs/>
      </CommonWrapper>
    </div>
  );
};

export default OverView;
