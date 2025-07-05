type SectionTitleProps = {
  title: string;
  subTitle?: string;
};

export const Title = ({ title, subTitle }: SectionTitleProps) => {
  return (
    <div>
      <h1 className="text-[#484848] font-poppins font-medium text-[32px] leading-[38px]">
        {title}
      </h1>
      {subTitle && (
        <p className="text-[#484848] font-poppins font-normal text-[16px] leading-[26px] max-w-[618px] mt-2">
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default Title;
