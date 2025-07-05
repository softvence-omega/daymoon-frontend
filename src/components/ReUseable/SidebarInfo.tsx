import { FiUser, FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import verify from "../../assets/Icon/verified.svg";

const contactInfo = [
  {
    icon: <FiUser className="text-lg" />,
    label: "Contact Person",
    value: "Savannah Nguyen, sales manager",
  },
  {
    icon: <FiMail className="text-lg" />,
    label: "Email",
    value: "pangeti@gmail.com",
  },
  {
    icon: <FiPhone className="text-lg" />,
    label: "Phone",
    value: "+00 123 456 789",
  },
  {
    icon: <FiMapPin className="text-lg" />,
    label: "Address",
    value: "Sunnyvale, California, USA",
  },
  {
    icon: <FiClock className="text-lg" />,
    label: "Working Hours",
    value: "Mon–Fri, 9:00 am – 6:00 pm GMT+8",
  },
];

const businessStatus = [
  { label: "Year Established", value: "2011" },
  { label: "Business Type", value: "Manufacturer" },
  { label: "Main Markets", value: "Global" },
  { label: "Total Employee", value: "100–249" },
  { label: "Annual Revenue", value: "$10–50 Million" },
  { label: "Export Percentage", value: "70%" },
  { label: "R&D Investment", value: "15% of Revenue" },
];

const verifiedBy = [
  "Business License Verified",
  "ISO 9001:2015 Certified",
  "ISO 9001:2015 Certified",
  "ISO 9001:2015 Certified",
  "ISO 9001:2015 Certified",
];

const SidebarInfo = () => (
  <div className="flex flex-col gap-4 w-full mx-auto">
    {/* Contact Information */}
    <div className="bg-white border border-[#E4E7EC] rounded-[20px] p-[24px] ">
      <div className="font-semibold text-[17px] mb-4">Contact Information</div>
      <div className="flex flex-col gap-[16px]">
        {contactInfo.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-2 text-[#181C32] font-medium text-[15px]">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <div className="ml-7 text-[14px] text-[#666]">{item.value}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Business Status */}
    <div className="bg-white border border-[#E4E7EC] rounded-[20px] p-[24px] ">
      <div className="font-semibold text-[17px] mb-4">Business Status</div>
      <div className="flex flex-col gap-[16px]">
        {businessStatus.map((item, idx) => (
          <div key={idx} className="flex justify-between text-[15px]">
            <span className="text-[#181C32]">{item.label}</span>
            <span className="text-[#666]">{item.value}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Verified By */}
    <div className="bg-white border border-[#E4E7EC] rounded-[20px] p-[24px] ">
      <div className="font-semibold text-[17px] mb-4">Verified By</div>
      <div className="flex space-y-[16px] flex-col">
        {verifiedBy.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-[15px]">
            <img src={verify} alt="" />
            <span className="text-[#181C32]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SidebarInfo;