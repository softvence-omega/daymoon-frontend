import contactImage from "../../assets/contactImage.png";
import RedButton from "../ReUseable/RedButton";
const MassageForm = () => {
  return (
    <div className="max-w-full mx-auto rounded-md px-4 py-10 space-y-16 bg-[#E5E5E5]">
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
          <RedButton title="Submit Message" />
        </div>
        <img src={contactImage} alt="Contact" className="rounded-md" />
      </div>
    </div>
  );
};

export default MassageForm;
