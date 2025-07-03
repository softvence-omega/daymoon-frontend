import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Faq = () => {
const faqs = [
{
    question: "What is Pangeti?",
    answer: "Lorem ipsum dolor sit amet consectetur. Ipsum facilisi orci amet id dignissim. A quis turpis fringilla libero malesuada elementum morbi. Dui tristique venenatis pretium vitae diam et aliquam."
  },
  {
    question: "How can I upgrade my subscription?",
    answer: "You can upgrade anytime through the account settings page."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept Visa, MasterCard, PayPal, and more."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription anytime without penalty."
  },
  {
    question: "How do I access my billing history?",
    answer: "Billing history is available in your account dashboard."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for all new users."
  },
  {
    question: "How can I change my account information?",
    answer: "Log in to your account and visit the profile section to update info."
  },
  {
    question: "What happens if I miss a payment?",
    answer: "We’ll notify you and attempt to process the payment again."
  },
  {
    question: "How do I contact customer support?",
    answer: "Use the form above or call our support line."
  }
];
const [openIndex, setOpenIndex] = useState<number | null>(0);

const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="space-y-8">

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">FAQ</h2>
          {faqs.map((faq, index) => (
            <div key={index} className=" pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center text-left text-lg transition-colors duration-200 ${
                  openIndex === index ? "text-[#FCAB3F] font-bold" : "text-black font-semibold"
                }`}
              >
                {faq.question}
                <span className="text-red-500">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {openIndex === index && <p className="text-gray-600 mt-2 text-sm">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
  )
}


export default Faq;