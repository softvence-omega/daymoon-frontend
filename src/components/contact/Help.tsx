import JoinUs from "../ReUseable/JoinUs";
import SearchBar from "../SearchBar";
import Categories from "./Categories";
import ContactOptions from "./ContactOptions";
import Faq from "./Faq";

import MassageForm from "./MassageForm";

const Help = () => {
  return (
    <div className="mt-20 max-[767px]:mt-10">
      <div className="flex flex-col items-center justify-center gap-y-5">
        <p className="text-3xl lg:text-5xl font-semibold">We’re here to help</p>
        <p className="text-base md:text-lg mt-4 text-[#7E7E7E]">
          Whether you have a question or need assistance, getting in touch with
          us is simple.
        </p>
      </div>
      <div className="my-20 max-[767px]:my-10">
        <SearchBar />
      </div>
      <div className="my-20 max-[767px]:my-10">
        <Categories />
      </div>
      <div className="my-20 max-[767px]:my-10">
        <ContactOptions />
      </div>
      <div className="my-20 max-[767px]:my-10">
        <MassageForm />
      </div>
      <div className="my-20 max-[767px]:my-10">
        <Faq />
      </div>
      <div className="my-20 max-[767px]:my-14">
        <JoinUs />
      </div>
    </div>
  );
};

export default Help;
