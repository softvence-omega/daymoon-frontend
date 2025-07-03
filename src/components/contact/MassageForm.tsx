import contactImage from '../../assets/contactImage.png';
const MassageForm = () => {
  return (
    <div className="max-w-full mx-auto rounded-md px-4 py-10 space-y-16 bg-gray-100">
      {/* Contact Form & Image */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className=" p-6 rounded-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 bg-white px-4 py-2 rounded-md focus:outline-orange-400"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border border-gray-300 bg-white px-4 py-2 rounded-md focus:outline-orange-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 bg-white px-4 py-2 rounded-md focus:outline-orange-400"
            rows={4}
          />
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
            Submit Message
          </button>
        </div>
        <img src={contactImage} alt="Contact" className="rounded-md" />
      </div>
      </div>
  )
}

export default MassageForm;