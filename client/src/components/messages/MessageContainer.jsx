import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { TiMessages } from "react-icons/ti";
import { useEffect } from "react";
import { setSelectedConversation } from "../../features/conversation/conversationSlice";
const MessageContainer = () => {
  const dispatch = useDispatch();
  const selectedConversation = useSelector(
    (state) => state.conversation.selectedConversation
  );

  useEffect(() => {
    return () => {
      dispatch(setSelectedConversation(""));
    };
  }, []);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <div className="flex items-center justify-center w-full h-full">
          <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
            <p>Welcome 👋 top g ❄</p>
            <p>Select a chat to start messaging</p>
            <TiMessages className="text-3xl md:text-6xl text-center" />
          </div>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;
