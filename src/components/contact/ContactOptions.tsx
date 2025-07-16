import { motion } from "framer-motion";
import { FaComments, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactOptions = () => {
  // Define an array of contact options with all necessary details
  const contactOptions = [
    {
      id: 1,
      icon: <FaComments />,
      title: "Live Chat",
      description:
        "Available 24/7: Get immediate assistance from our customer service agents.",
      buttonText: "Start Chatting",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-400",
      buttonBgColor: "bg-orange-400",
      buttonHoverColor: "hover:bg-orange-500",
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      title: "Email Support",
      description: "Get a response within 24 hours for detailed request.",
      buttonText: "Send Email",
      bgColor: "bg-red-50",
      iconColor: "text-red-400",
      buttonBgColor: "bg-red-500",
      buttonHoverColor: "hover:bg-red-600",
    },
    {
      id: 3,
      icon: <FaPhone />,
      title: "Phone Support",
      description: "Available 9am - 6pm (Mon to Fri)",
      phoneNumber: "+123 456 789",
      buttonText: "Start Chatting",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-900",
      buttonBgColor: "bg-[#192D4E]",
      buttonHoverColor: "hover:bg-blue-950",
    },
  ];

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-1 text-[#1A1A1A]">
          CONTACT OPTIONS
        </h2>
        <p className="text-[#7E7E7E] mt-4">
          Choose your preferred contact method
        </p>
      </div>

      <div className="grid mt-12 grid-cols-1 md:grid-cols-3 gap-6">
        {contactOptions.map((option) => (
          <div
            key={option.id}
            className="border border-gray-300 rounded-lg p-6 text-center shadow-sm flex flex-col justify-between"
          >
            <div
              className={`text-3xl ${option.iconColor} mb-4 mx-auto w-fit rounded-full ${option.bgColor} p-3`}
            >
              {option.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">{option.title}</h3>

            <p className="text-gray-600 mb-4">{option.description}</p>

            {option.phoneNumber && (
              <p className="text-lg font-medium mb-4">{option.phoneNumber}</p>
            )}

            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className={`w-full py-2 md:py-3 px-6 text-sm lg:text-base md:px-8 rounded-xl text-white ${option.buttonBgColor} ${option.buttonHoverColor}`}
            >
              {option.buttonText}
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactOptions;
