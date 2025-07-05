import Title from "../Shared/Title";
import Card from "./Card";

const InquirieCard = () => {
  return (
    <div className="w-full ">
      {/* Top Section: Title + Action Buttons */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center mb-10 w-full">
        {/* Title */}
        <div className="w-full lg:flex-1">
          <Title
            title="Product Enquiries!"
            subTitle="View and manage all your product inquiries from potential buyers."
          />
        </div>
      </div>

      {/* Card Component */}
      <Card />
    </div>
  );
};

export default InquirieCard;
