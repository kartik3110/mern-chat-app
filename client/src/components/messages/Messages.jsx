import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
  const { messages: allMessages, loading } = useGetMessages();
  const lastMessageRef = useRef(null);
  // In React, when you pass a ref to multiple elements, the ref actually points to the last rendered element. This behavior is by design.

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [allMessages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading ? (
        <div className="flex justify-center place-items-center h-full">
          <div className="loading loading-lg" />
        </div>
      ) : allMessages.length > 0 ? (
        <>
          {allMessages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          ))}
        </>
      ) : (
        <div className="text-center">
          Send a message to start the conversation
        </div>
      )}
    </div>
  );
};
export default Messages;
