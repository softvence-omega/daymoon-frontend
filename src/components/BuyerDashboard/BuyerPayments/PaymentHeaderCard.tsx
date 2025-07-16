import { FC, ReactNode } from "react";

interface CardData {
  title: string;
  value: string | number;
  icon: ReactNode;
  iconBgColor: string;
  titleColor?: string; // Optional, if you want to keep it
  unit?: string;
  bottomSection?: {
    color: string;
    text: string;
    icon: ReactNode;
  };
}

interface CardProps {
  data: CardData;
}

const PaymentHeaderCard: FC<CardProps> = ({ data }) => {
  const { title, value, icon, iconBgColor, titleColor, unit, bottomSection } =
    data;

  return (
    <div className="w-full p-4 md:p-5  bg-white rounded-[16px] border border-[#E0E0E0]  ">
      <div className="">
        <div className="flex justify-between items-center gap-4 ">
          <h2 className="text-base text-[#666666] font-normal">{title}</h2>
          <div className={`p-3 rounded-full ${iconBgColor}`}>{icon}</div>
        </div>

        <div className="mt-2 md:mt-4">
          <p
            className={`text-3xl md:text-[48px] font-semibold text-center mb-3  ${titleColor}`}
          >
            {value}
            <span className="text-[#969696] font-normal text-sm ml-2">
              {unit}
            </span>
          </p>

          {/* Only render bottom section if it exists */}
          {bottomSection && (
            <div
              className={`flex items-center gap-2 text-base font-normal ${bottomSection.color}`}
            >
              <div>{bottomSection.icon}</div>
              <p>{bottomSection.text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentHeaderCard;
