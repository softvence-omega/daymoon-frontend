import React, { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  type: "text";
  avatar?: string; // Avatar for the sender
}

interface MessagesListProps {
  messages: Message[];
  otherParticipant?: {
    name: string;
    avatar: string;
  };
  conversationId?: number; // Add this to detect conversation changes
}

const MessagesList: React.FC<MessagesListProps> = ({
  messages,
  otherParticipant,
  conversationId,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  // Scroll to bottom when messages change or conversation changes
  useEffect(() => {
    scrollToBottom();
  }, [messages, conversationId]);
  const formatDateTime = (timestamp: string) => {
    // Simple date/time formatting logic
    const now = new Date();

    // If timestamp contains "ago", keep as is
    if (timestamp.includes("ago")) {
      return timestamp;
    }

    // If timestamp contains date and time, format it
    if (timestamp.includes(",")) {
      const [date, time] = timestamp.split(",");
      return `${date.trim()} | ${time.trim()}`;
    }

    // If just time, add today's date
    if (timestamp.includes("AM") || timestamp.includes("PM")) {
      const currentDate = now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      return `${currentDate} | ${timestamp}`;
    }

    return timestamp;
  };

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto p-3 md:p-4 flex flex-col-reverse"
    >
      <div className="space-y-2 md:space-y-3">
        {messages.map((message, index) => {
          const prevMessage = index > 0 ? messages[index - 1] : null;
          const nextMessage =
            index < messages.length - 1 ? messages[index + 1] : null;

          const isSameAsPrevious =
            prevMessage && prevMessage.isOwn === message.isOwn;
          const isSameAsNext =
            nextMessage && nextMessage.isOwn === message.isOwn;

          return (
            <div
              key={message.id}
              className={`flex ${
                message.isOwn ? "justify-end" : "justify-start"
              } items-start gap-2 md:gap-3 ${isSameAsPrevious ? "mt-1" : ""}`}
            >
              {/* Avatar for other participant's messages */}
              {!message.isOwn && otherParticipant && (
                <Avatar
                  className={`w-8 h-8 md:w-10 md:h-10 flex-shrink-0 ${
                    isSameAsNext ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <AvatarImage
                    src={otherParticipant.avatar}
                    alt={otherParticipant.name}
                  />
                  <AvatarFallback className="text-xs md:text-sm">
                    {otherParticipant.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              )}

              <div
                className={`max-w-[85%] md:max-w-[70%] p-2 md:p-3 rounded-2xl ${
                  message.isOwn
                    ? "bg-[#192D4E] text-white rounded-br-md"
                    : "bg-[#F5F5F5] text-[#1A1A1A] rounded-tl-md"
                }`}
              >
                <p className="text-sm md:text-base leading-relaxed mb-1">
                  {message.content}
                </p>
                <p
                  className={`text-xs ${
                    message.isOwn ? "text-white/80" : "text-[#666666]"
                  }`}
                >
                  {formatDateTime(message.timestamp)}
                </p>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessagesList;
