import Title from "../Shared/Title";
const ReviewNavbar = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center lg:pb-10 w-full">
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
