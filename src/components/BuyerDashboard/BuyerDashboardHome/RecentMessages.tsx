import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

// Messages Data
const messages = [
  {
    id: 1,
    name: "Marvin McKinney",
    image: "https://i.pravatar.cc/150?img=1",
    message:
      "I bought Bluetooth headsets from TechWave, and I'm thrilled! The audio quality is fantastic, and the battery lasts 20 hours. Their customer service was excellent!",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    image: "https://i.pravatar.cc/150?img=2",
    message:
      "TechWave's Bluetooth headsets have changed my workflow. Crisp sound and a long battery life. Highly recommend!",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    image: "https://i.pravatar.cc/150?img=3",
    message:
      "Superb quality and great service! The headset fits perfectly, and I love the noise cancellation feature.",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    image: "https://i.pravatar.cc/150?img=4",
    message:
      "Excellent value for money. The battery easily lasts through my workday, and the support team was very helpful.",
  },
];

// Props interface
interface Props {
  name: string;
  message: string;
  image: string;
}

// Single Testimonial Card
const RecentMessagesCard: React.FC<Props> = ({ name, message, image }) => (
  <div className="flex flex-col w-full p-4 border border-[#E5E5E5] rounded-xl bg-[#FCFCFC] space-y-4 hover:bg-[#FFF7EC]">
    {/* Header */}
    <div className="grid ">
      <div className="flex items-start gap-4">
        {/* Avatar from ShadCN */}
        <Avatar className="w-8 h-8 border">
          <AvatarImage src={image} alt={name || ""} />
          <AvatarFallback>{name?.charAt(0) || ""}</AvatarFallback>
        </Avatar>

        {/* Text content */}
        <div>
          <h3 className="text-base font-semibold text-[#333]">{name}</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  </div>
);

// Main CustomersReview component
export function RecentMessages() {
  return (
    <div className="border border-[#E5E5E5] rounded-2xl shadow-sm p-4 overflow-x-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg sm:text-xl gap-2 md:text-2xl font-medium text-[#484848] leading-tight">
          Recent Messages
        </h1>
        <Link
          to="/buyer/dashboard/messages"
          className="underline text-[#F04436] text-sm md:text-base font-medium hover:text-[#d6332a] transition-colors"
        >
          View All
        </Link>
      </div>

      {/* Cards stacked vertically */}
      <div className="flex flex-col gap-6 items-center">
        {messages.map(({ id, name, message, image }) => (
          <RecentMessagesCard
            key={id}
            name={name}
            message={message}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}
