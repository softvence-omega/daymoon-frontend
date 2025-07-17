import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  buttonTitle?: string;
  icon?: React.ReactNode;
  onButtonClick?: () => void; // <-- new generic handler
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  icon,
  buttonTitle,
  onButtonClick,
}) => {
  return (
    <div className="flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hidden md:flex">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#1A1A1A] mb-4 md:mb-6">
        {title}
      </h2>
      <Button
        variant="outline"
        className="text-sm sm:text-base md:text-xl text-[#FCAB3F] px-4 sm:px-6 py-2 font-medium flex items-center gap-3 rounded-xl h-auto w-auto"
        onClick={onButtonClick}
      >
        {buttonTitle || ""}
        {icon}
      </Button>
    </div>
  );
};

export default PageHeader;
