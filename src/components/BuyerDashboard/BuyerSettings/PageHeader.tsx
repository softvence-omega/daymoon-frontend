import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  buttonTitle?: string; // Optional prop for button title
  onEdit: () => void;
  icon?: React.ReactNode; // Added prop for dynamic icon
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, onEdit, icon, buttonTitle }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <h2 className="text-xl sm:text-2xl text-[#1A1A1A]">{title}</h2>
      <Button
        variant="outline"
        className="text-sm sm:text-base md:text-xl text-[#FCAB3F] px-4 sm:px-6 py-2 font-medium flex items-center gap-3 rounded-xl h-auto w-auto"
        onClick={onEdit}
      >
        {buttonTitle || ""} {/* Use buttonTitle prop or default to "Edit" */}
        {icon} {/* Render dynamic icon */}
      </Button>
    </div>
  );
};

export default PageHeader;