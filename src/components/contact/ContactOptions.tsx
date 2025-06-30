import { FaComments, FaEnvelope, FaPhone } from 'react-icons/fa'

const ContactOptions = () => {
  return (
    <div> 
        <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-1">CONTACT OPTIONS</h2>
        <p className="text-gray-600">Choose your preferred contact method</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Live Chat */}
        <div className="border border-gray-300 rounded-lg p-6 text-center shadow-sm">
          <div className="text-3xl text-orange-400 mb-4 mx-auto w-fit rounded-full bg-orange-50 p-3">
            <FaComments />
          </div>
          <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
          <p className="text-gray-600 mb-4">
            Available 24/7: Get immediate assistance from our customer service agents.
          </p>
          <button className="bg-orange-400 text-white px-30 py-2 rounded-xl hover:bg-orange-500">
            Start Chatting
          </button>
        </div>

        {/* Email Support */}
        <div className="border border-gray-300 rounded-lg p-6 text-center shadow-sm">
          <div className="text-3xl text-red-400 mb-4 mx-auto w-fit rounded-full bg-red-50 p-3">
            <FaEnvelope />
          </div>
          <h3 className="text-xl font-semibold mb-2">Email Support</h3>
          <p className="text-gray-600 mb-4">
            Get a response within 24 hours for detailed request.
          </p>
          <button className="bg-red-500 text-white px-30 py-2 rounded-xl hover:bg-red-600">
            Send Email
          </button>
        </div>

        {/* Phone Support */}
        <div className="border border-gray-300 rounded-lg p-6 text-center shadow-sm">
          <div className="text-3xl text-blue-900 mb-4 mx-auto w-fit rounded-full bg-blue-50 p-3">
            <FaPhone />
          </div>
          <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
          <p className="text-gray-600 mb-2">Available 9am - 6pm (Mon to Fri)</p>
          <p className="text-lg font-medium mb-4">+123 456 789</p>
          <button className="bg-[#192D4E] text-white px-30 py-2 rounded-xl hover:bg-blue-950">
            Start Chatting
          </button>
        </div>
        </div>
        </div>
  )
}

export default ContactOptions;