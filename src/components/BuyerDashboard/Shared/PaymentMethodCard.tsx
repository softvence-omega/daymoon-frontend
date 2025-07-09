import { ImPencil } from "react-icons/im";
import { MdOutlineDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PaymentMethodCardProps {
  card: {
    id: string;
    image: string;
    name: string;
    details: string;
    isDefault: boolean;
  };
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onSetDefault?: (id: string) => void;
  className?: string;
}

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  card,
  onEdit,
  onDelete,
  onSetDefault,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#FFFFFF] p-4 sm:p-6 rounded-xl border border-dashed border-[#B3B3B3] relative flex gap-4 items-center ${className}`}
    >
      {/* Card Icon */}
      <div className="p-3 sm:p-4 border border-[#E5E5E5] rounded-xl aspect-square flex items-center justify-center">
        <img src={card.image} alt={card.name} className="w-6 sm:w-8" />
      </div>

      {/* Card Details */}
      <div className="flex-1">
        <h1 className="text-base md:text-lg lg:text-xl font-medium">
          {card.name}
        </h1>
        <p className="text-[#484848] text-sm sm:text-base mt-1 sm:mt-2 max-w-sm">
          {card.details}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2 items-end">
        {/* Edit and Delete Buttons */}
        <div className="flex items-center gap-2 sm:gap-4 absolute top-3 sm:top-5 right-2 sm:right-4">
          {onEdit && (
            <Button
              variant="ghost"
              size="icon"
              className="size-6"
              onClick={() => onEdit(card.id)}
              title="Edit payment method"
            >
              <ImPencil className="w-5 sm:w-6 h-5 sm:h-6 text-[#F04436]" />
            </Button>
          )}
          {onDelete && (
            <Button
              variant="ghost"
              size="icon"
              className="size-6"
              onClick={() => onDelete(card.id)}
              title="Delete payment method"
            >
              <MdOutlineDelete className="w-5 sm:w-6 h-5 sm:h-6 text-[#F04436]" />
            </Button>
          )}
        </div>

        {/* Default Badge */}
        {card.isDefault ? (
          <Badge className="absolute bottom-3 sm:bottom-4 right-2 sm:right-4 bg-[#FFF7EC] text-[#FCAB3F] border border-[#FCAB3F] text-xs sm:text-sm font-normal px-2 sm:px-3 py-1 rounded-lg">
            Default
          </Badge>
        ) : (
          <Badge
            className="absolute bottom-3 sm:bottom-4 right-2 sm:right-4 bg-[#192D4E] text-[#E8EAED] border border-[#192D4E] text-xs sm:text-sm font-normal px-2 sm:px-3 py-1 rounded-lg cursor-pointer hover:bg-[#1a2b47] transition-colors"
            onClick={() => onSetDefault && onSetDefault(card.id)}
          >
            Set as Default
          </Badge>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodCard;