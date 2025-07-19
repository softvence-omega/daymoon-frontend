import RedButton from "@/components/ReUseable/RedButton";
import { Plus } from "lucide-react";
import { useState } from "react";
import Title from "../../SellerDashboard/Shared/Title";
import RFQModal from "./RFQModal";

const RFQHeading = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateNewLead = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full">
        {/* Top Section: Title + Action Buttons */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center mb-10 w-full">
          {/* Title */}
          <div className="w-full lg:flex-1">
            <Title
              title="Request for Quote (RFQ)"
              subTitle="Share your new RFQ or keep track of the ones you already have!"
            />
          </div>

          <div className="">
            <RedButton
              onClick={handleCreateNewLead}
              title="Create New RFQ"
              Icon={Plus}
            ></RedButton>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <RFQModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default RFQHeading;
