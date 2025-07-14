import Title from "../Shared/Title";
const ReviewNavbar = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col items-start justify-between w-full gap-6 pb-8 lg:flex-row lg:gap-8 lg:items-center lg:pb-10">
        <div className="w-full lg:flex-1">
          <Title
            title="Review"
            subTitle="View past reviews, submit new feedback, and explore insightful analytics."
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewNavbar;
