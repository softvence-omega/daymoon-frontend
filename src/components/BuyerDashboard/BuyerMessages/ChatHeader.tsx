import React from "react";
import { Phone, X, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  avatar: string;
  online: boolean;
  type: "supplier" | "support";
  rating?: number; // Rating out of 5
}

interface ChatHeaderProps {
  conversation: Conversation;
  onCall?: () => void;
  onClose?: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  conversation,
  onCall,
  onClose,
}) => {
  // Render rating stars
  const renderStars = (rating: number = 0) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3 h-3 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-xs text-[#666666] ml-1">({rating}/5)</span>
      </div>
    );
  };

  return (
    <div className="p-3 md:p-4 border border-[#E5E5E5] m-3 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="w-10 h-10 md:w-12 md:h-12">
              <AvatarImage src={conversation.avatar} alt={conversation.name} />
              <AvatarFallback className="text-sm md:text-base">
                {conversation.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            {conversation.online && (
              <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-medium text-[#1A1A1A] text-sm md:text-base">
              {conversation.name}
            </h3>
            <span className="text-[#666666] text-sm">|</span>
            <Badge
              variant="outline"
              className="text-xs px-2 py-0.5 bg-[#F04436]/10 text-[#F04436] border-[#F04436]/20"
            >
              {conversation.type === "supplier" ? "Supplier" : "Support"}
            </Badge>
            <span className="text-[#666666] text-sm">|</span>
            <div className="flex items-center">
              {renderStars(conversation.rating)}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Call Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onCall}
            className="text-[#666666] hover:text-[#F04436] hover:bg-[#F04436]/10 p-2 rounded-full"
            title="Start call"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
          </Button>

          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-[#666666] hover:text-red-500 hover:bg-red-50 p-2 rounded-full"
            title="Close chat"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
