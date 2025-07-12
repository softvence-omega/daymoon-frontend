import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa";

// Reusable Card Component
type InquiryCardProps = {
  title: string;
  status: "Pending" | "Resolved";
  company: string;
  date: string;
  person: string;
  message: string;
};

function InquiryCard({
  title,
  status,
  company,
  date,
  person,
  message,
}: InquiryCardProps) {
  return (
    <div className="flex flex-col w-full p-4 border border-[#E5E5E5] rounded-xl bg-[#FCFCFC] space-y-2">
      {/* Title & Status */}
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-medium leading-[130%] text-[#333]">
          {title}
        </h2>
        <span
          className={`px-3 py-2 rounded-xl text-sm font-medium ${
            status === "Pending"
              ? "bg-[rgba(255,180,79,0.10)] text-[#FFB44F]"
              : "bg-[rgba(0,168,79,0.10)] text-[#00A84F]"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Info */}
      <div className="text-[#666666] space-y-2">
        <p>
          From: {company} · {date}
        </p>
        <div className="flex items-center gap-2">
          <FaUser className="text-[#444]" />
          <p>{person}</p>
        </div>
        <p>{message}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 ">
        {status === "Pending" ? (
          <>
            <Button className="h-12 px-10 rounded-xl bg-[#192D4E] text-white text-base font-medium hover:bg-[#14233a] transition cursor-pointer">
              Respond
            </Button>
            <Button
              variant="outline"
              className="h-12 px-10 rounded-xl border border-[#192D4E] text-[#192D4E] hover:bg-[#f4f4f4] transition cursor-pointer"
            >
              Mark as Resolved
            </Button>
          </>
        ) : (
          <Button
            variant="outline"
            className="h-12 px-10 rounded-xl border border-[#192D4E] text-[#192D4E] hover:bg-[#f4f4f4] transition cursor-pointer"
          >
            View Details
          </Button>
        )}
      </div>
    </div>
  );
}

// Data Array
const inquiries: InquiryCardProps[] = [
  {
    title: "Bluetooth Headphones",
    status: "Pending",
    company: "Global Tech Inc.",
    date: "19 June, 2025",
    person: "Marvin McKinney",
    message: "Looking for 1000 units of Bluetooth headsets",
  },
  {
    title: "Bluetooth Headphones",
    status: "Pending",
    company: "Global Tech Inc.",
    date: "19 June, 2025",
    person: "Marvin McKinney",
    message: "Looking for 1000 units of Bluetooth headsets",
  },
  {
    title: "Bluetooth Headphones",
    status: "Resolved",
    company: "Global Tech Inc.",
    date: "19 June, 2025",
    person: "Marvin McKinney",
    message: "Looking for 1000 units of Bluetooth headsets",
  },
];

// Main Component
export function RecentInquiries() {
  return (
    <div className="border border-[#E5E5E5] rounded-2xl shadow-sm p-4 overflow-x-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] font-medium leading-[130%] text-[#484848]">
          Recent Inquiries
        </h1>
        <button className="underline text-[#F04436] text-base font-medium cursor-pointer">
          View All
        </button>
      </div>

      {/* Cards from Data */}
      {inquiries.map((inquiry, index) => (
        <InquiryCard key={index} {...inquiry} />
      ))}
    </div>
  );
}
