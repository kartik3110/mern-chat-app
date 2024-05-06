import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../features/conversation/conversationSlice";
const useSendMessage = () => {
  const dispatch = useDispatch();
  const selectedConversation = useSelector(
    (state) => state.conversation.selectedConversation
  );
  const messages = useSelector((state) => state.conversation.messages);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (message) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );
      setMessages([...messages, response.data]);
      console.log(response.data);
    } catch (error) {
      toast.error(error.response.data.err);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};
export default useSendMessage;
