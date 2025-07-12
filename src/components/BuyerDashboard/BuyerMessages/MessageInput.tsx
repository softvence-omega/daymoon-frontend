import { MdInsertEmoticon } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineImage } from "react-icons/md";
import { MdOutlineUploadFile } from "react-icons/md";
import { MdGTranslate } from "react-icons/md";

interface MessageInputProps {
  messageInput: string;
  onMessageInputChange: (value: string) => void;
  onSendMessage: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({
  messageInput,
  onMessageInputChange,
  onSendMessage,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSendMessage();
    }
  };

  return (
    <div className="p-3 md:p-4 rounded-xl border border-[#E5E5E5] m-3 bg-white">
      <div className="flex flex-col gap-2">
        <div className="flex-1 relative">
          <input
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => onMessageInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            className="pr-16 md:pr-16 border-none focus:border-none focus:outline-none shadow-none active:border-none focus-visible:border-none text-sm md:text-base w-full h-12"
          />
          <Button
            onClick={onSendMessage}
            size="sm"
            className="absolute right-2 md:right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-[#E8EAED] text-[#192D4E] rounded-full p-1.5 md:p-2"
          >
            <RiSendPlaneFill className="w-3 h-3 md:w-4 md:h-4" />
          </Button>
        </div>
        <div className="border-t border-[#E5E5E5] pt-3">
          <div className="flex items-center gap-4">
            <button className="text-[#666666] hover:text-[#333333] transition-colors">
              <MdInsertEmoticon className="w-5 h-5" />
            </button>
            <button className="text-[#666666] hover:text-[#333333] transition-colors">
              <MdOutlineImage className="w-5 h-5" />
            </button>
            <button className="text-[#666666] hover:text-[#333333] transition-colors">
              <MdOutlineUploadFile className="w-5 h-5" />
            </button>
            <button className="text-[#666666] hover:text-[#333333] transition-colors">
              <MdGTranslate className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
