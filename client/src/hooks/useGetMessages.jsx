import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../features/conversation/conversationSlice";
export default function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.conversation.messages);
  const selectedConversation = useSelector(
    (state) => state.conversation.selectedConversation
  );
  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `/api/message/${selectedConversation._id}`
        );
        dispatch(setMessages(response.data));
      } catch (error) {
        console.log("error fetching messages: ", error);
        dispatch(setMessages([]));
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) fetchMessages();
  }, [selectedConversation?._id, setMessages]);
  // adding messages to dependancy array caused infinite loop

  return {
    messages,
    loading,
  };
}
