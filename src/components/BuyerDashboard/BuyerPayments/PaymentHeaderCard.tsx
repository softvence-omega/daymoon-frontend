import { FC, ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface CardData {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend: Trend;
  iconBgColor: string;
  titleColor: string;
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
  const { title, value, icon, iconBgColor, titleColor, unit, bottomSection } = data;

  return (
    <Card className="w-full lg:min-w-[358px]  bg-white rounded-[16px] border border-[#E0E0E0]  ">
      <CardContent className="">
        <div className="flex justify-between items-center gap-4 ">
          <h2 className="text-base mb-2 text-[#666666] font-normal">{title}</h2>
          <div className={`p-3 rounded-full ${iconBgColor}`}>{icon}</div>
        </div>

        <div className="mt-4">
          <p
            className={`text-[48px] font-semibold text-center mb-3  ${titleColor}`}
          >
            {value}
            <span className="text-[#969696] font-normal text-sm ml-2">
              {unit}
            </span>
          </p>

          <div className={`flex items-center gap-2 text-base font-normal ${bottomSection?.color}`} >
            <div>
              {bottomSection.icon}
            </div>
            <p>{bottomSection.text}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentHeaderCard;
