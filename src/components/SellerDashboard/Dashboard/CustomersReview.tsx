import React from "react";
import { FaStar } from "react-icons/fa";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Marvin McKinney",
    company: "Global Tech Inc.",
    message:
      "I bought Bluetooth headsets from TechWave, and I'm thrilled! The audio quality is fantastic, and the battery lasts 20 hours. Their customer service was excellent! The audio quality is fantastic, and the battery lasts 20 hours. Their customer service was excellent!.",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    company: "InnovateX Solutions",
    message:
      "I bought Bluetooth headsets from TechWave, and I'm thrilled! The audio quality is fantastic, and the battery lasts 20 hours. Their customer service was excellent!",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    company: "NextGen Electronics",
    message:
      "I bought Bluetooth headsets from TechWave, and I'm thrilled! The audio quality is fantastic, and the battery lasts 20 hours. Their customer service was excellent!.The audio quality is fantastic, and the battery lasts 20 hours. Their customer service was excellent!.",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    company: "Quantum Systems",
    message:
      "I bought Bluetooth headsets from TechWave, and I'm thrilled! The audio quality is fantastic, and the battery lasts 20 hours. Their customer service was excellent!.The audio quality is fantastic, and the battery lasts 20 hours. Their customer service was excellent!.",
  },
];

// Props interface
interface Props {
  name: string;
  company: string;
  message: string;
}

// Single Testimonial Card
const TestimonialCard: React.FC<Props> = ({ name, company, message }) => (
  <div className="flex flex-col w-full p-4 border border-[#E5E5E5] rounded-xl bg-[#FCFCFC] space-y-4">
    {/* Header */}
    <div className="flex justify-between items-start">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-300" />
        <div>
          <h3 className="text-base font-semibold text-[#333]">{name}</h3>
          <p className="text-sm text-gray-500">From: {company}</p>
        </div>
      </div>
      <div className="flex text-[#FFA534]">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={18} />
        ))}
      </div>
    </div>
    <p className="text-sm text-gray-700 leading-relaxed">{message}</p>
  </div>
);

// Main CustomersReview component
export function CustomersReview() {
  return (
    <div className="border border-[#E5E5E5] rounded-2xl shadow-sm p-4 overflow-x-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium text-[#484848] leading-tight">
          Customers Review
        </h1>
        <button className="underline text-[#F04436] text-base font-medium hover:text-[#d6332a] transition-colors">
          View All
        </button>
      </div>

      {/* Cards stacked vertically */}
      <div className="flex flex-col gap-6 items-center">
        {testimonials.map(({ id, name, company, message }) => (
          <TestimonialCard
            key={id}
            name={name}
            company={company}
            message={message}
          />
        ))}
      </div>
    </div>
  );
}
