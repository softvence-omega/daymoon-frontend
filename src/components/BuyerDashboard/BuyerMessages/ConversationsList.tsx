import React from "react";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

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

interface ConversationsListProps {
  conversations: Conversation[];
  selectedConversation: Conversation;
  onSelectConversation: (conversation: Conversation) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  isVisible: boolean;
  onClose?: () => void;
}

const ConversationsList: React.FC<ConversationsListProps> = ({
  conversations,
  selectedConversation,
  onSelectConversation,
  searchTerm,
  onSearchChange,
  isVisible,
  onClose,
}) => {
  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`
      ${isVisible ? "block" : "hidden"} 
      md:block w-full md:w-1/3 lg:w-1/4  xl:w-2/5
       flex flex-col
      absolute md:relative inset-0 md:inset-auto
    z-50 md:z-auto p-2
    `}
    >
      {/* Header */}
      <div className=" mb-6">
        <div className="flex items-center justify-between">
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="md:hidden text-[#666666] hover:text-[#F04436] p-1"
          >
            ✕
          </button>
        </div>
        <div className="relative bg-white rounded-full">
          <Search
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white w-8 p-2 rounded-full h-auto"
            style={{
              background: "linear-gradient(270deg, #F7813B 0%, #F46A39 100%)",
            }}
          />
          <Input
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-4 rounded-full border-[#E5E5E5] focus:border-[#F04436] focus:ring-[#F04436] text-sm h-12"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => {
              onSelectConversation(conversation);
              if (onClose) onClose(); // Close sidebar on mobile after selection
            }}
            className={`p-3 md:p-4 cursor-pointer mt-2 rounded-xl border border-[#E5E5E5] hover:bg-[#E5E5E5] transition-colors ${
              selectedConversation.id === conversation.id
                ? "bg-[#E5E5E5]"
                : "bg-[white]"
            }`}
          >
            <div className="flex items-start gap-3 xl:gap-5 ">
              <div className="relative">
                <Avatar className="w-10 h-10 md:w-12 md:h-12">
                  <AvatarImage
                    src={conversation.avatar}
                    alt={conversation.name}
                  />
                  <AvatarFallback className="text-xs md:text-sm">
                    {conversation.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {conversation.online && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[#1A1A1A] truncate text-sm md:text-base xl:text-xl">
                  {conversation.name}
                </h3>

                <p className="text-xs md:text-sm xl:text-base text-[#484848] truncate flex-1 xl:mt-2">
                  {conversation.lastMessage}
                </p>

                <div className="xl:mt-3">
                  <span className="text-xs text-[#666666] whitespace-nowrap">
                    {conversation.timestamp}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationsList;
