type SectionSubTitleProps = {
  miniTitle: string;
};

export const SubTitle = ({ miniTitle }: SectionSubTitleProps) => {
  return (
    <div>
      <h1 className="text-[#1A1A1A] font-poppins font-medium text-[20px] leading-[130%]">
        {miniTitle}
      </h1>
    </div>
  );
};

export default SubTitle;
